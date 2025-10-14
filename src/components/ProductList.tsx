import { useEffect, useState } from "react";
import { shopifyClient, GET_PRODUCTS_QUERY } from "../lib/shopify";
import type { Product, ProductsResponse } from "../lib/shopify";
import { ProductCard } from "./ProductCard";
import HeroSection from "./HeroSection";
import "./ProductList.css";

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await shopifyClient.request<ProductsResponse["data"]>(
          GET_PRODUCTS_QUERY,
          {
            variables: { first: 12 },
          }
        );

        if (response.data?.products?.edges) {
          setProducts(response.data.products.edges.map((edge) => edge.node));
        }
      } catch (err) {
        setError("Hiba történt a termékek betöltése közben");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        <HeroSection />
        <div className="product-list-container">
          <div className="loading">Termékek betöltése...</div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <HeroSection />
        <div className="product-list-container">
          <div className="error">{error}</div>
        </div>
      </>
    );
  }

  if (products.length === 0) {
    return (
      <>
        <HeroSection />
        <div className="product-list-container">
          <div className="empty">Nincsenek elérhető termékek</div>
        </div>
      </>
    );
  }

  return (
    <>
      <HeroSection />
      <div id="products" className="product-list-container">
        <h1 className="products-title">Termékeink</h1>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
