import { useState } from "react";
import type { Product } from "../lib/shopify";
import { useCart } from "../hooks/useCart";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const imageUrl =
    product.images.edges[0]?.node.url || "https://via.placeholder.com/300";
  const price = product.priceRange.minVariantPrice;
  const formattedPrice = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: price.currencyCode,
  }).format(parseFloat(price.amount));

  const handleAddToCart = async () => {
    setIsAdding(true);
    await addToCart(product);
    setTimeout(() => setIsAdding(false), 600);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={imageUrl}
          alt={product.images.edges[0]?.node.altText || product.title}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        {product.description && (
          <p className="product-description">
            {product.description.substring(0, 100)}
            {product.description.length > 100 ? "..." : ""}
          </p>
        )}
        <div className="product-footer">
          <span className="product-price">{formattedPrice}</span>
          <button
            className={`add-to-cart-btn ${isAdding ? "adding" : ""}`}
            onClick={handleAddToCart}
            disabled={isAdding}
          >
            {isAdding ? "✓ Hozzáadva!" : "Kosárba"}
          </button>
        </div>
      </div>
    </div>
  );
}
