import React, { useState } from 'react';
import { Calendar, Castle, Sparkles, User, Users, FileText, Heart, MapPin, Wine } from 'lucide-react';

const Rsvp: React.FC = () => {
    const [attendance, setAttendance] = useState<'yes' | 'no'>('yes');
    const [name, setName] = useState('');
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Obrigado, ${name}! Sua resposta (${attendance === 'yes' ? 'Sim' : 'Não'}) foi registrada.`);
    };

    return (
        <div className="min-h-screen pt-20 flex flex-col items-center justify-center relative bg-background-dark overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#2C241E]/40 mix-blend-multiply z-10"></div> 
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2C241E]/20 to-[#2C241E]/90 z-10"></div>
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSrnB61RTgy5tMLGgFuhV5TRgmrdJ4-ysLJ6qx7hlk9Hf9XbEO3SzAUN_w8rBWSvkQ_6K18pSDlz7DVmeCmVShEjHWec9oVr1n68z17I3UIh8Hrk4kGmnfFoVzjrDPPHa856DQ64i9JvqYF7us5kvw13sUmtsm3ABygaQbFY-TXv4TegPnwY-nzfJqXi_aj-MIH0OSsDTvUPi2ADTyxt1m7sxGgXpJ7kaJ5sYEF-KRb808Pu45s_pNQ3LbGZ16SsWLzDeWclCfVA" 
                    alt="Castelo Texture" 
                    className="w-full h-full object-cover filter sepia-[0.3]" 
                />
            </div>

            <div className="relative z-20 w-full max-w-3xl px-4 py-12 md:py-24">
                <div className="bg-background-paper rounded-sm shadow-2xl overflow-hidden border border-[#d4c5b5] outline outline-4 outline-[#fdfbf7] outline-offset-[-5px]">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
                    
                    {/* Form Header */}
                    <div className="p-8 md:p-12 pb-6 text-center relative bg-paper-texture">
                        <p className="text-primary font-script text-4xl md:text-5xl mb-2">R.S.V.P.</p>
                        <h1 className="text-3xl md:text-4xl font-display text-text-dark mb-4 tracking-tight uppercase border-b-2 border-primary/20 inline-block pb-4 px-8">
                            Confirmação de Presença
                        </h1>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 mt-6 text-[#5D4037] font-medium text-lg">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-primary" />
                                <span className="italic">15 de Outubro de 2026</span>
                            </div>
                            <span className="hidden md:block text-primary">•</span>
                            <div className="flex items-center gap-2">
                                <Castle size={18} className="text-primary" />
                                <span>Castelo de Itaipava</span>
                            </div>
                        </div>
                        <p className="mt-8 text-lg text-[#5D4037] max-w-lg mx-auto italic leading-relaxed">
                            "O amor é a chave mestra que abre os portões da felicidade."<br/>
                            <span className="text-sm not-italic font-sans mt-2 block opacity-80 uppercase tracking-widest">Por favor, confirme até 15 de Setembro.</span>
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="px-8 pb-10 md:px-12 md:pb-12 flex flex-col gap-8 bg-paper-texture">
                        {/* Radio Options */}
                        <div className="flex flex-col gap-4">
                            <label className="text-text-dark text-xl font-display text-center border-t border-[#E0D0C0] pt-6">
                                Você poderá comparecer?
                            </label>
                            <div className="grid md:grid-cols-2 gap-4 mt-2">
                                <div 
                                    onClick={() => setAttendance('yes')}
                                    className={`group relative flex items-center gap-4 rounded-sm border p-5 cursor-pointer transition-all ${attendance === 'yes' ? 'border-primary bg-primary/5' : 'border-[#D7CCC8] hover:border-primary/50'}`}
                                >
                                    <div className={`w-5 h-5 border rounded-full flex items-center justify-center ${attendance === 'yes' ? 'border-primary' : 'border-gray-400'}`}>
                                        {attendance === 'yes' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                                    </div>
                                    <p className="text-[#3E2723] text-lg font-serif italic">Sim, com certeza!</p>
                                    {attendance === 'yes' && <Heart className="absolute right-4 text-primary fill-primary animate-pulse" size={20} />}
                                </div>

                                <div 
                                    onClick={() => setAttendance('no')}
                                    className={`group relative flex items-center gap-4 rounded-sm border p-5 cursor-pointer transition-all ${attendance === 'no' ? 'border-primary bg-primary/5' : 'border-[#D7CCC8] hover:border-primary/50'}`}
                                >
                                    <div className={`w-5 h-5 border rounded-full flex items-center justify-center ${attendance === 'no' ? 'border-primary' : 'border-gray-400'}`}>
                                        {attendance === 'no' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                                    </div>
                                    <p className="text-[#3E2723] text-lg font-serif italic">Infelizmente não</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-[#E0D0C0] w-1/2 mx-auto"></div>

                        {/* Inputs */}
                        <label className="flex flex-col gap-2">
                            <span className="text-[#5D4037] text-sm font-bold uppercase tracking-wider pl-1">Nome dos Convidados</span>
                            <div className="relative">
                                <input 
                                    type="text" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full rounded-sm border border-[#D7CCC8] bg-white/80 px-4 py-4 pl-12 text-lg text-[#3E2723] placeholder-[#A1887F]/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all font-serif" 
                                    placeholder="Digite o nome completo da família ou convidados" 
                                    required
                                />
                                <FileText className="absolute left-4 top-4 text-[#8D6E63]" size={20} />
                            </div>
                        </label>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <label className="flex flex-col gap-2">
                                <span className="text-[#5D4037] text-sm font-bold uppercase tracking-wider pl-1">Adultos</span>
                                <div className="relative">
                                    <input 
                                        type="number" 
                                        min="1" 
                                        value={adults}
                                        onChange={(e) => setAdults(parseInt(e.target.value))}
                                        className="w-full rounded-sm border border-[#D7CCC8] bg-white/80 px-4 py-4 pl-12 text-lg text-[#3E2723] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all font-serif" 
                                    />
                                    <User className="absolute left-4 top-4 text-[#8D6E63]" size={20} />
                                </div>
                            </label>
                            <label className="flex flex-col gap-2">
                                <span className="text-[#5D4037] text-sm font-bold uppercase tracking-wider pl-1">Crianças</span>
                                <div className="relative">
                                    <input 
                                        type="number" 
                                        min="0"
                                        value={children}
                                        onChange={(e) => setChildren(parseInt(e.target.value))}
                                        className="w-full rounded-sm border border-[#D7CCC8] bg-white/80 px-4 py-4 pl-12 text-lg text-[#3E2723] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all font-serif" 
                                    />
                                    <Users className="absolute left-4 top-4 text-[#8D6E63]" size={20} />
                                </div>
                            </label>
                        </div>

                        <label className="flex flex-col gap-2">
                            <span className="text-[#5D4037] text-sm font-bold uppercase tracking-wider pl-1">Mensagem aos Noivos <span className="text-xs font-normal text-[#A1887F] lowercase italic">(opcional)</span></span>
                            <textarea 
                                className="w-full min-h-[120px] rounded-sm border border-[#D7CCC8] bg-white/80 px-4 py-3 text-lg text-[#3E2723] placeholder-[#A1887F]/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none font-serif" 
                                placeholder="Deixe uma mensagem de carinho ou informe restrições alimentares..."
                            ></textarea>
                        </label>

                        <button type="submit" className="group mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm bg-primary py-4 text-base font-display font-bold tracking-widest text-white shadow-md shadow-[#8D6E63]/30 transition-all hover:bg-primary-dark hover:shadow-lg active:scale-[0.99] border border-white/20">
                            <span>CONFIRMAR PRESENÇA</span>
                            <Sparkles className="group-hover:rotate-12 transition-transform" size={18} />
                        </button>
                    </form>

                    {/* Footer inside card */}
                    <div className="bg-[#F5F5F5] p-6 text-center border-t border-[#E0D0C0]">
                        <div className="flex flex-col items-center gap-2">
                            <Wine className="text-primary mb-1" size={24} />
                            <p className="text-[#5D4037] font-serif italic text-lg">Contamos com sua presença para tornar nosso dia ainda mais especial!</p>
                            <a href="#" className="mt-2 text-xs uppercase tracking-widest text-[#8D6E63] hover:text-primary transition-colors flex items-center gap-1 border-b border-transparent hover:border-primary">
                                <MapPin size={14} />
                                Ver Localização no Mapa
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rsvp;