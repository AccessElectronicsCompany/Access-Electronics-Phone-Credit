import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Dialog, DialogPortal, DialogOverlay, DialogTitle } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Smartphone, Tablet, Laptop, Watch, Headphones, Gamepad2, Flame, Monitor } from "lucide-react";

const categories = [
  { label: "Phones", icon: Smartphone, path: "/phones", desc: "iPhones & Samsung" },
  { label: "iPads", icon: Tablet, path: "/ipads", desc: "iPad Pro, Air & more" },
  { label: "Tablets", icon: Monitor, path: "/tablets", desc: "Samsung Tablets" },
  { label: "MacBooks", icon: Laptop, path: "/macbooks", desc: "Air & Laptops" },
  { label: "Watches", icon: Watch, path: "/watches", desc: "Apple & Samsung" },
  { label: "AirPods", icon: Headphones, path: "/buds", desc: "AirPods & Buds" },
  { label: "Gaming", icon: Gamepad2, path: "/gaming-sound", desc: "PS5, Xbox & more" },
  { label: "Combos", icon: Flame, path: "/gaming-combo", desc: "Valentine's Specials" },
];

export default function WelcomePopup() {
  const [open, setOpen] = useState(false);
  const [, navigate] = useLocation();
  const [location] = useLocation();

  useEffect(() => {
    if (location === "/") return;
    const seen = sessionStorage.getItem("welcome_popup_seen");
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelect = (path: string) => {
    sessionStorage.setItem("welcome_popup_seen", "1");
    setOpen(false);
    navigate(path);
  };

  if (location === "/") return null;

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          onInteractOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
          className={cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
            "bg-transparent border-0 shadow-none p-0 overflow-visible"
          )}
          style={{ width: "calc(100% - 2.5rem)", maxWidth: "26rem" }}
          aria-describedby="welcome-popup-desc"
        >
          <DialogTitle className="sr-only">What are you looking for?</DialogTitle>

          <div className="relative rounded-xl overflow-hidden" style={{ background: "linear-gradient(145deg, rgba(20,20,22,0.97) 0%, rgba(15,15,17,0.99) 100%)" }}>
            <div className="absolute inset-0 rounded-xl" style={{ border: "1px solid rgba(251,113,133,0.15)", pointerEvents: "none" }} />
            <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(251,113,133,0.4) 50%, transparent 100%)" }} />
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-[0.07]" style={{ background: "radial-gradient(circle, #fb7185 0%, transparent 70%)" }} />
            <div className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full opacity-[0.05]" style={{ background: "radial-gradient(circle, #fb7185 0%, transparent 70%)" }} />

            <div className="relative z-10 px-5 sm:px-6 pt-5 sm:pt-6 pb-3 sm:pb-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
                <span className="text-[10px] sm:text-[11px] text-rose-400/80 uppercase tracking-[0.2em] font-medium">Access Electronics</span>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-white/95 tracking-tight mt-2" style={{ fontFamily: "Inter, sans-serif" }}>
                What are you looking for?
              </h2>
              <p id="welcome-popup-desc" className="text-[11px] sm:text-xs text-neutral-400 mt-1">
                Select a category to browse and request a quote
              </p>
            </div>

            <div className="relative z-10 px-3 sm:px-4 pb-4 sm:pb-5">
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.path}
                      onClick={() => handleSelect(cat.path)}
                      className="group relative flex items-center gap-2.5 sm:gap-3 rounded-lg px-3 sm:px-3.5 py-2.5 sm:py-3 text-left transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                      style={{ background: "rgba(255,255,255,0.03)" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(251,113,133,0.08)";
                        e.currentTarget.style.boxShadow = "0 0 20px rgba(251,113,133,0.06), inset 0 0 20px rgba(251,113,133,0.03)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 rounded-md bg-rose-500/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-md flex items-center justify-center border transition-all duration-300"
                          style={{ borderColor: "rgba(251,113,133,0.12)", background: "rgba(251,113,133,0.05)" }}
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-400/70 group-hover:text-rose-400 transition-colors duration-300" />
                        </div>
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11px] sm:text-xs font-medium text-white/85 group-hover:text-white transition-colors duration-300 block truncate">{cat.label}</span>
                        <span className="text-[9px] sm:text-[10px] text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300 block truncate">{cat.desc}</span>
                      </div>
                      <div className="ml-auto flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-rose-400/60">
                          <path d="M3 1L7 5L3 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
