import { Button } from "@/components/ui/button";
import { useMemo } from "react";

interface HeroSectionProps {
  onBrowsePhones: () => void;
  onOpenCalculator: () => void;
  onOpenInstructions: () => void;
}

const techSymbols = ['⬡', '◈', '⟐', '▣', '◉', '⬢', '△', '⊡', '⟁', '◇', '⏣', '⎔', '⬣', '◎', '⊞'];

export default function HeroSection({ onBrowsePhones, onOpenCalculator, onOpenInstructions }: HeroSectionProps) {
  const floatingElements = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${8 + Math.random() * 12}s`,
      size: `${12 + Math.random() * 20}px`,
      opacity: 0.15 + Math.random() * 0.25,
      symbol: techSymbols[i % techSymbols.length],
    })), []);

  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-5 md:top-20 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-cyan-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-5 md:bottom-20 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 md:w-64 md:h-64 bg-cyan-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {floatingElements.map((el) => (
        <div
          key={el.id}
          className="absolute animate-tech-float pointer-events-none"
          style={{
            left: el.left,
            animationDelay: el.delay,
            animationDuration: el.duration,
            fontSize: el.size,
            opacity: el.opacity,
          }}
        >
          <span className="text-cyan-400">{el.symbol}</span>
        </div>
      ))}
      
      <div className="relative samsung-section py-16 sm:py-20 md:py-28 lg:py-36">
        <div className="samsung-container text-center px-4 sm:px-6">
          <div className="w-24 h-0.5 mx-auto mb-6 md:mb-8" style={{ background: 'linear-gradient(90deg, transparent, #06b6d4, transparent)' }}></div>
          
          <p className="text-cyan-400 text-sm sm:text-base md:text-lg font-semibold tracking-widest uppercase mb-3 animate-tech-pulse">
            NEXT-GEN TECH FINANCING
          </p>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-wide leading-tight">
            <span className="text-white">BUY NOW.</span>{' '}
            <span className="text-cyan-400">PAY LATER.</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-cyan-400/80 mb-2 font-medium tracking-widest uppercase">
            Powered by FNB
          </p>
          
          <div className="w-24 h-0.5 mx-auto my-6 md:my-8" style={{ background: 'linear-gradient(90deg, transparent, #06b6d4, transparent)' }}></div>
          
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 mb-3 md:mb-4 max-w-2xl mx-auto leading-relaxed">
            Get the latest tech you want — pay it off in easy monthly installments.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-neutral-400 mb-8 md:mb-10 max-w-xl mx-auto">
            No hidden fees. No stress. Just fast, secure financing.
          </p>
          
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 md:mb-12 max-w-2xl mx-auto">
            <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 animate-glow">
              <span className="text-white font-bold text-[10px] sm:text-xs md:text-sm">✓</span>
            </div>
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base text-left">
              Approval from our partner bank, FNB, takes 3-5 working days.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 sm:gap-4 justify-center max-w-md sm:max-w-lg md:max-w-4xl mx-auto w-full px-4 sm:px-0">
            <Button
              onClick={onBrowsePhones}
              className="w-full bg-cyan-500 text-white hover:bg-cyan-400 px-4 sm:px-8 py-4 h-12 sm:h-auto font-semibold tracking-widest uppercase text-[10px] sm:text-xs transition-all rounded-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
              size="lg"
            >
              Browse Our Collection
            </Button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
              <Button
                onClick={onOpenInstructions}
                className="w-full bg-transparent text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/10 hover:border-cyan-400 px-4 sm:px-8 py-4 h-12 sm:h-auto font-semibold tracking-widest uppercase text-[10px] sm:text-xs transition-all rounded-sm"
                size="lg"
              >
                How to Request Quotes
              </Button>
              <Button
                onClick={() => window.open('https://accessnamibia.com/', '_blank')}
                className="w-full bg-neutral-800 text-neutral-300 border border-neutral-700 hover:bg-neutral-700 hover:text-white px-4 sm:px-8 py-4 h-12 sm:h-auto font-semibold tracking-widest uppercase text-[10px] sm:text-xs transition-all rounded-sm"
                size="lg"
              >
                Visit Our Online Store
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
