import React from 'react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  return (
    <footer id="inquire" className="bg-stone-900 text-white pt-24 pb-12 border-t border-stone-800">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4">
             <h3 className="font-serif text-3xl font-bold mb-6">
               Sangria <span className="text-gold-500">&</span> Salt
             </h3>
             <address className="not-italic text-stone-400 mb-6 leading-relaxed">
               2327 Mission Street,<br/>
               San Francisco, CA 94110
             </address>
             <p className="text-stone-500 text-sm leading-relaxed">
               Honoring 80 years of Mission history with good bones, strong drinks, and shared plates.
             </p>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-gold-500">Events</h4>
              <ul className="space-y-4 text-sm text-stone-400">
                <li><a href="#buyout" className="hover:text-white transition-colors">Full Buyout</a></li>
                <li><a href="#bar" className="hover:text-white transition-colors">Private Bar</a></li>
                <li><a href="#dining" className="hover:text-white transition-colors">Group Dining</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-gold-500">Info</h4>
              <ul className="space-y-4 text-sm text-stone-400">
                <li><a href="#history" className="hover:text-white transition-colors">History</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="mailto:info@sangriaandsalt.com" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-5">
             <h4 className="font-bold text-sm tracking-widest uppercase mb-6 text-gold-500">Stay Updated</h4>
             <p className="text-stone-400 text-sm mb-6">
               Join our list for exclusive event availability and tasting menu updates.
             </p>
             <form className="flex flex-col sm:flex-row gap-4">
               <input
                 type="email"
                 placeholder="Email address"
                 className="bg-stone-800 border border-stone-700 text-white px-4 py-3 focus:outline-none focus:border-gold-500 flex-grow"
               />
               <Button type="submit" className="whitespace-nowrap">SUBSCRIBE</Button>
             </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 gap-4">
          <p>&copy; 2025 Sangria & Salt. All rights reserved.</p>
          <p className="font-serif italic text-stone-700">Designed for the Mission.</p>
        </div>

      </div>
    </footer>
  );
};
