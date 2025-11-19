import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageTransition } from "@/components/PageTransition";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Technology from "./pages/Technology";
import RDProgress from "./pages/RDProgress";
import Vision from "./pages/Vision";
import PilotProgram from "./pages/PilotProgram";
import Investors from "./pages/Investors";
import UseCases from "./pages/UseCases";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <PageTransition>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<Products />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/rd-progress" element={<RDProgress />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/pilot-program" element={<PilotProgram />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

const queryClient = new QueryClient();


const skipLinkStyles: React.CSSProperties = {
  position: 'absolute',
  left: 0,
  top: 0,
  background: '#fff',
  color: '#000',
  padding: '8px 16px',
  zIndex: 1000,
  transform: 'translateY(-200%)',
  transition: 'transform 0.2s',
};

const skipLinkFocusStyles: React.CSSProperties = {
  ...skipLinkStyles,
  transform: 'translateY(0)',
};

const App = () => {
  const [skipFocused, setSkipFocused] = React.useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <a
          href="#main-content"
          style={skipFocused ? skipLinkFocusStyles : skipLinkStyles}
          onFocus={() => setSkipFocused(true)}
          onBlur={() => setSkipFocused(false)}
          onMouseDown={() => setSkipFocused(false)}
        >
          Skip to main content
        </a>
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
