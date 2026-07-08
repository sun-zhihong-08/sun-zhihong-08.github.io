'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Target, Handshake, Zap, TrendingUp } from 'lucide-react';
import { parseMarkdown } from '@/lib/utils';

const icons: Record<string, React.ReactNode> = {
  Target: <Target size={24} />,
  Handshake: <Handshake size={24} />,
  Zap: <Zap size={24} />,
  TrendingUp: <TrendingUp size={24} />,
};

interface AboutProps {
  aboutText: string;
  values: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4"
      >
        {label}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight"
        dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br>') }}
      />
    </>
  );
}

export default function About({ aboutText, values }: AboutProps) {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <SectionHeader label="About Me" title="Building Brands<br>That People Trust" />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="text-text-secondary leading-relaxed mb-8 space-y-4"
              dangerouslySetInnerHTML={{
                __html: parseMarkdown(aboutText)
              }}
            />

            <div className="grid grid-cols-2 gap-4">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-bg-card border border-border-default rounded-xl p-5 hover:border-accent-glow transition-all duration-500"
                >
                  <div className="text-accent mb-2">{icons[val.icon] || <Target size={24} />}</div>
                  <div className="font-semibold text-white mb-1">{val.title}</div>
                  <div className="text-text-muted text-sm">{val.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl overflow-hidden border border-border-default"
          >
            <Image
              src="/images/work-photo1.jpg"
              alt="工作照片"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg to-transparent">
              <span className="text-sm text-text-secondary">2015 · 品牌公关活动现场</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
