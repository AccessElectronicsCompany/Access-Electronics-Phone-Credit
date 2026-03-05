import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

interface CartButtonProps {
  onClick: () => void;
}

export default function CartButton({ onClick }: CartButtonProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="relative border-neutral-300 hover:border-cyan-400 hover:text-cyan-500 transition-all"
    >
      <ShoppingCart className="h-4 w-4" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
      <span className="ml-2 hidden sm:inline">Cart</span>
    </Button>
  );
}
