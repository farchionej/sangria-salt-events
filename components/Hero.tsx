import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SmartImage } from './SmartImage';
import { HERO_SLIDES } from '../constants';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900 group/hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <SmartImage
              localSrc={slide.localSrc}
              fallbackSrc={slide.fallbackSrc}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-stone-900 via-stone-900/60 to-stone-900/30 pointer-events-none"></div>
      </div>

      {/* Carousel Controls - Only visible on hover */}
      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white/30 hover:text-white hover:bg-black/20 hover:backdrop-blur-sm p-3 rounded-full transition-all duration-300 opacity-0 group-hover/hero:opacity-100 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft size={40} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white/30 hover:text-white hover:bg-black/20 hover:backdrop-blur-sm p-3 rounded-full transition-all duration-300 opacity-0 group-hover/hero:opacity-100 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight size={40} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
            className={`transition-all duration-500 rounded-full border border-white/20 ${
              idx === currentSlide ? 'bg-gold-500 w-12 h-2 border-none' : 'bg-transparent hover:bg-white/30 w-2 h-2'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-4xl mx-auto mt-20 pointer-events-none select-none">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight pointer-events-auto drop-shadow-2xl">
          Built For <br/>The Buyout.
        </h1>
        <p className="text-stone-200 text-lg md:text-xl font-light tracking-wide mb-10 max-w-2xl mx-auto pointer-events-auto drop-shadow-lg">
          The ultimate turnkey venue for SF corporate events.
        </p>

        {/* Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mb-12 text-gold-500 font-serif text-xl md:text-2xl italic pointer-events-auto drop-shadow-md">
          <span>250 Guests</span>
          <span className="hidden md:block w-2 h-2 rounded-full bg-white/30"></span>
          <span>140-Foot Bar</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
          <Button onClick={() => document.getElementById('inquire')?.scrollIntoView()}>INQUIRE</Button>
          <Button variant="outline" onClick={() => document.getElementById('spaces')?.scrollIntoView()}>VIEW SPACES</Button>
        </div>
      </div>

    </section>
  );
};
