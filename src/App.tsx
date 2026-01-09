import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

import AboutMe from "./pages/aboutme";
import Index from "./pages/Index";
import Docs from "./pages/Docs";
import NotFound from "./pages/NotFound";
import SetupGuide from "./pages/SetupGuide";  

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="docs-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/:section" element={<Docs />} />
            <Route path="/aboutme" element={<AboutMe />} />

            {/* 👇 NEW ROUTE */}
            <Route path="/setup" element={<SetupGuide />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
