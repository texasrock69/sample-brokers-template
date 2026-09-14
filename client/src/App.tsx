import { brokerConfig } from "@/brokerConfig";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from "react";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);
  return null;
}

function SiteMetadata() {
  useEffect(() => {
    document.title = brokerConfig.seo.title;

    const upsertMeta = (selector: string, attribute: string, value: string) => {
      let element = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        const [key, keyValue] = attribute.split("=");
        element.setAttribute(key, keyValue.replace(/["']/g, ""));
        document.head.appendChild(element);
      }
      element.setAttribute("content", value);
    };

    upsertMeta('meta[name="description"]', 'name="description"', brokerConfig.seo.description);
    upsertMeta('meta[property="og:title"]', 'property="og:title"', brokerConfig.seo.title);
    upsertMeta('meta[property="og:description"]', 'property="og:description"', brokerConfig.seo.description);
    upsertMeta('meta[property="og:image"]', 'property="og:image"', brokerConfig.seo.socialImage);
    upsertMeta('meta[name="twitter:card"]', 'name="twitter:card"', "summary_large_image");

    if (brokerConfig.seo.canonicalUrl) {
      let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = brokerConfig.seo.canonicalUrl;
    }
  }, []);

  return null;
}

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Sell from "./pages/Sell";
import Selling from "./pages/Selling";
import SellingTutorial from "./pages/SellingTutorial";
import Buying from "./pages/Buying";
import BuyingTutorial from "./pages/BuyingTutorial";
import Listings from "./pages/Listings";
import OnlineNDA from "./pages/OnlineNDA";
import BecomeBroker from "./pages/BecomeBroker";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/sell" component={Sell} />
      <Route path="/no-cost-valuation" component={Sell} />
      <Route path="/selling" component={Selling} />
      <Route path="/selling-tutorial" component={SellingTutorial} />
      <Route path="/buy" component={Buying} />
      <Route path="/buying-tutorial" component={BuyingTutorial} />
      <Route path="/listings" component={Listings} />
      <Route path="/online-nda" component={OnlineNDA} />
      <Route path="/become-a-broker" component={BecomeBroker} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <SiteMetadata />
          <Toaster />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
