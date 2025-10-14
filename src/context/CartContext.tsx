import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Product } from "../lib/shopify";
import {
  shopifyClient,
  GET_CART_QUERY,
  CREATE_CART_MUTATION,
  ADD_TO_CART_MUTATION,
  UPDATE_CART_MUTATION,
  REMOVE_FROM_CART_MUTATION,
  UPDATE_BUYER_IDENTITY_MUTATION,
} from "../lib/shopify";
import type { ShopifyCart } from "../lib/shopify";

export interface CartItem {
  product: Product;
  quantity: number;
  lineId?: string;
  variantId?: string;
}

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  updateBuyerIdentity: (formData: CheckoutFormData) => Promise<string | null>;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  checkoutUrl: string;
  cartId: string | null;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartId, setCartId] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string>("");

  // Load cart ID from localStorage on mount and fetch cart data
  useEffect(() => {
    const loadCart = async () => {
      const savedCartId = localStorage.getItem("shopify_cart_id");
      if (savedCartId) {
        setCartId(savedCartId);

        try {
          // Fetch the cart data from Shopify
          const response = await shopifyClient.request(GET_CART_QUERY, {
            variables: {
              cartId: savedCartId,
            },
          });

          const cart = response.data?.cart as ShopifyCart | null;
          if (cart) {
            syncCartFromShopify(cart);
          } else {
            // Cart doesn't exist anymore, clear the saved ID
            localStorage.removeItem("shopify_cart_id");
            setCartId(null);
          }
        } catch (error) {
          console.error("Error loading cart:", error);
          // Clear invalid cart ID
          localStorage.removeItem("shopify_cart_id");
          setCartId(null);
        }
      }
    };

    loadCart();
  }, []);

  const syncCartFromShopify = (cart: ShopifyCart) => {
    const cartItems: CartItem[] = cart.lines.edges.map((edge) => ({
      product: {
        id: edge.node.merchandise.product.id,
        title: edge.node.merchandise.product.title,
        description: "",
        images: {
          edges: edge.node.merchandise.product.featuredImage
            ? [
                {
                  node: {
                    url: edge.node.merchandise.product.featuredImage.url,
                    altText: null,
                  },
                },
              ]
            : [],
        },
        priceRange: {
          minVariantPrice: {
            amount: edge.node.merchandise.priceV2.amount,
            currencyCode: edge.node.merchandise.priceV2.currencyCode,
          },
        },
        variants: {
          edges: [
            {
              node: {
                id: edge.node.merchandise.id,
                title: edge.node.merchandise.title,
                priceV2: edge.node.merchandise.priceV2,
              },
            },
          ],
        },
      },
      quantity: edge.node.quantity,
      lineId: edge.node.id,
      variantId: edge.node.merchandise.id,
    }));

    setItems(cartItems);
    setCheckoutUrl(cart.checkoutUrl);
  };

  const addToCart = async (product: Product) => {
    const variantId = product.variants.edges[0]?.node.id;
    if (!variantId) return;

    try {
      if (!cartId) {
        // Create new cart
        const response = await shopifyClient.request(CREATE_CART_MUTATION, {
          variables: {
            lines: [{ merchandiseId: variantId, quantity: 1 }],
          },
        });

        const cart = response.data?.cartCreate?.cart as ShopifyCart;
        if (cart) {
          setCartId(cart.id);
          localStorage.setItem("shopify_cart_id", cart.id);
          syncCartFromShopify(cart);
        }
      } else {
        // Add to existing cart
        const response = await shopifyClient.request(ADD_TO_CART_MUTATION, {
          variables: {
            cartId,
            lines: [{ merchandiseId: variantId, quantity: 1 }],
          },
        });

        const cart = response.data?.cartLinesAdd?.cart as ShopifyCart;
        if (cart) {
          syncCartFromShopify(cart);
        }
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const removeFromCart = async (productId: string) => {
    const item = items.find((item) => item.product.id === productId);
    if (!item || !item.lineId || !cartId) return;

    try {
      const response = await shopifyClient.request(REMOVE_FROM_CART_MUTATION, {
        variables: {
          cartId,
          lineIds: [item.lineId],
        },
      });

      const cart = response.data?.cartLinesRemove?.cart as ShopifyCart;
      if (cart) {
        syncCartFromShopify(cart);
      }
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    const item = items.find((item) => item.product.id === productId);
    if (!item || !item.lineId || !cartId) return;

    try {
      const response = await shopifyClient.request(UPDATE_CART_MUTATION, {
        variables: {
          cartId,
          lines: [{ id: item.lineId, quantity }],
        },
      });

      const cart = response.data?.cartLinesUpdate?.cart as ShopifyCart;
      if (cart) {
        syncCartFromShopify(cart);
      }
    } catch (error) {
      console.error("Error updating cart:", error);
    }
  };

  const updateBuyerIdentity = async (
    formData: CheckoutFormData
  ): Promise<string | null> => {
    if (!cartId) {
      console.error("No cart ID available");
      return null;
    }

    try {
      // Map country name to English name (required by Shopify)
      const countryNameMap: Record<string, string> = {
        Magyarország: "Hungary",
        Románia: "Romania",
        Szlovákia: "Slovakia",
        Ausztria: "Austria",
      };

      const countryCodeMap: Record<string, string> = {
        Magyarország: "HU",
        Románia: "RO",
        Szlovákia: "SK",
        Ausztria: "AT",
      };

      const countryName = countryNameMap[formData.country] || "Hungary";
      const countryCode = countryCodeMap[formData.country] || "HU";

      const buyerIdentity = {
        email: formData.email,
        phone: formData.phone,
        countryCode: countryCode,
        deliveryAddressPreferences: [
          {
            deliveryAddress: {
              address1: formData.address,
              city: formData.city,
              country: countryName,
              zip: formData.postalCode,
              firstName: formData.firstName,
              lastName: formData.lastName,
              phone: formData.phone,
            },
          },
        ],
      };

      const response = await shopifyClient.request(
        UPDATE_BUYER_IDENTITY_MUTATION,
        {
          variables: {
            cartId,
            buyerIdentity,
          },
        }
      );

      const cart = response.data?.cartBuyerIdentityUpdate?.cart;
      const userErrors = response.data?.cartBuyerIdentityUpdate?.userErrors;

      if (userErrors && userErrors.length > 0) {
        console.error("Buyer identity update errors:", userErrors);
        return null;
      }

      if (cart) {
        setCheckoutUrl(cart.checkoutUrl);
        return cart.checkoutUrl;
      }

      return null;
    } catch (error) {
      console.error("Error updating buyer identity:", error);
      return null;
    }
  };

  const clearCart = () => {
    setItems([]);
    setCartId(null);
    setCheckoutUrl("");
    localStorage.removeItem("shopify_cart_id");
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item.product.priceRange.minVariantPrice.amount);
      return total + price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateBuyerIdentity,
        clearCart,
        getTotalItems,
        getTotalPrice,
        checkoutUrl,
        cartId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
