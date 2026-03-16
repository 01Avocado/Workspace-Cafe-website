'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();

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
            className="w-36 h-36 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Center Glassmorphism Nav */}
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

        {/* CTA Button */}
        <button className="bg-[#E9C9A8] text-[#3A2A20] font-['Inter'] font-semibold px-6 py-2.5 rounded-full hover:bg-[#F2D6B8] hover:scale-105 transition-all duration-300 shadow-md">
          Order Now
        </button>
      </div>
    </nav>
  );
}
