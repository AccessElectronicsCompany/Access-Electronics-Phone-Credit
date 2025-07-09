import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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

const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  contactNumber: z.string().min(10, "Valid contact number is required"),
  email: z.string().email("Valid email is required"),
  physicalAddress: z.string().min(10, "Physical address is required"),
  postalAddress: z.string().min(5, "Postal address is required"),
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
  paymentTerm: z.number().min(12, "Payment term is required"),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

interface QuoteFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPhone: {
    name: string;
    storage: string;
    price: number;
  } | null;
}

export default function QuoteFormModal({ isOpen, onClose, selectedPhone }: QuoteFormModalProps) {
  const [paymentTerm, setPaymentTerm] = useState("36");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      fullName: "",
      contactNumber: "",
      email: "",
      physicalAddress: "",
      postalAddress: "",
      city: "",
      region: "",
      country: "Namibia",
      productName: selectedPhone?.name || "",
      storageCapacity: selectedPhone?.storage || "",
      condition: "",
      color: "",
      quantity: 1,
      originalPrice: selectedPhone?.price || 0,
      creditAmount: selectedPhone?.price || 0,
      deposit: 0,
      paymentTerm: 36,
    },
  });

  // Update form when selectedPhone changes
  useEffect(() => {
    if (selectedPhone) {
      setValue("productName", selectedPhone.name);
      setValue("storageCapacity", selectedPhone.storage);
      setValue("originalPrice", selectedPhone.price);
      setValue("creditAmount", selectedPhone.price);
      setValue("country", "Namibia");
    }
  }, [selectedPhone, setValue]);

  // Watch for changes in original price, deposit, and payment term for automatic calculation
  const originalPrice = watch("originalPrice");
  const deposit = watch("deposit") || 0;
  
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
        originalPrice: data.originalPrice.toString(),
        creditAmount: calculation.creditAmount.toString(),
        monthlyPayment: calculation.monthlyPayment.toString(),
        totalAmount: calculation.totalAmount.toString(),
      };

      return apiRequest("POST", "/api/quote-requests", quoteData);
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted",
        description: "We will contact you within 24 hours with your quote details.",
      });
      reset();
      onClose();
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
    createQuoteMutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto p-8 m-4 rounded-xl border-2 border-black">
        <DialogHeader className="pb-6">
          <DialogTitle className="text-3xl samsung-header text-center mb-2">
            Request Quote for {selectedPhone?.name}
          </DialogTitle>
          <DialogDescription className="samsung-text text-center text-lg">
            Please fill out the form below to request a quote for your selected phone.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Personal Information */}
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl samsung-header mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
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
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl samsung-header mb-4">Address Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="physicalAddress" className="text-sm font-semibold samsung-text mb-2 block">Physical Address *</Label>
                <Input
                  id="physicalAddress"
                  {...register("physicalAddress")}
                  className={`rounded-xl border-2 h-12 ${errors.physicalAddress ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                  placeholder="Street address, city"
                />
                {errors.physicalAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.physicalAddress.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="postalAddress" className="text-sm font-semibold samsung-text mb-2 block">Postal Address *</Label>
                <Input
                  id="postalAddress"
                  {...register("postalAddress")}
                  className={`rounded-xl border-2 h-12 ${errors.postalAddress ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                  placeholder="P.O. Box, city"
                />
                {errors.postalAddress && (
                  <p className="text-red-500 text-sm mt-1">{errors.postalAddress.message}</p>
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
                <Input
                  id="region"
                  {...register("region")}
                  className={`rounded-xl border-2 h-12 ${errors.region ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                  placeholder="Enter your region"
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
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl samsung-header mb-4">Product Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
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
                <Select onValueChange={(value) => setValue("condition", value)}>
                  <SelectTrigger className={`rounded-xl border-2 h-12 ${errors.condition ? "border-red-500" : "border-gray-300 focus:border-black"}`}>
                    <SelectValue placeholder="Select condition" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="brand-new">Brand New</SelectItem>
                    <SelectItem value="excellent">Excellent</SelectItem>
                    <SelectItem value="good">Good</SelectItem>
                    <SelectItem value="fair">Fair</SelectItem>
                  </SelectContent>
                </Select>
                {errors.condition && (
                  <p className="text-red-500 text-sm mt-1">{errors.condition.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="color" className="text-sm font-semibold samsung-text mb-2 block">Color *</Label>
                <Input
                  id="color"
                  {...register("color")}
                  className={`rounded-xl border-2 h-12 ${errors.color ? "border-red-500" : "border-gray-300 focus:border-black"}`}
                  placeholder="Enter phone color"
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
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl samsung-header mb-4">Financial Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
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

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="px-8 py-3 samsung-btn-outline"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={createQuoteMutation.isPending}
              className="px-8 py-3 samsung-btn"
            >
              {createQuoteMutation.isPending ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}