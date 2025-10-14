import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { CheckoutPage } from "./components/CheckoutPage";
import Categories from "./components/Categories";
import { CategoryProducts } from "./components/CategoryProducts";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:handle" element={<CategoryProducts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
