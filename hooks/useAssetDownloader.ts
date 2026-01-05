import { useState } from 'react';
import { HERO_SLIDES, HISTORY_ERAS, CAPABILITIES, MENU_IMAGES } from '../constants';

// IndexedDB Helper
const getBlobFromDB = async (key: string): Promise<Blob | undefined> => {
  if (typeof window === 'undefined' || !window.indexedDB) return undefined;

  return new Promise((resolve) => {
    const request = indexedDB.open('SangriaSaltAssets', 1);
    request.onerror = () => resolve(undefined);
    request.onsuccess = (e: Event) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains('images')) {
        resolve(undefined);
        return;
      }
      const tx = db.transaction('images', 'readonly');
      const store = tx.objectStore('images');
      const req = store.get(key);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(undefined);
    };
  });
};

declare global {
  interface Window {
    JSZip: any;
  }
}

export const useAssetDownloader = () => {
  const [isZipping, setIsZipping] = useState(false);

  const downloadAssets = async () => {
    setIsZipping(true);
    try {
      if (!window.JSZip) {
        alert("JSZip library not loaded. Please refresh.");
        return;
      }
      const zip = new window.JSZip();

      const assets: { name: string; url: string; key: string }[] = [];

      // Collect all asset definitions
      HERO_SLIDES.forEach(s => assets.push({ name: s.localSrc, url: s.fallbackSrc, key: s.localSrc }));
      HISTORY_ERAS.forEach(s => assets.push({ name: s.localImage, url: s.image, key: s.localImage }));
      CAPABILITIES.forEach(s => assets.push({ name: s.localImage, url: s.image, key: s.localImage }));
      Object.values(MENU_IMAGES).forEach(m => {
        assets.push({ name: m.local, url: m.fallback, key: m.local });
        assets.push({ name: m.secondLocal, url: m.secondFallback, key: m.secondLocal });
      });

      let count = 0;
      for (const asset of assets) {
        // 1. Try DB first (User override)
        let blob = await getBlobFromDB(asset.key);

        // 2. Fetch from Network if no local blob
        if (!blob) {
          try {
            const response = await fetch(asset.url, { mode: 'cors' });
            if (response.ok) {
              blob = await response.blob();
            }
          } catch (e) {
            console.warn(`Failed to fetch ${asset.name} from network`);
          }
        }

        if (blob) {
          zip.file(asset.name, blob);
          count++;
        }
      }

      if (count === 0) {
        alert("No assets found to export.");
        setIsZipping(false);
        return;
      }

      // Generate Zip
      const content = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(content);
      const a = document.createElement("a");
      a.href = url;
      a.download = "sangria-salt-assets.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

    } catch (error) {
      console.error("Export failed", error);
      alert("Failed to create zip file.");
    } finally {
      setIsZipping(false);
    }
  };

  return { isZipping, downloadAssets };
};
