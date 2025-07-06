interface PaymentCalculation {
  price: number;
  deposit: number;
  creditAmount: number;
  interestAmount: number;
  totalAmount: number;
  monthlyPayment: number;
  paymentTerm: number;
}

export function calculatePayment(
  price: number,
  paymentTerm: number,
  deposit: number = 0
): PaymentCalculation {
  const creditAmount = price - deposit;
  const interestRate = 0.168; // 16.8%
  const interestAmount = creditAmount * interestRate;
  const totalAmount = creditAmount + interestAmount;
  const monthlyPayment = totalAmount / paymentTerm;

  return {
    price,
    deposit,
    creditAmount,
    interestAmount,
    totalAmount,
    monthlyPayment,
    paymentTerm,
  };
}
