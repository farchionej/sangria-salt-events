import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-stone-900/95 backdrop-blur-sm py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white">
          <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
            Sangria <span className="text-gold-500">&</span> Salt
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            item.isButton ? (
              <Button
                key={item.label}
                variant={isScrolled ? 'primary' : 'outline'}
                className="text-xs px-6 py-2"
                onClick={() => document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {item.label}
              </Button>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-bold tracking-widest text-white hover:text-gold-500 transition-colors uppercase"
              >
                {item.label}
              </a>
            )
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-stone-900 border-t border-stone-800 p-6 flex flex-col gap-6 md:hidden shadow-2xl">
           {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm font-bold tracking-widest uppercase ${
                item.isButton
                  ? 'bg-sangria-900 text-white p-3 text-center'
                  : 'text-stone-300 hover:text-white'
              }`}
              onClick={(e) => {
                if (item.isButton) {
                  e.preventDefault();
                  document.getElementById('inquire')?.scrollIntoView({ behavior: 'smooth' });
                }
                setIsMobileMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
