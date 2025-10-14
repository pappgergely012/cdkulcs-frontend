import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  shopifyClient,
  GET_COLLECTION_PRODUCTS_QUERY,
  type Product,
} from "../lib/shopify";
import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

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
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

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
      <div className="min-h-screen bg-white">
        {/* Category Header Skeleton */}
        <div className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-2">
              <div className="h-4 w-40 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="h-8 w-64 bg-gray-200 rounded mb-3 animate-pulse"></div>
            <div className="h-5 w-96 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Products Grid Skeleton */}
        <div className="max-w-7xl mx-auto px-4 py-12 pt-0">
          <div className="mb-4">
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
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
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-2">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-xs font-medium"
            >
              <svg
                className="w-4 h-4"
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
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
            {categoryTitle}
          </h1>
          {categoryDescription && (
            <div className="max-w-7xl">
              <p
                className={`text-sm md:text-md text-gray-600 leading-relaxed ${
                  !isDescriptionExpanded ? "line-clamp-1" : ""
                }`}
              >
                {categoryDescription}
              </p>
              {categoryDescription.length > 150 && (
                <button
                  onClick={() =>
                    setIsDescriptionExpanded(!isDescriptionExpanded)
                  }
                  className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {isDescriptionExpanded ? "Kevesebb" : "Tovább olvasom"}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 pt-0">
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
            <div className="mb-4">
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
