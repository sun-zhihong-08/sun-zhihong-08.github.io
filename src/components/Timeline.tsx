'use client';

import { motion } from 'framer-motion';

interface TimelineProps {
  data: Array<{
    company: string;
    role: string;
    period: string;
    overview: string;
    tags: string[];
    bullets: string[];
    highlight: boolean;
  }>;
}

export default function Timeline({ data }: TimelineProps) {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4"
        >
          Career
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: 'Professional<br>Journey' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-text-secondary text-lg mb-12 max-w-2xl"
        >
          从 4A 公关到互联网大厂，从创业公司到教育集团，横跨科技、互联网、教育、文旅、消费多个赛道。
        </motion.p>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent via-accent to-transparent" />

          <div className="space-y-8">
            {data.map((item, i) => (
              <motion.div
                key={item.company + item.period}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-8 md:pl-16"
              >
                {/* Dot */}
                <div className={`absolute left-[-5px] md:left-[17px] top-2 w-3 h-3 rounded-full border-2 z-10 ${
                  item.highlight 
                    ? 'bg-accent border-accent shadow-[0_0_12px_rgba(59,130,246,0.5)]' 
                    : 'bg-bg border-border-light'
                }`} />

                <div className="bg-bg-card border border-border-default rounded-2xl p-6 hover:border-accent-glow transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                    <div>
                      <span className="font-bold text-white">{item.company}</span>
                      <span className="text-text-muted ml-2">{item.role}</span>
                    </div>
                    <span className="text-text-muted text-sm font-mono">{item.period}</span>
                  </div>
                  <p className="text-text-secondary text-sm mb-3">{item.overview}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full font-medium bg-bg-elevated text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {item.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="text-text-muted text-sm pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent"
                        dangerouslySetInnerHTML={{
                          __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                        }}
                      />
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
