import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onBrowsePhones: () => void;
  onOpenCalculator: () => void;
}

export default function HeroSection({ onBrowsePhones, onOpenCalculator }: HeroSectionProps) {
  return (
    <section className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-samsung">
          Get Your Dream Phone Today
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Buy premium smartphones on credit with flexible payment plans. 
          No upfront payment required - start with just a quote request.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onBrowsePhones}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            size="lg"
          >
            Browse Phones
          </Button>
          <Button
            onClick={onOpenCalculator}
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105"
            size="lg"
          >
            Calculate Payments
          </Button>
        </div>
      </div>
    </section>
  );
}
