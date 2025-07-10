import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export default function CartModal({ isOpen, onClose, onRequestQuote }: CartModalProps) {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your Cart</DialogTitle>
          </DialogHeader>
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Button onClick={onClose}>Continue Shopping</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Your Cart ({cartItems.length} items)</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.storage} - {item.color}</p>
                <p className="text-lg font-bold text-blue-600">N${item.price.toLocaleString()}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total: N${getTotalPrice().toLocaleString()}</span>
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
          
          <div className="text-sm text-gray-600 mb-4 p-3 bg-blue-50 rounded-lg">
            <p className="font-medium">💡 Multiple Phone Credit Option</p>
            <p>You can get all these phones on credit! Just request a quote and we'll calculate payment plans for your entire cart.</p>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Continue Shopping
            </Button>
            <Button onClick={onRequestQuote} className="flex-1">
              Request Quote for All Items
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}