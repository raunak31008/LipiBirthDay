import { useEffect } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import BirthdayWishes from "./pages/BirthdayWishes";
import AboutUs from "./pages/AboutUs";
import PhotoLightbox from "./components/PhotoLightbox";
import LoveReactionPanel, { startAutoLoveEmojis } from "./components/LoveReactionPanel";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/wishes" component={BirthdayWishes} />
      <Route path="/about" component={AboutUs} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h1>
            <p className="text-gray-600">The page you're looking for doesn't exist.</p>
          </div>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Start auto love emojis after 3 seconds
    const timer = setTimeout(() => {
      startAutoLoveEmojis();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen">
          <Navigation />
          <Router />
          <PhotoLightbox />
          <LoveReactionPanel />
          <Toaster />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
