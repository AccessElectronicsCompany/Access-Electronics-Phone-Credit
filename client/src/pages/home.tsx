import { useState } from "react";
import HeroSection from "@/components/hero-section";
import QuoteFormModal from "@/components/quote-form-modal";
import CalculatorModal from "@/components/calculator-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, DollarSign, Calendar, CheckCircle } from "lucide-react";

export default function Home() {
  const [selectedPhone, setSelectedPhone] = useState<{
    name: string;
    storage: string;
    price: number;
  } | null>(null);
  
  const [showCalculator, setShowCalculator] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const handleSelectPhone = (name: string, storage: string, price: number) => {
    setSelectedPhone({ name, storage, price });
    setShowQuoteForm(true);
  };

  const handleRequestQuote = (name: string, storage: string, price: number) => {
    setSelectedPhone({ name, storage, price });
    setShowQuoteForm(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-black sticky top-0 z-50">
        <div className="samsung-container">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-3xl samsung-header tracking-widest">
                ACCESS ELECTRONICS
              </h1>
            </div>
            <nav className="hidden md:flex space-x-12">
              <button
                onClick={() => window.location.href = '/phones'}
                className="samsung-text hover:text-black transition-colors font-medium tracking-wide uppercase text-sm"
              >
                Select Phone
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className="samsung-text hover:text-black transition-colors font-medium tracking-wide uppercase text-sm"
              >
                Calculator
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection 
        onBrowsePhones={() => scrollToSection('iphones')}
        onOpenCalculator={() => setShowCalculator(true)}
      />

      {/* Credit Info Section */}
      <section className="samsung-section bg-white">
        <div className="samsung-container">
          <div className="text-center mb-16">
            <h3 className="text-4xl samsung-header mb-6">FLEXIBLE CREDIT OPTIONS</h3>
            <p className="samsung-text max-w-2xl mx-auto text-lg">Choose from multiple payment plans with competitive rates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="samsung-card text-center p-8">
              <CardContent className="pt-6">
                <div className="text-6xl font-bold samsung-text mb-4">12</div>
                <div className="text-xl font-semibold samsung-text mb-4 tracking-wide">MONTHS</div>
                <div className="samsung-text opacity-70">Higher monthly payments, less interest</div>
              </CardContent>
            </Card>
            <Card className="samsung-card text-center p-8">
              <CardContent className="pt-6">
                <div className="text-6xl font-bold samsung-text mb-4">24</div>
                <div className="text-xl font-semibold samsung-text mb-4 tracking-wide">MONTHS</div>
                <div className="samsung-text opacity-70">Balanced payment option</div>
              </CardContent>
            </Card>
            <Card className="samsung-card text-center p-8">
              <CardContent className="pt-6">
                <div className="text-6xl font-bold samsung-text mb-4">36</div>
                <div className="text-xl font-semibold samsung-text mb-4 tracking-wide">MONTHS</div>
                <div className="samsung-text opacity-70">Lower monthly payments</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Calculator Section */}
      <section id="calculator" className="samsung-section bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl samsung-header mb-6">PAYMENT CALCULATOR</h3>
            <p className="samsung-text text-lg">Calculate your monthly payments with our flexible credit options</p>
          </div>
          <CalculatorModal 
            isOpen={true}
            onClose={() => {}}
            selectedPrice={undefined}
            isEmbedded={true}
          />
        </div>
      </section>

      {/* Phone Collections Navigation */}
      <section className="samsung-section bg-white">
        <div className="samsung-container">
          <div className="text-center mb-16">
            <h3 className="text-4xl samsung-header mb-6">BROWSE OUR COLLECTIONS</h3>
            <p className="samsung-text text-lg">Discover premium smartphones available on credit</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-12 border-2 border-black hover:bg-black hover:text-white transition-all cursor-pointer"
                  onClick={() => window.location.href = '/phones'}>
              <CardContent className="pt-6">
                <div className="text-6xl mb-6">📱</div>
                <h4 className="text-xl font-semibold mb-4 tracking-wide">SELECT PHONE</h4>
                <p className="text-sm opacity-80">Choose from our premium smartphone collection</p>
              </CardContent>
            </Card>
            <Card className="text-center p-12 border-2 border-black hover:bg-black hover:text-white transition-all cursor-pointer"
                  onClick={() => scrollToSection('calculator')}>
              <CardContent className="pt-6">
                <div className="text-6xl mb-6">🧮</div>
                <h4 className="text-xl font-semibold mb-4 tracking-wide">CALCULATOR</h4>
                <p className="text-sm opacity-80">Calculate your monthly payments instantly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Calculator Modal */}
      <CalculatorModal 
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
        selectedPrice={selectedPhone?.price}
      />

      {/* Quote Form Modal */}
      <QuoteFormModal
        isOpen={showQuoteForm}
        onClose={() => setShowQuoteForm(false)}
        selectedPhone={selectedPhone}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-xl mb-4 gradient-text">Access Electronics</h4>
              <p className="text-gray-400">Your trusted partner for premium phones on credit.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('iphones')} className="hover:text-white transition-colors">iPhones</button></li>
                <li><button onClick={() => scrollToSection('samsung')} className="hover:text-white transition-colors">Samsung</button></li>
                <li><button onClick={() => scrollToSection('used')} className="hover:text-white transition-colors">Used Phones</button></li>
                <li><button onClick={() => setShowCalculator(true)} className="hover:text-white transition-colors">Calculator</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="text-gray-400 space-y-2">
                <p>📞 +264 XX XXX XXXX</p>
                <p>✉️ info@access-electronics.com</p>
                <p>📍 Windhoek, Namibia</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Access Electronics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
