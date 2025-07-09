import { useState } from "react";
import { Link } from "wouter";
import PhoneCard from "@/components/phone-card";
import QuoteFormModal from "@/components/quote-form-modal";
import { Card, CardContent } from "@/components/ui/card";
import { iphones, samsungPhones } from "@/lib/phone-data";
import { ArrowLeft, Menu, X } from "lucide-react";

export default function Phones() {
  const [selectedPhone, setSelectedPhone] = useState<{
    name: string;
    storage: string;
    price: number;
  } | null>(null);
  
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleSelectPhone = (name: string, storage: string, price: number) => {
    setSelectedPhone({ name, storage, price });
    setShowQuoteForm(true);
  };

  const handleRequestQuote = (name: string, storage: string, price: number) => {
    setSelectedPhone({ name, storage, price });
    setShowQuoteForm(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-black sticky top-0 z-50">
        <div className="samsung-container">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4 md:space-x-8">
              <Link href="/" className="flex items-center space-x-2 samsung-text hover:text-black transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="hidden sm:inline font-medium tracking-wide uppercase text-sm">Back to Home</span>
              </Link>
              <h1 className="text-xl md:text-2xl lg:text-3xl samsung-header tracking-widest">
                PHONE COLLECTION
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              <button
                onClick={() => window.location.href = '/'}
                className="samsung-text hover:text-black transition-colors font-medium tracking-wide uppercase text-sm whitespace-nowrap"
              >
                Home
              </button>
              <button
                onClick={() => window.location.href = '/terms'}
                className="samsung-text hover:text-black transition-colors font-medium tracking-wide uppercase text-sm whitespace-nowrap"
              >
                Terms
              </button>
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
                    window.location.href = '/';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 samsung-text hover:bg-gray-50 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  Home
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
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Collections Navigation */}
      <section className="samsung-section bg-white">
        <div className="samsung-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl samsung-header mb-6">CHOOSE YOUR COLLECTION</h2>
            <p className="samsung-text text-lg">Select from our premium smartphone categories</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-12 border-2 border-black hover:bg-black hover:text-white transition-all cursor-pointer"
                  onClick={() => document.getElementById('iphones')?.scrollIntoView({ behavior: 'smooth' })}>
              <CardContent className="pt-6">
                <div className="text-6xl mb-6">📱</div>
                <h4 className="text-xl font-semibold mb-4 tracking-wide">iPHONES</h4>
                <p className="text-sm opacity-80">Premium Apple devices with cutting-edge technology</p>
              </CardContent>
            </Card>
            <Card className="text-center p-12 border-2 border-black hover:bg-black hover:text-white transition-all cursor-pointer"
                  onClick={() => document.getElementById('samsung')?.scrollIntoView({ behavior: 'smooth' })}>
              <CardContent className="pt-6">
                <div className="text-6xl mb-6">📱</div>
                <h4 className="text-xl font-semibold mb-4 tracking-wide">SAMSUNG</h4>
                <p className="text-sm opacity-80">Innovation meets performance in flagship devices</p>
              </CardContent>
            </Card>
            <Card className="text-center p-12 border-2 border-black hover:bg-black hover:text-white transition-all cursor-pointer"
                  onClick={() => document.getElementById('used')?.scrollIntoView({ behavior: 'smooth' })}>
              <CardContent className="pt-6">
                <div className="text-6xl mb-6">🔧</div>
                <h4 className="text-xl font-semibold mb-4 tracking-wide">USED PHONES</h4>
                <p className="text-sm opacity-80">Quality pre-owned devices at great prices</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* iPhone Section */}
      <section id="iphones" className="samsung-section bg-gray-50">
        <div className="samsung-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl samsung-header mb-6">iPHONE COLLECTION</h2>
            <p className="samsung-text text-lg">Premium Apple devices with cutting-edge technology</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {iphones.map((phone) => (
              <PhoneCard
                key={`${phone.name}-${phone.storage}`}
                phone={phone}
                onSelect={handleSelectPhone}
                onRequestQuote={handleRequestQuote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Samsung Section */}
      <section id="samsung" className="samsung-section bg-white">
        <div className="samsung-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl samsung-header mb-6">SAMSUNG COLLECTION</h2>
            <p className="samsung-text text-lg">Innovation meets performance in Samsung's flagship devices</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {samsungPhones.map((phone) => (
              <PhoneCard
                key={`${phone.name}-${phone.storage}`}
                phone={phone}
                onSelect={handleSelectPhone}
                onRequestQuote={handleRequestQuote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Used Phones Section */}
      <section id="used" className="samsung-section bg-gray-50">
        <div className="samsung-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl samsung-header mb-6">USED PHONES</h2>
            <p className="samsung-text text-lg">Quality pre-owned devices at great prices</p>
          </div>
          <div className="text-center py-16">
            <div className="text-8xl mb-8">🔧</div>
            <p className="text-2xl samsung-text mb-6 tracking-wide">COMING SOON</p>
            <p className="samsung-text opacity-70 text-lg">We're preparing an amazing selection of quality used phones</p>
          </div>
        </div>
      </section>

      {/* Quote Form Modal */}
      <QuoteFormModal
        isOpen={showQuoteForm}
        onClose={() => setShowQuoteForm(false)}
        selectedPhone={selectedPhone}
      />
    </div>
  );
}