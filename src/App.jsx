import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, BookOpen, Code, HelpCircle } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
import Introduction from "./pages/Introduction.jsx";
import GettingStarted from "./pages/GettingStarted.jsx";
import APIReference from "./pages/APIReference.jsx";
import FAQ from "./pages/FAQ.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Introduction",
    to: "/introduction",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "Getting Started",
    to: "/getting-started",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    title: "API Reference",
    to: "/api-reference",
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "FAQ",
    to: "/faq",
    icon: <HelpCircle className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="introduction" element={<Introduction />} />
              <Route path="getting-started" element={<GettingStarted />} />
              <Route path="api-reference" element={<APIReference />} />
              <Route path="faq" element={<FAQ />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;