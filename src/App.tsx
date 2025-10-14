import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { CheckoutPage } from "./components/CheckoutPage";
import Kategoriak from "./components/Categories";
import Kapcsolat from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/categories" element={<Kategoriak />} />
            <Route path="/contact" element={<Kapcsolat />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
