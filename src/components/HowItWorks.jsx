import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Calculator, Laptop, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle className="w-8 h-8 text-accent-light" />,
    number: '01',
    title: 'Hubungi Admin',
    description: 'Kirim detail tugas & deadline ke admin kami via chat.',
  },
  {
    icon: <Calculator className="w-8 h-8 text-accent-light" />,
    number: '02',
    title: 'Kesepakatan',
    description: 'Diskusikan estimasi harga & waktu pengerjaan yang sesuai.',
  },
  {
    icon: <Laptop className="w-8 h-8 text-accent-light" />,
    number: '03',
    title: 'Proses Kerja',
    description: 'Duduk manis, tim ahli kami yang kerjakan tugas untukmu.',
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-accent-light" />,
    number: '04',
    title: 'Terima Hasil',
    description: 'Tugas selesai, rapi, dan siap dikumpulkan ke dosen!',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const HowItWorks = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-light/10 rounded-full blur-[120px] -z-10" />

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
            Cara Order yang{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-white">
              Anti-Ribet
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary text-lg max-w-xl mx-auto"
          >
            Proses pesan mudah dan cepat. Hanya butuh beberapa langkah!
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4"
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center text-center group relative z-10"
              >
                {/* Step Number Badge */}
                <span className="text-xs font-bold text-accent-light tracking-widest uppercase mb-4 opacity-70">
                  {step.number}
                </span>

                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-20 h-20 rounded-2xl bg-card border border-accent-light/20 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(138,43,226,0.15)] group-hover:shadow-[0_0_30px_rgba(138,43,226,0.4)] transition-shadow duration-300"
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-secondary text-sm leading-relaxed max-w-[180px]">
                  {step.description}
                </p>
              </motion.div>

              {/* Dashed Connector (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center absolute top-[3.5rem]"
                  style={{ left: `calc(${(index + 1) * 25}% - 0px)`, width: '0', transform: 'translateX(-50%)' }}>
                </div>
              )}
            </React.Fragment>
          ))}

          {/* Dashed line across steps (desktop only) */}
          <div className="hidden md:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-accent-light/25 z-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
