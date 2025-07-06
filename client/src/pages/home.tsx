import { useState } from "react";
import HeroSection from "@/components/hero-section";
import PhoneSection from "@/components/phone-section";
import QuoteForm from "@/components/quote-form";
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

  const handleSelectPhone = (name: string, storage: string, price: number) => {
    setSelectedPhone({ name, storage, price });
    // Scroll to quote form
    setTimeout(() => {
      const quoteForm = document.getElementById('quote-form');
      if (quoteForm) {
        quoteForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
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
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold gradient-text">
                Access Electronics
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('iphones')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                iPhones
              </button>
              <button
                onClick={() => scrollToSection('samsung')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Samsung
              </button>
              <button
                onClick={() => scrollToSection('used')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Used Phones
              </button>
              <button
                onClick={() => setShowCalculator(true)}
                className="text-gray-700 hover:text-blue-600 transition-colors"
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Flexible Credit Options</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from multiple payment plans with competitive rates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 gradient-border-light hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold gradient-text mb-2">12</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Months</div>
                <div className="text-gray-600">Higher monthly payments, less interest</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 gradient-border-light hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold gradient-text mb-2">24</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Months</div>
                <div className="text-gray-600">Balanced payment option</div>
              </CardContent>
            </Card>
            <Card className="text-center p-6 gradient-border-light hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold gradient-text mb-2">36</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Months</div>
                <div className="text-gray-600">Lower monthly payments</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Phone Sections */}
      <PhoneSection
        type="iphone"
        title="iPhone Collection"
        description="Premium Apple devices with cutting-edge technology"
        onSelectPhone={handleSelectPhone}
      />

      <PhoneSection
        type="samsung"
        title="Samsung Collection"
        description="Innovation meets performance in Samsung's flagship devices"
        onSelectPhone={handleSelectPhone}
      />

      {/* Used Phones Section */}
      <section id="used" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Used Phones</h3>
            <p className="text-gray-600">Quality pre-owned devices at great prices</p>
          </div>
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔧</div>
            <p className="text-xl text-gray-600 mb-4">Coming Soon</p>
            <p className="text-gray-500">We're preparing an amazing selection of quality used phones</p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <QuoteForm selectedPhone={selectedPhone} />

      {/* Calculator Modal */}
      <CalculatorModal 
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
        selectedPrice={selectedPhone?.price}
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
