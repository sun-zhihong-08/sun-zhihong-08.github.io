'use client';

import { motion } from 'framer-motion';
import { Target, Radio, Rocket, Smartphone, Building2, Handshake } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Target: <Target size={28} />,
  Radio: <Radio size={28} />,
  Rocket: <Rocket size={28} />,
  Smartphone: <Smartphone size={28} />,
  Building2: <Building2 size={28} />,
  Handshake: <Handshake size={28} />,
};

interface SkillsProps {
  data: Array<{
    icon: string;
    name: string;
    description: string;
    tags: string[];
  }>;
}

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4"
        >
          Core Strengths
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: 'What I Bring<br>to the Table' }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-text-secondary text-lg mb-12 max-w-2xl"
        >
          覆盖品牌战略、公关传播、市场推广全链条，兼具传统媒体深厚资源与新媒体数字化运营能力。
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-card border border-border-default rounded-2xl p-6 hover:border-accent-glow transition-all duration-500 group"
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                {icons[skill.icon] || <Target size={28} />}
              </div>
              <div className="font-semibold text-lg text-white mb-2">{skill.name}</div>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs bg-bg-elevated border border-border-default rounded-full text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
