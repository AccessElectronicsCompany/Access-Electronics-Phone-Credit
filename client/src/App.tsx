import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/contexts/CartContext";

import Home from "@/pages/home";
import Phones from "@/pages/phones";
import IPads from "@/pages/ipads";
import MacBooks from "@/pages/macbooks";
import Buds from "@/pages/buds";
import Watches from "@/pages/watches";
import Tablets from "@/pages/tablets";
import GamingSound from "@/pages/gaming-sound";
import GamingCombo from "@/pages/gaming-combo";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/phones" component={Phones} />
      <Route path="/ipads" component={IPads} />
      <Route path="/macbooks" component={MacBooks} />
      <Route path="/buds" component={Buds} />
      <Route path="/watches" component={Watches} />
      <Route path="/tablets" component={Tablets} />
      <Route path="/gaming-sound" component={GamingSound} />
      <Route path="/gaming-combo" component={GamingCombo} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <CartProvider>
          <div>
            <Toaster />
            <Router />
          </div>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
