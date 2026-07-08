'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface MediaProps {
  data: Array<{
    source: string;
    title: string;
    date: string;
    image: string;
    link: string | null;
  }>;
  gallery: Array<{
    image: string;
    tag: string;
    caption: string;
    wide: boolean;
  }>;
}

export default function Media({ data, gallery }: MediaProps) {
  return (
    <section id="media" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4"
        >
          Media Coverage
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: 'In the<br>Spotlight' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-text-secondary text-lg mb-12 max-w-2xl"
        >
          操盘项目多次获得央媒及主流媒体深度报道，以下为部分代表性传播案例。
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, i) => {
            const Card = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg-card border border-border-default rounded-2xl overflow-hidden hover:border-accent-glow transition-all duration-500 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {item.link && (
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-bg/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink size={14} className="text-white" />
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="text-accent text-xs font-semibold mb-2">{item.source}</div>
                  <div className="font-medium text-white text-sm leading-snug mb-2">{item.title}</div>
                  <div className="text-text-muted text-xs">{item.date}</div>
                </div>
              </motion.div>
            );

            return item.link ? (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {Card}
              </a>
            ) : (
              <div key={item.title}>{Card}</div>
            );
          })}
        </div>

        {/* Gallery */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4"
          >
            Work Moments
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
            dangerouslySetInnerHTML={{ __html: 'Snapshots of<br>the Journey' }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-text-secondary mb-10"
          >
            从品牌活动现场到行业峰会，从团队建设到个人成长，记录每一个重要时刻。
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {gallery.map((photo, i) => (
              <motion.div
                key={photo.image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-xl overflow-hidden border border-border-default group cursor-pointer hover:border-accent-glow transition-all duration-500 ${
                  photo.wide ? 'col-span-2' : ''
                }`}
              >
                <div className={`relative ${photo.wide ? 'h-64' : 'h-48'}`}>
                  <Image
                    src={photo.image}
                    alt={photo.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    sizes={photo.wide ? '800px' : '400px'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <span className="text-xs text-accent font-medium">{photo.tag}</span>
                      <div className="text-sm text-white mt-1">{photo.caption}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
