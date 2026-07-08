'use client';

import { motion } from 'framer-motion';

interface InsightsProps {
  data: Array<{
    category: string;
    title: string;
    content: string;
    date: string;
  }>;
}

export default function AIInsights({ data }: InsightsProps) {
  return (
    <section id="insights" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4"
        >
          AI Insights
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: 'Thoughts on AI,<br>Business & Growth' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-text-secondary text-lg mb-12 max-w-2xl"
        >
          对 AI 时代品牌传播、组织变革、产品创新等领域的思考。
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((insight, i) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-card border border-border-default rounded-2xl p-6 hover:border-accent-glow transition-all duration-500"
            >
              <div className="text-accent text-xs font-semibold tracking-[0.1em] uppercase mb-3">
                {insight.category}
              </div>
              <h3 className="font-semibold text-lg text-white mb-3 leading-snug">{insight.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{insight.content}</p>
              <div className="text-text-muted text-xs">{insight.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
