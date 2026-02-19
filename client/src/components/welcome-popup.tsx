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
  { label: "Gaming Combos", emoji: "🔥", path: "/gaming-combo", desc: "Valentine's Specials" },
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
      <DialogContent className="bg-neutral-900 border border-neutral-700 rounded-sm max-w-md sm:max-w-lg p-0 overflow-hidden" aria-describedby="welcome-popup-desc">
        <DialogTitle className="sr-only">What are you looking for?</DialogTitle>

        <div className="bg-gradient-to-r from-rose-500/20 to-rose-400/10 px-6 pt-6 pb-4 border-b border-neutral-800">
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>
            Welcome to Access Electronics
          </h2>
          <p id="welcome-popup-desc" className="text-sm text-rose-300 mt-1 tracking-wide">
            What would you like to request a quote on?
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 p-5">
          {categories.map((cat) => (
            <button
              key={cat.path}
              onClick={() => handleSelect(cat.path)}
              className="flex items-center gap-3 bg-neutral-800/70 hover:bg-rose-500/20 border border-neutral-700 hover:border-rose-500/50 rounded-sm px-4 py-3 transition-all duration-200 text-left group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">{cat.emoji}</span>
              <div>
                <span className="text-sm font-semibold text-white group-hover:text-rose-400 transition-colors block tracking-wide">{cat.label}</span>
                <span className="text-[10px] text-neutral-400 block">{cat.desc}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="px-5 pb-5">
          <button
            onClick={handleClose}
            className="w-full text-xs text-neutral-500 hover:text-neutral-300 transition-colors py-2 tracking-wider uppercase"
          >
            I'm just browsing
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
