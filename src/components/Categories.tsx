import React from "react";
import { Link } from "react-router-dom";

const Categories: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: "Operációs rendszerek",
      description: "Windows, macOS, Linux licenc kulcsok",
      icon: "💻",
      color: "from-blue-500 to-blue-600",
      count: 15,
    },
    {
      id: 2,
      name: "Office szoftverek",
      description: "Microsoft Office, Google Workspace",
      icon: "📊",
      color: "from-green-500 to-green-600",
      count: 8,
    },
    {
      id: 3,
      name: "Antivírus szoftverek",
      description: "Norton, McAfee, Bitdefender",
      icon: "🛡️",
      color: "from-red-500 to-red-600",
      count: 12,
    },
    {
      id: 4,
      name: "Grafikai szoftverek",
      description: "Adobe Creative Suite, Corel",
      icon: "🎨",
      color: "from-purple-500 to-purple-600",
      count: 20,
    },
    {
      id: 5,
      name: "Játékok",
      description: "Steam, Origin, Epic Games kulcsok",
      icon: "🎮",
      color: "from-orange-500 to-orange-600",
      count: 150,
    },
    {
      id: 6,
      name: "Fejlesztői eszközök",
      description: "IDE-k, adatbázisok, szerverek",
      icon: "⚙️",
      color: "from-indigo-500 to-indigo-600",
      count: 25,
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/kategoriak/${category.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="group block bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}
                  >
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {category.count} termék
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {category.description}
                </p>

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
          ))}
        </div>
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
