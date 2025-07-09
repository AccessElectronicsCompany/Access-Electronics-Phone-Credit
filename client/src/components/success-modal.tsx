import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, RefreshCw } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestAnother: () => void;
}

export default function SuccessModal({ isOpen, onClose, onRequestAnother }: SuccessModalProps) {
  const handleBrowseStore = () => {
    window.open("https://accessnamibia.com/", "_blank");
    onClose();
  };

  const handleRequestAnother = () => {
    onRequestAnother();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto p-6 rounded-xl border-2 border-green-200 bg-white">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <DialogTitle className="text-2xl samsung-header text-green-800">
            Thank you for requesting a quote!
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-xl border border-green-200">
            <p className="samsung-text text-green-800 text-center leading-relaxed">
              Our team is working on it — your quote will be sent to your email within the next 2 hours (during working hours: 08:00 – 17:00).
            </p>
            <p className="samsung-text text-green-700 text-center text-sm mt-2">
              If you don't receive it within that time, please feel free to reach out to our team for assistance.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="samsung-header text-lg text-center text-gray-800">What would you like to do next?</h4>
            
            <div className="grid grid-cols-1 gap-3">
              <Button
                onClick={handleRequestAnother}
                className="h-12 samsung-btn rounded-xl flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Request Another Quote
              </Button>
              
              <Button
                onClick={handleBrowseStore}
                variant="outline"
                className="h-12 samsung-btn-outline rounded-xl flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Browse Our Online Store
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}