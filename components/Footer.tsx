import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-white py-16 border-t border-stone-800">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold mb-4">
              Sangria <span className="text-gold-500">&</span> Salt
            </h3>
            <address className="not-italic text-stone-400 text-sm leading-relaxed">
              2327 Mission Street<br/>
              San Francisco, CA 94110
            </address>
          </div>

          {/* Events Links */}
          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase mb-4 text-gold-500">Spaces</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><a href="#buyout" className="hover:text-white transition-colors">Corporate Buyouts</a></li>
              <li><a href="#bar" className="hover:text-white transition-colors">The 140ft Bar</a></li>
              <li><a href="#dining" className="hover:text-white transition-colors">Private Dining</a></li>
              <li><a href="#lounge" className="hover:text-white transition-colors">The Lounge</a></li>
            </ul>
          </div>

          {/* Info Links */}
          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase mb-4 text-gold-500">Explore</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li><a href="#history" className="hover:text-white transition-colors">Our History</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="#inquire" className="hover:text-white transition-colors">Book an Event</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs tracking-widest uppercase mb-4 text-gold-500">Contact</h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li>
                <a href="mailto:events@sangriaandsalt.com" className="hover:text-white transition-colors">
                  events@sangriaandsalt.com
                </a>
              </li>
              <li>
                <a href="tel:+14158241502" className="hover:text-white transition-colors">
                  (415) 824-1502
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 gap-4">
          <p>&copy; {new Date().getFullYear()} Sangria & Salt. All rights reserved.</p>
          <p className="font-serif italic text-stone-700">Built for the Mission.</p>
        </div>

      </div>
    </footer>
  );
};
