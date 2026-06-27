"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import MagneticElement from "./MagneticElement";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <section className="relative h-screen w-full overflow-hidden mesh-bg animate-mesh-shift flex flex-col justify-center items-center">
      {/* Floating Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-8 left-1/2 -translate-x-1/2 glass-panel rounded-full px-8 py-4 flex items-center gap-8 z-50"
      >
        <span className="font-serif font-bold text-xl tracking-tight text-charcoal">Flow State</span>
        <div className="hidden md:flex gap-6 text-sm font-medium text-charcoal/70">
          <a href="#process" className="hover:text-charcoal transition-colors">Process</a>
          <a href="#contact" className="hover:text-charcoal transition-colors">Apply</a>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center"
      >
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal leading-[1.1] tracking-tight mb-8"
        >
          Stop Managing Web Projects.<br />
          <span className="text-charcoal/60">Start Booking High-Value Clients.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="font-sans text-lg md:text-xl text-charcoal/70 max-w-2xl mx-auto mb-12"
        >
          We build ultra-premium digital storefronts with zero friction. You invest 15 minutes. We deliver a flawless, high-converting asset.
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <MagneticElement>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-charcoal text-white rounded-full font-medium font-sans liquid-hover transition-transform active:scale-95 block"
            >
              Book Your Handoff Call
            </a>
          </MagneticElement>
        </motion.div>
      </motion.div>
    </section>
  );
}
