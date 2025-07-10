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
import { useCart } from "@/hooks/use-cart";
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
  storageCapacity: z.string().min(2, "Storage capacity is required"),
  condition: z.string().min(1, "Condition is required"),
  color: z.string().min(2, "Color is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  originalPrice: z.number().min(1, "Original price is required"),
  creditAmount: z.number().min(1, "Credit amount is required"),
  deposit: z.number().min(0, "Deposit must be 0 or greater").optional(),
  depositMethod: z.string().optional(),
  paymentTerm: z.number().min(12, "Payment term is required"),
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
  const [canSubmit, setCanSubmit] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [depositMethod, setDepositMethod] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const { cartItems, clearCart } = useCart();
  
  // Check if we're handling a cart-based quote
  const isCartQuote = !selectedPhone && cartItems.length > 0;

  // Check if user can submit based on last submission time
  useEffect(() => {
    const lastSubmission = localStorage.getItem('lastQuoteSubmission');
    if (lastSubmission) {
      const lastSubmissionTime = new Date(lastSubmission).getTime();
      const now = Date.now();
      const timeDiff = now - lastSubmissionTime;
      const thirtyMinutes = 30 * 60 * 1000;
      
      if (timeDiff < thirtyMinutes) {
        setCanSubmit(false);
        setTimeRemaining(thirtyMinutes - timeDiff);
        
        // Update countdown every second
        const interval = setInterval(() => {
          const currentTime = Date.now();
          const remaining = thirtyMinutes - (currentTime - lastSubmissionTime);
          
          if (remaining <= 0) {
            setCanSubmit(true);
            setTimeRemaining(0);
            clearInterval(interval);
          } else {
            setTimeRemaining(remaining);
          }
        }, 1000);
        
        return () => clearInterval(interval);
      }
    }
  }, [isOpen]);

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
      storageCapacity: selectedPhone?.storage || "",
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
      setValue("storageCapacity", selectedPhone.storage);
      setValue("originalPrice", selectedPhone.price);
      setValue("creditAmount", selectedPhone.price);
      setValue("country", "Namibia");
      setValue("condition", "NEW");
      setValue("color", "");
    } else if (isCartQuote) {
      // For cart quotes, combine all items
      const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const phoneNames = cartItems.map(item => `${item.name} ${item.storage}`).join(", ");
      setValue("productName", phoneNames);
      setValue("storageCapacity", "Multiple");
      setValue("originalPrice", totalPrice);
      setValue("creditAmount", totalPrice);
      setValue("country", "Namibia");
      setValue("condition", "NEW");
      setValue("color", "Multiple");
      setValue("quantity", cartItems.reduce((sum, item) => sum + item.quantity, 0));
    }
  }, [selectedPhone, isCartQuote, cartItems, setValue]);

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
      };

      // Submit to FormCarry with form data format
      const formData = new FormData();
      Object.entries(quoteData).forEach(([key, value]) => {
        formData.append(key, value?.toString() || '');
      });

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
      // Set last submission time
      localStorage.setItem('lastQuoteSubmission', new Date().toISOString());
      setCanSubmit(false);
      setTimeRemaining(30 * 60 * 1000);
      
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
      toast({
        title: "Error",
        description: error.message || "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: QuoteFormData) => {
    if (!canSubmit) {
      toast({
        title: "Please wait",
        description: `You can submit another quote in ${formatTimeRemaining(timeRemaining)}.`,
        variant: "destructive",
      });
      return;
    }
    createQuoteMutation.mutate(data);
  };

  const formatTimeRemaining = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
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
          {!canSubmit && (
            <div className="bg-orange-100 border border-orange-400 text-orange-700 px-4 py-3 rounded-xl text-center">
              <p className="samsung-text">You can submit another quote in {formatTimeRemaining(timeRemaining)}</p>
            </div>
          )}
        </DialogHeader>
        
        {/* Cart Items Display */}
        {isCartQuote && (
          <div className="bg-blue-50 p-4 md:p-6 rounded-xl border border-blue-200 mb-6">
            <h3 className="text-lg md:text-xl samsung-header mb-4">Cart Items</h3>
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex-1">
                    <p className="samsung-text font-semibold">{item.name} - {item.storage}</p>
                    <p className="samsung-text text-sm text-gray-600">Color: {item.color}</p>
                  </div>
                  <div className="text-right">
                    <p className="samsung-text font-semibold">N$ {item.price.toLocaleString()}</p>
                    <p className="samsung-text text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-gray-300 pt-3">
                <div className="flex justify-between items-center">
                  <p className="samsung-text font-bold text-lg">Total:</p>
                  <p className="samsung-text font-bold text-lg">N$ {cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString()}</p>
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

          {/* Product Information */}
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
              disabled={createQuoteMutation.isPending || !canSubmit}
              className="px-6 md:px-8 py-3 samsung-btn order-1 sm:order-2"
            >
              {createQuoteMutation.isPending ? "Submitting..." : 
               !canSubmit ? `Wait ${formatTimeRemaining(timeRemaining)}` : 
               "Submit Quote Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
    </>
  );
}