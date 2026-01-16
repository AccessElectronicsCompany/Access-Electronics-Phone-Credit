import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import PhoneStorageSelectionModal from "./phone-storage-selection-modal";
import { getProductImage } from "@/lib/product-images";

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

  const productImage = getProductImage(phone.name, phoneType);

  return (
    <>
      <PhoneStorageSelectionModal
        isOpen={showStorageSelection}
        onClose={() => setShowStorageSelection(false)}
        phoneBaseName={phone.name}
        phoneType={phoneType}
      />
      <Card className="bg-white border border-neutral-200 hover:border-sky-500/50 transition-all duration-500 cursor-pointer flex flex-col h-full rounded-sm group active:scale-[0.98]" style={{ boxShadow: '0 2px 15px rgba(0, 0, 0, 0.04)' }}>
        <CardContent className="text-center p-4 sm:p-5 flex-grow flex flex-col h-full">
          <div className="mb-3 sm:mb-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-lg overflow-hidden bg-neutral-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img 
                src={productImage} 
                alt={phone.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h4 className="font-semibold text-neutral-900 mb-1 sm:mb-2 text-xs sm:text-sm tracking-wide line-clamp-2">{phone.name}</h4>
          <p className="text-[10px] sm:text-xs text-neutral-500 mb-1 sm:mb-2 tracking-wide">{phone.storage}</p>
          <p className="text-lg sm:text-xl font-bold text-sky-600 mb-3 sm:mb-4">N${phone.price.toLocaleString()}</p>
          <div className="space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs text-neutral-500 mb-3 sm:mb-5 flex-grow">
            <div className="truncate">Colors: {phone.colors.slice(0, 2).join(", ")}{phone.colors.length > 2 ? '...' : ''}</div>
            <div className={phone.condition === "USED" ? "text-sky-600 font-medium" : ""}>Condition: {phone.condition}</div>
          </div>
          <div className="space-y-2 mt-auto">
            <Button
              onClick={() => onSelect(phone.name, phone.storage, phone.price)}
              className="w-full py-2 sm:py-2.5 h-9 sm:h-10 text-[10px] sm:text-xs bg-neutral-900 text-sky-400 hover:bg-neutral-800 rounded-sm font-medium tracking-widest transition-all duration-300"
            >
              SELECT
            </Button>
            <div className="flex gap-1.5 sm:gap-2">
              <Button
                onClick={handleAddToCart}
                className="flex-1 py-1.5 sm:py-2 h-8 sm:h-9 text-[10px] sm:text-xs bg-transparent border border-neutral-300 text-neutral-700 hover:border-sky-500 hover:text-sky-600 rounded-sm font-medium tracking-wider transition-all duration-300"
              >
                <ShoppingCart className="h-3 w-3 mr-0.5 sm:mr-1" />
                <span>ADD</span>
              </Button>
              <Button
                onClick={() => onRequestQuote(phone.name, phone.storage, phone.price, phone.colors, phone.condition)}
                className="flex-1 py-1.5 sm:py-2 h-8 sm:h-9 text-[10px] sm:text-xs bg-transparent border border-neutral-300 text-neutral-700 hover:border-sky-500 hover:text-sky-600 rounded-sm font-medium tracking-wider transition-all duration-300"
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
