import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { History } from './components/History';
import { Capabilities } from './components/Capabilities';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Download, Loader2 } from 'lucide-react';
import { useAssetDownloader } from './hooks/useAssetDownloader';

function App() {
  const { isZipping, downloadAssets } = useAssetDownloader();

  return (
    <div className="min-h-screen bg-stone-50 selection:bg-sangria-900 selection:text-white relative">
      <Navbar />
      <main>
        <Hero />
        <History />
        <Capabilities />
        <Menu />
      </main>
      <Footer />

      {/* FIXED FLOATING DOWNLOAD BUTTON - Global Level */}
      <button
        onClick={downloadAssets}
        disabled={isZipping}
        className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-gold-500 hover:bg-white text-stone-900 px-6 py-4 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 border-2 border-stone-900 group"
      >
        {isZipping ? (
          <Loader2 className="animate-spin" size={24} />
        ) : (
          <Download size={24} />
        )}
        <div className="flex flex-col items-start text-left">
           <span className="text-[10px] font-bold uppercase tracking-widest leading-none mb-1 opacity-60">Developer</span>
           <span className="text-sm font-bold uppercase tracking-widest leading-none">
             {isZipping ? "Bundling..." : "Download Assets"}
           </span>
        </div>
      </button>
    </div>
  );
}

export default App;
