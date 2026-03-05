import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: () => void;
}

export default function CartModal({ isOpen, onClose, onRequestQuote }: CartModalProps) {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-base sm:text-lg tracking-wider">Your Cart {cartItems.length > 0 ? `(${cartItems.length} items)` : ''}</DialogTitle>
        </DialogHeader>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-neutral-500 mb-4 text-sm">Your cart is empty</p>
            <Button onClick={onClose} className="bg-cyan-500 text-white hover:bg-cyan-400">Continue Shopping</Button>
          </div>
        ) : (
          <div className="flex flex-col flex-1 overflow-hidden">
            <div className="space-y-3 overflow-y-auto flex-1 pr-1">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 sm:p-4 border border-neutral-200 rounded-sm gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-xs sm:text-sm truncate">{item.name}</h3>
                    <p className="text-[10px] sm:text-xs text-neutral-500">{item.storage} - {item.color}</p>
                    <p className="text-sm sm:text-base font-bold text-cyan-500">N${item.price.toLocaleString()}</p>
                  </div>
                  
                  <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-6 text-center text-xs sm:text-sm font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-7 w-7 sm:h-8 sm:w-8 p-0"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="h-7 w-7 sm:h-8 sm:w-8 p-0 text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-neutral-200 pt-3 sm:pt-4 mt-3">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <span className="text-sm sm:text-lg font-semibold">Total: N${getTotalPrice().toLocaleString()}</span>
                <Button variant="outline" onClick={clearCart} className="text-xs sm:text-sm h-8 sm:h-9">
                  Clear Cart
                </Button>
              </div>
              
              <div className="text-[10px] sm:text-sm text-neutral-600 mb-3 sm:mb-4 p-2 sm:p-3 bg-cyan-50 border border-cyan-100 rounded-sm">
                <p className="font-medium">Multiple Device Credit Option</p>
                <p>Get all these devices on credit! Request a quote and we'll calculate payment plans for your entire cart.</p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" onClick={onClose} className="flex-1 text-xs sm:text-sm h-9 sm:h-10">
                  Continue Shopping
                </Button>
                <Button onClick={onRequestQuote} className="flex-1 bg-cyan-500 text-white hover:bg-cyan-400 text-xs sm:text-sm h-9 sm:h-10">
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
