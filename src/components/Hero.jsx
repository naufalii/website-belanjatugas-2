import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="home">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-dark/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent-light/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Tugas Beres, <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-accent-light">
                  Hati Puas!
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Lagi pusing sama deadline tugas? Tenang aja, serahkan ke kami! Kami bantu kamu selesaikan tugas dengan cepat, rapi, dan hasil memuaskan.
              </motion.p>
            </div>

            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="https://linktr.ee/belanjatugas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 bg-accent-light rounded-full hover:bg-accent-dark glow-effect overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Konsultasi Sekarang
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Floating Illustration */}
          <motion.div 
            className="flex justify-center items-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              animate={{ 
                y: [-20, 20, -20],
                rotate: [-2, 2, -2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6, 
                ease: "easeInOut" 
              }}
              className="relative w-full max-w-md lg:max-w-lg aspect-square"
            >
              {/* Illustration Placeholder representing high quality 2D image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-dark/40 to-card/60 rounded-3xl backdrop-blur-sm border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                
                {/* Decorative UI Elements inside the illustration area to make it look tech/cyber */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute top-10 right-10 backdrop-blur-md bg-white/5 border border-white/10 p-3 rounded-lg flex items-center gap-3 shadow-lg"
                >
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs font-mono text-white/80">Task Active</span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute bottom-20 left-10 backdrop-blur-md bg-accent-dark/50 border border-accent-light/30 p-4 rounded-xl shadow-xl max-w-[200px]"
                >
                  <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden mb-2">
                    <motion.div 
                      className="h-full bg-accent-light" 
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 2, duration: 2, ease: "easeOut" }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-white/90">Progress: 100%</span>
                </motion.div>

                {/* Main center icon/shape representing code/work */}
                <motion.div
                   animate={{ rotate: 360 }}
                   transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                   className="w-32 h-32 rounded-full border-2 border-dashed border-accent-light/50 flex items-center justify-center relative z-10"
                >
                  <div className="w-24 h-24 rounded-full bg-accent-light/20 backdrop-blur-md border border-accent-light/40 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
