import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductList } from "./components/ProductList";
import { CheckoutPage } from "./components/CheckoutPage";
import Categories from "./components/Categories";
import { CategoryProducts } from "./components/CategoryProducts";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import RefundPolicy from "./components/RefundPolicy";
import { shopifyAnalytics, sessionTracker } from "./lib/analytics";
import "./App.css";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    // Initialize session on first load
    sessionTracker.getSessionId();
  }, []);

  useEffect(() => {
    // Track page views on route change
    sessionTracker.trackPageView();
    shopifyAnalytics.trackPageView(location.pathname);
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app flex flex-col min-h-screen">
          <AnalyticsTracker />
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/categories" element={<Categories />} />
              <Route
                path="/categories/:handle"
                element={<CategoryProducts />}
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
