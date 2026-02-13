import { useState } from "react";
import HeroSection from "@/components/hero-section";
import QuoteFormModal from "@/components/quote-form-modal";
import CalculatorModal from "@/components/calculator-modal";
import QuoteInstructionsModal from "@/components/quote-instructions-modal";
import CartButton from "@/components/cart-button";
import CartModal from "@/components/cart-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, DollarSign, Calendar, CheckCircle, Menu, X, Tablet } from "lucide-react";
import logoUrl from "@/assets/logo.png";

export default function Home() {
  const [selectedPhone, setSelectedPhone] = useState<{
    name: string;
    storage: string;
    price: number;
  } | null>(null);
  
  const [showCalculator, setShowCalculator] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

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
      <header className="bg-neutral-900 border-b border-rose-500/30 sticky top-0 z-50 animate-in slide-in-from-top duration-1000">
        <div className="samsung-container">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center ml-4">
              <a href="/" className="animate-in fade-in duration-1000 delay-500">
                <img 
                  src={logoUrl} 
                  alt="Access Electronics" 
                  className="h-20 sm:h-24 md:h-28 w-auto"
                />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-5 xl:space-x-7 items-center animate-in slide-in-from-right duration-1000 delay-700">
              <button
                onClick={() => window.location.href = '/phones'}
                className="text-neutral-300 hover:text-rose-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Phones
              </button>
              <button
                onClick={() => window.location.href = '/ipads'}
                className="text-neutral-300 hover:text-rose-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                iPads
              </button>
              <button
                onClick={() => window.location.href = '/macbooks'}
                className="text-neutral-300 hover:text-rose-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                MacBooks
              </button>
              <button
                onClick={() => window.location.href = '/buds'}
                className="text-neutral-300 hover:text-rose-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Buds
              </button>
              <button
                onClick={() => window.location.href = '/watches'}
                className="text-neutral-300 hover:text-rose-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Watches
              </button>
              <button
                onClick={() => window.location.href = '/tablets'}
                className="text-neutral-300 hover:text-rose-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Tablets
              </button>
              <button
                onClick={() => window.location.href = '/gaming-sound'}
                className="text-neutral-300 hover:text-rose-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Gaming & Sound
              </button>
              <button
                onClick={() => window.location.href = '/gaming-combo'}
                className="text-neutral-300 hover:text-rose-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Gaming Combo
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className="text-neutral-300 hover:text-rose-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Calculator
              </button>
              <button
                onClick={() => window.location.href = '/terms'}
                className="text-neutral-300 hover:text-rose-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Terms
              </button>
              <CartButton onClick={() => setShowCart(true)} />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 text-rose-400 hover:text-rose-300 transition-colors"
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="lg:hidden bg-neutral-900 border-t border-rose-500/20">
              <nav className="py-4 space-y-1">
                <button
                  onClick={() => {
                    window.location.href = '/phones';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-rose-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Phones
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/ipads';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-rose-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  iPads
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/macbooks';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-rose-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  MacBooks
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/buds';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-rose-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Buds
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/watches';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-rose-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Watches
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/tablets';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-rose-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Tablets
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/gaming-sound';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-rose-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Gaming & Sound
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/gaming-combo';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-rose-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Gaming Combo
                </button>
                <button
                  onClick={() => {
                    scrollToSection('calculator');
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-rose-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Calculator
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/terms';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-rose-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Terms & Conditions
                </button>
                <div className="px-6 py-3">
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
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; TREAT YOUR LOVED ONE TO A NEW DEVICE &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; BUY NOW, PAY LATER WITH EASY CREDIT &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; VALENTINE'S SPECIALS - VALID UNTIL 28 FEB 2026 &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; TREAT YOUR LOVED ONE TO A NEW DEVICE &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; BUY NOW, PAY LATER WITH EASY CREDIT &#10084;</span>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection 
        onBrowsePhones={() => window.location.href = '/phones'}
        onOpenCalculator={() => setShowCalculator(true)}
        onOpenInstructions={() => setShowInstructions(true)}
      />

      {/* Credit Info Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="samsung-container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in slide-in-from-bottom duration-1000">
            <div className="luxury-divider mb-4 sm:mb-6"></div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl samsung-header mb-3 sm:mb-4">FLEXIBLE CREDIT OPTIONS</h3>
            <p className="samsung-text max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-600">Choose from multiple payment plans with competitive rates</p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border border-neutral-200 text-center p-3 sm:p-5 md:p-8 animate-in slide-in-from-left duration-1000 delay-300 hover:border-rose-400 transition-all duration-500 rounded-sm group active:scale-[0.98]" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
              <CardContent className="p-0 sm:pt-4">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">12</div>
                <div className="text-[10px] sm:text-xs font-medium text-neutral-500 mb-2 sm:mb-4 tracking-widest uppercase">Months</div>
                <div className="luxury-divider my-2 sm:my-4 hidden sm:block"></div>
                <p className="text-neutral-600 text-[10px] sm:text-sm hidden sm:block">Higher monthly payments,</p>
                <p className="text-neutral-600 text-[10px] sm:text-sm hidden sm:block">less interest</p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-900 border border-rose-500/30 text-center p-3 sm:p-5 md:p-8 animate-in slide-in-from-bottom duration-1000 delay-500 hover:border-rose-400 transition-all duration-500 rounded-sm group active:scale-[0.98]" style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.15)' }}>
              <CardContent className="p-0 sm:pt-4">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-400 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">24</div>
                <div className="text-[10px] sm:text-xs font-medium text-rose-400/70 mb-2 sm:mb-4 tracking-widest uppercase">Months</div>
                <div className="w-12 sm:w-16 h-0.5 mx-auto my-2 sm:my-4 bg-gradient-to-r from-transparent via-rose-500 to-transparent hidden sm:block"></div>
                <p className="text-neutral-400 text-[10px] sm:text-sm hidden sm:block">Balanced</p>
                <p className="text-neutral-400 text-[10px] sm:text-sm hidden sm:block">payment option</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-neutral-200 text-center p-3 sm:p-5 md:p-8 animate-in slide-in-from-right duration-1000 delay-700 hover:border-rose-400 transition-all duration-500 rounded-sm group active:scale-[0.98]" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
              <CardContent className="p-0 sm:pt-4">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-rose-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">36</div>
                <div className="text-[10px] sm:text-xs font-medium text-neutral-500 mb-2 sm:mb-4 tracking-widest uppercase">Months</div>
                <div className="luxury-divider my-2 sm:my-4 hidden sm:block"></div>
                <p className="text-neutral-600 text-[10px] sm:text-sm hidden sm:block">Lower</p>
                <p className="text-neutral-600 text-[10px] sm:text-sm hidden sm:block">monthly payments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Calculator Section */}
      <section id="calculator" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-in slide-in-from-top duration-1000">
            <div className="luxury-divider mb-4 sm:mb-6"></div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">PAYMENT CALCULATOR</h3>
            <p className="text-neutral-600 text-sm sm:text-base md:text-lg">Calculate your monthly payments with our flexible credit options</p>
          </div>
          <div className="animate-in fade-in duration-1000 delay-500">
            <CalculatorModal 
              isOpen={true}
              onClose={() => {}}
              selectedPrice={undefined}
              isEmbedded={true}
            />
          </div>
        </div>
      </section>

      {/* Device Categories Navigation */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900">
        <div className="samsung-container">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-in slide-in-from-bottom duration-1000">
            <div className="luxury-divider mb-4 sm:mb-6"></div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4">CHOOSE YOUR DEVICE</h3>
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg">Select from our premium device categories</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-3 sm:p-4 md:p-6 bg-neutral-800/50 border border-neutral-700 hover:border-rose-400 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm group active:scale-[0.98]"
                  onClick={() => window.location.href = '/phones'}>
              <CardContent className="p-0 pt-2 sm:pt-4">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 tracking-wider text-white group-hover:text-rose-400 transition-colors">PHONES</h4>
                <p className="text-[10px] sm:text-xs text-neutral-400 hidden sm:block">iPhones, Samsung & more</p>
              </CardContent>
            </Card>
            <Card className="text-center p-3 sm:p-4 md:p-6 bg-neutral-800/50 border border-neutral-700 hover:border-rose-400 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm group active:scale-[0.98]"
                  onClick={() => window.location.href = '/ipads'}>
              <CardContent className="p-0 pt-2 sm:pt-4">
                <div className="mb-2 sm:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <Tablet size={24} className="sm:w-8 sm:h-8 text-white group-hover:text-rose-400 transition-colors" />
                </div>
                <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 tracking-wider text-white group-hover:text-rose-400 transition-colors">IPADS</h4>
                <p className="text-[10px] sm:text-xs text-neutral-400 hidden sm:block">iPad Pro, Air & more</p>
              </CardContent>
            </Card>
            <Card className="text-center p-3 sm:p-4 md:p-6 bg-neutral-800/50 border border-neutral-700 hover:border-rose-400 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm group active:scale-[0.98]"
                  onClick={() => window.location.href = '/macbooks'}>
              <CardContent className="p-0 pt-2 sm:pt-4">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
                <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 tracking-wider text-white group-hover:text-rose-400 transition-colors">MACBOOKS</h4>
                <p className="text-[10px] sm:text-xs text-neutral-400 hidden sm:block">MacBook Pro & Air</p>
              </CardContent>
            </Card>
            <Card className="text-center p-3 sm:p-4 md:p-6 bg-neutral-800/50 border border-neutral-700 hover:border-rose-400 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm group active:scale-[0.98]"
                  onClick={() => window.location.href = '/buds'}>
              <CardContent className="p-0 pt-2 sm:pt-4">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">🎧</div>
                <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 tracking-wider text-white group-hover:text-rose-400 transition-colors">BUDS</h4>
                <p className="text-[10px] sm:text-xs text-neutral-400 hidden sm:block">AirPods & Galaxy Buds</p>
              </CardContent>
            </Card>
            <Card className="text-center p-3 sm:p-4 md:p-6 bg-neutral-800/50 border border-neutral-700 hover:border-rose-400 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm group active:scale-[0.98]"
                  onClick={() => window.location.href = '/watches'}>
              <CardContent className="p-0 pt-2 sm:pt-4">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">⌚</div>
                <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 tracking-wider text-white group-hover:text-rose-400 transition-colors">WATCHES</h4>
                <p className="text-[10px] sm:text-xs text-neutral-400 hidden sm:block">Apple & Galaxy Watch</p>
              </CardContent>
            </Card>
            <Card className="text-center p-3 sm:p-4 md:p-6 bg-neutral-800/50 border border-neutral-700 hover:border-rose-400 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm group active:scale-[0.98]"
                  onClick={() => window.location.href = '/tablets'}>
              <CardContent className="p-0 pt-2 sm:pt-4">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 tracking-wider text-white group-hover:text-rose-400 transition-colors">TABLETS</h4>
                <p className="text-[10px] sm:text-xs text-neutral-400 hidden sm:block">Samsung Galaxy Tabs</p>
              </CardContent>
            </Card>
            <Card className="text-center p-3 sm:p-4 md:p-6 bg-neutral-800/50 border border-neutral-700 hover:border-rose-400 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm group active:scale-[0.98]"
                  onClick={() => window.location.href = '/gaming-sound'}>
              <CardContent className="p-0 pt-2 sm:pt-4">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">🎮</div>
                <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 tracking-wider text-white group-hover:text-rose-400 transition-colors">GAMING</h4>
                <p className="text-[10px] sm:text-xs text-neutral-400 hidden sm:block">PS5, JBL & more</p>
              </CardContent>
            </Card>
            <Card className="text-center p-3 sm:p-4 md:p-6 bg-rose-500/20 border border-rose-500/50 hover:border-rose-400 hover:bg-rose-500/30 transition-all duration-500 cursor-pointer rounded-sm group active:scale-[0.98]"
                  onClick={() => scrollToSection('calculator')}>
              <CardContent className="p-0 pt-2 sm:pt-4">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">🧮</div>
                <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 tracking-wider text-rose-400">CALC</h4>
                <p className="text-[10px] sm:text-xs text-rose-400/70 hidden sm:block">Monthly payments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Looking for Device Not Listed Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="samsung-container">
          <Card className="max-w-5xl mx-auto p-5 sm:p-8 md:p-10 bg-white border border-neutral-200 rounded-sm animate-in slide-in-from-bottom duration-1000" style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.06)' }}>
            <CardContent className="text-center p-0">
              <div className="luxury-divider mb-4 sm:mb-6"></div>
              <h3 className="text-lg sm:text-2xl md:text-3xl mb-4 sm:mb-6 animate-in fade-in duration-1000 delay-300">
                Looking for a Device on Credit That's Not Listed?
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 mb-3 sm:mb-4 max-w-3xl mx-auto animate-in slide-in-from-left duration-1000 delay-500">
                If you're interested in buying a phone, iPad, tablet, or MacBook on credit that isn't listed here, we're happy to help!
              </p>
              <p className="text-sm sm:text-base text-neutral-600 mb-6 sm:mb-8 max-w-3xl mx-auto animate-in slide-in-from-right duration-1000 delay-700">
                Simply email{' '}
                <a 
                  href="mailto:info@accessnamibia.com" 
                  className="text-rose-500 font-semibold hover:text-rose-400 transition-colors"
                >
                  info@accessnamibia.com
                </a>
                {' '}or contact our branches:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-8 mb-6 sm:mb-8">
                <div className="text-center animate-in slide-in-from-bottom duration-1000 delay-700 p-3 sm:p-4 bg-neutral-50 rounded-sm border border-neutral-100 hover:border-rose-400/30 transition-colors active:scale-[0.98]">
                  <h4 className="text-sm sm:text-lg font-semibold text-neutral-900 mb-1 sm:mb-2">Windhoek</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm">081 162 6462 / 081 495 2277</p>
                </div>
                <div className="text-center animate-in slide-in-from-bottom duration-1000 delay-900 p-3 sm:p-4 bg-neutral-50 rounded-sm border border-neutral-100 hover:border-rose-400/30 transition-colors active:scale-[0.98]">
                  <h4 className="text-sm sm:text-lg font-semibold text-neutral-900 mb-1 sm:mb-2">Oshakati</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm">081 860 1188</p>
                </div>
                <div className="text-center animate-in slide-in-from-bottom duration-1000 delay-1000 p-3 sm:p-4 bg-neutral-50 rounded-sm border border-neutral-100 hover:border-rose-400/30 transition-colors active:scale-[0.98]">
                  <h4 className="text-sm sm:text-lg font-semibold text-neutral-900 mb-1 sm:mb-2">Walvis Bay</h4>
                  <p className="text-neutral-600 text-xs sm:text-sm">081 670 5032</p>
                </div>
              </div>

              <p className="text-neutral-500 text-xs sm:text-sm animate-in fade-in duration-1000 delay-1200">
                Our sales team will gladly assist you in getting a customized quote.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Credit Application Requirements Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-neutral-900">
        <div className="samsung-container">
          <Card className="max-w-4xl mx-auto p-5 sm:p-8 md:p-10 bg-neutral-800 border border-neutral-700 rounded-sm animate-in slide-in-from-top duration-1000">
            <CardContent className="p-0">
              <div className="luxury-divider mb-4 sm:mb-6"></div>
              <h3 className="text-lg sm:text-2xl md:text-3xl text-white mb-5 sm:mb-8 text-center animate-in fade-in duration-1000 delay-300">
                Requirements for a Credit Application
              </h3>
              
              <div className="space-y-2 sm:space-y-4 mb-5 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4 animate-in slide-in-from-left duration-1000 delay-500 p-2 sm:p-3 bg-neutral-700/30 rounded-sm border-l-2 border-rose-500">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-500 rounded-full flex-shrink-0"></div>
                  <p className="text-neutral-300 text-xs sm:text-base">Latest Payslip</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 animate-in slide-in-from-left duration-1000 delay-600 p-2 sm:p-3 bg-neutral-700/30 rounded-sm border-l-2 border-rose-500">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-500 rounded-full flex-shrink-0"></div>
                  <p className="text-neutral-300 text-xs sm:text-base">Employment Confirmation Letter</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 animate-in slide-in-from-left duration-1000 delay-700 p-2 sm:p-3 bg-neutral-700/30 rounded-sm border-l-2 border-rose-500">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-500 rounded-full flex-shrink-0"></div>
                  <p className="text-neutral-300 text-xs sm:text-base">Copy of ID</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 animate-in slide-in-from-left duration-1000 delay-800 p-2 sm:p-3 bg-neutral-700/30 rounded-sm border-l-2 border-rose-500">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-500 rounded-full flex-shrink-0"></div>
                  <p className="text-neutral-300 text-xs sm:text-base">Quotation (provided after quote request)</p>
                </div>
              </div>

              <div className="border-t border-neutral-700 pt-4 sm:pt-6">
                <h4 className="text-sm sm:text-lg text-rose-400 mb-3 sm:mb-4">
                  Once you've gathered all documents:
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-neutral-400 text-xs sm:text-base">Submit at your nearest FNB branch, or</p>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <p className="text-neutral-400 text-xs sm:text-base">
                      Email to{' '}
                      <a 
                        href="mailto:credit@accessnamibia.com" 
                        className="text-rose-400 font-medium hover:text-rose-300 transition-colors"
                      >
                        credit@accessnamibia.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="samsung-container">
          <Card className="max-w-4xl mx-auto p-5 sm:p-8 md:p-10 bg-white border border-neutral-200 rounded-sm animate-in slide-in-from-bottom duration-1000" style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.06)' }}>
            <CardContent className="text-center p-0">
              <div className="luxury-divider mb-4 sm:mb-6"></div>
              <h3 className="text-lg sm:text-2xl md:text-3xl text-neutral-900 mb-4 sm:mb-8 animate-in fade-in duration-1000 delay-300">
                Our Promise to You
              </h3>
              
              <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6 max-w-3xl mx-auto animate-in slide-in-from-left duration-1000 delay-500">
                Credit approval takes 3-5 working days after submitting your documents to the bank.
              </p>
              
              <p className="text-neutral-500 text-xs sm:text-sm animate-in slide-in-from-right duration-1000 delay-700">
                Requests submitted outside of these hours will be prioritized the next morning.
              </p>
            </CardContent>
          </Card>
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

      {/* Quote Instructions Modal */}
      <QuoteInstructionsModal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
        onBrowsePhones={() => window.location.href = '/phones'}
      />

      <CartModal
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        onRequestQuote={() => {
          setShowCart(false);
          setShowQuoteForm(true);
        }}
      />

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="samsung-container">
          <div className="luxury-divider mb-8 sm:mb-12"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
            {/* Company Info */}
            <div className="text-center sm:text-left">
              <img 
                src={logoUrl} 
                alt="Access Electronics" 
                className="h-16 sm:h-20 w-auto mb-3 sm:mb-4 mx-auto sm:mx-0"
              />
              <p className="text-neutral-400 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
                Connecting you with the latest technology through flexible financing options.
              </p>
              <div className="flex space-x-3 justify-center sm:justify-start">
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-neutral-800 border border-neutral-700 rounded-sm flex items-center justify-center hover:border-rose-400 hover:bg-neutral-800 transition-all cursor-pointer group active:scale-[0.95]">
                  <span className="text-neutral-400 text-xs sm:text-sm group-hover:text-rose-400 transition-colors">f</span>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-neutral-800 border border-neutral-700 rounded-sm flex items-center justify-center hover:border-rose-400 hover:bg-neutral-800 transition-all cursor-pointer group active:scale-[0.95]">
                  <span className="text-neutral-400 text-xs sm:text-sm group-hover:text-rose-400 transition-colors">t</span>
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 bg-neutral-800 border border-neutral-700 rounded-sm flex items-center justify-center hover:border-rose-400 hover:bg-neutral-800 transition-all cursor-pointer group active:scale-[0.95]">
                  <span className="text-neutral-400 text-xs sm:text-sm group-hover:text-rose-400 transition-colors">@</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 tracking-wider">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3 text-neutral-400 text-xs sm:text-sm">
                <li><a href="/" className="hover:text-rose-400 transition-colors">Home</a></li>
                <li><a href="/phones" className="hover:text-rose-400 transition-colors">Products</a></li>
                <li><button onClick={() => setShowCalculator(true)} className="hover:text-rose-400 transition-colors text-left">Financing</button></li>
                <li><a href="/terms" className="hover:text-rose-400 transition-colors">Terms</a></li>
                <li><a href="https://accessnamibia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors">Online Store</a></li>
              </ul>
            </div>

            {/* Our Branches */}
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 tracking-wider text-center sm:text-left">Our Branches</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-2 sm:gap-3 md:gap-4">
                <div className="p-3 sm:p-4 bg-neutral-800/50 border border-neutral-700/50 rounded-sm hover:border-rose-400/30 transition-colors active:scale-[0.98]">
                  <div className="flex items-center space-x-2 mb-1 sm:mb-2 justify-center sm:justify-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-white font-medium text-xs sm:text-sm">Windhoek</span>
                  </div>
                  <p className="text-neutral-400 text-[10px] sm:text-xs text-center sm:text-left sm:ml-4">
                    +264 814952277
                  </p>
                </div>

                <div className="p-3 sm:p-4 bg-neutral-800/50 border border-neutral-700/50 rounded-sm hover:border-rose-400/30 transition-colors active:scale-[0.98]">
                  <div className="flex items-center space-x-2 mb-1 sm:mb-2 justify-center sm:justify-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-white font-medium text-xs sm:text-sm">Oshakati</span>
                  </div>
                  <p className="text-neutral-400 text-[10px] sm:text-xs text-center sm:text-left sm:ml-4">
                    +264 818601188
                  </p>
                </div>

                <div className="p-3 sm:p-4 bg-neutral-800/50 border border-neutral-700/50 rounded-sm hover:border-rose-400/30 transition-colors active:scale-[0.98]">
                  <div className="flex items-center space-x-2 mb-1 sm:mb-2 justify-center sm:justify-start">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-rose-500 rounded-full"></div>
                    <span className="text-white font-medium text-xs sm:text-sm">Walvis Bay</span>
                  </div>
                  <p className="text-neutral-400 text-[10px] sm:text-xs text-center sm:text-left sm:ml-4">
                    +264 816705032
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-neutral-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-rose-400/60 text-[10px] sm:text-xs tracking-wider mb-2 animate-heart-pulse">
              &#10084; Happy Valentine's Month &#10084;
            </p>
            <p className="text-neutral-500 text-[10px] sm:text-xs tracking-wider">
              © 2025 Access Electronics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
