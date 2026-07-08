'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';

interface HeroProps {
  data: {
    name: string;
    role: string;
    tagline: string;
    description: string;
    portrait: string;
    cta: { primary: string; secondary: string };
  };
}

export default function Hero({ data }: HeroProps) {
  const ringRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
      {/* Orbs */}
      <div className="fixed w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none z-0 bg-[rgba(59,130,246,0.08)] top-[-10%] left-[10%] animate-orb" />
      <div className="fixed w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 bg-[rgba(139,92,246,0.06)] bottom-[20%] right-[-5%] animate-orb" style={{ animationDelay: '-7s' }} />
      <div className="fixed w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none z-0 bg-[rgba(59,130,246,0.05)] top-[50%] left-[-10%] animate-orb" style={{ animationDelay: '-14s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-text-muted text-sm font-medium tracking-[0.1em] uppercase mb-4">
            {data.role}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
            {data.name}
          </h1>
          <p className="text-xl md:text-2xl text-accent-light font-light mb-6 tracking-wide">
            {data.tagline}
          </p>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#experience" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors duration-300">
              {data.cta.primary} <ArrowDown size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-border-light text-white font-medium rounded-lg hover:border-white transition-colors duration-300">
              {data.cta.secondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="relative w-[300px] h-[300px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border border-border-light shadow-[0_0_60px_rgba(59,130,246,0.15)]">
              <Image
                src={data.portrait}
                alt={data.name}
                fill
                className="object-cover object-center"
                priority
                sizes="320px"
              />
            </div>
            <div
              ref={ringRef}
              className="absolute inset-[-20px] rounded-full border border-[rgba(59,130,246,0.2)] animate-ring"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}
