import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import logoUrl from "@/assets/logo.png";

export default function Terms() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-rose-400 sticky top-0 z-50">
        <div className="samsung-container">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center ml-4">
              <a href="/">
                <img 
                  src={logoUrl} 
                  alt="Access Electronics" 
                  className="h-20 sm:h-24 md:h-28 w-auto"
                />
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 xl:space-x-12">
              <button
                onClick={() => window.location.href = '/'}
                className="samsung-text hover:text-black transition-colors font-medium tracking-wide uppercase text-sm whitespace-nowrap"
              >
                Home
              </button>
              <button
                onClick={() => window.location.href = '/phones'}
                className="samsung-text hover:text-black transition-colors font-medium tracking-wide uppercase text-sm whitespace-nowrap"
              >
                Phones
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
                    window.location.href = '/phones';
                    setShowMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 samsung-text hover:bg-gray-50 transition-colors font-medium tracking-wide uppercase text-sm"
                >
                  Phones
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Valentine's Banner */}
      <div className="bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600 overflow-hidden">
        <div className="animate-banner-scroll whitespace-nowrap py-2">
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; VALENTINE'S SPECIALS - ALL MONTH LONG &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; TREAT YOUR LOVED ONE TO A NEW DEVICE &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; BUY NOW, PAY LATER WITH EASY CREDIT &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; VALENTINE'S SPECIALS - ALL MONTH LONG &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; TREAT YOUR LOVED ONE TO A NEW DEVICE &#10084;</span>
          <span className="inline-block text-white text-xs sm:text-sm font-medium tracking-wider mx-8">&#10084; BUY NOW, PAY LATER WITH EASY CREDIT &#10084;</span>
        </div>
      </div>

      {/* Terms and Conditions Content */}
      <section className="samsung-section bg-white">
        <div className="samsung-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl samsung-header mb-6">TERMS AND CONDITIONS</h2>
              <p className="samsung-text text-lg">Please read these terms carefully before proceeding with your quote request</p>
            </div>

            <div className="space-y-8">
              {/* Quote Validity */}
              <Card className="samsung-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl samsung-header mb-4">1. Quote Validity</h3>
                  <p className="samsung-text mb-4">
                    All quotes issued by Access Electronics remain valid for 7 days from the date of issue. After this period, product prices and availability may change due to market dynamics and supplier fluctuations.
                  </p>
                  <p className="samsung-text">
                    We advise customers to act within this period to secure the quote.
                  </p>
                </CardContent>
              </Card>

              {/* Stock Availability */}
              <Card className="samsung-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl samsung-header mb-4">2. Stock Availability</h3>
                  <p className="samsung-text mb-4">
                    Quoted products are subject to stock availability at the time of confirmation.
                  </p>
                  <p className="samsung-text mb-4">
                    If your device is temporarily out of stock after approval/payment, we may require up to 14 working days to restock.
                  </p>
                  <p className="samsung-text mb-4">
                    If the item remains unavailable after this period, customers may:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 samsung-text mb-4">
                    <li>Choose an alternative phone of equal value</li>
                    <li>Choose a phone of higher value by paying the difference</li>
                    <li>Choose a phone of lower value and receive the difference back as cash, only if paid via cash</li>
                  </ul>
                  <p className="samsung-text font-semibold">
                    Important: If the phone was financed, any amount due back will only be refunded directly to the bank, not to the customer.
                  </p>
                </CardContent>
              </Card>

              {/* Credit Application Process */}
              <Card className="samsung-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl samsung-header mb-4">3. Credit Application Process</h3>
                  <p className="samsung-text mb-4">To purchase on credit:</p>
                  <p className="samsung-text mb-4">
                    Customers must be permanently employed and must submit the following:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 samsung-text mb-4">
                    <li>Latest payslip</li>
                    <li>Employment confirmation letter</li>
                    <li>ID copy</li>
                    <li>The quote issued by Access Electronics</li>
                  </ul>
                  <p className="samsung-text mb-4">
                    Applications can be submitted to your bank (e.g., FNB) or directly through our credit team at{' '}
                    <a href="mailto:credit@accessnamibia.com" className="font-semibold border-b border-black hover:underline">
                      credit@accessnamibia.com
                    </a>.
                  </p>
                  <p className="samsung-text mb-4 font-semibold">
                    📌 Approval usually takes 3-5 working days
                  </p>
                  <p className="samsung-text">
                    Once approved, you'll sign a loan agreement with the credit provider, and the phone will be issued once the bank disburses the funds.
                  </p>
                </CardContent>
              </Card>

              {/* Deposit & Payment Structure */}
              <Card className="samsung-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl samsung-header mb-4">4. Deposit & Payment Structure</h3>
                  <p className="samsung-text mb-4">You may choose to:</p>
                  <ul className="list-disc pl-6 space-y-2 samsung-text">
                    <li>Pay a deposit or trade in a device to reduce the loan amount</li>
                    <li>The remaining balance is divided into monthly installments, payable over 12, 24, or 36 months depending on the chosen option</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Trade-In Option */}
              <Card className="samsung-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl samsung-header mb-4">5. Trade-In Option</h3>
                  <p className="samsung-text mb-4">
                    You can trade in your old phone to reduce the amount you'll pay on credit.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 samsung-text">
                    <li>Final trade-in value is only confirmed after a physical inspection of the device</li>
                    <li>A valid ID and proof of ownership are required for all trade-ins</li>
                    <li>We do not accept stolen, blocked, or blacklisted phones</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Warranty */}
              <Card className="samsung-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl samsung-header mb-4">6. Warranty</h3>
                  <ul className="list-disc pl-6 space-y-2 samsung-text">
                    <li>All mobile phones come with a 12-month software warranty, which excludes any physical, liquid, or accidental damage</li>
                    <li>Accessories come with a 12-month replacement guarantee for manufacturing defects</li>
                    <li>Warranty claims must be assessed by our technicians before replacements are issued</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Returns & Refunds */}
              <Card className="samsung-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl samsung-header mb-4">7. Returns & Refunds</h3>
                  <ul className="list-disc pl-6 space-y-2 samsung-text mb-4">
                    <li>Unused items (still sealed) may be returned within 7 days, but no full refunds are issued</li>
                    <li>Customers may exchange the item or receive a partial value toward another device</li>
                    <li>Used items returned within 7 days qualify for a 70% refund value, which will only be processed to the original bank/financier where applicable</li>
                    <li>Accessories are non-refundable but may be exchanged if faulty under warranty</li>
                  </ul>
                  <p className="samsung-text font-semibold">
                    🚫 Important: For financed purchases, all refunds or adjustments are paid directly to the bank or financial institution. We do not issue refunds in cash for bank-financed purchases.
                  </p>
                </CardContent>
              </Card>

              {/* Delivery & Shipping */}
              <Card className="samsung-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl samsung-header mb-4">8. Delivery & Shipping</h3>
                  <p className="samsung-text mb-4">We offer prompt delivery across Namibia:</p>
                  <div className="mb-4">
                    <h4 className="text-lg samsung-header mb-2">Fast Delivery</h4>
                    <p className="samsung-text">2-hour delivery in Windhoek, Walvis Bay, Rundu, and Oshakati</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-lg samsung-header mb-2">Standard Delivery</h4>
                    <p className="samsung-text">24-hour delivery for towns without a physical branch</p>
                  </div>
                  <div>
                    <h4 className="text-lg samsung-header mb-2">Regional/International Shipping</h4>
                    <p className="samsung-text">Delivery within 7–14 working days</p>
                  </div>
                </CardContent>
              </Card>

              {/* Loan Responsibility */}
              <Card className="samsung-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl samsung-header mb-4">9. Loan Responsibility</h3>
                  <p className="samsung-text mb-4">Once your application is approved and the bank releases payment:</p>
                  <ul className="list-disc pl-6 space-y-2 samsung-text">
                    <li>You are fully responsible for monthly repayments to the bank or financial institution</li>
                    <li>Missed payments may result in penalties, repossession, or legal action</li>
                    <li>Access Electronics is not responsible for handling monthly installment follow-ups</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Quote Acceptance */}
              <Card className="samsung-card">
                <CardContent className="p-6">
                  <h3 className="text-2xl samsung-header mb-4">10. Quote Acceptance</h3>
                  <p className="samsung-text mb-4">
                    By accepting a quote and proceeding with a credit application, the customer confirms that they:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 samsung-text">
                    <li>Have read and understood these terms</li>
                    <li>Agree to provide accurate documentation</li>
                    <li>Understand that no cash refunds will be issued directly to them for financed devices</li>
                    <li>Agree that any fraudulent or dishonest behavior may result in cancellation and legal action</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="samsung-card bg-black text-white">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">💬 Need Help?</h3>
                  <p className="text-white mb-6">Our team is here to guide you every step of the way.</p>
                  
                  <div className="mb-6">
                    <a href="mailto:credit@accessnamibia.com" className="text-white font-semibold hover:underline">
                      credit@accessnamibia.com
                    </a>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center">
                      <h4 className="font-bold text-white mb-2">Windhoek</h4>
                      <p className="text-white text-sm">081 162 6462</p>
                      <p className="text-white text-sm">081 495 2277</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-white mb-2">Oshakati</h4>
                      <p className="text-white text-sm">081 860 1188</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-white mb-2">Walvis Bay</h4>
                      <p className="text-white text-sm">081 670 5032</p>
                    </div>
                    <div className="text-center">
                      <h4 className="font-bold text-white mb-2">Rundu</h4>
                      <p className="text-white text-sm">081 700 5068</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-2">Access Electronics – Empowering You to Own What You Deserve</h4>
                    <p className="text-white">Credit made easy. Service you can trust.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="samsung-container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <img 
                src={logoUrl} 
                alt="Access Electronics" 
                className="h-20 w-auto mb-4"
              />
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
            <p className="text-rose-400/60 text-[10px] sm:text-xs tracking-wider mb-2 animate-heart-pulse">&#10084; Happy Valentine's Month &#10084;</p>
            <p className="text-gray-400 text-sm">
              © 2025 Access Electronics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}