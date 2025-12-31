import React from 'react';
import { Church, Wine, Shirt, Bed, Diamond, Baby, Sparkles, MapPin, ParkingCircle } from 'lucide-react';

const Details: React.FC = () => {
  return (
    <div className="pt-20 bg-paper-texture min-h-screen w-full">
      {/* Header */}
      <div className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "linear-gradient(rgba(30, 20, 20, 0.4), rgba(30, 20, 20, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXbhQ8-VDtlWYIbbgxrDIMMpsGbheQ-oSTjr8SnNhkxGeZ5ZpGzRX2sT7IdKEqExXUVVJb_7Pj9F6B6W88QbcnlRkPXT_9SuvhciCsjexzdv5gErRufX_IpqVduDVmXtOoOVCcjKW1VzNvc_n_zLNdE5uqi0qRO3aqAOfmQxRtunTB8ZIn66iT3LI4wcrxl6ZS576JeCNA7QIabXXQF5XAGPqsO-p68wV3k91YKjlfv7wQ58oQ06SMajoaHsCTM7fmoz5u4U_TWg')" }}>
        <div className="flex flex-col items-center text-center text-white px-4 z-10 animate-fade-in-up max-w-4xl">
            <div className="mb-6 relative">
                <div className="w-20 h-20 border-2 border-secondary/80 rounded-full flex items-center justify-center bg-black/20 backdrop-blur-sm">
                    <span className="font-serif italic text-3xl pt-2 text-[#f0e6d2]">A&I</span>
                </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-wide mb-4 text-[#fcfbf9] drop-shadow-md">
                Detalhes do Casamento
            </h1>
            <div className="bg-black/30 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 flex items-center gap-3 text-xs md:text-sm tracking-widest uppercase font-light">
                <span>15 de Outubro, 2026</span>
                <span className="mx-1 text-white/30">|</span>
                <span>Castelo de Itaipava</span>
            </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col gap-24">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto">
            <p className="font-serif text-2xl text-text-dark/80 italic leading-relaxed">
                "Estamos ansiosos para celebrar nosso amor em um cenário de conto de fadas. Aqui estão todos os detalhes para tornar este dia inesquecível junto a vocês."
            </p>
            <div className="flex items-center justify-center w-full mt-8 opacity-40">
                <div className="h-px bg-primary flex-1"></div>
                <HeartIcon />
                <div className="h-px bg-primary flex-1"></div>
            </div>
        </div>

        {/* Timeline */}
        <section>
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display text-primary-dark mb-3 text-center">Cronograma do Dia</h2>
                <div className="w-16 h-[2px] bg-secondary"></div>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-secondary/30 transform -translate-x-1/2"></div>
                
                <div className="flex flex-col gap-16 md:gap-0">
                    <TimelineItem 
                        time="16:00" 
                        title="Cerimônia" 
                        location="Capela do Castelo" 
                        description='Um momento sagrado onde diremos o nosso "sim". Por favor, cheguem com 30 minutos de antecedência.'
                        icon={<Church className="text-secondary" />}
                        align="left"
                    />
                    <TimelineItem 
                        time="18:00" 
                        title="Recepção Real" 
                        location="Salão de Cristal" 
                        description="Coquetel de boas-vindas seguido de jantar e baile no salão principal. Prepare-se para brindar!"
                        icon={<Wine className="text-secondary" />}
                        align="right"
                    />
                    <TimelineItem 
                        time="02:00" 
                        title="Encerramento" 
                        location="Fim da Festa" 
                        description="Agradecemos a presença de todos nesta noite mágica."
                        icon={<Sparkles className="text-secondary" />}
                        align="left"
                    />
                </div>
            </div>
        </section>

        {/* Venue Highlight */}
        <section className="bg-white p-2 md:p-3 shadow-xl rounded-sm">
            <div className="flex flex-col lg:flex-row border border-secondary/20 h-full">
                <div className="lg:w-1/2 relative min-h-[400px]">
                    <div className="absolute inset-2 border border-white/30 z-10"></div>
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuClsS3WJk3oWMBdN15WMuLgy30xqmrM3QqXLSeG2TP0LVKfogw6nZJ5X9LvnxGqFfSeEgt0e0ZDcCAeHBo6KtIlp-KjZmyFzKcwu1PQRU8wxUB0ARBdJfVBwMVuXd60hU_hFQObvQN5ZNnpx_3KY1I7WPcvaeftsUn9I5H4IaZtD-arIKgP_3UeziaHnVo4v-0VJUohe0FSxyxeh3DOegqCn5PYUWLLsX-__wLsO80nTfdEEEbEbeWmbnYYQQQYSSNYt56G3_lTWA" 
                        alt="Castelo de Itaipava" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-6 left-6 z-20 bg-white/90 px-4 py-2 backdrop-blur-sm shadow-sm border-l-4 border-primary">
                        <p className="font-display text-xs tracking-widest uppercase text-primary">Local Histórico</p>
                    </div>
                </div>
                <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-paper-texture">
                    <h3 className="text-3xl md:text-4xl font-display text-primary mb-2">Castelo de Itaipava</h3>
                    <div className="h-1 w-20 bg-secondary mb-6"></div>
                    <p className="text-gray-600 mb-8 leading-relaxed font-serif text-lg">
                        Um autêntico castelo medieval em plena região serrana do Rio. Construído na década de 1920, este local histórico oferece a atmosfera perfeita de romance e nobreza para celebrarmos nossa união.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 p-4 border border-secondary/20 bg-background-light rounded-sm">
                            <MapPin className="text-primary mt-1 shrink-0" />
                            <div>
                                <p className="font-display text-sm tracking-wide text-text-dark uppercase mb-1">Endereço Completo</p>
                                <p className="font-serif text-xl text-gray-600">
                                    BR-040, Km 56 - Itaipava<br/>Petrópolis - RJ, CEP 25750-226
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <ParkingCircle className="text-secondary mt-1 shrink-0" />
                            <div>
                                <p className="font-bold text-sm text-text-dark uppercase tracking-wide">Estacionamento</p>
                                <p className="text-sm text-gray-500 font-serif italic text-lg">Valet parking exclusivo para convidados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Additional Info Cards */}
        <section>
            <div className="flex flex-col items-center mb-10">
                <h2 className="text-2xl md:text-3xl font-display text-text-dark mb-2 text-center">Informações Adicionais</h2>
                <Diamond className="text-secondary w-4 h-4" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <InfoCard 
                    icon={<Shirt />} 
                    title="Dress Code" 
                    subtitle="Passeio Completo" 
                    text="Vestidos longos e Terno com gravata são recomendados para a ocasião." 
                />
                <InfoCard 
                    icon={<Bed />} 
                    title="Hospedagem" 
                    subtitle="Conforto para você" 
                    text="Selecionamos hotéis próximos com tarifas especiais." 
                />
                <InfoCard 
                    icon={<Baby />} 
                    title="Crianças" 
                    subtitle="Espaço Kids" 
                    text="Monitores especializados cuidarão dos pequenos durante toda a recepção." 
                />
            </div>
        </section>

      </div>
    </div>
  );
};

// Sub-components for Details page
const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4 text-primary">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
    </svg>
);

interface TimelineItemProps {
    time: string;
    title: string;
    location: string;
    description: string;
    icon: React.ReactNode;
    align: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ time, title, location, description, icon, align }) => {
    return (
        <div className={`flex flex-col md:flex-row items-center justify-between group ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
            {/* Content Box */}
            <div className={`w-full md:w-5/12 text-center ${align === 'right' ? 'md:text-left' : 'md:text-right'} p-6 bg-white shadow-sm rounded-sm border-t-2 border-primary md:border-t-0 ${align === 'right' ? 'md:border-l-2' : 'md:border-r-2'} hover:shadow-lg transition-all duration-300`}>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-1">{title}</h3>
                <p className="text-gray-500 font-serif italic text-lg mb-3">{location}</p>
                <p className="text-sm text-gray-500 leading-relaxed font-sans">{description}</p>
            </div>

            {/* Icon */}
            <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-background-light border border-secondary shadow-md my-4 md:my-0">
                {icon}
            </div>

            {/* Time Display */}
            <div className={`w-full md:w-5/12 ${align === 'right' ? 'pr-0 md:pr-8 flex justify-center md:justify-end' : 'pl-0 md:pl-8 flex justify-center md:justify-start'}`}>
                <div className="flex items-center gap-2 text-text-dark font-display text-xl tracking-widest">
                    <span className="text-3xl font-bold">{time}</span>
                    <span className="text-xs uppercase text-secondary">Horas</span>
                </div>
            </div>
        </div>
    );
};

const InfoCard: React.FC<{ icon: React.ReactNode, title: string, subtitle: string, text: string }> = ({ icon, title, subtitle, text }) => (
    <div className="bg-white p-8 rounded-sm shadow-sm border border-transparent hover:border-primary/20 text-center group hover:-translate-y-1 transition-all duration-300">
        <div className="w-12 h-12 mx-auto rounded-full border border-secondary/30 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
            {icon}
        </div>
        <h3 className="text-lg font-display uppercase tracking-wider mb-3 text-primary">{title}</h3>
        <div className="h-[1px] w-12 bg-secondary/30 mx-auto mb-4"></div>
        <p className="text-gray-600 font-serif text-lg italic leading-relaxed">
            {subtitle}<br/>
            <span className="text-sm font-sans not-italic text-gray-500 block mt-2">{text}</span>
        </p>
    </div>
);

export default Details;