import React from 'react';
import { CAPABILITIES } from '../constants';
import { SmartImage } from './SmartImage';

export const Capabilities: React.FC = () => {
  return (
    <section id="spaces" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-20">
          <h4 className="text-gold-500 font-bold tracking-[0.2em] uppercase text-sm mb-4">The Venue</h4>
          <h2 className="font-serif text-4xl md:text-6xl font-bold">Event Capabilities</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {CAPABILITIES.map((cap) => {
            return (
              <div
                key={cap.id}
                id={cap.id}
                className="group relative bg-stone-850 border border-stone-800 hover:border-gold-600/50 transition-colors duration-300 overflow-hidden flex flex-col h-full scroll-mt-32"
              >

                {/* Image Section - Switched to aspect-[3/4] to support the user's vertical photos */}
                <div className="relative aspect-[3/4] overflow-hidden">
                   <SmartImage
                    localSrc={cap.localImage}
                    fallbackSrc={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                   />
                   {/* Gradient Overlay - Added pointer-events-none to prevent blocking uploads */}
                   <div className="absolute inset-0 bg-gradient-to-t from-stone-850 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="font-serif text-2xl font-bold mb-2">{cap.title}</h3>
                  {cap.guests && (
                    <p className="text-xs font-bold tracking-widest text-gold-500 uppercase mb-6">{cap.guests}</p>
                  )}
                  <p className="text-stone-400 leading-relaxed text-sm">
                    {cap.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
    </section>
  );
};
