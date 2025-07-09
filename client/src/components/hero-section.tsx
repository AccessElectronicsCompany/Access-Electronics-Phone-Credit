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
          GET YOUR DREAM PHONE TODAY
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Buy premium smartphones on credit with flexible payment plans. 
          No upfront payment required - start with just a quote request.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            onClick={onBrowsePhones}
            className="bg-white text-black hover:bg-gray-200 px-12 py-4 font-semibold tracking-wide uppercase text-sm transition-all"
            size="lg"
          >
            Browse Phones
          </Button>
          <Button
            onClick={onOpenCalculator}
            className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black px-12 py-4 font-semibold tracking-wide uppercase text-sm transition-all"
            size="lg"
          >
            Calculate Payments
          </Button>
        </div>
      </div>
    </section>
  );
}
