import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "./CartModal.css";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const navigate = useNavigate();
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();

  if (!isOpen) return null;

  const totalPrice = getTotalPrice();
  const currencyCode =
    items[0]?.product.priceRange.minVariantPrice.currencyCode || "HUF";

  const formattedTotal = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: currencyCode,
  }).format(totalPrice);

  return (
    <div className="cart-modal-overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-modal-header">
          <h2>Kosár</h2>
          <button className="close-button" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cart-modal-content">
          {items.length === 0 ? (
            <div className="empty-cart">
              <p>A kosár üres</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => {
                  const price = parseFloat(
                    item.product.priceRange.minVariantPrice.amount
                  );
                  const itemTotal = price * item.quantity;
                  const formattedItemTotal = new Intl.NumberFormat("hu-HU", {
                    style: "currency",
                    currency: currencyCode,
                  }).format(itemTotal);

                  const imageUrl =
                    item.product.images.edges[0]?.node.url ||
                    "https://via.placeholder.com/80";

                  return (
                    <div key={item.product.id} className="cart-item">
                      <img
                        src={imageUrl}
                        alt={item.product.title}
                        className="cart-item-image"
                      />
                      <div className="cart-item-details">
                        <h3 className="cart-item-title">
                          {item.product.title}
                        </h3>
                        <div className="cart-item-controls">
                          <div className="quantity-controls">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity - 1
                                )
                              }
                              className="quantity-button"
                            >
                              -
                            </button>
                            <span className="quantity">{item.quantity}</span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.quantity + 1
                                )
                              }
                              className="quantity-button"
                            >
                              +
                            </button>
                          </div>
                          <span className="cart-item-price">
                            {formattedItemTotal}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="remove-button"
                        aria-label="Termék eltávolítása"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </div>

              <div className="cart-modal-footer">
                <button onClick={clearCart} className="clear-cart-button">
                  Kosár ürítése
                </button>
                <div className="cart-total">
                  <span>Összesen:</span>
                  <span className="total-price">{formattedTotal}</span>
                </div>
                <button
                  className="checkout-button"
                  onClick={() => {
                    onClose();
                    navigate("/checkout");
                  }}
                >
                  Pénztár
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
