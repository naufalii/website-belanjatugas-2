import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, GraduationCap, MessageSquare } from 'lucide-react';

const reasons = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Pengerjaan Cepat',
    description:
      'Solusi tepat untuk deadline mepet. Kami siap kerjakan tugasmu dalam waktu singkat tanpa mengorbankan kualitas.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Rahasia Terjamin',
    description:
      'Privasi klien adalah prioritas utama kami. Semua data dan informasi kamu dijaga ketat dan tidak akan bocor ke pihak manapun.',
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Tim Ahli',
    description:
      'Dikerjakan oleh praktisi berpengalaman dan lulusan terbaik di bidangnya, memastikan hasil yang akurat dan berkualitas tinggi.',
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Revisi Gratis',
    description:
      'Garansi perbaikan sampai hasil sesuai kriteria dan keinginanmu. Kepuasanmu adalah tanggung jawab kami.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="why-us">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-dark/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Kenapa Memilih{' '}
            <span className="text-accent-light">BelanjaTugas?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary text-lg max-w-xl mx-auto"
          >
            Bukan sekadar jasa biasa. Kami hadir dengan komitmen, kualitas, dan kepercayaan.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur-md border border-accent-light/10 hover:border-accent-light/40 shadow-[0_4px_24px_rgba(138,43,226,0.06)] hover:shadow-[0_0_40px_rgba(138,43,226,0.2)] transition-all duration-400 overflow-hidden cursor-default"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-light/0 to-accent-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

              <div className="relative z-10 flex items-start gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-background/70 border border-accent-light/20 flex items-center justify-center text-accent-light group-hover:bg-accent-dark/20 transition-colors duration-300">
                  {reason.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{reason.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
