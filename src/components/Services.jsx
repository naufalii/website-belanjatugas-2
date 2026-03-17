import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Monitor, Zap } from 'lucide-react';

const servicesData = [
  {
    icon: <BookOpen className="w-8 h-8 text-accent-light" />,
    title: "Joki Tugas Kuliah",
    description: "Serahkan tugas kuliah harianmu biar kami yang selesaikan dengan hasil terbaik dan akurat."
  },
  {
    icon: <FileText className="w-8 h-8 text-accent-light" />,
    title: "Makalah & Laporan",
    description: "Pembuatan makalah, karya ilmiah, dan laporan praktikum yang rapi dan sesuai standar akademik."
  },
  {
    icon: <Monitor className="w-8 h-8 text-accent-light" />,
    title: "Website",
    description: "Jasa pembuatan website statis, dinamis, maupun aplikasi web untuk tugas akhir atau project kuliah."
  },
  {
    icon: <Zap className="w-8 h-8 text-accent-light" />,
    title: "Revisi Cepat Sesuai Permintaan",
    description: "Butuh revisi mendesak? Kami siap memperbaiki tugasmu dengan cepat dan tepat sasaran."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="services">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-dark/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Layanan <span className="text-accent-light">Kami</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-secondary max-w-2xl mx-auto text-lg"
          >
            Pilih layanan yang kamu butuhkan dan biar kami urus sisanya.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 }
              }}
              className="glass-card p-8 rounded-2xl relative group overflow-hidden transition-all duration-300 hover:border-accent-light/50"
            >
              {/* Card Hover Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-light/0 via-accent-light/0 to-accent-light/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="bg-background/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:bg-background transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-secondary leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
