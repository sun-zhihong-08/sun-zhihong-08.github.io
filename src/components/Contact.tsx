'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Phone: <Phone size={24} />,
  Mail: <Mail size={24} />,
  MapPin: <MapPin size={24} />,
};

interface ContactProps {
  data: {
    title: string;
    description: string;
    items: Array<{
      icon: string;
      label: string;
      value: string;
      type: string;
    }>;
  };
}

export default function Contact({ data }: ContactProps) {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-accent text-sm font-semibold tracking-[0.15em] uppercase mb-4"
        >
          Contact
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          dangerouslySetInnerHTML={{ __html: data.title.replace(/\s/g, '<br>') }}
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-text-secondary text-lg mb-12 max-w-2xl mx-auto"
        >
          {data.description}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {data.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-card border border-border-default rounded-2xl p-6 hover:border-accent-glow transition-all duration-500"
            >
              <div className="text-accent mb-4">{icons[item.icon] || <Phone size={24} />}</div>
              <div className="text-text-muted text-sm mb-2">{item.label}</div>
              <div className="text-white font-medium">
                {item.type === 'email' ? (
                  <a href={`mailto:${item.value}`} className="hover:text-accent transition-colors">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
