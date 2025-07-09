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
  onRequestQuote: (name: string, storage: string, price: number, colors: string[]) => void;
}

export default function PhoneCard({ phone, onSelect, onRequestQuote }: PhoneCardProps) {
  return (
    <Card className="samsung-card hover:shadow-lg transition-all cursor-pointer">
      <CardContent className="text-center p-4">
        <div className="text-2xl mb-3">
          <Smartphone className="mx-auto h-8 w-8 text-black" />
        </div>
        <h4 className="font-semibold samsung-text mb-2 text-base tracking-wide">{phone.name}</h4>
        <p className="text-xs samsung-text mb-2 opacity-70">{phone.storage}</p>
        <p className="text-xl font-bold samsung-text mb-4">N${phone.price.toLocaleString()}</p>
        <div className="space-y-1 text-xs samsung-text mb-4 opacity-70">
          <div>Colors: {phone.colors.join(", ")}</div>
          <div>Condition: {phone.condition}</div>
        </div>
        <div className="space-y-2">
          <Button
            onClick={() => onSelect(phone.name, phone.storage, phone.price)}
            className="samsung-btn w-full py-2 h-8 text-xs"
          >
            SELECT PHONE
          </Button>
          <Button
            onClick={() => onRequestQuote(phone.name, phone.storage, phone.price, phone.colors)}
            className="samsung-btn-outline w-full py-2 h-8 text-xs"
          >
            REQUEST QUOTE
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
