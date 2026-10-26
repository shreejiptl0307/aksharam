"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Product, CartItem, ResellerInfo } from "@/types";
import {
  getSavedResellerInfo,
  saveResellerInfo as persistResellerInfo,
} from "@/utils/storage";

interface ToastNotification {
  id: string;
  title: string;
  productName: string;
  productCode: string;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalPieces: number;
  totalDesigns: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isReviewOpen: boolean;
  setIsReviewOpen: (open: boolean) => void;
  resellerInfo: ResellerInfo;
  setResellerInfo: (info: ResellerInfo) => void;
  toast: ToastNotification | null;
  dismissToast: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "aksharam_wholesale_cart";

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [toast, setToast] = useState<ToastNotification | null>(null);
  const [resellerInfo, setResellerInfoState] = useState<ResellerInfo>({
    shopName: "",
    contactPerson: "",
    city: "",
    phone: "",
    notes: "",
  });

  // Load initial cart and reseller info on client mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
      setResellerInfoState(getSavedResellerInfo());
    } catch (e) {
      console.error("Failed to load cart from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save cart changes to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart, isLoaded]);

  const setResellerInfo = useCallback((info: ResellerInfo) => {
    setResellerInfoState(info);
    persistResellerInfo(info);
  }, []);

  const dismissToast = useCallback(() => {
    setToast(null);
  }, []);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    if (quantity <= 0) return;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        const newQty = newCart[existingIndex].quantity + quantity;
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newQty,
        };
        return newCart;
      } else {
        return [...prevCart, { product, quantity }];
      }
    });

    // Show luxury feedback toast
    setToast({
      id: `${Date.now()}`,
      title: "Added to Wholesale Order",
      productName: product.name,
      productCode: product.code,
      image: product.image,
      quantity,
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  // Compute total pieces across all selected designs
  const totalPieces = cart.reduce((total, item) => total + item.quantity, 0);
  const totalDesigns = cart.length;

  // Auto-dismiss toast after 4 seconds
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      setToast(null);
    }, 4000);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalPieces,
        totalDesigns,
        isCartOpen,
        setIsCartOpen,
        isReviewOpen,
        setIsReviewOpen,
        resellerInfo,
        setResellerInfo,
        toast,
        dismissToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
