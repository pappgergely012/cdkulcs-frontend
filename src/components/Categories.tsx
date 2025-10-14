import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  shopifyClient,
  GET_COLLECTIONS_QUERY,
  type Collection,
  type CollectionsResponse,
} from "../lib/shopify";

const Categories: React.FC = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categoryColors = [
    "from-blue-500 to-blue-600",
    "from-green-500 to-green-600",
    "from-red-500 to-red-600",
    "from-purple-500 to-purple-600",
    "from-orange-500 to-orange-600",
    "from-indigo-500 to-indigo-600",
    "from-pink-500 to-pink-600",
    "from-yellow-500 to-yellow-600",
  ];

  const categoryIcons = ["💻", "📊", "🛡️", "🎨", "🎮", "⚙️", "🔧", "📱"];

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true);
        const response = await shopifyClient.request<
          CollectionsResponse["data"]
        >(GET_COLLECTIONS_QUERY, {
          variables: { first: 20 },
        });
        setCollections(
          response.data?.collections.edges.map((edge) => edge.node) || []
        );
      } catch (err) {
        console.error("Error fetching collections:", err);
        setError("Nem sikerült betölteni a kategóriákat.");
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Kategóriák betöltése...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg mb-4">{error}</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Szoftver Kategóriák
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Fedezd fel hatalmas szoftver választékunkat kategóriánként
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {collections.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nincsenek elérhető kategóriák
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection, index) => {
              const color = categoryColors[index % categoryColors.length];
              const icon = categoryIcons[index % categoryIcons.length];

              return (
                <Link
                  key={collection.id}
                  to={`/categories/${collection.handle}`}
                  className="group block bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {collection.image ? (
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={collection.image.url}
                        alt={collection.image.altText || collection.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  ) : (
                    <div className={`h-2 bg-gradient-to-r ${color}`}></div>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center text-2xl`}
                      >
                        {icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {collection.title}
                        </h3>
                      </div>
                    </div>

                    {collection.description && (
                      <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                        {collection.description}
                      </p>
                    )}

                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                      <span>Böngészés</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Back to Home */}
      <div className="max-w-7xl mx-auto px-4 pb-12 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
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
          Vissza a főoldalra
        </Link>
      </div>
    </div>
  );
};

export default Categories;
