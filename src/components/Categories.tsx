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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Section */}
      <div className="pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            Kategóriák
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Szoftver Kategóriák
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Böngéssz széles kategória választékunkban és találd meg a számodra
            tökéletes szoftvert. Mindent egy helyen, a legjobb árakon, azonnali
            aktiválással.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        {collections.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Nincsenek elérhető kategóriák
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => {
              const color = categoryColors[index % categoryColors.length];
              const icon = categoryIcons[index % categoryIcons.length];

              return (
                <Link
                  key={collection.id}
                  to={`/categories/${collection.handle}`}
                  className="group relative block bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-blue-200"
                >
                  {/* Gradient accent line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>

                  {/* Category Image Section */}
                  {collection.image ? (
                    <div className="relative h-40 overflow-hidden bg-gray-900">
                      {/* Blurred background image */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url(${collection.image.url})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          filter: "blur(5px)",
                          transform: "scale(1.1)",
                        }}
                      ></div>
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/30"></div>
                      {/* Main image (contain) */}
                      <img
                        src={collection.image.url}
                        alt={collection.image.altText || collection.title}
                        className="relative w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 z-10"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                      <div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${color} flex items-center justify-center text-4xl shadow-xl`}
                      >
                        {icon}
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Icon and Title */}
                    <div className="flex items-start gap-3 mb-4">
                      {collection.image && (
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-xl shrink-0 shadow-md`}
                        >
                          {icon}
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1 line-clamp-2">
                          {collection.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    {collection.description && (
                      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-grow">
                        {collection.description}
                      </p>
                    )}

                    {/* CTA Button */}
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between group/btn">
                        <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                          Termékek megtekintése
                        </span>
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                          <svg
                            className="w-4 h-4 text-blue-600 transform group-hover:translate-x-0.5 transition-transform duration-300"
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
