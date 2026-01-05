import React, { useState } from 'react';
import { TAPAS_MENU, ENTREES_MENU, MENU_TABS, MENU_IMAGES } from '../constants';
import { Button } from './Button';
import { SmartImage } from './SmartImage';

export const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState(MENU_TABS[0]);
  const currentImageConfig = MENU_IMAGES[activeTab];

  return (
    <section id="menu" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-6">Menu Highlights</h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-stone-300 pb-1">
            {MENU_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-bold tracking-widest uppercase pb-4 px-2 transition-all duration-300 border-b-2 ${
                  activeTab === tab
                    ? 'border-sangria-900 text-sangria-900'
                    : 'border-transparent text-stone-500 hover:text-stone-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Menu Image Column (Stacked Photos) */}
          <div className="lg:w-1/3 order-2 lg:order-1">
            <div className="flex flex-col gap-6 sticky top-32">

              {/* Primary Image */}
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
                 <SmartImage
                  localSrc={currentImageConfig?.local}
                  fallbackSrc={currentImageConfig?.fallback || 'https://picsum.photos/800/1000'}
                  alt={`${activeTab} Primary`}
                  className="w-full h-full object-cover animate-fade-in"
                  key={`${activeTab}-1`}
                 />
              </div>

              {/* Secondary Image */}
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl">
                 <SmartImage
                  localSrc={currentImageConfig?.secondLocal}
                  fallbackSrc={currentImageConfig?.secondFallback || 'https://picsum.photos/800/1001'}
                  alt={`${activeTab} Secondary`}
                  className="w-full h-full object-cover animate-fade-in"
                  key={`${activeTab}-2`}
                 />
              </div>

            </div>
          </div>

          {/* Menu Items Column */}
          <div className="lg:w-2/3 order-1 lg:order-2 min-h-[600px]">
            {activeTab === 'TAPAS & DINNER' ? (
              <div className="animate-fade-in space-y-16">

                {/* Tapas Grid */}
                <div>
                  <h3 className="font-serif text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-sangria-900"></span>
                    Tapas Bar
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {TAPAS_MENU.map((item) => (
                      <div key={item.name}>
                        <h4 className="font-bold text-stone-900 text-lg mb-2">{item.name}</h4>
                        <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Entrees Grid */}
                <div>
                  <h3 className="font-serif text-3xl font-bold text-stone-900 mb-8 flex items-center gap-4">
                     <span className="w-8 h-[1px] bg-sangria-900"></span>
                     Entrées
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {ENTREES_MENU.map((item) => (
                      <div key={item.name}>
                        <h4 className="font-bold text-stone-900 text-lg mb-2">{item.name}</h4>
                        <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-12">
                   <Button onClick={() => document.getElementById('inquire')?.scrollIntoView()}>RESERVE A SEAT</Button>
                </div>

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-20 bg-white shadow-sm border border-stone-200">
                <h3 className="font-serif text-2xl text-stone-800 mb-4">{activeTab} Menu</h3>
                <p className="text-stone-500 italic mb-8 max-w-md mx-auto">
                  Our {activeTab.toLowerCase()} selections change seasonally to feature the freshest local ingredients.
                </p>
                <Button variant="outline" className="text-stone-900 border-stone-900 hover:text-white hover:bg-stone-900">
                  Download PDF
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
