import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  shopifyClient,
  GET_COLLECTION_PRODUCTS_QUERY,
  type Product,
} from "../lib/shopify";
import { ProductCard } from "./ProductCard";

interface CollectionProductsResponse {
  data: {
    collection: {
      id: string;
      title: string;
      description: string;
      products: {
        edges: Array<{
          node: Product;
        }>;
      };
    } | null;
  };
}

export function CategoryProducts() {
  const { handle } = useParams<{ handle: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryTitle, setCategoryTitle] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      if (!handle) {
        setError("Nincs megadva kategória");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await shopifyClient.request<
          CollectionProductsResponse["data"]
        >(GET_COLLECTION_PRODUCTS_QUERY, {
          variables: { handle, first: 50 },
        });

        if (response.data?.collection) {
          setCategoryTitle(response.data.collection.title);
          setCategoryDescription(response.data.collection.description);
          setProducts(
            response.data.collection.products.edges.map((edge) => edge.node)
          );
        } else {
          setError("Nem található ez a kategória");
        }
      } catch (err) {
        console.error("Error fetching category products:", err);
        setError("Nem sikerült betölteni a termékeket.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [handle]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Termékek betöltése...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <Link
            to="/categories"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Vissza a kategóriákhoz
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Category Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Vissza a kategóriákhoz
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {categoryTitle}
          </h1>
          {categoryDescription && (
            <p className="text-xl text-white/90 max-w-2xl">
              {categoryDescription}
            </p>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              Ebben a kategóriában még nincsenek termékek
            </p>
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Vissza a kategóriákhoz
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {products.length} termék
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
