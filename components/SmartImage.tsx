import React, { useState, useEffect, useRef } from 'react';
import { Upload, Loader2, ImageOff } from 'lucide-react';

// --- IndexedDB Utilities ---
const DB_NAME = 'SangriaSaltAssets';
const STORE_NAME = 'images';
const DB_VERSION = 1;

// Singleton promise to prevent multiple DB open requests during grid renders
let dbPromise: Promise<IDBDatabase> | null = null;

const getDB = (): Promise<IDBDatabase> => {
  if (dbPromise) return dbPromise;

  dbPromise = new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('Browser environment required'));

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => {
      dbPromise = null; // Reset on failure
      reject(request.error);
    };

    request.onsuccess = () => resolve(request.result);

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
  return dbPromise;
};

const saveBlobToDB = async (key: string, blob: Blob): Promise<void> => {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const request = store.put(blob, key);

    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    request.onerror = () => reject(request.error);
  });
};

const getBlobFromDB = async (key: string): Promise<Blob | undefined> => {
  const db = await getDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(key);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  localSrc?: string;
  fallbackSrc: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  localSrc,
  fallbackSrc,
  alt,
  className,
  ...props
}) => {
  // Stable key: Prioritize localSrc
  const storageKey = localSrc || alt || 'default-image';

  // State
  const [currentSrc, setCurrentSrc] = useState<string>(fallbackSrc);
  // Default to loading ONLY if we don't have a source yet, or we are waiting for DB.
  // We'll manage this carefully below.
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  // 1. Initial Load Effect
  useEffect(() => {
    let isActive = true;

    const loadFromStorage = async () => {
      setIsLoading(true); // Start loading when key changes
      try {
        const blob = await getBlobFromDB(storageKey);

        if (!isActive) return;

        if (blob) {
          // HIT: We found a local image.
          const url = URL.createObjectURL(blob);
          setCurrentSrc(url);
          setHasError(false);
          // CRITICAL FIX: For local blobs, do NOT wait for onLoad.
          // They render effectively instantly. Waiting risks the "spinner trap".
          setIsLoading(false);
        } else {
          // MISS: Use fallback.
          setCurrentSrc(fallbackSrc);
          // For network images, we DO wait for onLoad (so keep isLoading true).
          // However, check if browser cached it already:
          if (imgRef.current?.complete) {
             setIsLoading(false);
          }
        }
      } catch (err) {
        console.error('Asset load failed:', err);
        if (isActive) {
          setCurrentSrc(fallbackSrc);
        }
      }
    };

    loadFromStorage();

    return () => {
      isActive = false;
    };
  }, [storageKey, fallbackSrc]);


  // 2. File Upload Handler
  const processFile = async (file: File) => {
    if (!file.type.startsWith('image/')) return;

    setIsLoading(true); // Show spinner during processing

    try {
      const img = new Image();
      const tempUrl = URL.createObjectURL(file);
      img.src = tempUrl;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
      });

      const canvas = document.createElement('canvas');
      // High res cap (1920w)
      const scale = Math.min(1, 1920 / img.width);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(async (blob) => {
          if (blob) {
            await saveBlobToDB(storageKey, blob);
            const newUrl = URL.createObjectURL(blob);
            setCurrentSrc(newUrl);
            setHasError(false);
            // Instant success state
            setIsLoading(false);
          }
          URL.revokeObjectURL(tempUrl);
        }, 'image/jpeg', 0.85);
      }
    } catch (err) {
      console.error('Processing failed:', err);
      // Fallback to simple display if processing fails
      setCurrentSrc(URL.createObjectURL(file));
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      processFile(e.target.files[0]);
    }
    // Reset input to allow re-selecting same file
    e.target.value = '';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files?.[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  // 3. Image Event Handlers (Only needed for network fallbacks)
  const onImageLoad = () => {
    setIsLoading(false);
  };

  const onImageError = () => {
    // Only trigger error if we aren't already on the fallback
    if (currentSrc !== fallbackSrc) {
      console.warn(`Image failed: ${currentSrc}, reverting to fallback.`);
      setCurrentSrc(fallbackSrc);
      // Keep loading true until fallback loads
    } else {
      // Both main and fallback failed
      setHasError(true);
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`relative w-full h-full group overflow-hidden bg-stone-900 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
      onDrop={handleDrop}
    >
      {/* State: Error / Empty */}
      {hasError ? (
        <label className={`w-full h-full flex flex-col items-center justify-center bg-stone-800 border-2 border-dashed cursor-pointer transition-colors ${isDragging ? 'border-gold-500 bg-stone-700' : 'border-stone-700 hover:bg-stone-800/80'}`}>
          <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
          <ImageOff className="text-stone-600 mb-2" size={32} />
          <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">Add Photo</span>
        </label>
      ) : (
        /* State: Display Image */
        <>
          <img
            ref={imgRef}
            src={currentSrc}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={onImageLoad}
            onError={onImageError}
            {...props}
          />

          {/* Upload Overlay */}
          <label
            className={`absolute inset-0 flex flex-col items-center justify-center bg-stone-900/60 backdrop-blur-sm transition-all duration-300 cursor-pointer z-30
              ${isDragging || isHovered ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            <Upload className="text-white mb-2" size={32} />
            <span className="text-white font-bold tracking-widest text-xs uppercase drop-shadow-md">
              {isDragging ? 'Drop to Upload' : 'Click to Change'}
            </span>
          </label>

          {/* Subtle hint icon (always visible if not hovering, to aid discovery) */}
          {!isHovered && !isLoading && (
            <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/20 backdrop-blur-sm text-white/50 pointer-events-none z-20">
              <Upload size={12} />
            </div>
          )}
        </>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-stone-900/20 z-10 backdrop-blur-[2px]">
          <Loader2 className="animate-spin text-gold-500" size={32} />
        </div>
      )}
    </div>
  );
};
