import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { CartModal } from "./CartModal";
import "./Header.css";

export function Header() {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <>
      <header className="header">
        <div className="header-content">
          <div className="header-logo">
            <img
              src="/images/cd-key-logo.png"
              alt="CD Kulcs"
              className="logo-image"
            />
            <span className="logo-text">CD Kulcs</span>
          </div>
          <button
            className="cart-button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Kosár megnyitása"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
