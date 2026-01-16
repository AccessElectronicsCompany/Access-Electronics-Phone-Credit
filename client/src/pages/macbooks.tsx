import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu, X } from "lucide-react";
import { macbooks } from "@/lib/phone-data";
import QuoteFormModal from "@/components/quote-form-modal";
import CalculatorModal from "@/components/calculator-modal";
import CartButton from "@/components/cart-button";
import CartModal from "@/components/cart-modal";
import DeviceCard from "@/components/device-card";
import { useCart } from "@/contexts/CartContext";

export default function MacBooks() {
  const [selectedDevice, setSelectedDevice] = useState<{
    name: string;
    storage: string;
    price: number;
    colors: string[];
  } | null>(null);
  
  const [showCalculator, setShowCalculator] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { addToCart } = useCart();

  const handleSelectDevice = (name: string, storage: string, price: number, colors: string[]) => {
    setSelectedDevice({ name, storage, price, colors });
    setShowQuoteForm(true);
  };

  const handleAddToCart = (name: string, storage: string, price: number, color: string) => {
    addToCart({
      name,
      storage,
      price,
      color
    });
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
      <header className="bg-white border-b border-black sticky top-0 z-50 animate-in slide-in-from-top duration-1000">
        <div className="samsung-container">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-4 ml-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.location.href = '/'}
                className="flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back to Home</span>
              </Button>
              <h1 className="text-2xl md:text-3xl samsung-header tracking-widest animate-in fade-in duration-1000 delay-500">
                MACBOOKS
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 xl:space-x-12 items-center animate-in slide-in-from-right duration-1000 delay-700">
              <button
                onClick={() => setShowCalculator(true)}
                className="samsung-text hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm whitespace-nowrap hover:scale-105 transform"
              >
                Calculator
              </button>
              <button
                onClick={() => window.location.href = '/terms'}
                className="samsung-text hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm whitespace-nowrap hover:scale-105 transform"
              >
                Terms & Conditions
              </button>
              <CartButton onClick={() => setShowCart(true)} />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 samsung-text hover:text-black transition-colors"
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="lg:hidden bg-white border-t border-black">
              <nav className="py-4 space-y-2">
                <button
                  onClick={() => {
                    setShowCalculator(true);
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 samsung-text hover:bg-gray-50 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  Calculator
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/terms';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 samsung-text hover:bg-gray-50 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  Terms & Conditions
                </button>
                <div className="px-4 py-3">
                  <CartButton onClick={() => {
                    setShowCart(true);
                    setShowMobileMenu(false);
                  }} />
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* MacBook Collection */}
      <section className="samsung-section bg-white">
        <div className="samsung-container">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-4xl samsung-header mb-6">MACBOOK COLLECTION</h2>
            <p className="samsung-text text-lg">Choose from our premium MacBook selection</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-7xl mx-auto">
            {macbooks.map((device, index) => (
              <DeviceCard
                key={index}
                device={device}
                category="macbook"
                onSelect={handleSelectDevice}
                onAddToCart={handleAddToCart}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Modal */}
      <CalculatorModal 
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
        selectedPrice={selectedDevice?.price}
      />

      {/* Quote Form Modal */}
      <QuoteFormModal
        isOpen={showQuoteForm}
        onClose={() => setShowQuoteForm(false)}
        selectedPhone={selectedDevice}
      />

      {/* Cart Modal */}
      <CartModal
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        onRequestQuote={() => {
          setShowCart(false);
          setShowQuoteForm(true);
        }}
      />
    </div>
  );
}