import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Menu, X } from "lucide-react";
import { gamingSound, gamingCombos } from "@/lib/phone-data";
import QuoteFormModal from "@/components/quote-form-modal";
import CalculatorModal from "@/components/calculator-modal";
import CartButton from "@/components/cart-button";
import CartModal from "@/components/cart-modal";
import { useCart } from "@/contexts/CartContext";

export default function GamingSound() {
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
  const [comboFilter, setComboFilter] = useState<string>("all");
  const { addToCart } = useCart();

  const comboCategories = ["all", "PS5 Pro", "PS5 Disc", "PS5 Digital", "Xbox"];
  const activeCombos = gamingCombos.filter(c => new Date(c.validUntil) >= new Date());
  const filteredCombos = comboFilter === "all" ? activeCombos : activeCombos.filter(c => c.category === comboFilter);

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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-rose-400 sticky top-0 z-50 animate-in slide-in-from-top duration-1000">
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
              <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl samsung-header tracking-widest animate-in fade-in duration-1000 delay-500">
                  GAMING & SOUND
                </h1>
                <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>
              </div>
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

      {/* Valentine's Banner */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600 overflow-hidden">
        <div className="animate-banner-scroll whitespace-nowrap py-2">
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; VALENTINE'S SPECIALS - VALID UNTIL 28 FEB 2026 &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; GAMING COMBO DEALS - BUNDLE & SAVE &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; BUY NOW, PAY LATER WITH EASY CREDIT &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; VALENTINE'S SPECIALS - VALID UNTIL 28 FEB 2026 &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; GAMING COMBO DEALS - BUNDLE & SAVE &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; BUY NOW, PAY LATER WITH EASY CREDIT &#10084;</span>
        </div>
      </div>

      {/* Gaming Combo Valentine Specials */}
      {activeCombos.length > 0 && (
        <section className="samsung-section bg-neutral-900">
          <div className="samsung-container">
            <div className="text-center mb-10 animate-in slide-in-from-bottom duration-1000">
              <div className="inline-block mb-4">
                <span className="bg-rose-500 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
                  Valid until 28 Feb 2026
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-wide">
                GAMING COMBO SPECIALS
              </h2>
              <p className="text-rose-300 text-base sm:text-lg">
                Save big with our Valentine's combo deals - bundle & save!
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
              {comboCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setComboFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-300 ${
                    comboFilter === cat
                      ? "bg-rose-500 text-white"
                      : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                  }`}
                >
                  {cat === "all" ? "All Combos" : cat}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
              {filteredCombos.map((combo, index) => (
                <Card
                  key={combo.id}
                  className="bg-neutral-800 border-neutral-700 hover:border-rose-500 hover:scale-[1.02] transition-all duration-300 animate-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-rose-400 text-[10px] sm:text-xs font-bold tracking-widest">{combo.id}</span>
                      <span className="bg-rose-500/20 text-rose-400 text-[10px] font-bold px-2 py-0.5 rounded-full">COMBO DEAL</span>
                    </div>
                    <div className="text-3xl mb-3">🎮</div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{combo.name}</h3>
                    <p className="text-neutral-400 text-xs sm:text-sm mb-4 leading-relaxed">{combo.description}</p>
                    <div className="text-2xl sm:text-3xl font-bold text-rose-400 mb-5">
                      N${combo.price.toLocaleString()}
                    </div>
                    <div className="space-y-2">
                      <Button
                        onClick={() => handleSelectDevice(combo.description, "", combo.price, ["Standard"])}
                        className="bg-rose-500 text-white hover:bg-rose-400 w-full transition-all duration-300 border-0 rounded-sm font-medium tracking-widest uppercase text-xs py-3"
                      >
                        Request Quote
                      </Button>
                      <Button
                        onClick={() => handleAddToCart(combo.description, "", combo.price, "Standard")}
                        variant="outline"
                        className="w-full border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all duration-300 rounded-sm"
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
      )}

      {/* Gaming & Sound Collection */}
      <section className="samsung-section bg-white">
        <div className="samsung-container">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-4xl samsung-header mb-6">GAMING & SOUND COLLECTION</h2>
            <p className="samsung-text text-lg">Explore our premium gaming consoles, audio equipment, and accessories</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {gamingSound.map((device, index) => {
              const getIcon = (name: string) => {
                if (name.toLowerCase().includes('playstation') || name.toLowerCase().includes('dualsense') || name.toLowerCase().includes('ps5')) return '🎮';
                if (name.toLowerCase().includes('speaker') || name.toLowerCase().includes('flip') || name.toLowerCase().includes('charge') || name.toLowerCase().includes('clip') || name.toLowerCase().includes('onyx')) return '🔊';
                if (name.toLowerCase().includes('headset') || name.toLowerCase().includes('headphone') || name.toLowerCase().includes('tune') || name.toLowerCase().includes('live') || name.toLowerCase().includes('pulse')) return '🎧';
                if (name.toLowerCase().includes('earbuds') || name.toLowerCase().includes('explore')) return '🎵';
                return '🎮';
              };

              return (
                <Card key={index} className="samsung-card hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom duration-1000" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-4">{getIcon(device.name)}</div>
                      <h3 className="text-xl font-bold samsung-header mb-2">{device.name}</h3>
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
                        className="bg-rose-500 text-white hover:bg-rose-400 w-full transition-all duration-300 border-0 rounded-sm font-medium tracking-widest uppercase text-xs py-3 px-6"
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
              );
            })}
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
