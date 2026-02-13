import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
    <div className="space-y-6">
      <div>
        <Label htmlFor="phonePrice" className="text-xs font-medium text-neutral-500 tracking-widest uppercase mb-3 block">
          Phone Price (N$)
        </Label>
        <Input
          id="phonePrice"
          type="number"
          value={phonePrice}
          onChange={(e) => setPhonePrice(e.target.value)}
          placeholder="Enter phone price"
          className="border border-neutral-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 rounded-sm h-12 bg-white transition-colors"
        />
      </div>
      
      <div>
        <Label className="text-xs font-medium text-neutral-500 tracking-widest uppercase mb-4 block">
          Payment Term
        </Label>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setPaymentTerm("12")}
            className={`py-4 border rounded-sm text-center transition-all flex flex-col items-center justify-center ${
              paymentTerm === "12" 
                ? "border-rose-500 bg-neutral-900 text-rose-400" 
                : "border-neutral-300 hover:border-rose-400 bg-white text-neutral-700"
            }`}
          >
            <div className="text-xl font-bold" >12</div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500">Months</div>
          </button>
          <button
            onClick={() => setPaymentTerm("24")}
            className={`py-4 border rounded-sm text-center transition-all flex flex-col items-center justify-center ${
              paymentTerm === "24" 
                ? "border-rose-500 bg-neutral-900 text-rose-400" 
                : "border-neutral-300 hover:border-rose-400 bg-white text-neutral-700"
            }`}
          >
            <div className="text-xl font-bold" >24</div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500">Months</div>
          </button>
          <button
            onClick={() => setPaymentTerm("36")}
            className={`py-4 border rounded-sm text-center transition-all flex flex-col items-center justify-center ${
              paymentTerm === "36" 
                ? "border-rose-500 bg-neutral-900 text-rose-400" 
                : "border-neutral-300 hover:border-rose-400 bg-white text-neutral-700"
            }`}
          >
            <div className="text-xl font-bold" >36</div>
            <div className="text-[10px] uppercase tracking-wider text-neutral-500">Months</div>
          </button>
        </div>
      </div>
      
      <div>
        <Label htmlFor="deposit" className="text-xs font-medium text-neutral-500 tracking-widest uppercase mb-3 block">
          Deposit (Optional)
        </Label>
        <Input
          id="deposit"
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
          placeholder="Enter deposit amount"
          className="border border-neutral-300 focus:border-rose-500 focus:ring-1 focus:ring-rose-500/20 rounded-sm h-12 bg-white transition-colors"
        />
      </div>
      
      <Button
        onClick={handleCalculate}
        className="w-full py-4 h-12 bg-rose-500 text-white hover:bg-rose-400 rounded-sm font-medium tracking-widest uppercase text-xs transition-all"
      >
        Calculate Monthly Payment
      </Button>
      
      {result && (
        <Card className="bg-neutral-50 border border-neutral-200 rounded-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="luxury-divider mb-4"></div>
            <h4 className="font-semibold text-neutral-900 mb-5 tracking-wider uppercase text-xs" >Payment Breakdown</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-neutral-600">
                <span>Phone Price:</span>
                <span className="font-medium">N${result.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Deposit:</span>
                <span className="font-medium">N${result.deposit.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Credit Amount:</span>
                <span className="font-medium">N${result.creditAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Interest (16.8%):</span>
                <span className="font-medium">N${result.interestAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Total Amount:</span>
                <span className="font-medium">N${result.totalAmount.toFixed(2)}</span>
              </div>
              <div className="border-t border-neutral-200 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-900 font-medium">Monthly Payment:</span>
                  <span className="text-2xl font-bold text-rose-500" >N${result.monthlyPayment.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );

  if (isEmbedded) {
    return (
      <Card className="max-w-2xl mx-auto bg-white border border-neutral-200 rounded-sm" style={{ boxShadow: '0 4px 30px rgba(0, 0, 0, 0.06)' }}>
        <CardContent className="p-8">
          {calculatorContent}
        </CardContent>
      </Card>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white border border-neutral-200 rounded-sm">
        <DialogHeader>
          <div className="luxury-divider mb-4"></div>
          <DialogTitle className="text-xl font-semibold tracking-wider" >PAYMENT CALCULATOR</DialogTitle>
          <DialogDescription className="text-neutral-500 text-sm">
            Calculate your monthly payments for any phone with our flexible credit options.
          </DialogDescription>
        </DialogHeader>
        {calculatorContent}
      </DialogContent>
    </Dialog>
  );
}
