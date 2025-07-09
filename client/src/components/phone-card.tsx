import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

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
  onRequestQuote: (name: string, storage: string, price: number) => void;
}

export default function PhoneCard({ phone, onSelect, onRequestQuote }: PhoneCardProps) {
  return (
    <Card className="gradient-border-light hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer">
      <CardContent className="text-center p-6">
        <div className="text-4xl mb-4">
          <Smartphone className="mx-auto h-12 w-12 text-gray-400" />
        </div>
        <h4 className="font-semibold text-gray-900 mb-2">{phone.name}</h4>
        <p className="text-sm text-gray-600 mb-2">{phone.storage}</p>
        <p className="text-2xl font-bold gradient-text mb-4">N${phone.price.toLocaleString()}</p>
        <div className="space-y-2 text-sm text-gray-600 mb-4">
          <div>Colors: {phone.colors.join(", ")}</div>
          <div>Condition: {phone.condition}</div>
        </div>
        <div className="space-y-2">
          <Button
            onClick={() => onSelect(phone.name, phone.storage, phone.price)}
            className="w-full gradient-bg text-white hover:opacity-90 transition-opacity rounded-full font-semibold"
          >
            Select Phone
          </Button>
          <Button
            onClick={() => onRequestQuote(phone.name, phone.storage, phone.price)}
            variant="outline"
            className="w-full border-2 border-gray-300 text-gray-700 hover:border-gray-400 rounded-full font-semibold"
          >
            Request Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
