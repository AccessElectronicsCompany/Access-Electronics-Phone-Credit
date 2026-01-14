import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu, X } from "lucide-react";
import { samsungTablets } from "@/lib/phone-data";
import QuoteFormModal from "@/components/quote-form-modal";
import CalculatorModal from "@/components/calculator-modal";
import CartButton from "@/components/cart-button";
import CartModal from "@/components/cart-modal";
import { useCart } from "@/contexts/CartContext";

export default function Tablets() {
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
                TABLETS
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

      {/* Tablets Collection */}
      <section className="samsung-section bg-white">
        <div className="samsung-container">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-4xl samsung-header mb-6">TABLETS COLLECTION</h2>
            <p className="samsung-text text-lg">Choose from our premium Samsung tablet selection</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {samsungTablets.map((device, index) => (
              <Card key={index} className="samsung-card hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom duration-1000" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-4">📱</div>
                    <h3 className="text-xl font-bold samsung-header mb-2">{device.name}</h3>
                    {device.storage && (
                      <p className="text-sm samsung-text opacity-70 mb-1">{device.storage}</p>
                    )}
                    {device.specs && (
                      <p className="text-xs samsung-text opacity-60 mb-4">{device.specs}</p>
                    )}
                    <div className="text-2xl font-bold samsung-text mb-4">
                      N${device.price.toLocaleString()}
                    </div>
                    <div className="text-sm samsung-text opacity-70 mb-4">
                      Available Colors: {device.colors.join(", ")}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button
                      onClick={() => handleSelectDevice(device.name, device.storage || "", device.price, device.colors)}
                      className="samsung-btn w-full"
                    >
                      Request Quote
                    </Button>
                    <Button
                      onClick={() => handleAddToCart(device.name, device.storage || "", device.price, device.colors[0])}
                      variant="outline"
                      className="w-full border-black hover:bg-black hover:text-white transition-all duration-300"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
          setSelectedDevice(null); // Clear selected device so quote form uses cart items
          setShowCart(false);
          setShowQuoteForm(true);
        }}
      />
    </div>
  );
}