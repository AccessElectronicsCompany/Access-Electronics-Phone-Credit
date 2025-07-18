import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { iphones, samsungPhones, ipads, macbooks, buds, watches, samsungTablets } from "@/lib/phone-data";

interface PhoneStorageSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneBaseName: string; // e.g., "iPhone 16 Pro"
  phoneType: "iphone" | "samsung" | "ipad" | "macbook" | "buds" | "watch" | "tablet";
}

export default function PhoneStorageSelectionModal({ 
  isOpen, 
  onClose, 
  phoneBaseName,
  phoneType 
}: PhoneStorageSelectionModalProps) {
  const [selectedStorage, setSelectedStorage] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const { addToCart } = useCart();
  const { toast } = useToast();

  // Get all storage options for this device model
  const getPhoneData = () => {
    switch (phoneType) {
      case "iphone": return iphones;
      case "samsung": return samsungPhones;
      case "ipad": return ipads;
      case "macbook": return macbooks;
      case "buds": return buds;
      case "watch": return watches;
      case "tablet": return samsungTablets;
      default: return [...iphones, ...samsungPhones, ...ipads, ...macbooks, ...buds, ...watches, ...samsungTablets];
    }
  };
  
  const phoneData = getPhoneData();
  const phoneVariants = phoneData.filter(phone => phone.name === phoneBaseName);
  
  // Check if this device type needs storage selection
  const isWatch = phoneType === "watch";
  const isBuds = phoneType === "buds";
  const needsStorageSelection = !isWatch && !isBuds && phoneVariants.some(phone => phone.storage);
  
  // Get unique storage options (handle devices without storage)
  const storageOptions = needsStorageSelection 
    ? Array.from(new Set(phoneVariants.map(phone => phone.storage || 'Standard')))
    : ['Standard'];
  
  // For devices that don't need storage selection, auto-select the first variant
  if (!needsStorageSelection && !selectedStorage) {
    setSelectedStorage('Standard');
  }
  
  // Get selected phone variant
  const selectedPhoneVariant = needsStorageSelection 
    ? phoneVariants.find(phone => (phone.storage || 'Standard') === selectedStorage)
    : phoneVariants[0];
  
  // Get available colors for selected storage
  const availableColors = selectedPhoneVariant?.colors || [];

  const handleAddToCart = () => {
    if (needsStorageSelection && (!selectedStorage || !selectedColor)) {
      toast({
        title: "Selection Required",
        description: "Please select both storage and color options",
        variant: "destructive",
      });
      return;
    }
    
    if (!needsStorageSelection && !selectedColor) {
      toast({
        title: "Selection Required",
        description: "Please select a color option",
        variant: "destructive",
      });
      return;
    }

    const phoneVariant = needsStorageSelection 
      ? phoneVariants.find(phone => (phone.storage || 'Standard') === selectedStorage)
      : phoneVariants[0];
      
    if (!phoneVariant) {
      toast({
        title: "Error",
        description: "Selected phone variant not found",
        variant: "destructive",
      });
      return;
    }

    addToCart({
      name: phoneVariant.name,
      storage: phoneVariant.storage,
      price: phoneVariant.price,
      color: selectedColor
    });

    toast({
      title: "Added to cart",
      description: `${phoneVariant.name}${phoneVariant.storage ? ` ${phoneVariant.storage}` : ''} in ${selectedColor} has been added to your cart`,
    });

    // Reset and close
    setSelectedStorage("");
    setSelectedColor("");
    onClose();
  };

  const handleClose = () => {
    setSelectedStorage("");
    setSelectedColor("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md rounded-xl border-2 border-black">
        <DialogHeader>
          <DialogTitle className="samsung-header text-xl">
            {needsStorageSelection ? "Select Storage & Color" : "Select Color"}
          </DialogTitle>
          <DialogDescription className="samsung-text">
            {needsStorageSelection 
              ? `Choose your preferred storage capacity and color for ${phoneBaseName}`
              : `Choose your preferred color for ${phoneBaseName}`
            }
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Storage Selection - Only show for devices that need it */}
          {needsStorageSelection && (
            <div>
              <Label htmlFor="storage" className="text-sm font-semibold samsung-text mb-2 block">
                Storage Capacity *
              </Label>
              <Select value={selectedStorage} onValueChange={setSelectedStorage}>
                <SelectTrigger className="rounded-xl border-2 border-gray-300 focus:border-black">
                  <SelectValue placeholder="Select storage capacity" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {storageOptions.map((storage) => {
                    const variant = phoneVariants.find(phone => phone.storage === storage);
                    return (
                      <SelectItem key={storage} value={storage}>
                        {storage} - N${variant?.price.toLocaleString()}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Color Selection */}
          <div>
            <Label htmlFor="color" className="text-sm font-semibold samsung-text mb-2 block">
              Color *
            </Label>
            <Select 
              value={selectedColor} 
              onValueChange={setSelectedColor}
              disabled={needsStorageSelection && !selectedStorage}
            >
              <SelectTrigger className="rounded-xl border-2 border-gray-300 focus:border-black">
                <SelectValue placeholder={
                  needsStorageSelection 
                    ? (selectedStorage ? "Select color" : "Select storage first")
                    : "Select color"
                } />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {availableColors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Selected Phone Details */}
          {selectedPhoneVariant && (
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 className="samsung-text font-semibold mb-2">Selected Configuration:</h4>
              <div className="space-y-1 text-sm samsung-text">
                <div>Model: {selectedPhoneVariant.name}</div>
                {needsStorageSelection && selectedPhoneVariant.storage && (
                  <div>Storage: {selectedPhoneVariant.storage}</div>
                )}
                <div>Price: N${selectedPhoneVariant.price.toLocaleString()}</div>
                <div>Condition: {selectedPhoneVariant.condition}</div>
                {selectedColor && <div>Color: {selectedColor}</div>}
              </div>
            </div>
          )}
        </div>

        <div className="flex space-x-2 mt-6">
          <Button 
            variant="outline" 
            onClick={handleClose}
            className="flex-1 rounded-xl"
          >
            Cancel
          </Button>
          <Button 
            onClick={handleAddToCart}
            className="flex-1 rounded-xl samsung-btn"
            disabled={needsStorageSelection ? (!selectedStorage || !selectedColor) : !selectedColor}
          >
            Add to Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}