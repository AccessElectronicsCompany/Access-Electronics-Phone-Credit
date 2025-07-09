import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBrowsePhones: () => void;
  onOpenCalculator: () => void;
  onOpenInstructions: () => void;
}

export default function HeroSection({ onBrowsePhones, onOpenCalculator, onOpenInstructions }: HeroSectionProps) {
  return (
    <section className="bg-black text-white samsung-section">
      <div className="samsung-container text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 md:mb-8 tracking-wider uppercase animate-pulse">
          BUY NOW. PAY LATER. POWERED BY FNB.
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-4 md:mb-6 max-w-3xl mx-auto leading-relaxed animate-bounce px-4">
          Get the phone you need today and pay it off in easy monthly installments.
        </p>
        <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
          No hidden fees. No stress. Just fast, secure financing.
        </p>
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center animate-ping">
            <span className="text-white font-bold text-xs md:text-sm">✓</span>
          </div>
          <p className="text-white/90 text-sm md:text-lg">
            Approval from our partner bank, FNB, takes only 48 hours.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-5xl mx-auto px-2 md:px-4">
          <Button
            onClick={onBrowsePhones}
            className="bg-white text-black hover:bg-gray-200 px-6 md:px-8 py-3 font-semibold tracking-wide uppercase text-xs md:text-sm transition-all rounded-xl"
            size="lg"
          >
            Select Phone Brand
          </Button>
          <Button
            onClick={onOpenInstructions}
            className="bg-gray-800 text-white hover:bg-gray-700 px-6 md:px-8 py-3 font-semibold tracking-wide uppercase text-xs md:text-sm transition-all rounded-xl"
            size="lg"
          >
            How to Request Quotes
          </Button>
          <Button
            onClick={() => window.open('https://accessnamibia.com/', '_blank')}
            className="bg-blue-600 text-white hover:bg-blue-700 px-6 md:px-8 py-3 font-semibold tracking-wide uppercase text-xs md:text-sm transition-all rounded-xl"
            size="lg"
          >
            Visit Our Online Store
          </Button>
        </div>
      </div>
    </section>
  );
}
