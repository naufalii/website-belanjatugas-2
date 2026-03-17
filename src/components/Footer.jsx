import React from 'react';
import { Instagram, Link as LinkIcon, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-white/5 pt-16 pb-8 relative overflow-hidden" id="contact">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent-dark/20 blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#" className="font-bold text-3xl tracking-tighter text-primary inline-block mb-4">
              BELANJA<span className="text-accent-light">TUGAS</span>
            </a>
            <p className="text-secondary max-w-sm">
              Solusi terpercaya untuk setiap tugas dan project akademikmu. Kami siap membantu dengan proses cepat, rahasia aman, dan hasil yang memuaskan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-bold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-secondary hover:text-accent-light transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#services" className="text-secondary hover:text-accent-light transition-colors">Layanan Kami</a>
              </li>
              <li>
                <a href="https://linktr.ee/belanjatugas" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent-light transition-colors">Testimoni</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-bold text-lg mb-4">Hubungi Kami</h4>
            <div className="space-y-4">
              <a 
                href="https://instagram.com/belanjatugas.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-secondary hover:text-accent-light transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center mr-3 group-hover:bg-accent-dark/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </div>
                <span>@belanjatugas.id</span>
              </a>
              
              <a 
                href="https://linktr.ee/belanjatugas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-secondary hover:text-accent-light transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center mr-3 group-hover:bg-accent-dark/20 transition-colors">
                  <LinkIcon className="w-5 h-5" />
                </div>
                <span>linktr.ee/belanjatugas</span>
              </a>
            </div>
          </div>
          
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 text-center flex flex-col items-center">
          <p className="text-sm text-secondary">
            Copyright &copy; {currentYear} BelanjaTugas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
