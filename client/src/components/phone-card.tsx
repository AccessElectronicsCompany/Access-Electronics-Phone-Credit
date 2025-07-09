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
    <Card className="samsung-card hover:shadow-lg transition-all cursor-pointer">
      <CardContent className="text-center p-8">
        <div className="text-4xl mb-6">
          <Smartphone className="mx-auto h-16 w-16 text-black" />
        </div>
        <h4 className="font-semibold samsung-text mb-3 text-lg tracking-wide">{phone.name}</h4>
        <p className="text-sm samsung-text mb-3 opacity-70">{phone.storage}</p>
        <p className="text-3xl font-bold samsung-text mb-6">N${phone.price.toLocaleString()}</p>
        <div className="space-y-2 text-sm samsung-text mb-6 opacity-70">
          <div>Colors: {phone.colors.join(", ")}</div>
          <div>Condition: {phone.condition}</div>
        </div>
        <div className="space-y-3">
          <Button
            onClick={() => onSelect(phone.name, phone.storage, phone.price)}
            className="samsung-btn w-full py-3"
          >
            Select Phone
          </Button>
          <Button
            onClick={() => onRequestQuote(phone.name, phone.storage, phone.price)}
            className="samsung-btn-outline w-full py-3"
          >
            Request Quote
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
