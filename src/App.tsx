
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider, useApp } from "@/contexts/AppContext";
import BottomNav from "@/components/BottomNav";

// Pages
import LanguageSelection from "./pages/onboarding/LanguageSelection";
import VoiceSetup from "./pages/onboarding/VoiceSetup";
import AgentReferral from "./pages/onboarding/AgentReferral";
import KYC from "./pages/onboarding/KYC";
import Dashboard from "./pages/Dashboard";
import Loan from "./pages/Loan";
import Savings from "./pages/Savings";
import Insurance from "./pages/Insurance";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const { isOnboarded } = useApp();

  return (
    <>
      <Routes>
        {/* Onboarding Routes */}
        <Route path="/onboarding/language" element={<LanguageSelection />} />
        <Route path="/onboarding/voice-setup" element={<VoiceSetup />} />
        <Route path="/onboarding/agent-referral" element={<AgentReferral />} />
        <Route path="/onboarding/kyc" element={<KYC />} />
        
        {/* App Routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loan" element={<Loan />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/help" element={<Help />} />
        
        {/* Root route redirect */}
        <Route 
          path="/" 
          element={
            isOnboarded ? 
              <Navigate to="/dashboard" replace /> : 
              <Navigate to="/onboarding/language" replace />
          } 
        />
        
        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Show bottom nav only on main app pages */}
      {isOnboarded && (
        <BottomNav />
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
