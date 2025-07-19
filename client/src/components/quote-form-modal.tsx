import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { calculatePayment } from "@/lib/calculations";
import { useCart } from "@/contexts/CartContext";
import { iphones, samsungPhones, ipads, macbooks, buds, watches, samsungTablets } from "@/lib/phone-data";
import SuccessModal from "./success-modal";

const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  contactNumber: z.string().min(10, "Valid contact number is required"),
  email: z.string().email("Valid email is required"),
  physicalAddress: z.string().min(1, "Physical address is required"),
  city: z.string().min(2, "City is required"),
  region: z.string().min(2, "Region is required"),
  country: z.string().min(2, "Country is required"),
  productName: z.string().min(2, "Product name is required"),
  storageCapacity: z.string().optional(), // Made optional since watches/buds don't need storage
  condition: z.string().min(1, "Condition is required"),
  color: z.string().min(2, "Color is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  originalPrice: z.number().min(1, "Original price is required"),
  creditAmount: z.number().min(1, "Credit amount is required"),
  deposit: z.number().min(0, "Deposit must be 0 or greater").optional(),
  depositMethod: z.string().optional(),
  paymentTerm: z.number().min(12, "Payment term is required"),
});

// Schema for individual phone selections in multi-phone quotes
const phoneSelectionSchema = z.object({
  name: z.string().min(1, "Phone name is required"),
  storage: z.string().min(1, "Storage selection is required"),
  color: z.string().min(1, "Color selection is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  price: z.number().min(1, "Price is required"),
});

const namibianRegions = [
  "Erongo",
  "Hardap",
  "Kavango East",
  "Kavango West",
  "Khomas",
  "Kunene",
  "Ohangwena",
  "Omaheke",
  "Omusati",
  "Oshana",
  "Oshikoto",
  "Otjozondjupa",
  "Zambezi",
  "ǁKaras"
];

type QuoteFormData = z.infer<typeof quoteFormSchema>;

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPhone: {
    name: string;
    storage: string;
    price: number;
    colors: string[];
  } | null;
}

export default function QuoteFormModal({ isOpen, onClose, selectedPhone }: QuoteFormModalProps) {
  const [paymentTerm, setPaymentTerm] = useState("36");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [depositMethod, setDepositMethod] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { cartItems, clearCart } = useCart();
  
  // Check if we're handling a cart-based quote
  const isCartQuote = !selectedPhone && cartItems.length > 0;
  
  // Get unique phone models from cart for multi-phone selection
  const uniquePhoneModels = isCartQuote ? 
    Array.from(new Set(cartItems.map(item => item.name))).map(name => {
      const cartItem = cartItems.find(item => item.name === name);
      return { name, baseItem: cartItem };
    }) : [];
  
  // State for individual phone selections in multi-phone quotes
  const [phoneSelections, setPhoneSelections] = useState<{[key: string]: {
    storage: string;
    color: string;
    quantity: number;
    price: number;
  }}>({});
  
  // Initialize phone selections when modal opens with cart items
  useEffect(() => {
    if (isCartQuote && uniquePhoneModels.length > 0) {
      const initialSelections: {[key: string]: {storage: string; color: string; quantity: number; price: number}} = {};
      uniquePhoneModels.forEach(phoneModel => {
        initialSelections[phoneModel.name] = {
          storage: "",
          color: "",
          quantity: 1,
          price: 0
        };
      });
      setPhoneSelections(initialSelections);
    }
  }, [isCartQuote, uniquePhoneModels.length]);



  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
    control,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      email: "",
      physicalAddress: "",
      city: "",
      region: "",
      country: "Namibia",
      productName: selectedPhone?.name || "",
      storageCapacity: selectedPhone ? (
        watches.some(w => w.name === selectedPhone.name) || buds.some(b => b.name === selectedPhone.name) 
          ? "N/A" 
          : selectedPhone.storage || ""
      ) : "",
      condition: "NEW",
      color: "",
      quantity: 1,
      originalPrice: selectedPhone?.price || 0,
      creditAmount: selectedPhone?.price || 0,
      deposit: 0,
      depositMethod: "",
      paymentTerm: 36,
    },
  });

  // Update form when selectedPhone changes or cart is being used
  useEffect(() => {
    if (selectedPhone) {
      setValue("productName", selectedPhone.name);
      
      // Only set storage capacity for devices that have storage
      const isWatch = watches.some(w => w.name === selectedPhone.name);
      const isBuds = buds.some(b => b.name === selectedPhone.name);
      if (!isWatch && !isBuds) {
        setValue("storageCapacity", selectedPhone.storage || "");
      } else {
        setValue("storageCapacity", "N/A"); // Set N/A for watches/buds
      }
      
      setValue("originalPrice", selectedPhone.price);
      setValue("creditAmount", selectedPhone.price);
      setValue("country", "Namibia");
      setValue("condition", "NEW");
      setValue("color", "");
    } else if (isCartQuote) {
      // For cart quotes, calculate total from cart items using their selected configurations
      const totalPrice = cartItems.reduce((sum, item) => {
        const phoneSelection = phoneSelections[item.name];
        const itemPrice = phoneSelection?.price || item.price;
        return sum + (itemPrice * item.quantity); // Multiply by quantity for total
      }, 0);
      const phoneNames = Array.from(new Set(cartItems.map(item => item.name))).join(", ");
      const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      
      setValue("productName", phoneNames || "Multiple Phones");
      setValue("storageCapacity", "Multiple");
      setValue("originalPrice", totalPrice || 0);
      setValue("creditAmount", totalPrice || 0);
      setValue("country", "Namibia");
      setValue("condition", "NEW");
      setValue("color", "Multiple");
      setValue("quantity", totalQuantity); // Total quantity = sum of all item quantities
    }
  }, [selectedPhone, isCartQuote, phoneSelections, setValue]);

  // Watch for changes in original price, deposit, and payment term for automatic calculation
  const originalPrice = watch("originalPrice");
  const deposit = watch("deposit") || 0;
  const watchedDepositMethod = watch("depositMethod");
  
  useEffect(() => {
    if (originalPrice && originalPrice > 0) {
      // Calculate credit amount dynamically: credit amount = original price - deposit
      const creditAmount = originalPrice - deposit;
      setValue("creditAmount", creditAmount);

      const calculation = calculatePayment(
        originalPrice,
        parseInt(paymentTerm),
        deposit || 0
      );
      setMonthlyPayment(calculation.monthlyPayment.toFixed(2));
      setTotalAmount(calculation.totalAmount.toFixed(2));
    }
  }, [originalPrice, deposit, paymentTerm, setValue]);

  const createQuoteMutation = useMutation({
    mutationFn: async (data: QuoteFormData) => {
      const calculation = calculatePayment(
        data.originalPrice,
        data.paymentTerm,
        data.deposit || 0
      );
      
      const quoteData = {
        ...data,
        deposit: data.deposit?.toString() || "0",
        depositMethod: data.depositMethod || "",
        originalPrice: data.originalPrice.toString(),
        creditAmount: calculation.creditAmount.toString(),
        monthlyPayment: calculation.monthlyPayment.toString(),
        totalAmount: calculation.totalAmount.toString(),
        cartItems: isCartQuote ? JSON.stringify(cartItems) : null,
        isMultipleItems: isCartQuote ? "true" : "false",
      };

      // Submit to FormCarry with enhanced cart data
      const formData = new FormData();
      Object.entries(quoteData).forEach(([key, value]) => {
        formData.append(key, value?.toString() || '');
      });

      // If cart quote, add detailed individual phone data to FormCarry
      if (isCartQuote) {
        // Create individual entries for each phone unit (expanding quantities)
        let phoneIndex = 1;
        cartItems.forEach((item) => {
          // Get the phone selection details for this cart item
          const phoneSelection = phoneSelections[item.name];
          const itemPrice = phoneSelection?.price || item.price;
          const itemStorage = phoneSelection?.storage || item.storage;
          const itemColor = phoneSelection?.color || item.color;
          
          // Create separate entries for each quantity of this item
          for (let i = 0; i < item.quantity; i++) {
            formData.append(`phone_${phoneIndex}_name`, item.name);
            formData.append(`phone_${phoneIndex}_storage`, itemStorage);
            formData.append(`phone_${phoneIndex}_color`, itemColor);
            formData.append(`phone_${phoneIndex}_quantity`, "1"); // Each entry is quantity 1
            formData.append(`phone_${phoneIndex}_price`, itemPrice.toString());
            formData.append(`phone_${phoneIndex}_total`, itemPrice.toString()); // Total = price * 1
            phoneIndex++;
          }
        });
        
        const totalPhones = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        const totalAmount = cartItems.reduce((sum, item) => {
          const phoneSelection = phoneSelections[item.name];
          const itemPrice = phoneSelection?.price || item.price;
          return sum + (itemPrice * item.quantity);
        }, 0);
        
        formData.append('total_phones', totalPhones.toString());
        formData.append('total_quantity', totalPhones.toString());
        formData.append('total_amount', totalAmount.toString());
      }

      try {
        const formCarryResponse = await fetch("https://formcarry.com/s/UzI6HDYG6hC", {
          method: "POST",
          body: formData,
        });

        if (!formCarryResponse.ok) {
          console.warn("FormCarry submission failed, but continuing with internal API");
        }
      } catch (error) {
        console.warn("FormCarry submission error:", error);
      }

      // Also submit to our internal API
      return apiRequest("POST", "/api/quote-requests", quoteData);
    },
    onSuccess: () => {
      // Clear cart if this was a cart quote
      if (isCartQuote) {
        clearCart();
      }
      
      reset();
      onClose();
      setShowSuccessModal(true);
      queryClient.invalidateQueries({ queryKey: ["/api/quote-requests"] });
    },
    onError: (error: any) => {
      console.error("Quote submission failed:", error);
      
      // Handle rate limit error (429 status)
      if (error.status === 429) {
        toast({
          title: "Quote Request Limit Reached",
          description: error.message || "You have reached the maximum number of quote requests. Please try again in 30 minutes.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error.message || "Failed to submit quote request. Please try again.",
          variant: "destructive",
        });
      }
    },
  });

  const onSubmit = (data: QuoteFormData) => {
    // Validate individual phone selections for multi-phone quotes
    if (isCartQuote) {
      const incompleteSelections = uniquePhoneModels.filter(phoneModel => {
        const selection = phoneSelections[phoneModel.name];
        const isWatch = watches.some(w => w.name === phoneModel.name);
        const isBuds = buds.some(b => b.name === phoneModel.name);
        const needsStorageSelection = !isWatch && !isBuds;
        
        // For devices that need storage selection, check both storage and color
        if (needsStorageSelection) {
          return !selection || !selection.storage || !selection.color || !selection.quantity;
        }
        // For devices that don't need storage selection (watches, buds), only check color
        else {
          return !selection || !selection.color || !selection.quantity;
        }
      });
      
      if (incompleteSelections.length > 0) {
        toast({
          title: "Incomplete Selections",
          description: `Please complete color selections for: ${incompleteSelections.map(p => p.name).join(", ")}`,
          variant: "destructive",
        });
        return;
      }
    }
    
    createQuoteMutation.mutate(data);
  };



  const handleRequestAnother = () => {
    // Reset form and reopen
    reset();
    setShowSuccessModal(false);
    // Small delay to ensure modal closes first
    setTimeout(() => {
      onClose();
    }, 100);
  };

  return (
    <>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        onRequestAnother={handleRequestAnother}
      />
      <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-4 md:p-8 m-2 md:m-4 rounded-xl border-2 border-black w-[95vw] md:w-auto">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-3xl samsung-header text-center mb-2">
            {isCartQuote ? "Request Quote for Your Cart" : `Request Quote for ${selectedPhone?.name}`}
          </DialogTitle>
          <DialogDescription className="samsung-text text-center text-lg">
            {isCartQuote 
              ? "Please fill out the form below to request a quote for all items in your cart."
              : "Please fill out the form below to request a quote for your selected phone."
            }
          </DialogDescription>

        </DialogHeader>
        
        {/* Individual Phone Selection Sections for Multi-Phone Quotes */}
        {isCartQuote && (
          <div className="bg-blue-50 p-4 md:p-6 rounded-xl border border-blue-200 mb-6">
            <h3 className="text-lg md:text-xl samsung-header mb-4">Select Storage & Color for Each Phone</h3>
            <div className="space-y-6">
              {uniquePhoneModels.map((phoneModel, index) => {
                const phoneData = [...iphones, ...samsungPhones, ...ipads, ...macbooks, ...buds, ...watches, ...samsungTablets];
                const phoneVariants = phoneData.filter(phone => phone.name === phoneModel.name);
                
                // Check if this device type needs storage selection
                const isWatch = watches.some(w => w.name === phoneModel.name);
                const isBuds = buds.some(b => b.name === phoneModel.name);
                const needsStorageSelection = !isWatch && !isBuds && phoneVariants.some(phone => phone.storage);
                
                const storageOptions = needsStorageSelection 
                  ? Array.from(new Set(phoneVariants.map(phone => phone.storage || 'Standard')))
                  : ['Standard'];
                
                const currentSelection = phoneSelections[phoneModel.name] || {};
                
                // For devices that don't need storage selection, auto-select the first variant
                if (!needsStorageSelection && !currentSelection.storage) {
                  const firstVariant = phoneVariants[0];
                  if (firstVariant) {
                    setPhoneSelections(prev => ({
                      ...prev,
                      [phoneModel.name]: {
                        storage: 'Standard',
                        price: firstVariant.price,
                        color: "",
                        quantity: 1
                      }
                    }));
                  }
                }
                
                const selectedVariant = needsStorageSelection 
                  ? phoneVariants.find(phone => (phone.storage || 'Standard') === currentSelection.storage)
                  : phoneVariants[0];
                const availableColors = selectedVariant?.colors || [];
                
                return (
                  <div key={phoneModel.name} className="bg-white p-4 rounded-xl border border-gray-200">
                    <h4 className="samsung-text font-semibold text-lg mb-4">{phoneModel.name}</h4>
                    
                    <div className={`grid grid-cols-1 ${needsStorageSelection ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4`}>
                      {/* Storage Selection - Only show for devices that need it */}
                      {needsStorageSelection && (
                        <div>
                          <Label className="text-sm font-semibold samsung-text mb-2 block">Storage Capacity *</Label>
                          <Select
                            value={currentSelection.storage || ""}
                            onValueChange={(value) => {
                              const variant = phoneVariants.find(phone => (phone.storage || 'Standard') === value);
                              if (variant) {
                                setPhoneSelections(prev => ({
                                  ...prev,
                                  [phoneModel.name]: {
                                    ...prev[phoneModel.name],
                                    storage: value,
                                    price: variant.price,
                                    color: "", // Reset color when storage changes
                                    quantity: prev[phoneModel.name]?.quantity || 1
                                  }
                                }));
                              }
                            }}
                          >
                            <SelectTrigger className="rounded-xl border-2 border-gray-300 focus:border-black">
                              <SelectValue placeholder="Select storage capacity" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                              {storageOptions.map((storage) => {
                                const variant = phoneVariants.find(phone => (phone.storage || 'Standard') === storage);
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
                        <Label className="text-sm font-semibold samsung-text mb-2 block">Color *</Label>
                        <Select
                          value={currentSelection.color || ""}
                          onValueChange={(value) => {
                            setPhoneSelections(prev => ({
                              ...prev,
                              [phoneModel.name]: {
                                ...prev[phoneModel.name],
                                color: value
                              }
                            }));
                          }}
                          disabled={!currentSelection.storage}
                        >
                          <SelectTrigger className="rounded-xl border-2 border-gray-300 focus:border-black">
                            <SelectValue placeholder={currentSelection.storage ? "Select color" : "Select storage first"} />
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
                      
                      {/* Quantity Selection */}
                      <div>
                        <Label className="text-sm font-semibold samsung-text mb-2 block">Quantity *</Label>
                        <Select
                          value={currentSelection.quantity?.toString() || "1"}
                          onValueChange={(value) => {
                            setPhoneSelections(prev => ({
                              ...prev,
                              [phoneModel.name]: {
                                ...prev[phoneModel.name],
                                quantity: parseInt(value)
                              }
                            }));
                          }}
                        >
                          <SelectTrigger className="rounded-xl border-2 border-gray-300 focus:border-black">
                            <SelectValue placeholder="Select quantity" />
                          </SelectTrigger>
                          <SelectContent className="rounded-xl">
                            {[1, 2, 3, 4, 5].map((qty) => (
                              <SelectItem key={qty} value={qty.toString()}>
                                {qty}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    {/* Selection Summary */}
                    {currentSelection.storage && currentSelection.color && (
                      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <p className="samsung-text font-semibold">
                          {phoneModel.name} - {currentSelection.storage} - {currentSelection.color}
                        </p>
                        <p className="samsung-text text-sm text-gray-600">
                          Price: N${currentSelection.price?.toLocaleString()} x {currentSelection.quantity} = N${((currentSelection.price || 0) * (currentSelection.quantity || 1)).toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Total Summary */}
              <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl">
                  <p className="samsung-text font-bold text-lg">Total Quote Amount:</p>
                  <p className="samsung-text font-bold text-lg">
                    N$ {Object.values(phoneSelections).reduce((sum, selection) => {
                      return sum + ((selection.price || 0) * (selection.quantity || 1));
                    }, 0).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg md:text-xl samsung-header mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <Label htmlFor="fullName" className="text-sm font-semibold samsung-text mb-2 block">Full Name *</Label>
                <Input
                  id="fullName"
                  {...register("fullName")}
                  className={`rounded-xl border-2 h-12 ${errors.fullName ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="contactNumber" className="text-sm font-semibold samsung-text mb-2 block">Contact Number *</Label>
                <Input
                  id="contactNumber"
                  {...register("contactNumber")}
                  className={`rounded-xl border-2 h-12 ${errors.contactNumber ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                  placeholder="Enter your contact number"
                />
                {errors.contactNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-semibold samsung-text mb-2 block">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={`rounded-xl border-2 h-12 ${errors.email ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg md:text-xl samsung-header mb-4">Address Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <Label htmlFor="physicalAddress" className="text-sm font-semibold samsung-text mb-2 block">Physical Address *</Label>
                <Input
                  id="physicalAddress"
                  {...register("physicalAddress")}
                  className={`rounded-xl border-2 h-12 ${errors.physicalAddress ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                  placeholder="Enter area/location"
                />
                {errors.physicalAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.physicalAddress.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="city" className="text-sm font-semibold samsung-text mb-2 block">City/Town *</Label>
                <Input
                  id="city"
                  {...register("city")}
                  className={`rounded-xl border-2 h-12 ${errors.city ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                  placeholder="Enter your city or town"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="region" className="text-sm font-semibold samsung-text mb-2 block">Region *</Label>
                <Controller
                  name="region"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className={`rounded-xl border-2 h-12 ${errors.region ? "border-red-500" : "border-gray-300 focus:border-black"}`}>
                        <SelectValue placeholder="Select your region" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {namibianRegions.map((region) => (
                          <SelectItem key={region} value={region}>{region}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.region && (
                  <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="country" className="text-sm font-semibold samsung-text mb-2 block">Country *</Label>
                <Input
                  id="country"
                  {...register("country")}
                  className={`rounded-xl border-2 h-12 ${errors.country ? "border-red-500" : "border-gray-300 focus:border-black"} bg-gray-100`}
                  readOnly
                />
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
                )}
              </div>
            </div>
          </div>

          {/* Product Information - Only show for single phone quotes */}
          {!isCartQuote && (
            <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg md:text-xl samsung-header mb-4">Product Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <Label htmlFor="productName" className="text-sm font-semibold samsung-text mb-2 block">Product Name *</Label>
                <Input
                  id="productName"
                  {...register("productName")}
                  className={`rounded-xl border-2 h-12 ${errors.productName ? "border-red-500" : "border-gray-300 focus:border-black"} bg-gray-100`}
                  readOnly
                />
                {errors.productName && (
                  <p className="text-red-500 text-sm mt-1">{errors.productName.message}</p>
                )}
              </div>
              {/* Only show storage capacity for devices that need it */}
              {selectedPhone && !watches.some(w => w.name === selectedPhone.name) && !buds.some(b => b.name === selectedPhone.name) && (
                <div>
                  <Label htmlFor="storageCapacity" className="text-sm font-semibold samsung-text mb-2 block">Storage Capacity *</Label>
                  <Input
                    id="storageCapacity"
                    {...register("storageCapacity")}
                    className={`rounded-xl border-2 h-12 ${errors.storageCapacity ? "border-red-500" : "border-gray-300 focus:border-black"} bg-gray-100`}
                    readOnly
                  />
                  {errors.storageCapacity && (
                    <p className="text-red-500 text-sm mt-1">{errors.storageCapacity.message}</p>
                  )}
                </div>
              )}
              <div>
                <Label htmlFor="condition" className="text-sm font-semibold samsung-text mb-2 block">Condition *</Label>
                <Input
                  id="condition"
                  {...register("condition")}
                  className={`rounded-xl border-2 h-12 ${errors.condition ? "border-red-500" : "border-gray-300 focus:border-black"} bg-gray-100`}
                  readOnly
                />
                {errors.condition && (
                  <p className="text-red-500 text-sm mt-1">{errors.condition.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="color" className="text-sm font-semibold samsung-text mb-2 block">Color *</Label>
                <Controller
                  name="color"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className={`rounded-xl border-2 h-12 ${errors.color ? "border-red-500" : "border-gray-300 focus:border-black"}`}>
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        {selectedPhone?.colors?.map((color) => (
                          <SelectItem key={color} value={color}>{color}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.color && (
                  <p className="text-red-500 text-sm mt-1">{errors.color.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="quantity" className="text-sm font-semibold samsung-text mb-2 block">Quantity *</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  {...register("quantity", { valueAsNumber: true })}
                  className={`rounded-xl border-2 h-12 ${errors.quantity ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="originalPrice" className="text-sm font-semibold samsung-text mb-2 block">Original Phone Price *</Label>
                <Input
                  id="originalPrice"
                  type="number"
                  step="0.01"
                  {...register("originalPrice", { valueAsNumber: true })}
                  className={`rounded-xl border-2 h-12 ${errors.originalPrice ? "border-red-500" : "border-gray-300 focus:border-black"} bg-gray-100`}
                  readOnly
                />
                {errors.originalPrice && (
                  <p className="text-red-500 text-sm mt-1">{errors.originalPrice.message}</p>
                )}
              </div>
            </div>
          </div>
          )}

          {/* Financial Information */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg md:text-xl samsung-header mb-4">Financial Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <Label htmlFor="deposit" className="text-sm font-semibold samsung-text mb-2 block">Deposit (Optional)</Label>
                <Input
                  id="deposit"
                  type="number"
                  step="0.01"
                  {...register("deposit", { valueAsNumber: true })}
                  className="rounded-xl border-2 h-12 border-gray-300 focus:border-black"
                  placeholder="Enter deposit amount"
                />
              </div>
              <div>
                <Label htmlFor="creditAmount" className="text-sm font-semibold samsung-text mb-2 block">Credit Amount *</Label>
                <Input
                  id="creditAmount"
                  type="number"
                  step="0.01"
                  {...register("creditAmount", { valueAsNumber: true })}
                  className={`rounded-xl border-2 h-12 ${errors.creditAmount ? "border-red-500" : "border-gray-300 focus:border-black"} bg-gray-100`}
                  readOnly
                />
                {errors.creditAmount && (
                  <p className="text-red-500 text-sm mt-1">{errors.creditAmount.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="paymentTerm" className="text-sm font-semibold samsung-text mb-2 block">Payment Term *</Label>
                <Select 
                  value={paymentTerm} 
                  onValueChange={(value) => {
                    setPaymentTerm(value);
                    setValue("paymentTerm", parseInt(value));
                  }}
                >
                  <SelectTrigger className="rounded-xl border-2 h-12 border-gray-300 focus:border-black">
                    <SelectValue placeholder="Select payment term" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="12">12 Months</SelectItem>
                    <SelectItem value="24">24 Months</SelectItem>
                    <SelectItem value="36">36 Months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {deposit > 0 && (
              <div className="mt-4">
                <Label htmlFor="depositMethod" className="text-sm font-semibold samsung-text mb-2 block">Deposit Payment Method *</Label>
                <Controller
                  name="depositMethod"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="rounded-xl border-2 border-gray-300 focus:border-black h-12">
                        <SelectValue placeholder="Choose payment method" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl">
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="trade-in">Trade-in</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {watchedDepositMethod === "trade-in" && (
                  <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-xl">
                    <p className="text-sm samsung-text text-blue-800">
                      Please input the valuation estimate that you got from Access Electronics / contact Access Electronics team to obtain a valuation estimate for your phone, which you will then use as a deposit.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Payment Summary */}
          {monthlyPayment && (
            <div className="bg-black text-white p-6 rounded-xl border-2 border-black">
              <h4 className="text-xl font-bold mb-4">Payment Summary</h4>
              <div className="grid md:grid-cols-2 gap-6 text-base">
                <div className="flex justify-between">
                  <span>Monthly Payment:</span>
                  <span className="font-bold text-white">N${monthlyPayment}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-bold text-white">N${totalAmount}</span>
                </div>
              </div>
            </div>
          )}

          {/* Deposit Confirmation */}
          {deposit > 0 && (
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl">
              <p className="text-sm samsung-text text-orange-800">
                Please ensure you are able to pay the deposit you have chosen in the previous steps.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-6 md:px-8 py-3 samsung-btn-outline order-2 sm:order-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={createQuoteMutation.isPending}
              className="px-6 md:px-8 py-3 samsung-btn order-1 sm:order-2"
            >
              {createQuoteMutation.isPending ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
    </>
  );
}