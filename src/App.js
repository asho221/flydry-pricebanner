import React from 'react';
import { Shirt, Scissors, Sparkles, Wind, Droplet, ArrowRight } from 'lucide-react';

export default function PricingTicker() {
    // Key popular items to showcase in the banner
  const HIGHLIGHTS = [
    { name: 'Shirt', price: '£3.00', icon: <Shirt size={16} /> },
    { name: 'Trousers', price: '£6.00', icon: <Wind size={16} /> },
    { name: '2-Piece Suit', price: '£12.00', icon: <Sparkles size={16} /> },
    { name: 'Dress (Standard)', price: '£10.00', icon: <Droplet size={16} /> },
    { name: 'Wash & Fold (per KG)', price: '£3.50', icon: <Droplet size={16} /> },
    { name: 'Winter Jacket (M)', price: 'From £25', icon: <Shirt size={16} /> },
    { name: 'Minor Stitch / Tear', price: '£8.00', icon: <Scissors size={16} /> },
      ];

  // Duplicate the list multiple times so the infinite scroll loops seamlessly on all screen sizes
  const SCROLL_ITEMS = [...HIGHLIGHTS, ...HIGHLIGHTS, ...HIGHLIGHTS];

  return (
        <div className="w-full bg-white py-3 font-sans overflow-hidden relative flex flex-col items-center">
  {/* Custom Keyframes for smooth infinite scrolling */}
          <style>
  {`
            @keyframes scroll-horizontal {
                        0% { transform: translateX(0); }
                                    100% { transform: translateX(-33.3333%); }
                                              }
                                                        .animate-scroll-horizontal {
                                                                    animation: scroll-horizontal 35s linear infinite;
                                                                                display: flex;
                                                                                            align-items: center;
                                                                                                        width: max-content;
                                                                                                                  }
                                                                                                                            .animate-scroll-horizontal:hover {
                                                                                                                                        animation-play-state: paused;
                                                                                                                                                  }
                                                                                                                                                          `}
</style>

{/* The Scrolling Banner Area */}
      <div className="w-full relative overflow-hidden mb-2">
      {/* Left Fade Overlay to blend seamlessly into the white page */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

{/* Animated Ticker Track */}
        <div className="animate-scroll-horizontal py-1 px-4">
        {SCROLL_ITEMS.map((item, idx) => (
                      <div
                                        key={idx}
              className="flex items-center gap-3 bg-white border border-[#C5A059]/40 shadow-sm px-6 py-3 rounded-full whitespace-nowrap mx-3 cursor-default hover:border-[#114232] hover:shadow-md transition-all duration-300"
            >
                              <div className="text-[#C5A059]">
              {item.icon}
                </div>
              <div className="flex items-baseline gap-2">
                                <span className="font-medium text-gray-600 text-[15px]">{item.name}</span>
                <span className="font-bold text-[#114232] text-[16px]">{item.price}</span>
                </div>
                </div>
          ))}
            </div>

{/* Right Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          </div>

{/* Seamless CTA Link */}
      <a
        href="https://flydry.co.uk/prices"
        className="group inline-flex items-center justify-center gap-2 text-[#C5A059] font-bold text-[15px] hover:text-[#114232] transition-colors"
      >
                  <span className="border-b-2 border-transparent group-hover:border-[#114232] transition-all pb-0.5">
                    See full price list &amp; calculate your estimate
          </span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          </div>
  );
}
