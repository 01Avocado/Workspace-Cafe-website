'use client';
import { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Make the background of the navbar slightly more opaque when scrolling
  const bgOpacity = useTransform(scrollY, [0, 100], [0.08, 0.4]);

  return (
    <nav className="fixed top-5 left-0 w-full z-[100] px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center">
          <img
            src="/coffee/logo.png"
            alt="Artisan Coffee Logo"
            className="w-20 h-20 md:w-36 md:h-36 object-contain hover:scale-105 transition-transform duration-300 pointer-events-auto cursor-pointer"
          />
        </div>

        {/* Desktop/Center Glassmorphism Nav */}
        <motion.div
          style={{ backgroundColor: `rgba(255, 255, 255, ${bgOpacity.get()})` }}
          className="hidden md:flex items-center gap-8 px-7 py-3 rounded-full backdrop-blur-md shadow-lg border border-white/10 transition-colors duration-300"
        >
          {['Our Origins', 'Menu', 'Locations'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="font-['Inter'] text-[#EDE6DD] text-[15px] font-medium hover:text-[#E9C9A8] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E9C9A8] transition-all duration-300 group-hover:w-full rounded-full" />
            </a>
          ))}
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 z-[110] relative"
        >
          <span className={`w-6 h-0.5 bg-[#E9C9A8] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#E9C9A8] ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-[#E9C9A8] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* CTA Button */}
        <button className="hidden sm:block bg-[#E9C9A8] text-[#3A2A20] font-['Inter'] font-semibold px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:bg-[#F2D6B8] hover:scale-105 transition-all duration-300 shadow-md text-sm md:text-base">
          Order Now
        </button>

        {/* Mobile Slide-over Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#1A0F0A]/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center gap-8 shadow-2xl md:hidden"
            >
              {['Our Origins', 'Menu', 'Locations'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-['Playfair_Display'] text-[#EDE6DD] text-3xl font-medium hover:text-[#E9C9A8] transition-colors"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 bg-[#E9C9A8] text-[#3A2A20] font-['Inter'] font-bold px-10 py-4 rounded-full"
              >
                Order Now
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
