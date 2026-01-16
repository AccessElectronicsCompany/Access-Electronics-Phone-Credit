import { useState } from "react";
import HeroSection from "@/components/hero-section";
import QuoteFormModal from "@/components/quote-form-modal";
import CalculatorModal from "@/components/calculator-modal";
import QuoteInstructionsModal from "@/components/quote-instructions-modal";
import CartButton from "@/components/cart-button";
import CartModal from "@/components/cart-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, DollarSign, Calendar, CheckCircle, Menu, X, Tablet } from "lucide-react";

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
      <header className="bg-neutral-900 border-b border-amber-500/30 sticky top-0 z-50 animate-in slide-in-from-top duration-1000">
        <div className="samsung-container">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center ml-4">
              <h1 className="text-xl md:text-2xl font-semibold tracking-[0.2em] animate-in fade-in duration-1000 delay-500 text-amber-400" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                ACCESS ELECTRONICS
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-5 xl:space-x-7 items-center animate-in slide-in-from-right duration-1000 delay-700">
              <button
                onClick={() => window.location.href = '/phones'}
                className="text-neutral-300 hover:text-amber-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Phones
              </button>
              <button
                onClick={() => window.location.href = '/ipads'}
                className="text-neutral-300 hover:text-amber-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                iPads
              </button>
              <button
                onClick={() => window.location.href = '/macbooks'}
                className="text-neutral-300 hover:text-amber-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                MacBooks
              </button>
              <button
                onClick={() => window.location.href = '/buds'}
                className="text-neutral-300 hover:text-amber-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Buds
              </button>
              <button
                onClick={() => window.location.href = '/watches'}
                className="text-neutral-300 hover:text-amber-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Watches
              </button>
              <button
                onClick={() => window.location.href = '/tablets'}
                className="text-neutral-300 hover:text-amber-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Tablets
              </button>
              <button
                onClick={() => window.location.href = '/gaming-sound'}
                className="text-neutral-300 hover:text-amber-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Gaming & Sound
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className="text-neutral-300 hover:text-amber-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Calculator
              </button>
              <button
                onClick={() => window.location.href = '/terms'}
                className="text-neutral-300 hover:text-amber-400 transition-all duration-300 font-medium tracking-wider uppercase text-xs whitespace-nowrap"
              >
                Terms
              </button>
              <CartButton onClick={() => setShowCart(true)} />
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="lg:hidden bg-neutral-900 border-t border-amber-500/20">
              <nav className="py-4 space-y-1">
                <button
                  onClick={() => {
                    window.location.href = '/phones';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-amber-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Phones
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/ipads';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-amber-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  iPads
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/macbooks';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-amber-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  MacBooks
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/buds';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-amber-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Buds
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/watches';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-amber-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Watches
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/tablets';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-amber-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Tablets
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/gaming-sound';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-amber-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Gaming & Sound
                </button>
                <button
                  onClick={() => {
                    scrollToSection('calculator');
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-amber-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
                >
                  Calculator
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/terms';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-6 py-3 text-neutral-300 hover:text-amber-400 hover:bg-neutral-800 transition-colors font-medium tracking-wider uppercase text-xs"
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

      {/* Hero Section */}
      <HeroSection 
        onBrowsePhones={() => window.location.href = '/phones'}
        onOpenCalculator={() => setShowCalculator(true)}
        onOpenInstructions={() => setShowInstructions(true)}
      />

      {/* Credit Info Section */}
      <section className="samsung-section bg-cream">
        <div className="samsung-container">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
            <div className="luxury-divider mb-6"></div>
            <h3 className="text-3xl md:text-4xl samsung-header mb-4">FLEXIBLE CREDIT OPTIONS</h3>
            <p className="samsung-text max-w-2xl mx-auto text-base md:text-lg text-neutral-600">Choose from multiple payment plans with competitive rates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border border-neutral-200 text-center p-8 animate-in slide-in-from-left duration-1000 delay-300 hover:border-amber-500 transition-all duration-500 rounded-sm group" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
              <CardContent className="pt-4">
                <div className="text-5xl font-bold text-amber-500 mb-2 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>12</div>
                <div className="text-xs font-medium text-neutral-500 mb-4 tracking-widest uppercase">Months</div>
                <div className="luxury-divider my-4"></div>
                <p className="text-neutral-600 text-sm">Higher monthly payments,</p>
                <p className="text-neutral-600 text-sm">less interest</p>
              </CardContent>
            </Card>
            <Card className="bg-neutral-900 border border-amber-500/30 text-center p-8 animate-in slide-in-from-bottom duration-1000 delay-500 hover:border-amber-400 transition-all duration-500 rounded-sm group" style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.15)' }}>
              <CardContent className="pt-4">
                <div className="text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>24</div>
                <div className="text-xs font-medium text-amber-400/70 mb-4 tracking-widest uppercase">Months</div>
                <div className="w-16 h-0.5 mx-auto my-4 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                <p className="text-neutral-400 text-sm">Balanced</p>
                <p className="text-neutral-400 text-sm">payment option</p>
              </CardContent>
            </Card>
            <Card className="bg-white border border-neutral-200 text-center p-8 animate-in slide-in-from-right duration-1000 delay-700 hover:border-amber-500 transition-all duration-500 rounded-sm group" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)' }}>
              <CardContent className="pt-4">
                <div className="text-5xl font-bold text-amber-500 mb-2 group-hover:scale-110 transition-transform duration-300" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>36</div>
                <div className="text-xs font-medium text-neutral-500 mb-4 tracking-widest uppercase">Months</div>
                <div className="luxury-divider my-4"></div>
                <p className="text-neutral-600 text-sm">Lower</p>
                <p className="text-neutral-600 text-sm">monthly payments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Calculator Section */}
      <section id="calculator" className="samsung-section bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in slide-in-from-top duration-1000">
            <h3 className="text-4xl samsung-header mb-6">PAYMENT CALCULATOR</h3>
            <p className="samsung-text text-lg">Calculate your monthly payments with our flexible credit options</p>
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
      <section className="samsung-section bg-neutral-900">
        <div className="samsung-container">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
            <div className="luxury-divider mb-6"></div>
            <h3 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>CHOOSE YOUR DEVICE</h3>
            <p className="text-neutral-400 text-base md:text-lg">Select from our premium device categories</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6 bg-neutral-800/50 border border-neutral-700 hover:border-amber-500 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm animate-in slide-in-from-left duration-1000 delay-300 group"
                  onClick={() => window.location.href = '/phones'}>
              <CardContent className="pt-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                <h4 className="text-base font-semibold mb-2 tracking-wider text-white group-hover:text-amber-400 transition-colors">PHONES</h4>
                <p className="text-xs text-neutral-400">iPhones, Samsung & more</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-neutral-800/50 border border-neutral-700 hover:border-amber-500 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm animate-in slide-in-from-bottom duration-1000 delay-400 group"
                  onClick={() => window.location.href = '/ipads'}>
              <CardContent className="pt-4">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <Tablet size={32} className="text-white group-hover:text-amber-400 transition-colors" />
                </div>
                <h4 className="text-base font-semibold mb-2 tracking-wider text-white group-hover:text-amber-400 transition-colors">IPADS</h4>
                <p className="text-xs text-neutral-400">iPad Pro, Air & more</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-neutral-800/50 border border-neutral-700 hover:border-amber-500 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm animate-in slide-in-from-right duration-1000 delay-500 group"
                  onClick={() => window.location.href = '/macbooks'}>
              <CardContent className="pt-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
                <h4 className="text-base font-semibold mb-2 tracking-wider text-white group-hover:text-amber-400 transition-colors">MACBOOKS</h4>
                <p className="text-xs text-neutral-400">MacBook Pro & Air</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-neutral-800/50 border border-neutral-700 hover:border-amber-500 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm animate-in slide-in-from-left duration-1000 delay-600 group"
                  onClick={() => window.location.href = '/buds'}>
              <CardContent className="pt-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🎧</div>
                <h4 className="text-base font-semibold mb-2 tracking-wider text-white group-hover:text-amber-400 transition-colors">BUDS</h4>
                <p className="text-xs text-neutral-400">AirPods & Galaxy Buds</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-neutral-800/50 border border-neutral-700 hover:border-amber-500 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm animate-in slide-in-from-bottom duration-1000 delay-700 group"
                  onClick={() => window.location.href = '/watches'}>
              <CardContent className="pt-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">⌚</div>
                <h4 className="text-base font-semibold mb-2 tracking-wider text-white group-hover:text-amber-400 transition-colors">WATCHES</h4>
                <p className="text-xs text-neutral-400">Apple Watch & Galaxy Watch</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-neutral-800/50 border border-neutral-700 hover:border-amber-500 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm animate-in slide-in-from-right duration-1000 delay-800 group"
                  onClick={() => window.location.href = '/tablets'}>
              <CardContent className="pt-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
                <h4 className="text-base font-semibold mb-2 tracking-wider text-white group-hover:text-amber-400 transition-colors">TABLETS</h4>
                <p className="text-xs text-neutral-400">Samsung Galaxy Tabs</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-neutral-800/50 border border-neutral-700 hover:border-amber-500 hover:bg-neutral-800 transition-all duration-500 cursor-pointer rounded-sm animate-in slide-in-from-left duration-1000 delay-900 group"
                  onClick={() => window.location.href = '/gaming-sound'}>
              <CardContent className="pt-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🎮</div>
                <h4 className="text-base font-semibold mb-2 tracking-wider text-white group-hover:text-amber-400 transition-colors">GAMING & SOUND</h4>
                <p className="text-xs text-neutral-400">PS5, JBL, Harman Kardon</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-amber-500/20 border border-amber-500/50 hover:border-amber-400 hover:bg-amber-500/30 transition-all duration-500 cursor-pointer rounded-sm animate-in slide-in-from-bottom duration-1000 delay-1000 group"
                  onClick={() => scrollToSection('calculator')}>
              <CardContent className="pt-4">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">🧮</div>
                <h4 className="text-base font-semibold mb-2 tracking-wider text-amber-400">CALCULATOR</h4>
                <p className="text-xs text-amber-400/70">Calculate monthly payments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Looking for Device Not Listed Section */}
      <section className="samsung-section bg-cream">
        <div className="samsung-container">
          <Card className="max-w-5xl mx-auto p-10 bg-white border border-neutral-200 rounded-sm animate-in slide-in-from-bottom duration-1000" style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.06)' }}>
            <CardContent className="text-center">
              <div className="luxury-divider mb-6"></div>
              <h3 className="text-2xl md:text-3xl mb-6 animate-in fade-in duration-1000 delay-300" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Looking for a Device on Credit That's Not Listed?
              </h3>
              <p className="text-base text-neutral-600 mb-4 max-w-3xl mx-auto animate-in slide-in-from-left duration-1000 delay-500">
                If you're interested in buying a phone, iPad, tablet, or MacBook on credit that isn't listed here, we're happy to help!
              </p>
              <p className="text-base text-neutral-600 mb-8 max-w-3xl mx-auto animate-in slide-in-from-right duration-1000 delay-700">
                Simply submit your quote request via email to{' '}
                <a 
                  href="mailto:info@accessnamibia.com" 
                  className="text-amber-600 font-semibold hover:text-amber-500 transition-colors"
                >
                  info@accessnamibia.com
                </a>
                , or contact one of our branches directly:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center animate-in slide-in-from-bottom duration-1000 delay-700 p-4 bg-neutral-50 rounded-sm border border-neutral-100 hover:border-amber-500/30 transition-colors">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Windhoek</h4>
                  <p className="text-neutral-600 text-sm">081 162 6462 / 081 495 2277</p>
                </div>
                <div className="text-center animate-in slide-in-from-bottom duration-1000 delay-900 p-4 bg-neutral-50 rounded-sm border border-neutral-100 hover:border-amber-500/30 transition-colors">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Oshakati</h4>
                  <p className="text-neutral-600 text-sm">081 860 1188</p>
                </div>
                <div className="text-center animate-in slide-in-from-bottom duration-1000 delay-1000 p-4 bg-neutral-50 rounded-sm border border-neutral-100 hover:border-amber-500/30 transition-colors">
                  <h4 className="text-lg font-semibold text-neutral-900 mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Walvis Bay</h4>
                  <p className="text-neutral-600 text-sm">081 670 5032</p>
                </div>
              </div>

              <p className="text-neutral-500 text-sm animate-in fade-in duration-1000 delay-1200">
                Our sales team at each branch will gladly assist you in getting a customized quote for the device you need.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Credit Application Requirements Section */}
      <section className="samsung-section bg-neutral-900">
        <div className="samsung-container">
          <Card className="max-w-4xl mx-auto p-10 bg-neutral-800 border border-neutral-700 rounded-sm animate-in slide-in-from-top duration-1000">
            <CardContent>
              <div className="luxury-divider mb-6"></div>
              <h3 className="text-2xl md:text-3xl text-white mb-8 text-center animate-in fade-in duration-1000 delay-300" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Requirements for a Credit Application
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 animate-in slide-in-from-left duration-1000 delay-500 p-3 bg-neutral-700/30 rounded-sm border-l-2 border-amber-500">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <p className="text-neutral-300">Latest Payslip</p>
                </div>
                <div className="flex items-center gap-4 animate-in slide-in-from-left duration-1000 delay-600 p-3 bg-neutral-700/30 rounded-sm border-l-2 border-amber-500">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <p className="text-neutral-300">Employment Confirmation Letter</p>
                </div>
                <div className="flex items-center gap-4 animate-in slide-in-from-left duration-1000 delay-700 p-3 bg-neutral-700/30 rounded-sm border-l-2 border-amber-500">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <p className="text-neutral-300">Copy of ID</p>
                </div>
                <div className="flex items-center gap-4 animate-in slide-in-from-left duration-1000 delay-800 p-3 bg-neutral-700/30 rounded-sm border-l-2 border-amber-500">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <p className="text-neutral-300">Quotation (We'll provide this after you complete the quote request form)</p>
                </div>
              </div>

              <div className="border-t border-neutral-700 pt-6">
                <h4 className="text-lg text-amber-400 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Once you've gathered all the required documents, please either:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <p className="text-neutral-400">Submit them at your nearest FNB branch, or</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                    <p className="text-neutral-400">
                      Email them directly to our credit team at{' '}
                      <a 
                        href="mailto:credit@accessnamibia.com" 
                        className="text-amber-400 font-medium hover:text-amber-300 transition-colors"
                      >
                        credit@accessnamibia.com
                      </a>
                      {' '}for faster processing.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="samsung-section bg-cream">
        <div className="samsung-container">
          <Card className="max-w-4xl mx-auto p-10 bg-white border border-neutral-200 rounded-sm animate-in slide-in-from-bottom duration-1000" style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.06)' }}>
            <CardContent className="text-center">
              <div className="luxury-divider mb-6"></div>
              <h3 className="text-2xl md:text-3xl text-neutral-900 mb-8 animate-in fade-in duration-1000 delay-300" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Our Promise to You
              </h3>
              
              <p className="text-base text-neutral-600 mb-6 max-w-3xl mx-auto animate-in slide-in-from-left duration-1000 delay-500">
                We aim to send your quotation within 1 hour of receiving your quote request — during our working hours, 08:00 to 18:00.
              </p>
              
              <p className="text-neutral-500 text-sm animate-in slide-in-from-right duration-1000 delay-700">
                Requests submitted outside of these hours will be prioritized and sent out first thing the next morning.
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
      <footer className="bg-neutral-900 text-white py-16">
        <div className="samsung-container">
          <div className="luxury-divider mb-12"></div>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <h4 className="text-lg font-semibold text-amber-400 mb-4 tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>ACCESS ELECTRONICS</h4>
              <p className="text-neutral-400 mb-6 text-sm leading-relaxed">
                Connecting you with the latest technology through flexible financing options.
              </p>
              <div className="flex space-x-3">
                <div className="w-9 h-9 bg-neutral-800 border border-neutral-700 rounded-sm flex items-center justify-center hover:border-amber-500 hover:bg-neutral-800 transition-all cursor-pointer group">
                  <span className="text-neutral-400 text-sm group-hover:text-amber-400 transition-colors">f</span>
                </div>
                <div className="w-9 h-9 bg-neutral-800 border border-neutral-700 rounded-sm flex items-center justify-center hover:border-amber-500 hover:bg-neutral-800 transition-all cursor-pointer group">
                  <span className="text-neutral-400 text-sm group-hover:text-amber-400 transition-colors">t</span>
                </div>
                <div className="w-9 h-9 bg-neutral-800 border border-neutral-700 rounded-sm flex items-center justify-center hover:border-amber-500 hover:bg-neutral-800 transition-all cursor-pointer group">
                  <span className="text-neutral-400 text-sm group-hover:text-amber-400 transition-colors">@</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 tracking-wider" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Quick Links</h4>
              <ul className="space-y-3 text-neutral-400 text-sm">
                <li><a href="/" className="hover:text-amber-400 transition-colors">Home</a></li>
                <li><a href="/phones" className="hover:text-amber-400 transition-colors">Products</a></li>
                <li><button onClick={() => setShowCalculator(true)} className="hover:text-amber-400 transition-colors text-left">Financing Options</button></li>
                <li><a href="/terms" className="hover:text-amber-400 transition-colors">Terms & Conditions</a></li>
                <li><a href="https://accessnamibia.com/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Official Online Store</a></li>
                <li><a href="mailto:info@accessnamibia.com" className="hover:text-amber-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Our Branches */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 tracking-wider" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Our Branches</h4>
              <div className="space-y-4">
                <div className="p-4 bg-neutral-800/50 border border-neutral-700/50 rounded-sm hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-white font-medium text-sm">Windhoek (Main Shop)</span>
                  </div>
                  <p className="text-neutral-500 text-xs ml-4 mb-1">
                    Independence Avenue, Opposite Zoo Park
                  </p>
                  <p className="text-neutral-400 text-xs ml-4">
                    +264 814952277 / +264 811626462
                  </p>
                </div>

                <div className="p-4 bg-neutral-800/50 border border-neutral-700/50 rounded-sm hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-white font-medium text-sm">Oshakati</span>
                  </div>
                  <p className="text-neutral-400 text-xs ml-4">
                    +264 818601188
                  </p>
                </div>

                <div className="p-4 bg-neutral-800/50 border border-neutral-700/50 rounded-sm hover:border-amber-500/30 transition-colors">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-white font-medium text-sm">Walvis Bay</span>
                  </div>
                  <p className="text-neutral-400 text-xs ml-4">
                    +264 816705032
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
            <p className="text-neutral-500 text-xs tracking-wider">
              © 2025 Access Electronics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
