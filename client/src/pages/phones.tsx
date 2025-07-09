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
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-white text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
                  <span className="text-white text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
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
                <li><a href="/" className="hover:text-white transition-colors">Financing Options</a></li>
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
                <div>
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

                <div>
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

                <div>
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