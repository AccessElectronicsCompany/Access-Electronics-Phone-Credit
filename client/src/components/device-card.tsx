import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { getProductImage } from "@/lib/product-images";

interface Device {
  name: string;
  storage?: string;
  price: number;
  colors: string[];
  condition: string;
  specs?: string;
}

interface DeviceCardProps {
  device: Device;
  category: string;
  onSelect: (name: string, storage: string, price: number, colors: string[]) => void;
  onAddToCart: (name: string, storage: string, price: number, color: string) => void;
  index?: number;
}

export default function DeviceCard({ device, category, onSelect, onAddToCart, index = 0 }: DeviceCardProps) {
  const productImage = getProductImage(device.name, category);

  return (
    <Card 
      className="bg-white border border-neutral-200 hover:border-sky-500/50 transition-all duration-500 cursor-pointer flex flex-col h-full rounded-sm group active:scale-[0.98] animate-in slide-in-from-bottom" 
      style={{ boxShadow: '0 2px 15px rgba(0, 0, 0, 0.04)', animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="text-center p-4 sm:p-5 flex-grow flex flex-col h-full">
        <div className="mb-3 sm:mb-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-lg overflow-hidden bg-neutral-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img 
              src={productImage} 
              alt={device.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h4 className="font-semibold text-neutral-900 mb-1 sm:mb-2 text-xs sm:text-sm tracking-wide line-clamp-2">{device.name}</h4>
        {device.storage && (
          <p className="text-[10px] sm:text-xs text-neutral-500 mb-1 tracking-wide">{device.storage}</p>
        )}
        {device.specs && (
          <p className="text-[10px] sm:text-xs text-neutral-400 mb-2 line-clamp-2">{device.specs}</p>
        )}
        <p className="text-lg sm:text-xl font-bold text-sky-600 mb-3 sm:mb-4">N${device.price.toLocaleString()}</p>
        <div className="space-y-0.5 sm:space-y-1 text-[10px] sm:text-xs text-neutral-500 mb-3 sm:mb-5 flex-grow">
          <div className="truncate">Colors: {device.colors.slice(0, 2).join(", ")}{device.colors.length > 2 ? '...' : ''}</div>
          <div className={device.condition === "USED" ? "text-sky-600 font-medium" : ""}>Condition: {device.condition}</div>
        </div>
        <div className="space-y-2 mt-auto">
          <Button
            onClick={() => onSelect(device.name, device.storage || "", device.price, device.colors)}
            className="w-full py-2 sm:py-2.5 h-9 sm:h-10 text-[10px] sm:text-xs bg-neutral-900 text-sky-400 hover:bg-neutral-800 rounded-sm font-medium tracking-widest transition-all duration-300"
          >
            REQUEST QUOTE
          </Button>
          <Button
            onClick={() => onAddToCart(device.name, device.storage || "", device.price, device.colors[0])}
            className="w-full py-1.5 sm:py-2 h-8 sm:h-9 text-[10px] sm:text-xs bg-transparent border border-neutral-300 text-neutral-700 hover:border-sky-500 hover:text-sky-600 rounded-sm font-medium tracking-wider transition-all duration-300"
          >
            <ShoppingCart className="h-3 w-3 mr-1" />
            ADD TO CART
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
