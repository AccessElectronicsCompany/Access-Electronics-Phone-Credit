import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBrowsePhones: () => void;
  onOpenCalculator: () => void;
  onOpenInstructions: () => void;
}

export default function HeroSection({ onBrowsePhones, onOpenCalculator, onOpenInstructions }: HeroSectionProps) {
  return (
    <section className="relative bg-neutral-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-600/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative samsung-section py-28 md:py-36">
        <div className="samsung-container text-center">
          <div className="luxury-divider mb-8"></div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8 tracking-wide" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            <span className="text-white">BUY NOW.</span>{' '}
            <span className="text-amber-400">PAY LATER.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-amber-400/80 mb-2 font-medium tracking-widest uppercase">
            Powered by FNB
          </p>
          
          <div className="luxury-divider my-8"></div>
          
          <p className="text-base md:text-lg text-neutral-300 mb-4 max-w-2xl mx-auto leading-relaxed px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            Get the phone you need today and pay it off in easy monthly installments.
          </p>
          <p className="text-sm md:text-base text-neutral-400 mb-10 max-w-xl mx-auto px-4" style={{ fontFamily: "'Inter', sans-serif" }}>
            No hidden fees. No stress. Just fast, secure financing.
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-12 max-w-2xl mx-auto px-4">
            <div className="w-6 h-6 md:w-7 md:h-7 bg-amber-500 rounded-full flex items-center justify-center animate-glow">
              <span className="text-neutral-900 font-bold text-xs md:text-sm">✓</span>
            </div>
            <p className="text-neutral-300 text-sm md:text-base" style={{ fontFamily: "'Inter', sans-serif" }}>
              Approval from our partner bank, FNB, takes only 48 hours.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto px-4">
            <Button
              onClick={onBrowsePhones}
              className="bg-amber-500 text-neutral-900 hover:bg-amber-400 px-8 py-4 font-semibold tracking-widest uppercase text-xs transition-all rounded-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30"
              size="lg"
            >
              Select Phone Brand
            </Button>
            <Button
              onClick={onOpenInstructions}
              className="bg-transparent text-amber-400 border border-amber-500/50 hover:bg-amber-500/10 hover:border-amber-400 px-8 py-4 font-semibold tracking-widest uppercase text-xs transition-all rounded-sm"
              size="lg"
            >
              How to Request Quotes
            </Button>
            <Button
              onClick={() => window.open('https://accessnamibia.com/', '_blank')}
              className="bg-neutral-800 text-neutral-300 border border-neutral-700 hover:bg-neutral-700 hover:text-white px-8 py-4 font-semibold tracking-widest uppercase text-xs transition-all rounded-sm"
              size="lg"
            >
              Visit Our Online Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
