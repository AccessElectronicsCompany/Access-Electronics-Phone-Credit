import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBrowsePhones: () => void;
  onOpenCalculator: () => void;
}

export default function HeroSection({ onBrowsePhones, onOpenCalculator }: HeroSectionProps) {
  return (
    <section className="bg-black text-white samsung-section">
      <div className="samsung-container text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-wider uppercase">
          BUY NOW. PAY LATER. POWERED BY FNB.
        </h2>
        <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
          Get the phone you need today and pay it off in easy monthly installments.
        </p>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          No hidden fees. No stress. Just fast, secure financing.
        </p>
        <div className="flex items-center justify-center gap-3 mb-12 max-w-2xl mx-auto">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">✓</span>
          </div>
          <p className="text-white/90 text-lg">
            Approval from our partner bank, FNB, takes only 48 hours.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            onClick={onBrowsePhones}
            className="bg-white text-black hover:bg-gray-200 px-12 py-4 font-semibold tracking-wide uppercase text-sm transition-all"
            size="lg"
          >
            Select Phone Brand
          </Button>
          <Button
            onClick={onOpenCalculator}
            className="bg-gray-800 text-white hover:bg-gray-700 px-12 py-4 font-semibold tracking-wide uppercase text-sm transition-all"
            size="lg"
          >
            How to Request Quotes
          </Button>
          <Button
            onClick={() => window.open('https://accessnamibia.com/', '_blank')}
            className="bg-blue-600 text-white hover:bg-blue-700 px-12 py-4 font-semibold tracking-wide uppercase text-sm transition-all"
            size="lg"
          >
            Visit Our Online Store
          </Button>
        </div>
      </div>
    </section>
  );
}
