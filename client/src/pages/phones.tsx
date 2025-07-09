import { useState } from "react";
import { Link } from "wouter";
import PhoneCard from "@/components/phone-card";
import QuoteFormModal from "@/components/quote-form-modal";
import { iphones, samsungPhones } from "@/lib/phone-data";
import { ArrowLeft } from "lucide-react";

export default function Phones() {
  const [selectedPhone, setSelectedPhone] = useState<{
    name: string;
    storage: string;
    price: number;
  } | null>(null);
  
  const [showQuoteForm, setShowQuoteForm] = useState(false);

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
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
              <h1 className="text-2xl font-bold gradient-text">
                Phone Collection
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* iPhone Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">iPhone Collection</h2>
            <p className="text-gray-600">Premium Apple devices with cutting-edge technology</p>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Samsung Collection</h2>
            <p className="text-gray-600">Innovation meets performance in Samsung's flagship devices</p>
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

      {/* Quote Form Modal */}
      <QuoteFormModal
        isOpen={showQuoteForm}
        onClose={() => setShowQuoteForm(false)}
        selectedPhone={selectedPhone}
      />
    </div>
  );
}