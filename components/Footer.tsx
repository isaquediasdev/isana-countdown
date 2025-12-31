import React from 'react';
import { Camera, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-paper border-t border-[#E5E0D8] pt-16 pb-8 px-6 bg-paper-texture">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-script text-primary-dark mb-4">Isana</h2>
          <div className="flex items-center gap-4 text-gray-400 text-xs font-display tracking-[0.2em] uppercase">
            <span>Ana Clara</span>
            <span className="text-primary text-[8px]">●</span>
            <span>Isaque</span>
          </div>
        </div>

        <div className="flex gap-8 my-2">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:-translate-y-1 duration-300">
            <Camera size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:-translate-y-1 duration-300">
            <Globe size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:-translate-y-1 duration-300">
            <Mail size={20} />
          </a>
        </div>

        <div className="w-full h-px bg-primary/10 max-w-xs"></div>

        <div className="text-xs text-gray-400 text-center font-serif italic space-y-1">
          <p>© 2026 Ana Clara & Isaque. Todos os direitos reservados.</p>
          <p>Feito com amor para o nosso grande dia.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;