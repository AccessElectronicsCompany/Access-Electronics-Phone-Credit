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
                onClick={() => window.location.href = '/phones'}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Browse Phones
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
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

      {/* Payment Calculator Section */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Payment Calculator</h3>
            <p className="text-gray-600">Calculate your monthly payments with our flexible credit options</p>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Browse Our Collections</h3>
            <p className="text-gray-600">Discover premium smartphones available on credit</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 gradient-border-light hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => window.location.href = '/phones'}>
              <CardContent className="pt-6">
                <div className="text-6xl mb-4">📱</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Browse Phones</h4>
                <p className="text-gray-600">Explore our complete collection of smartphones</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 gradient-border-light hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => scrollToSection('calculator')}>
              <CardContent className="pt-6">
                <div className="text-6xl mb-4">🧮</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Calculator</h4>
                <p className="text-gray-600">Calculate your monthly payments instantly</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 gradient-border-light hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => scrollToSection('used')}>
              <CardContent className="pt-6">
                <div className="text-6xl mb-4">🔧</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Used Phones</h4>
                <p className="text-gray-600">Quality pre-owned devices at great prices</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Placeholder sections for navigation - no phone listings */}
      <section id="iphones" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">iPhone Collection</h3>
            <p className="text-gray-600 mb-8">Premium Apple devices with cutting-edge technology</p>
            <div className="text-6xl mb-4">📱</div>
            <p className="text-xl text-gray-600 mb-4">Coming Soon</p>
            <p className="text-gray-500">Browse our premium iPhone collection</p>
          </div>
        </div>
      </section>

      <section id="samsung" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Samsung Collection</h3>
            <p className="text-gray-600 mb-8">Innovation meets performance in Samsung's flagship devices</p>
            <div className="text-6xl mb-4">📱</div>
            <p className="text-xl text-gray-600 mb-4">Coming Soon</p>
            <p className="text-gray-500">Explore our Samsung smartphone range</p>
          </div>
        </div>
      </section>

      <section id="used" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Used Phones</h3>
            <p className="text-gray-600 mb-8">Quality pre-owned devices at great prices</p>
            <div className="text-6xl mb-4">🔧</div>
            <p className="text-xl text-gray-600 mb-4">Coming Soon</p>
            <p className="text-gray-500">We're preparing an amazing selection of quality used phones</p>
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
