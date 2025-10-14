import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import type { CheckoutFormData } from "../context/CartContext";
import "./CheckoutPage.css";

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, getTotalPrice, updateBuyerIdentity, cartId } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const [formData, setFormData] = useState<CheckoutFormData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Magyarország",
  });

  const totalPrice = getTotalPrice();
  const currencyCode =
    items[0]?.product.priceRange.minVariantPrice.currencyCode || "HUF";

  const formattedTotal = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: currencyCode,
  }).format(totalPrice);

  const validatePhoneNumber = (phone: string): boolean => {
    // Check if phone number starts with + and has at least 10 digits
    const phoneRegex = /^\+\d{10,15}$/;
    return phoneRegex.test(phone);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    // Validate phone number on change
    if (name === "phone") {
      if (value && !validatePhoneNumber(value)) {
        setPhoneError(
          "A telefonszámnak nemzetközi formátumban kell lennie (pl. +36301234567)"
        );
      } else {
        setPhoneError(null);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsProcessing(true);

    try {
      if (!cartId) {
        setError("Nincs aktív kosár. Kérjük, adj hozzá termékeket a kosárhoz.");
        setIsProcessing(false);
        return;
      }

      // Validate phone number before submission
      if (!validatePhoneNumber(formData.phone)) {
        setError(
          "Kérjük, add meg a telefonszámot nemzetközi formátumban (pl. +36301234567)"
        );
        setIsProcessing(false);
        return;
      }

      // Update the cart with buyer identity and shipping address
      const checkoutUrl = await updateBuyerIdentity(formData);

      if (checkoutUrl) {
        // Successfully updated buyer identity, redirect to Shopify checkout
        // The checkout will be pre-filled with all the information
        window.location.href = checkoutUrl;
      } else {
        setError(
          "Hiba történt a rendelés feldolgozása során. Kérjük, próbáld újra."
        );
        setIsProcessing(false);
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Váratlan hiba történt. Kérjük, próbáld újra későb.");
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="empty-checkout">
            <h2>A kosár üres</h2>
            <p>Adj hozzá termékeket a kosárhoz a vásárlás folytatásához.</p>
            <button onClick={() => navigate("/")} className="back-button">
              Vissza a boltba
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <button onClick={() => navigate("/")} className="back-link">
          ← Vissza a boltba
        </button>

        <div className="checkout-content">
          <div className="checkout-form-section">
            <h1>Pénztár</h1>

            {error && (
              <div className="error-message">
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
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <section className="form-section">
                <h2>Kapcsolattartási adatok</h2>
                <div className="form-group">
                  <label htmlFor="email">
                    Email cím <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="pelda@email.com"
                  />
                </div>
              </section>

              <section className="form-section">
                <h2>Szállítási cím</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      Keresztnév <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="János"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">
                      Vezetéknév <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Kovács"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Telefonszám <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="+36301234567"
                    className={phoneError ? "input-error" : ""}
                  />
                  {phoneError && (
                    <span className="field-error">{phoneError}</span>
                  )}
                  <span className="field-hint">
                    Nemzetközi formátum: +36301234567
                  </span>
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    Utca, házszám <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="Fő utca 1."
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="city">
                      Város <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      placeholder="Budapest"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="postalCode">
                      Irányítószám <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      placeholder="1234"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="country">
                    Ország <span className="required">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Magyarország">Magyarország</option>
                    <option value="Románia">Románia</option>
                    <option value="Szlovákia">Szlovákia</option>
                    <option value="Ausztria">Ausztria</option>
                  </select>
                </div>
              </section>

              <button
                type="submit"
                className="submit-button"
                disabled={isProcessing}
              >
                {isProcessing ? "Feldolgozás..." : "Tovább a fizetéshez"}
              </button>
            </form>
          </div>

          <div className="order-summary">
            <h2>Rendelés összesítő</h2>
            <div className="summary-items">
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
                  <div key={item.product.id} className="summary-item">
                    <div className="summary-item-image-wrapper">
                      <img
                        src={imageUrl}
                        alt={item.product.title}
                        className="summary-item-image"
                      />
                      <span className="summary-item-quantity">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="summary-item-details">
                      <h3>{item.product.title}</h3>
                      <span className="summary-item-price">
                        {formattedItemTotal}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="summary-totals">
              <div className="summary-row">
                <span>Részösszeg</span>
                <span>{formattedTotal}</span>
              </div>
              <div className="summary-row">
                <span>Szállítás</span>
                <span>Számítva a következő lépésben</span>
              </div>
              <div className="summary-row summary-total">
                <span>Összesen</span>
                <span className="total-amount">{formattedTotal}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
