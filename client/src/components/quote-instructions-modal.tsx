import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface QuoteInstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBrowsePhones: () => void;
}

export default function QuoteInstructionsModal({
  isOpen,
  onClose,
  onBrowsePhones,
}: QuoteInstructionsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center samsung-header">
            How to Request a Quote - Simple 4-Step Process
          </DialogTitle>
          <DialogDescription className="text-center samsung-text opacity-80">
            Follow these easy steps to get financing for your dream phone
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Step 1 */}
          <Card className="samsung-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold samsung-text mb-2">Choose Your Phone</h3>
                  <p className="samsung-text mb-4">
                    Browse our iPhone and Samsung collections and find the phone you want. 
                    Each phone shows the price and available storage options.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm max-w-md mx-auto">
                    <div className="text-center">
                      <div className="font-semibold">iPhones from</div>
                      <div className="text-lg font-bold">N$5,500</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold">Samsung from</div>
                      <div className="text-lg font-bold">N$6,300</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 2 */}
          <Card className="samsung-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold samsung-text mb-2">Calculate Your Monthly Payment</h3>
                  <p className="samsung-text mb-4">
                    Use our built-in calculator to see your monthly payments. Choose your deposit amount 
                    (minimum N$1,000) and payment period (6-24 months) to see what works best for you.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="font-semibold text-sm">Example:</div>
                    <div className="text-sm samsung-text">
                      N$10,000 phone - N$2,000 deposit = Affordable monthly payments
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 3 */}
          <Card className="samsung-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold samsung-text mb-2">Click "Request Quote" & Fill the Form</h3>
                  <p className="samsung-text mb-4">
                    Click the "Request Quote" button on any phone card. Fill in your details:
                  </p>
                  <ul className="list-disc list-inside space-y-1 samsung-text text-sm">
                    <li>Full name and contact number</li>
                    <li>Email address for updates</li>
                    <li>Preferred color and storage</li>
                    <li>Your chosen deposit and payment terms</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step 4 */}
          <Card className="samsung-card">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold samsung-text mb-2">Contact Us on WhatsApp & Submit Documents</h3>
                  <p className="samsung-text mb-4">
                    After submitting your quote, contact us on WhatsApp stating your name to receive 
                    your quote instantly. Then email your documents to CREDIT@accessnamibia.com or 
                    visit any Access/FNB branch.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <div className="font-semibold text-sm mb-2">📱 Required Documents:</div>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Latest payslip</li>
                      <li>Copy of ID</li>
                      <li>Your quote</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="font-semibold text-sm">⏱️ Approval Process:</div>
                    <div className="text-sm">
                      Approval takes 3-5 working days. Once approved, sign your contract at the bank and collect your device!
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="samsung-card bg-black text-white">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Browse our phone collections and request your quote today!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => {
                    onBrowsePhones();
                    onClose();
                  }}
                  className="bg-white text-black hover:bg-gray-200 font-semibold"
                >
                  Browse iPhones
                </Button>
                <Button
                  onClick={() => {
                    onBrowsePhones();
                    onClose();
                  }}
                  className="bg-white text-black hover:bg-gray-200 font-semibold"
                >
                  Browse Samsung
                </Button>
                <Button
                  onClick={onClose}
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black font-semibold"
                >
                  Got It, Thanks!
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
}