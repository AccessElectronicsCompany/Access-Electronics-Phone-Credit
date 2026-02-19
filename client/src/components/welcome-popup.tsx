import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const categories = [
  { label: "Phones", emoji: "📱", path: "/phones", desc: "iPhones & Samsung" },
  { label: "iPads", emoji: "📲", path: "/ipads", desc: "iPad Pro, Air & more" },
  { label: "Tablets", emoji: "💻", path: "/tablets", desc: "Samsung Tablets" },
  { label: "MacBooks", emoji: "🖥️", path: "/macbooks", desc: "MacBook Air & Laptops" },
  { label: "Watches", emoji: "⌚", path: "/watches", desc: "Apple & Samsung" },
  { label: "AirPods", emoji: "🎧", path: "/buds", desc: "AirPods & Buds" },
  { label: "Gaming", emoji: "🎮", path: "/gaming-sound", desc: "PS5, Xbox & more" },
  { label: "Combos", emoji: "🔥", path: "/gaming-combo", desc: "Valentine's Specials" },
];

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [, navigate] = useLocation();
  const [location] = useLocation();

  useEffect(() => {
    if (location === "/") return;
    const seen = sessionStorage.getItem("welcome_popup_seen");
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelect = (path: string) => {
    sessionStorage.setItem("welcome_popup_seen", "1");
    setOpen(false);
    navigate(path);
  };

  const handleClose = () => {
    sessionStorage.setItem("welcome_popup_seen", "1");
    setOpen(false);
  };

  if (location === "/") return null;

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
      <DialogContent
        className="bg-neutral-900 border border-neutral-700 rounded-sm p-0 overflow-hidden mx-4 sm:mx-auto"
        style={{ width: "calc(100% - 2rem)", maxWidth: "28rem" }}
        aria-describedby="welcome-popup-desc"
      >
        <DialogTitle className="sr-only">What are you looking for?</DialogTitle>

        <div className="bg-gradient-to-r from-rose-500/20 to-rose-400/10 px-4 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4 border-b border-neutral-800">
          <h2 className="text-base sm:text-xl font-bold text-white tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>
            Welcome to Access Electronics
          </h2>
          <p id="welcome-popup-desc" className="text-xs sm:text-sm text-rose-300 mt-1 tracking-wide">
            What would you like to request a quote on?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 p-3 sm:p-4">
          {categories.map((cat) => (
            <button
              key={cat.path}
              onClick={() => handleSelect(cat.path)}
              className="flex items-center gap-2 sm:gap-3 bg-neutral-800/70 hover:bg-rose-500/20 border border-neutral-700 hover:border-rose-500/50 rounded-sm px-2.5 sm:px-4 py-2.5 sm:py-3 transition-all duration-200 text-left group"
            >
              <span className="text-lg sm:text-2xl group-hover:scale-110 transition-transform flex-shrink-0">{cat.emoji}</span>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-rose-400 transition-colors block tracking-wide truncate">{cat.label}</span>
                <span className="text-[9px] sm:text-[10px] text-neutral-400 block truncate">{cat.desc}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="px-3 sm:px-4 pb-3 sm:pb-4">
          <button
            onClick={handleClose}
            className="w-full text-[10px] sm:text-xs text-neutral-500 hover:text-neutral-300 transition-colors py-1.5 tracking-wider uppercase"
          >
            I'm just browsing
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
