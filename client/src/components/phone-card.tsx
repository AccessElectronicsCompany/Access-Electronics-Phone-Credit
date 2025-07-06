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
}

export default function PhoneCard({ phone, onSelect }: PhoneCardProps) {
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
        <Button
          onClick={() => onSelect(phone.name, phone.storage, phone.price)}
          className="w-full gradient-bg text-white hover:opacity-90 transition-opacity rounded-full font-semibold"
        >
          Select Phone
        </Button>
      </CardContent>
    </Card>
  );
}
