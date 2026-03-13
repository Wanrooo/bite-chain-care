import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import PatientLookup from "@/pages/PatientLookup";
import RegisterPatient from "@/pages/RegisterPatient";
import BlockchainLedger from "@/pages/BlockchainLedger";
import Vaccinations from "@/pages/Vaccinations";
import ClinicNetwork from "@/pages/ClinicNetwork";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout>
                <Dashboard />
              </AppLayout>
            }
          />
          <Route
            path="/patients"
            element={
              <AppLayout>
                <PatientLookup />
              </AppLayout>
            }
          />
          <Route
            path="/register"
            element={
              <AppLayout>
                <RegisterPatient />
              </AppLayout>
            }
          />
          <Route
            path="/blockchain"
            element={
              <AppLayout>
                <BlockchainLedger />
              </AppLayout>
            }
          />
          <Route
            path="/vaccinations"
            element={
              <AppLayout>
                <Vaccinations />
              </AppLayout>
            }
          />
          <Route
            path="/clinics"
            element={
              <AppLayout>
                <ClinicNetwork />
              </AppLayout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
