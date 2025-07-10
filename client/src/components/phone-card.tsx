import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

interface Phone {
  name: string;
  storage: string;
  price: number;
  colors: string[];
  condition: string;
}

interface PhoneCardProps {
  phone: Phone;
  onSelect: (name: string, storage: string, price: number) => void;
  onRequestQuote: (name: string, storage: string, price: number, colors: string[]) => void;
}

export default function PhoneCard({ phone, onSelect, onRequestQuote }: PhoneCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    // Add with first available color as default
    addToCart({
      name: phone.name,
      storage: phone.storage,
      price: phone.price,
      color: phone.colors[0]
    });
    
    toast({
      title: "Added to cart",
      description: `${phone.name} ${phone.storage} has been added to your cart`,
    });
  };

  return (
    <Card className="samsung-card hover:shadow-lg transition-all cursor-pointer flex flex-col">
      <CardContent className="text-center p-4 flex-grow flex flex-col">
        <div className="text-2xl mb-3">
          <Smartphone className="mx-auto h-8 w-8 text-black" />
        </div>
        <h4 className="font-semibold samsung-text mb-2 text-base tracking-wide">{phone.name}</h4>
        <p className="text-xs samsung-text mb-2 opacity-70">{phone.storage}</p>
        <p className="text-xl font-bold samsung-text mb-4">N${phone.price.toLocaleString()}</p>
        <div className="space-y-1 text-xs samsung-text mb-4 opacity-70 flex-grow">
          <div>Colors: {phone.colors.join(", ")}</div>
          <div>Condition: {phone.condition}</div>
        </div>
        <div className="space-y-2 mt-auto">
          <Button
            onClick={() => onSelect(phone.name, phone.storage, phone.price)}
            className="samsung-btn w-full py-2 h-10 text-xs"
          >
            SELECT PHONE
          </Button>
          <div className="flex space-x-1">
            <Button
              onClick={handleAddToCart}
              className="samsung-btn-outline flex-1 py-2 h-10 text-xs px-2"
            >
              <ShoppingCart className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">ADD TO CART</span>
              <span className="sm:hidden">ADD</span>
            </Button>
            <Button
              onClick={() => onRequestQuote(phone.name, phone.storage, phone.price, phone.colors)}
              className="samsung-btn-outline flex-1 py-2 h-10 text-xs px-2"
            >
              <span className="hidden sm:inline">QUOTE NOW</span>
              <span className="sm:hidden">QUOTE</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
