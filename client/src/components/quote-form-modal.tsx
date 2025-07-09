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
      setValue("creditAmount", selectedPhone.price);
      setValue("country", "Namibia");
    }
  }, [selectedPhone, setValue]);

  // Watch for changes in credit amount, deposit, and payment term for automatic calculation
  const creditAmount = watch("creditAmount");
  const deposit = watch("deposit");
  
  useEffect(() => {
    if (creditAmount && creditAmount > 0) {
      const calculation = calculatePayment(
        creditAmount,
        parseInt(paymentTerm),
        deposit || 0
      );
      setMonthlyPayment(calculation.monthlyPayment.toFixed(2));
      setTotalAmount(calculation.totalAmount.toFixed(2));
    }
  }, [creditAmount, deposit, paymentTerm]);

  const createQuoteMutation = useMutation({
    mutationFn: async (data: QuoteFormData) => {
      const calculation = calculatePayment(
        data.creditAmount,
        data.paymentTerm,
        data.deposit || 0
      );
      
      const quoteData = {
        ...data,
        deposit: data.deposit?.toString() || "0",
        creditAmount: data.creditAmount.toString(),
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
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto p-8 m-4">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            Request Quote for {selectedPhone?.name}
          </DialogTitle>
          <DialogDescription>
            Please fill out the form below to request a quote for your selected phone.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                {...register("fullName")}
                className={errors.fullName ? "border-red-500" : ""}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="contactNumber">Contact Number *</Label>
              <Input
                id="contactNumber"
                {...register("contactNumber")}
                className={errors.contactNumber ? "border-red-500" : ""}
              />
              {errors.contactNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Address Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="physicalAddress">Physical Address *</Label>
              <Textarea
                id="physicalAddress"
                {...register("physicalAddress")}
                className={errors.physicalAddress ? "border-red-500" : ""}
              />
              {errors.physicalAddress && (
                <p className="text-red-500 text-sm mt-1">{errors.physicalAddress.message}</p>
              )}
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="postalAddress">Postal Address *</Label>
              <Textarea
                id="postalAddress"
                {...register("postalAddress")}
                className={errors.postalAddress ? "border-red-500" : ""}
              />
              {errors.postalAddress && (
                <p className="text-red-500 text-sm mt-1">{errors.postalAddress.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="city">City/Town *</Label>
              <Input
                id="city"
                {...register("city")}
                className={errors.city ? "border-red-500" : ""}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="region">Region *</Label>
              <Input
                id="region"
                {...register("region")}
                className={errors.region ? "border-red-500" : ""}
              />
              {errors.region && (
                <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="country">Country *</Label>
              <Input
                id="country"
                {...register("country")}
                className={errors.country ? "border-red-500" : ""}
                readOnly
              />
              {errors.country && (
                <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
              )}
            </div>
          </div>

          {/* Product Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="productName">Product Name *</Label>
              <Input
                id="productName"
                {...register("productName")}
                className={errors.productName ? "border-red-500" : ""}
                readOnly
              />
              {errors.productName && (
                <p className="text-red-500 text-sm mt-1">{errors.productName.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="storageCapacity">Storage Capacity *</Label>
              <Input
                id="storageCapacity"
                {...register("storageCapacity")}
                className={errors.storageCapacity ? "border-red-500" : ""}
                readOnly
              />
              {errors.storageCapacity && (
                <p className="text-red-500 text-sm mt-1">{errors.storageCapacity.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="condition">Condition *</Label>
              <Select onValueChange={(value) => setValue("condition", value)}>
                <SelectTrigger className={errors.condition ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
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
              <Label htmlFor="color">Color *</Label>
              <Input
                id="color"
                {...register("color")}
                className={errors.color ? "border-red-500" : ""}
              />
              {errors.color && (
                <p className="text-red-500 text-sm mt-1">{errors.color.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="quantity">Quantity *</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                {...register("quantity", { valueAsNumber: true })}
                className={errors.quantity ? "border-red-500" : ""}
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="creditAmount">Credit Amount *</Label>
              <Input
                id="creditAmount"
                type="number"
                step="0.01"
                {...register("creditAmount", { valueAsNumber: true })}
                className={errors.creditAmount ? "border-red-500" : ""}
                readOnly
              />
              {errors.creditAmount && (
                <p className="text-red-500 text-sm mt-1">{errors.creditAmount.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="deposit">Deposit (Optional)</Label>
              <Input
                id="deposit"
                type="number"
                step="0.01"
                {...register("deposit", { valueAsNumber: true })}
              />
            </div>
            <div>
              <Label htmlFor="paymentTerm">Payment Term *</Label>
              <Select 
                value={paymentTerm} 
                onValueChange={(value) => {
                  setPaymentTerm(value);
                  setValue("paymentTerm", parseInt(value));
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select payment term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12 Months</SelectItem>
                  <SelectItem value="24">24 Months</SelectItem>
                  <SelectItem value="36">36 Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Payment Summary */}
          {monthlyPayment && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-4">Payment Summary</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span>Monthly Payment:</span>
                  <span className="font-semibold gradient-text">N${monthlyPayment}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-semibold">N${totalAmount}</span>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={createQuoteMutation.isPending}
              className="gradient-bg text-white hover:opacity-90 transition-opacity"
            >
              {createQuoteMutation.isPending ? "Submitting..." : "Submit Quote Request"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}