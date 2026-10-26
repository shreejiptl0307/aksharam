import { Product, WholesaleOrderRecord, ResellerInfo } from "@/types";
import { initialProducts } from "@/data/products";

const PRODUCTS_KEY = "aksharam_products_v1";
const ORDERS_KEY = "aksharam_orders_v1";
const RESELLER_KEY = "aksharam_reseller_info";
const ADMIN_AUTH_KEY = "aksharam_admin_auth";

/* Products Storage */
export function getStoredProducts(): Product[] {
  if (typeof window === "undefined") {
    return initialProducts;
  }
  try {
    const raw = localStorage.getItem(PRODUCTS_KEY);
    if (!raw) {
      localStorage.setItem(PRODUCTS_KEY, JSON.stringify(initialProducts));
      return initialProducts;
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
    return initialProducts;
  } catch (err) {
    console.error("Error reading stored products:", err);
    return initialProducts;
  }
}

export function saveStoredProducts(products: Product[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
    window.dispatchEvent(new Event("aksharam_products_updated"));
  } catch (err) {
    console.error("Error saving products:", err);
  }
}

export function saveProduct(product: Product): Product[] {
  const current = getStoredProducts();
  const existingIdx = current.findIndex((p) => p.id === product.id);
  let updated: Product[];

  if (existingIdx >= 0) {
    updated = [...current];
    updated[existingIdx] = product;
  } else {
    updated = [product, ...current];
  }

  saveStoredProducts(updated);
  return updated;
}

export function deleteProduct(productId: string): Product[] {
  const current = getStoredProducts();
  const updated = current.filter((p) => p.id !== productId);
  saveStoredProducts(updated);
  return updated;
}

export function resetProductsToFactoryDefault(): Product[] {
  saveStoredProducts(initialProducts);
  return initialProducts;
}

/* Orders Storage */
export function getStoredOrders(): WholesaleOrderRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading orders:", err);
    return [];
  }
}

export function recordNewOrder(
  resellerInput: Partial<ResellerInfo> | string | undefined,
  cart: { product: Product; quantity: number }[]
): WholesaleOrderRecord {
  const normalizedReseller: ResellerInfo =
    typeof resellerInput === "string"
      ? {
          shopName: resellerInput.trim() || "Wholesale Buyer",
          contactPerson: "",
          city: "",
          phone: "",
          notes: resellerInput.trim(),
        }
      : {
          shopName: resellerInput?.shopName || "Wholesale Buyer",
          contactPerson: resellerInput?.contactPerson || "",
          city: resellerInput?.city || "",
          phone: resellerInput?.phone || "",
          notes: resellerInput?.notes || "",
        };

  const orders = getStoredOrders();
  const newOrder: WholesaleOrderRecord = {
    id: `ORD-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
    createdAt: new Date().toISOString(),
    reseller: normalizedReseller,
    items: cart.map((item) => ({
      productId: item.product.id,
      productCode: item.product.code,
      productName: item.product.name,
      productImage: item.product.image,
      quantity: item.quantity,
      category: item.product.category,
      color: item.product.color,
    })),
    totalDesigns: cart.length,
    totalPieces: cart.reduce((acc, curr) => acc + curr.quantity, 0),
    status: "New",
  };

  const updatedOrders = [newOrder, ...orders];
  if (typeof window !== "undefined") {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(updatedOrders));
    window.dispatchEvent(new Event("aksharam_orders_updated"));
  }
  return newOrder;
}

export function updateOrderStatus(
  orderId: string,
  status: WholesaleOrderRecord["status"]
): WholesaleOrderRecord[] {
  const orders = getStoredOrders();
  const updated = orders.map((o) => (o.id === orderId ? { ...o, status } : o));
  if (typeof window !== "undefined") {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event("aksharam_orders_updated"));
  }
  return updated;
}

export function clearAllOrders(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ORDERS_KEY);
    window.dispatchEvent(new Event("aksharam_orders_updated"));
  }
}

/* Reseller Details Persistence */
export function getSavedResellerInfo(): ResellerInfo {
  if (typeof window === "undefined") {
    return { shopName: "", contactPerson: "", city: "", phone: "", notes: "" };
  }
  try {
    const raw = localStorage.getItem(RESELLER_KEY);
    return raw
      ? JSON.parse(raw)
      : { shopName: "", contactPerson: "", city: "", phone: "", notes: "" };
  } catch {
    return { shopName: "", contactPerson: "", city: "", phone: "", notes: "" };
  }
}

export function saveResellerInfo(info: ResellerInfo): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(RESELLER_KEY, JSON.stringify(info));
  } catch (err) {
    console.error("Error saving reseller info:", err);
  }
}

/* Admin Auth State */
export function isAdminAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

export function setAdminAuthenticated(auth: boolean): void {
  if (typeof window === "undefined") return;
  if (auth) {
    sessionStorage.setItem(ADMIN_AUTH_KEY, "true");
  } else {
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
  }
}
