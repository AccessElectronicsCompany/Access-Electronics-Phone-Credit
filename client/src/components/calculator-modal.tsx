import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { calculatePayment } from "@/lib/calculations";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPrice?: number;
  isEmbedded?: boolean;
}

export default function CalculatorModal({ isOpen, onClose, selectedPrice, isEmbedded = false }: CalculatorModalProps) {
  const [phonePrice, setPhonePrice] = useState("");
  const [paymentTerm, setPaymentTerm] = useState("36");
  const [deposit, setDeposit] = useState("");
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    if (selectedPrice) {
      setPhonePrice(selectedPrice.toString());
    }
  }, [selectedPrice]);

  const handleCalculate = () => {
    const price = parseFloat(phonePrice);
    const term = parseInt(paymentTerm);
    const depositAmount = parseFloat(deposit) || 0;

    if (!price || price <= 0) {
      alert("Please enter a valid phone price");
      return;
    }

    const calculation = calculatePayment(price, term, depositAmount);
    setResult(calculation);
  };

  const calculatorContent = (
    <div className="space-y-6">
      <div>
        <Label htmlFor="phonePrice" className="text-sm font-medium text-gray-700">
          Phone Price (N$)
        </Label>
        <Input
          id="phonePrice"
          type="number"
          value={phonePrice}
          onChange={(e) => setPhonePrice(e.target.value)}
          placeholder="Enter phone price"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="paymentTerm" className="text-sm font-medium text-gray-700">
          Payment Term
        </Label>
        <Select value={paymentTerm} onValueChange={setPaymentTerm}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select payment term" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="12">12 Months</SelectItem>
            <SelectItem value="24">24 Months</SelectItem>
            <SelectItem value="36">36 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="deposit" className="text-sm font-medium text-gray-700">
          Deposit (Optional)
        </Label>
        <Input
          id="deposit"
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          placeholder="Enter deposit amount"
          className="mt-1"
        />
      </div>
      
      <Button
        onClick={handleCalculate}
        className="w-full gradient-bg text-white hover:opacity-90 transition-opacity"
      >
        Calculate Monthly Payment
      </Button>
      
      {result && (
        <Card className="gradient-border-light">
          <CardContent className="p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Payment Breakdown</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Phone Price:</span>
                <span>N${result.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Deposit:</span>
                <span>N${result.deposit.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Credit Amount:</span>
                <span>N${result.creditAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Interest (16.8%):</span>
                <span>N${result.interestAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span>N${result.totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t pt-2">
                <span>Monthly Payment:</span>
                <span className="gradient-text">N${result.monthlyPayment.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  if (isEmbedded) {
    return (
      <Card className="max-w-2xl mx-auto gradient-border-light">
        <CardContent className="p-8">
          {calculatorContent}
        </CardContent>
      </Card>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">Payment Calculator</DialogTitle>
        </DialogHeader>
        {calculatorContent}
      </DialogContent>
    </Dialog>
  );
}