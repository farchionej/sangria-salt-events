import React from 'react';
import { HISTORY_ERAS } from '../constants';
import { SmartImage } from './SmartImage';

export const History: React.FC = () => {
  return (
    <section id="history" className="pt-12 pb-24 bg-stone-50 text-stone-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Don't rent a room. <br/>
            <span className="italic text-stone-500">Rent a piece of Mission history.</span>
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed">
            We've stripped back the clutter to reveal the good bones of the legacy bar and restaurant<br/>
            —specifically the massive 140-foot mahogany bar. We combine the historic grit with chef-driven tapas and elevated service.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-stone-200 pt-10">
          {HISTORY_ERAS.map((era) => (
            <div key={era.id} className="group cursor-default">
               <div className="aspect-[4/3] overflow-hidden mb-8 bg-stone-200">
                  <SmartImage
                    localSrc={era.localImage}
                    fallbackSrc={era.image}
                    alt={era.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                      era.id === '03' ? '' : 'grayscale group-hover:grayscale-0'
                    }`}
                  />
               </div>

               {/* Updated Year Display: Amplified & Number Removed */}
               <div className="mb-4 border-b border-stone-200 pb-4">
                 <span className="text-sangria-900 font-bold tracking-[0.15em] text-lg uppercase block">
                    {era.period}
                 </span>
               </div>

               <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-sangria-900 transition-colors">
                 {era.title}
               </h3>
               <p className="text-stone-600 text-sm leading-relaxed">
                 {era.description}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
