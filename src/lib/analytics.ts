// Shopify Analytics types
interface ShopifyAnalytics {
  publish: (eventName: string, data: Record<string, unknown>) => void;
}

interface WindowWithShopify extends Window {
  Shopify?: {
    analytics?: ShopifyAnalytics;
  };
}

// Shopify Analytics for tracking sessions and events
export const shopifyAnalytics = {
  // Track page views
  trackPageView: (page: string) => {
    if (typeof window !== "undefined") {
      const shopifyWindow = window as WindowWithShopify;
      shopifyWindow.Shopify?.analytics?.publish("page_viewed", {
        page,
        timestamp: new Date().toISOString(),
      });
    }
  },

  // Track product views
  trackProductView: (productId: string, productTitle: string) => {
    if (typeof window !== "undefined") {
      const shopifyWindow = window as WindowWithShopify;
      shopifyWindow.Shopify?.analytics?.publish("product_viewed", {
        productId,
        productTitle,
        timestamp: new Date().toISOString(),
      });
    }
  },

  // Track add to cart
  trackAddToCart: (productId: string, variantId: string, quantity: number) => {
    if (typeof window !== "undefined") {
      const shopifyWindow = window as WindowWithShopify;
      shopifyWindow.Shopify?.analytics?.publish("product_added_to_cart", {
        productId,
        variantId,
        quantity,
        timestamp: new Date().toISOString(),
      });
    }
  },

  // Track custom events
  trackCustomEvent: (
    eventName: string,
    data: Record<string, string | number | boolean>
  ) => {
    if (typeof window !== "undefined") {
      const shopifyWindow = window as WindowWithShopify;
      shopifyWindow.Shopify?.analytics?.publish(eventName, {
        ...data,
        timestamp: new Date().toISOString(),
      });
    }
  },
};

// Simple session counter (client-side only)
export const sessionTracker = {
  getSessionId: () => {
    let sessionId = sessionStorage.getItem("session_id");
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random()
        .toString(36)
        .substr(2, 9)}`;
      sessionStorage.setItem("session_id", sessionId);
      sessionStorage.setItem("session_start", new Date().toISOString());
    }
    return sessionId;
  },

  getSessionDuration: () => {
    const start = sessionStorage.getItem("session_start");
    if (start) {
      const duration = Date.now() - new Date(start).getTime();
      return Math.floor(duration / 1000); // seconds
    }
    return 0;
  },

  trackPageView: () => {
    const views = parseInt(sessionStorage.getItem("page_views") || "0");
    sessionStorage.setItem("page_views", (views + 1).toString());
  },

  getPageViews: () => {
    return parseInt(sessionStorage.getItem("page_views") || "0");
  },
};
