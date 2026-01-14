import { useState, useEffect } from 'react';

// Target date: October 15, 2026 at 16:00 (ceremony time)
const TARGET_DATE = new Date('2026-10-15T16:00:00').getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="countdown-unit flex flex-col items-center">
      <div className="countdown-flip bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-accent/30 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 min-w-[70px] sm:min-w-[90px] md:min-w-[120px]">
        <span className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-primary-dark font-semibold tabular-nums">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="mt-2 sm:mt-3 font-serif text-sm sm:text-base md:text-lg text-primary uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg
      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-secondary animate-float"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function RingsIcon() {
  return (
    <svg
      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-secondary/80"
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="22" cy="32" r="14" />
      <circle cx="42" cy="32" r="14" />
      <circle cx="22" cy="32" r="10" strokeDasharray="2 2" />
      <circle cx="42" cy="32" r="10" strokeDasharray="2 2" />
    </svg>
  );
}

function App() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background-light relative overflow-hidden">
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative gradient circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-secondary/10 to-transparent rounded-full translate-x-1/3 translate-y-1/3" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:py-12">

        {/* Decorative top element */}
        <div className={`mb-6 sm:mb-8 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
          <RingsIcon />
        </div>

        {/* Couple names */}
        <h1
          className={`font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-dark text-center leading-tight ${
            isLoaded ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          Ana Clara & Isaque
        </h1>

        {/* Decorative heart */}
        <div className={`my-4 sm:my-6 ${isLoaded ? 'animate-fade-in delay-1' : 'opacity-0'}`}>
          <HeartIcon />
        </div>

        {/* Subtitle */}
        <p
          className={`font-display text-sm sm:text-base md:text-lg text-primary tracking-[0.2em] sm:tracking-[0.3em] uppercase text-center ${
            isLoaded ? 'animate-fade-in-up delay-1' : 'opacity-0'
          }`}
        >
          15 de Outubro de 2026
        </p>
        <p
          className={`font-serif text-base sm:text-lg md:text-xl text-accent mt-1 sm:mt-2 italic text-center ${
            isLoaded ? 'animate-fade-in-up delay-2' : 'opacity-0'
          }`}
        >
          Castelo de Itaipava
        </p>

        {/* Countdown section */}
        <div
          className={`mt-10 sm:mt-14 md:mt-16 ${
            isLoaded ? 'animate-fade-in-up delay-3' : 'opacity-0'
          }`}
        >
          <p className="font-serif text-lg sm:text-xl md:text-2xl text-text-dark/70 text-center mb-6 sm:mb-8 italic">
            Faltam...
          </p>

          <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            <CountdownUnit value={timeLeft.days} label="Dias" />

            <span className="font-display text-2xl sm:text-3xl md:text-4xl text-primary/50 self-start mt-4 sm:mt-6 md:mt-8">:</span>

            <CountdownUnit value={timeLeft.hours} label="Horas" />

            <span className="font-display text-2xl sm:text-3xl md:text-4xl text-primary/50 self-start mt-4 sm:mt-6 md:mt-8">:</span>

            <CountdownUnit value={timeLeft.minutes} label="Min" />

            <span className="font-display text-2xl sm:text-3xl md:text-4xl text-primary/50 self-start mt-4 sm:mt-6 md:mt-8 hidden sm:block">:</span>

            <div className="hidden sm:block">
              <CountdownUnit value={timeLeft.seconds} label="Seg" />
            </div>
          </div>

          {/* Seconds on mobile (smaller) */}
          <div className="sm:hidden mt-4 flex justify-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-md border border-accent/20 px-4 py-2">
                <span className="font-display text-xl text-primary font-medium tabular-nums">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="font-serif text-sm text-primary/70 ml-1">seg</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer message */}
        <p
          className={`mt-12 sm:mt-16 md:mt-20 font-serif text-base sm:text-lg text-text-dark/50 text-center max-w-md px-4 italic ${
            isLoaded ? 'animate-fade-in delay-4' : 'opacity-0'
          }`}
        >
          "O amor é paciente, o amor é bondoso..."
        </p>

        {/* Decorative bottom flourish */}
        <div
          className={`mt-6 sm:mt-8 flex items-center gap-3 text-accent/40 ${
            isLoaded ? 'animate-fade-in delay-4' : 'opacity-0'
          }`}
        >
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-accent/40" />
          <span className="font-script text-xl sm:text-2xl">I&A</span>
          <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent to-accent/40" />
        </div>
      </div>
    </div>
  );
}

export default App;
