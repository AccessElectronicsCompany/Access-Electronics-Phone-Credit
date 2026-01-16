import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import PhoneStorageSelectionModal from "./phone-storage-selection-modal";

interface Phone {
  name: string;
  storage: string;
  price: number;
  colors: string[];
  condition: string;
}

interface PhoneCardProps {
  phone: Phone;
  phoneType: "iphone" | "samsung" | "used";
  onSelect: (name: string, storage: string, price: number) => void;
  onRequestQuote: (name: string, storage: string, price: number, colors: string[], condition?: string) => void;
}

export default function PhoneCard({ phone, phoneType, onSelect, onRequestQuote }: PhoneCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [showStorageSelection, setShowStorageSelection] = useState(false);

  const handleAddToCart = () => {
    setShowStorageSelection(true);
  };

  return (
    <>
      <PhoneStorageSelectionModal
        isOpen={showStorageSelection}
        onClose={() => setShowStorageSelection(false)}
        phoneBaseName={phone.name}
        phoneType={phoneType}
      />
      <Card className="bg-white border border-neutral-200 hover:border-amber-500/50 transition-all duration-500 cursor-pointer flex flex-col h-full rounded-sm group" style={{ boxShadow: '0 2px 15px rgba(0, 0, 0, 0.04)' }}>
        <CardContent className="text-center p-5 flex-grow flex flex-col h-full">
          <div className="text-2xl mb-4">
            <div className="w-12 h-12 mx-auto bg-neutral-900 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
              <Smartphone className="h-6 w-6 text-amber-400 group-hover:text-neutral-900 transition-colors duration-300" />
            </div>
          </div>
          <h4 className="font-semibold text-neutral-900 mb-2 text-sm tracking-wide" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{phone.name}</h4>
          <p className="text-xs text-neutral-500 mb-2 tracking-wide">{phone.storage}</p>
          <p className="text-xl font-bold text-amber-600 mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>N${phone.price.toLocaleString()}</p>
          <div className="space-y-1 text-xs text-neutral-500 mb-5 flex-grow">
            <div className="truncate">Colors: {phone.colors.slice(0, 3).join(", ")}{phone.colors.length > 3 ? '...' : ''}</div>
            <div className={phone.condition === "USED" ? "text-amber-600 font-medium" : ""}>Condition: {phone.condition}</div>
          </div>
          <div className="space-y-2 mt-auto">
            <Button
              onClick={() => onSelect(phone.name, phone.storage, phone.price)}
              className="w-full py-2.5 h-10 text-xs bg-neutral-900 text-amber-400 hover:bg-neutral-800 rounded-sm font-medium tracking-widest transition-all duration-300"
            >
              SELECT PHONE
            </Button>
            <div className="flex gap-2">
              <Button
                onClick={handleAddToCart}
                className="flex-1 py-2 h-9 text-xs bg-transparent border border-neutral-300 text-neutral-700 hover:border-amber-500 hover:text-amber-600 rounded-sm font-medium tracking-wider transition-all duration-300"
              >
                <ShoppingCart className="h-3 w-3 mr-1" />
                <span className="hidden lg:inline">ADD</span>
                <span className="lg:hidden">+</span>
              </Button>
              <Button
                onClick={() => onRequestQuote(phone.name, phone.storage, phone.price, phone.colors, phone.condition)}
                className="flex-1 py-2 h-9 text-xs bg-transparent border border-neutral-300 text-neutral-700 hover:border-amber-500 hover:text-amber-600 rounded-sm font-medium tracking-wider transition-all duration-300"
              >
                QUOTE
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
