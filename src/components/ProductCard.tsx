import { useState } from "react";
import type { Product } from "../lib/shopify";
import { useCart } from "../hooks/useCart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const imageUrl =
    product.images.edges[0]?.node.url || "https://via.placeholder.com/300";
  const price = product.priceRange.minVariantPrice;
  const variant = product.variants.edges[0]?.node;

  const currentPrice = parseFloat(price.amount);
  const compareAtPrice = variant?.compareAtPriceV2
    ? parseFloat(variant.compareAtPriceV2.amount)
    : null;

  const hasDiscount = compareAtPrice && compareAtPrice > currentPrice;

  const formattedCurrentPrice = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: price.currencyCode,
  }).format(currentPrice);

  const formattedCompareAtPrice = compareAtPrice
    ? new Intl.NumberFormat("hu-HU", {
        style: "currency",
        currency: price.currencyCode,
      }).format(compareAtPrice)
    : "";

  const discountPercentage = hasDiscount
    ? Math.round(((compareAtPrice! - currentPrice) / compareAtPrice!) * 100)
    : 0;

  const handleAddToCart = async () => {
    setIsAdding(true);
    await addToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 ease-out flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200">
      {/* Sale badge */}
      {hasDiscount && (
        <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full shadow-lg">
          AKCIÓ
        </div>
      )}

      {/* Top gradient border on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

      <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200">
        <img
          src={imageUrl}
          alt={product.images.edges[0]?.node.altText || product.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight tracking-tight">
          {product.title}
        </h3>

        {product.description && (
          <p className="text-sm text-gray-600 mb-5 leading-relaxed flex-grow line-clamp-2">
            {product.description.substring(0, 100)}
            {product.description.length > 100 ? "..." : ""}
          </p>
        )}

        <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
          <div className="flex flex-col">
            {hasDiscount ? (
              <>
                <span className="text-2xl font-extrabold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent tracking-tight">
                  {formattedCurrentPrice}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 line-through">
                    {formattedCompareAtPrice}
                  </span>
                  <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs font-bold rounded-full">
                    -{discountPercentage}%
                  </span>
                </div>
              </>
            ) : (
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                {formattedCurrentPrice}
              </span>
            )}
          </div>

          <button
            className={`relative px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-300 ease-out overflow-hidden cursor-pointer ${
              isAdding
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white animate-pulse"
                : "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:scale-105 active:translate-y-0 active:scale-100"
            }`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {/* Shimmer effect */}
            {!isAdding && (
              <div className="absolute inset-0 -left-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-all duration-500 group-hover:left-full"></div>
            )}

            <span className="relative z-10">
              {isAdding ? "✓ Hozzáadva!" : "Kosárba"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
