import { useEffect, useState } from "react";
import { shopifyClient, GET_PRODUCTS_QUERY } from "../lib/shopify";
import type { Product, ProductsResponse } from "../lib/shopify";
import { ProductCard } from "./ProductCard";
import HeroSection from "./HeroSection";

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
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center text-gray-600 text-lg">
            Termékek betöltése...
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center text-red-600 text-lg">{error}</div>
        </div>
      </>
    );
  }

  if (products.length === 0) {
    return (
      <>
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center text-gray-600 text-lg">
            Nincsenek elérhető termékek
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <HeroSection />
      <div id="products" className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Kiemelt termékeink
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
