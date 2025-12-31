import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  // Define a imagem inicial como local.
  // Se falhar ao carregar (onError), mudamos para o link do Drive automaticamente.
  const [crestSrc, setCrestSrc] = useState('/images/brasao.png');

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed animate-fade-in"
          style={{ 
            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDtjPm0289S7NJNwQJcuB6cbNJIZ2sa8t-AyiHRFM3VgbNzmp2gIofD2ZzbkyCb3NOAT2LWIYsd5ZcL-H3CUBK3AI9o1pfKYc1gOEQKGePLgUV9P-VXXVcm2PJxvrDJMOjw_ZRejIPYQEk-IPF87O_JWJsT8fsaLBr3tjEnvmzso49bTBnn-pQoF04Y7mIiCq83OxED0I2brmkILjqQ7i8D7X2rSBri98HW-lfe8TOM2M-jLaVQgI-OxnwTBrOl4bfUjtwA87VF3g')"
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        
        {/* Decorative Borders */}
        <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none hidden sm:block"></div>
        <div className="absolute inset-5 md:inset-9 border border-white/10 pointer-events-none hidden sm:block"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto space-y-8">
          
          {/* Brasão Image */}
          <div className="mb-4 animate-fade-in-down">
             <img 
               src={crestSrc}
               onError={() => {
                 // Se a imagem local não for encontrada, usa o link do Drive como backup
                 if (crestSrc !== 'https://drive.google.com/uc?export=view&id=1-KBO5xkkqqzJiAxa-M4IkF61v1kJb2Xs') {
                    setCrestSrc('https://drive.google.com/uc?export=view&id=1-KBO5xkkqqzJiAxa-M4IkF61v1kJb2Xs');
                 }
               }}
               alt="Brasão do Casamento"
               className="w-32 h-32 md:w-48 md:h-48 object-contain opacity-90 drop-shadow-2xl filter brightness-0 invert"
               /* A classe 'filter brightness-0 invert' torna a imagem branca para destacar no fundo escuro. */
             />
          </div>

          <div className="space-y-2">
            <span className="block text-accent font-display text-sm md:text-base tracking-[0.3em] uppercase">Save the Date</span>
            <h1 className="text-white font-script text-7xl md:text-9xl drop-shadow-lg opacity-95 pt-2 pb-4 leading-none">
              Isana
            </h1>
          </div>

          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-col gap-1 text-white/90 font-serif text-lg md:text-2xl font-light tracking-wide italic leading-relaxed drop-shadow-md">
              <p>Ana Clara Trindade Pereira Dias de Souza</p>
              <span className="text-accent font-script text-3xl md:text-4xl py-1">&</span>
              <p>Isaque Barbosa Dias Cardoso de Oliveira</p>
            </div>
          </div>

          <div className="w-16 h-[1px] bg-accent/60 my-4"></div>

          <h3 className="text-white font-display text-sm md:text-xl tracking-widest drop-shadow-sm flex flex-col md:flex-row items-center gap-3 uppercase">
            <span>15 . OUT . 2026</span>
            <span className="hidden md:inline text-accent">•</span>
            <span>Castelo de Itaipava</span>
          </h3>

          <div className="pt-8">
            <Link to="/rsvp" className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-sm transition-all hover:scale-105 inline-block">
              <div className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-sm border border-white/30 group-hover:bg-white/20 transition-all duration-300"></div>
              <span className="relative flex items-center gap-3 text-white font-display font-semibold tracking-widest text-sm uppercase">
                Confirmar Presença
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-background-light w-full flex justify-center border-b border-[#E5E0D8]">
        <div className="w-full max-w-4xl px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-display tracking-[0.2em] uppercase block mb-3">O Grande Dia</span>
            <h3 className="text-3xl md:text-4xl font-serif italic text-text-dark mb-4">Contagem Regressiva</h3>
            <div className="w-24 h-[1px] bg-primary/30 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
             <CountdownUnit value="300" label="Dias" />
             <CountdownUnit value="12" label="Horas" />
             <CountdownUnit value="45" label="Minutos" />
             <CountdownUnit value="00" label="Segundos" />
          </div>
        </div>
      </section>

      {/* Location Teaser */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-gray-100 overflow-hidden group">
        <img 
          className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxwUyZnbjWfIe_m_nSirdshPedYDSmhWI1nY7d07fOtB8OmsyDfFoMhglkABbUMFtqevYp_at85NwQbXrzseG9xaWSwZpOyUIZ4GlhtKABqz061kQ0_Fi2KD84966CCcr5tAcE9obRN8HMEvKDoydi6yRXkRU52CfvP7PZoSiEiUMrTAy20Xc4peJkvc_yIxX_JCwQYFaTskjuIPCTMkc5GDaLQRcB209eQ1mNB_1xALgCFOBmLmFCmFePoIaBTPFHZb6Og2qPbQ"
          alt="Castelo de Itaipava"
        />
        <div className="absolute inset-0 bg-[#3a2e26]/30 mix-blend-multiply pointer-events-none"></div>
        <div className="relative z-10 bg-white/95 p-10 rounded-sm shadow-2xl text-center max-w-sm mx-4 border-t-4 border-primary">
            <div className="text-primary mb-4 flex justify-center">
                <Heart className="fill-primary" size={32} />
            </div>
            <h3 className="text-2xl font-display font-bold text-text-dark mb-2 uppercase tracking-wide">Como Chegar</h3>
            <div className="w-12 h-[2px] bg-primary mx-auto mb-4"></div>
            <p className="text-gray-600 text-sm mb-8 font-serif italic leading-relaxed">
                Rodovia BR-040, Km 56<br/>Itaipava, Petrópolis - RJ
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center h-11 px-8 rounded-sm bg-primary text-white text-xs font-display font-bold uppercase tracking-widest hover:bg-primary-dark transition-colors">
                Ver no Mapa
            </a>
        </div>
      </section>
    </div>
  );
};

const CountdownUnit: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="flex h-24 w-24 md:h-28 md:w-28 items-center justify-center rounded-full border border-[#dcd2cc] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative">
      <span className="absolute top-2 text-primary/40">★</span>
      <span className="text-primary-dark text-3xl md:text-4xl font-display font-semibold">{value}</span>
    </div>
    <span className="mt-4 text-xs font-display uppercase tracking-widest text-gray-500">{label}</span>
  </div>
);

export default Home;