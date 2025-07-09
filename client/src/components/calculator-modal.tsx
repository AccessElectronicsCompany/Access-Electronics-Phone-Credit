import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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

  // Auto-calculate when inputs change
  useEffect(() => {
    const price = parseFloat(phonePrice);
    const term = parseInt(paymentTerm);
    const depositAmount = parseFloat(deposit) || 0;

    if (price && price > 0) {
      const calculation = calculatePayment(price, term, depositAmount);
      setResult(calculation);
    }
  }, [phonePrice, paymentTerm, deposit]);

  const calculatorContent = (
    <div className="space-y-6 scroll-smooth">
      <div>
        <Label htmlFor="phonePrice" className="text-sm font-semibold samsung-text tracking-wide uppercase mb-2 block">
          Phone Price (N$)
        </Label>
        <Input
          id="phonePrice"
          type="number"
          value={phonePrice}
          onChange={(e) => setPhonePrice(e.target.value)}
          placeholder="Enter phone price"
          className="border-2 border-gray-300 focus:border-black rounded-xl h-12"
        />
      </div>
      
      <div>
        <Label htmlFor="paymentTerm" className="text-sm font-semibold samsung-text tracking-wide uppercase mb-2 block">
          Payment Term
        </Label>
        <Select value={paymentTerm} onValueChange={setPaymentTerm}>
          <SelectTrigger className="border-2 border-gray-300 focus:border-black rounded-xl h-12">
            <SelectValue placeholder="Select payment term" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="12">12 Months</SelectItem>
            <SelectItem value="24">24 Months</SelectItem>
            <SelectItem value="36">36 Months</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="deposit" className="text-sm font-semibold samsung-text tracking-wide uppercase mb-2 block">
          Deposit (Optional)
        </Label>
        <Input
          id="deposit"
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          placeholder="Enter deposit amount"
          className="border-2 border-gray-300 focus:border-black rounded-xl h-12"
        />
      </div>
      
      <Button
        onClick={handleCalculate}
        className="samsung-btn w-full py-3"
      >
        Calculate Monthly Payment
      </Button>
      
      {result && (
        <Card className="samsung-card">
          <CardContent className="p-6">
            <h4 className="font-semibold samsung-text mb-4 tracking-wide uppercase">Payment Breakdown</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between samsung-text">
                <span>Phone Price:</span>
                <span>N${result.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between samsung-text">
                <span>Deposit:</span>
                <span>N${result.deposit.toFixed(2)}</span>
              </div>
              <div className="flex justify-between samsung-text">
                <span>Credit Amount:</span>
                <span>N${result.creditAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between samsung-text">
                <span>Interest (16.8%):</span>
                <span>N${result.interestAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between samsung-text">
                <span>Total Amount:</span>
                <span>N${result.totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg border-t border-black pt-3">
                <span className="samsung-text">Monthly Payment:</span>
                <span className="samsung-text font-bold">N${result.monthlyPayment.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  if (isEmbedded) {
    return (
      <Card className="max-w-2xl mx-auto samsung-card">
        <CardContent className="p-8 max-h-[80vh] overflow-y-auto">
          {calculatorContent}
        </CardContent>
      </Card>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl samsung-header tracking-wide">PAYMENT CALCULATOR</DialogTitle>
          <DialogDescription className="samsung-text">
            Calculate your monthly payments for any phone with our flexible credit options.
          </DialogDescription>
        </DialogHeader>
        {calculatorContent}
      </DialogContent>
    </Dialog>
  );
}