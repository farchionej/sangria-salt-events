import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { History } from './components/History';
import { Capabilities } from './components/Capabilities';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-sangria-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <History />
        <Capabilities />
        <Menu />
      </main>
      <Footer />
    </div>
  );
}

export default App;
