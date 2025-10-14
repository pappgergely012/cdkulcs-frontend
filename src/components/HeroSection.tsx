import React from "react";

const HeroSection: React.FC = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");

    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[calc(50vh+100px)] max-h-[780px] pb-16 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-image.webp"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-sm font-semibold mb-6 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          Azonnali kézbesítés
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 text-white drop-shadow-lg">
          Legális szoftver kulcsok
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            verhetetlen áron
          </span>
        </h1>

        <p className="text-base md:text-lg text-white/90 mb-6 max-w-xl mx-auto drop-shadow-md">
          Legális kulcsok, azonnali aktiválás, 24/7 ügyfélszolgálat.
        </p>

        <div className="flex justify-center gap-3 mb-5 flex-wrap">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Legális</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Azonnali</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>Biztonságos</span>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:scale-105"
            onClick={scrollToProducts}
          >
            Böngészés kezdése
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-5 h-8 border-2 border-white/60 rounded-full relative">
          <div className="w-1 h-1.5 bg-white/80 rounded-full absolute top-1.5 left-1/2 transform -translate-x-1/2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
