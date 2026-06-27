"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "01 / The 15-Minute Brief",
    desc: "A ruthless, asynchronous intake. You invest 15 minutes of your time. We extract your brand essence and business objectives with zero friction.",
  },
  {
    title: "02 / The Flow Engine",
    desc: "Our proprietary, automated architecture—silently powered by AI agents—instantly drafts industry-specific copy and wireframes without human error or delays.",
  },
  {
    title: "03 / The Deployment",
    desc: "You receive the keys to a premium, edge-optimized digital storefront. No endless revisions. Just a flawless, high-converting asset.",
  },
];

export default function ProcessScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);
  
  return (
    <section id="process" className="relative bg-alabaster py-24 md:py-0 md:h-[300vh]" ref={targetRef}>
      {/* Mobile: Native Horizontal Scroll Snap */}
      <div className="md:hidden">
        <div className="px-8 mb-12">
          <h2 className="font-serif text-3xl text-charcoal">The Concierge Pipeline</h2>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory px-8 gap-6 pb-12 hide-scrollbar">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="w-[85vw] flex-shrink-0 snap-center glass-panel rounded-3xl p-8 flex flex-col justify-center min-h-[350px]"
            >
              <h3 className="font-sans text-xl font-semibold mb-4 text-charcoal tracking-tight">{step.title}</h3>
              <p className="font-sans text-charcoal/70 text-base leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Framer Motion Sticky Scroll */}
      <div className="hidden md:flex sticky top-0 h-screen items-center overflow-hidden">
        <div className="absolute top-32 left-24">
          <h2 className="font-serif text-5xl text-charcoal">The Concierge Pipeline</h2>
        </div>
        
        <motion.div style={{ x }} className="flex gap-12 px-24 w-[250vw]">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="w-[50vw] max-w-2xl flex-shrink-0 glass-panel rounded-3xl p-16 flex flex-col justify-center h-[50vh] min-h-[450px]"
            >
              <h3 className="font-sans text-2xl font-semibold mb-6 text-charcoal tracking-tight">{step.title}</h3>
              <p className="font-sans text-charcoal/70 text-xl leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
