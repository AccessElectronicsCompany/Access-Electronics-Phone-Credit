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
    colors: string[];
    condition?: string;
  } | null>(null);
  
  const [showCalculator, setShowCalculator] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleSelectPhone = (name: string, storage: string, price: number, colors: string[] = [], condition?: string) => {
    setSelectedPhone({ name, storage, price, colors, condition });
    setShowQuoteForm(true);
  };

  const handleRequestQuote = (name: string, storage: string, price: number, colors: string[] = [], condition?: string) => {
    setSelectedPhone({ name, storage, price, colors, condition });
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
      <header className="bg-white border-b border-black sticky top-0 z-50 animate-in slide-in-from-top duration-1000">
        <div className="samsung-container">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center ml-4">
              <h1 className="text-2xl md:text-3xl samsung-header tracking-widest animate-in fade-in duration-1000 delay-500">
                ACCESS ELECTRONICS
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8 items-center animate-in slide-in-from-right duration-1000 delay-700">
              <button
                onClick={() => window.location.href = '/phones'}
                className="samsung-text hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm whitespace-nowrap hover:scale-105 transform"
              >
                Phones
              </button>
              <button
                onClick={() => window.location.href = '/ipads'}
                className="samsung-text hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm whitespace-nowrap hover:scale-105 transform"
              >
                iPads
              </button>
              <button
                onClick={() => window.location.href = '/macbooks'}
                className="samsung-text hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm whitespace-nowrap hover:scale-105 transform"
              >
                MacBooks
              </button>
              <button
                onClick={() => window.location.href = '/buds'}
                className="samsung-text hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm whitespace-nowrap hover:scale-105 transform"
              >
                Buds
              </button>
              <button
                onClick={() => window.location.href = '/watches'}
                className="samsung-text hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm whitespace-nowrap hover:scale-105 transform"
              >
                Watches
              </button>
              <button
                onClick={() => window.location.href = '/tablets'}
                className="samsung-text hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm whitespace-nowrap hover:scale-105 transform"
              >
                Tablets
              </button>
              <button
                onClick={() => window.location.href = '/gaming-sound'}
                className="samsung-text hover:text-black transition-all duration-300 font-medium tracking-wide uppercase text-sm whitespace-nowrap hover:scale-105 transform"
              >
                Gaming & Sound
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
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
                    window.location.href = '/phones';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 samsung-text hover:bg-gray-50 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  Phones
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/ipads';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 samsung-text hover:bg-gray-50 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  iPads
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/macbooks';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 samsung-text hover:bg-gray-50 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  MacBooks
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/buds';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 samsung-text hover:bg-gray-50 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  Buds
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/watches';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 samsung-text hover:bg-gray-50 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  Watches
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/tablets';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 samsung-text hover:bg-gray-50 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  Tablets
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/gaming-sound';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 samsung-text hover:bg-gray-50 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  Gaming & Sound
                </button>
                <button
                  onClick={() => {
                    scrollToSection('calculator');
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

      {/* Hero Section */}
      <HeroSection 
        onBrowsePhones={() => window.location.href = '/phones'}
        onOpenCalculator={() => setShowCalculator(true)}
        onOpenInstructions={() => setShowInstructions(true)}
      />

      {/* Credit Info Section */}
      <section className="samsung-section bg-white">
        <div className="samsung-container">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
            <h3 className="text-4xl samsung-header mb-6">FLEXIBLE CREDIT OPTIONS</h3>
            <p className="samsung-text max-w-2xl mx-auto text-lg">Choose from multiple payment plans with competitive rates</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="samsung-card text-center p-6 animate-in slide-in-from-left duration-1000 delay-300 hover:scale-105 transition-transform">
              <CardContent className="pt-4">
                <div className="text-4xl font-bold samsung-text mb-2 animate-pulse">12</div>
                <div className="text-sm font-semibold samsung-text mb-3 tracking-wide">MONTHS</div>
                <p className="samsung-text text-sm opacity-70">Higher monthly payments,</p>
                <p className="samsung-text text-sm opacity-70">less interest</p>
              </CardContent>
            </Card>
            <Card className="samsung-card text-center p-6 animate-in slide-in-from-bottom duration-1000 delay-500 hover:scale-105 transition-transform">
              <CardContent className="pt-4">
                <div className="text-4xl font-bold samsung-text mb-2 animate-pulse">24</div>
                <div className="text-sm font-semibold samsung-text mb-3 tracking-wide">MONTHS</div>
                <p className="samsung-text text-sm opacity-70">Balanced</p>
                <p className="samsung-text text-sm opacity-70">payment option</p>
              </CardContent>
            </Card>
            <Card className="samsung-card text-center p-6 animate-in slide-in-from-right duration-1000 delay-700 hover:scale-105 transition-transform">
              <CardContent className="pt-4">
                <div className="text-4xl font-bold samsung-text mb-2 animate-pulse">36</div>
                <div className="text-sm font-semibold samsung-text mb-3 tracking-wide">MONTHS</div>
                <p className="samsung-text text-sm opacity-70">Lower</p>
                <p className="samsung-text text-sm opacity-70">monthly payments</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Calculator Section */}
      <section id="calculator" className="samsung-section bg-gray-50">
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
      <section className="samsung-section bg-white">
        <div className="samsung-container">
          <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
            <h3 className="text-4xl samsung-header mb-6">CHOOSE YOUR DEVICE</h3>
            <p className="samsung-text text-lg">Select from our premium device categories</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded-xl animate-in slide-in-from-left duration-1000 delay-300 hover:scale-105 transform"
                  onClick={() => window.location.href = '/phones'}>
              <CardContent className="pt-4">
                <div className="text-4xl mb-4 animate-bounce">📱</div>
                <h4 className="text-lg font-semibold mb-3 tracking-wide">PHONES</h4>
                <p className="text-sm opacity-80">iPhones, Samsung & more</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded-xl animate-in slide-in-from-bottom duration-1000 delay-400 hover:scale-105 transform"
                  onClick={() => window.location.href = '/ipads'}>
              <CardContent className="pt-4">
                <div className="mb-4 flex justify-center">
                  <Tablet size={48} className="text-black animate-bounce" />
                </div>
                <h4 className="text-lg font-semibold mb-3 tracking-wide">IPADS</h4>
                <p className="text-sm opacity-80">iPad Pro, Air & more</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded-xl animate-in slide-in-from-right duration-1000 delay-500 hover:scale-105 transform"
                  onClick={() => window.location.href = '/macbooks'}>
              <CardContent className="pt-4">
                <div className="text-4xl mb-4 animate-bounce">💻</div>
                <h4 className="text-lg font-semibold mb-3 tracking-wide">MACBOOKS</h4>
                <p className="text-sm opacity-80">MacBook Pro & Air</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded-xl animate-in slide-in-from-left duration-1000 delay-600 hover:scale-105 transform"
                  onClick={() => window.location.href = '/buds'}>
              <CardContent className="pt-4">
                <div className="text-4xl mb-4 animate-bounce">🎧</div>
                <h4 className="text-lg font-semibold mb-3 tracking-wide">BUDS</h4>
                <p className="text-sm opacity-80">AirPods & Galaxy Buds</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded-xl animate-in slide-in-from-bottom duration-1000 delay-700 hover:scale-105 transform"
                  onClick={() => window.location.href = '/watches'}>
              <CardContent className="pt-4">
                <div className="text-4xl mb-4 animate-bounce">⌚</div>
                <h4 className="text-lg font-semibold mb-3 tracking-wide">WATCHES</h4>
                <p className="text-sm opacity-80">Apple Watch & Galaxy Watch</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded-xl animate-in slide-in-from-right duration-1000 delay-800 hover:scale-105 transform"
                  onClick={() => window.location.href = '/tablets'}>
              <CardContent className="pt-4">
                <div className="text-4xl mb-4 animate-bounce">📱</div>
                <h4 className="text-lg font-semibold mb-3 tracking-wide">TABLETS</h4>
                <p className="text-sm opacity-80">Samsung Galaxy Tabs</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded-xl animate-in slide-in-from-left duration-1000 delay-900 hover:scale-105 transform"
                  onClick={() => window.location.href = '/gaming-sound'}>
              <CardContent className="pt-4">
                <div className="text-4xl mb-4 animate-bounce">🎮</div>
                <h4 className="text-lg font-semibold mb-3 tracking-wide">GAMING & SOUND</h4>
                <p className="text-sm opacity-80">PS5, JBL, Harman Kardon</p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Card className="text-center p-6 border-2 border-black hover:bg-black hover:text-white transition-all duration-500 cursor-pointer rounded-xl animate-in slide-in-from-bottom duration-1000 delay-1000 hover:scale-105 transform max-w-md mx-auto"
                  onClick={() => scrollToSection('calculator')}>
              <CardContent className="pt-4">
                <div className="text-4xl mb-4 animate-bounce">🧮</div>
                <h4 className="text-lg font-semibold mb-3 tracking-wide">CALCULATOR</h4>
                <p className="text-sm opacity-80">Calculate your monthly payments instantly</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Looking for Device Not Listed Section */}
      <section className="samsung-section bg-gray-50">
        <div className="samsung-container">
          <Card className="max-w-5xl mx-auto p-8 samsung-card animate-in slide-in-from-bottom duration-1000 hover:scale-[1.02] transition-transform">
            <CardContent className="text-center">
              <h3 className="text-3xl samsung-header mb-6 animate-in fade-in duration-1000 delay-300">
                Looking for a Device on Credit That's Not Listed?
              </h3>
              <p className="text-lg samsung-text mb-6 max-w-3xl mx-auto animate-in slide-in-from-left duration-1000 delay-500">
                If you're interested in buying a phone, iPad, tablet, or MacBook on credit that isn't listed here, we're happy to help!
              </p>
              <p className="text-lg samsung-text mb-8 max-w-3xl mx-auto animate-in slide-in-from-right duration-1000 delay-700">
                Simply submit your quote request via email to{' '}
                <a 
                  href="mailto:info@accessnamibia.com" 
                  className="text-black font-semibold hover:underline border-b border-black transition-all duration-300 hover:scale-105 inline-block"
                >
                  info@accessnamibia.com
                </a>
                , or contact one of our branches directly:
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center animate-in slide-in-from-bottom duration-1000 delay-700 hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold samsung-header mb-2">Windhoek</h4>
                  <p className="samsung-text">081 162 6462 / 081 495 2277</p>
                </div>
                <div className="text-center animate-in slide-in-from-bottom duration-1000 delay-900 hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold samsung-header mb-2">Oshakati</h4>
                  <p className="samsung-text">081 860 1188</p>
                </div>
                <div className="text-center animate-in slide-in-from-bottom duration-1000 delay-1000 hover:scale-105 transition-transform">
                  <h4 className="text-xl font-bold samsung-header mb-2">Walvis Bay</h4>
                  <p className="samsung-text">081 670 5032</p>
                </div>
              </div>

              <p className="samsung-text text-base opacity-80 animate-in fade-in duration-1000 delay-1200">
                Our sales team at each branch will gladly assist you in getting a customized quote for the device you need.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Credit Application Requirements Section */}
      <section className="samsung-section bg-white">
        <div className="samsung-container">
          <Card className="max-w-4xl mx-auto p-8 samsung-card animate-in slide-in-from-top duration-1000 hover:scale-[1.01] transition-transform">
            <CardContent>
              <h3 className="text-3xl samsung-header mb-8 text-center animate-in fade-in duration-1000 delay-300">
                Requirements for a Credit Application
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 animate-in slide-in-from-left duration-1000 delay-500 hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                  <p className="text-lg samsung-text">Latest Payslip</p>
                </div>
                <div className="flex items-center gap-3 animate-in slide-in-from-left duration-1000 delay-600 hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                  <p className="text-lg samsung-text">Employment Confirmation Letter</p>
                </div>
                <div className="flex items-center gap-3 animate-in slide-in-from-left duration-1000 delay-700 hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                  <p className="text-lg samsung-text">Copy of ID</p>
                </div>
                <div className="flex items-center gap-3 animate-in slide-in-from-left duration-1000 delay-800 hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                  <p className="text-lg samsung-text">Quotation (We'll provide this after you complete the quote request form)</p>
                </div>
              </div>

              <div className="border-t-2 border-black pt-6">
                <h4 className="text-xl samsung-header mb-4">
                  Once you've gathered all the required documents, please either:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <p className="text-lg samsung-text">Submit them at your nearest FNB branch, or</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <p className="text-lg samsung-text">
                      Email them directly to our credit team at{' '}
                      <a 
                        href="mailto:credit@accessnamibia.com" 
                        className="text-black font-semibold hover:underline border-b border-black"
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
      <section className="samsung-section bg-gray-50">
        <div className="samsung-container">
          <Card className="max-w-4xl mx-auto p-8 samsung-card animate-in slide-in-from-bottom duration-1000 hover:scale-[1.02] transition-transform">
            <CardContent className="text-center">
              <h3 className="text-3xl samsung-header mb-8 animate-in fade-in duration-1000 delay-300">
                Our Promise to You
              </h3>
              
              <p className="text-lg samsung-text mb-6 max-w-3xl mx-auto animate-in slide-in-from-left duration-1000 delay-500">
                We aim to send your quotation within 1 hour of receiving your quote request — during our working hours, 08:00 to 18:00.
              </p>
              
              <p className="text-lg samsung-text opacity-80 animate-in slide-in-from-right duration-1000 delay-700">
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
          setSelectedPhone(null); // Clear selected phone so quote form uses cart items
          setShowCart(false);
          setShowQuoteForm(true);
        }}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="samsung-container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">ACCESS ELECTRONICS</h4>
              <p className="text-gray-400 mb-6">
                Connecting you with the latest technology through flexible financing options.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-white text-sm">@</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/phones" className="hover:text-white transition-colors">Products</a></li>
                <li><button onClick={() => setShowCalculator(true)} className="hover:text-white transition-colors text-left">Financing Options</button></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="mailto:info@accessnamibia.com" className="hover:text-white transition-colors">Official Online Store</a></li>
                <li><a href="mailto:info@accessnamibia.com" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="mailto:info@accessnamibia.com" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Our Branches */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Our Branches</h4>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white font-semibold">Windhoek (Main Shop)</span>
                  </div>
                  <p className="text-gray-400 text-sm ml-6">
                    Independence Avenue, Opposite Zoo Park, next to NWR Head Office
                  </p>
                  <p className="text-gray-400 text-sm ml-6">
                    📞 +264 814952277 / +264 811626462
                  </p>
                </div>

                <div className="p-4 bg-gray-800 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white font-semibold">Oshakati</span>
                  </div>
                  <p className="text-gray-400 text-sm ml-6">
                    📞 +264 818601188
                  </p>
                </div>

                <div className="p-4 bg-gray-800 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white font-semibold">Walvis Bay</span>
                  </div>
                  <p className="text-gray-400 text-sm ml-6">
                    📞 +264 816705032
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Access Electronics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
