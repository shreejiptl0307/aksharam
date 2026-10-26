"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { siteConfig } from "@/data/siteConfig";
import {
  formatWhatsAppOrderMessage,
  generateWhatsAppOrderUrl,
} from "@/utils/whatsapp";
import { recordNewOrder } from "@/utils/storage";
import {
  generateOrderSlipCanvas,
  downloadDataUrl,
} from "@/utils/canvasOrderSlip";
import {
  X,
  MessageCircle,
  Download,
  Copy,
  Check,
  Building2,
  Trash2,
  Plus,
  Minus,
  FileDown,
  Sparkles,
} from "lucide-react";

export default function OrderReviewModal() {
  const {
    cart,
    totalPieces,
    totalDesigns,
    isReviewOpen,
    setIsReviewOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const [optionalNote, setOptionalNote] = useState("");
  const [orderSlipUrl, setOrderSlipUrl] = useState<string | null>(null);
  const [isGeneratingSlip, setIsGeneratingSlip] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState("");
  const [showSlipPreview, setShowSlipPreview] = useState(false);

  // Generate Canvas Order Slip in background when modal is open
  useEffect(() => {
    if (isReviewOpen && cart.length > 0) {
      setIsGeneratingSlip(true);
      const tempId = `ORD-${Date.now().toString(36).toUpperCase().slice(-5)}`;
      generateOrderSlipCanvas(cart, optionalNote, tempId)
        .then((url) => {
          setOrderSlipUrl(url);
          setIsGeneratingSlip(false);
        })
        .catch((err) => {
          console.error("Error generating slip canvas:", err);
          setIsGeneratingSlip(false);
        });
    }
  }, [isReviewOpen, cart, optionalNote]);

  if (!isReviewOpen) return null;

  const handleDownloadSlip = () => {
    if (orderSlipUrl) {
      const cleanNote = optionalNote
        ? optionalNote.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 20)
        : "Order";
      const filename = `Aksharam_Wholesale_${cleanNote}_${Date.now()}.png`;
      downloadDataUrl(orderSlipUrl, filename);
    }
  };

  const handleCopyOrderText = () => {
    const message = formatWhatsAppOrderMessage(cart, optionalNote);
    navigator.clipboard.writeText(message).then(() => {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    });
  };

  const handleSendViaWhatsApp = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add designs before sending an order.");
      return;
    }

    // 1. Record order locally in Admin records
    const recorded = recordNewOrder(optionalNote, cart);
    setConfirmedOrderId(recorded.id);

    // 2. Generate WhatsApp link
    const waUrl = generateWhatsAppOrderUrl(cart, optionalNote);

    // 3. Open WhatsApp in new tab / app
    window.open(waUrl, "_blank");

    // 4. Move to confirmed step
    setIsConfirmed(true);
  };

  const handleClose = () => {
    setIsReviewOpen(false);
    if (isConfirmed) {
      clearCart();
      setIsConfirmed(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 animate-in fade-in duration-200">
      {/* Click outside to close on desktop */}
      <div
        className="absolute inset-0"
        onClick={handleClose}
      />

      <div
        className="relative bg-white w-full sm:max-w-xl md:max-w-2xl rounded-t-2xl sm:rounded-xl shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[88vh] overflow-hidden z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-3.5 sm:py-4 bg-[#FAF7F2] border-b border-[#EAE5DC] flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center space-x-1.5 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#7D1D2B] font-bold">
              <Building2 className="w-3.5 h-3.5" />
              <span>Aksharam Textiles Wholesale Desk</span>
            </div>
            <h2 className="font-serif text-lg sm:text-2xl font-semibold text-[#1C1917] mt-0.5">
              {isConfirmed ? "Wholesale Order Sent" : "Review Wholesale Order"}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Close modal"
            className="p-1.5 text-[#57534E] hover:text-[#1C1917] hover:bg-[#EAE5DC] rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {!isConfirmed ? (
            <>
              {/* Product Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#78716C]">
                  <span className="font-semibold uppercase tracking-wider text-[#1C1917]">
                    Selected Designs ({cart.length})
                  </span>
                  <span className="font-semibold text-[#7D1D2B]">
                    {totalPieces} Total Pieces
                  </span>
                </div>

                <div className="divide-y divide-[#EAE5DC] border border-[#EAE5DC] rounded-lg overflow-hidden bg-white">
                  {cart.map((item) => (
                    <div
                      key={item.product.id}
                      className="p-3 sm:p-4 flex space-x-3 sm:space-x-4 items-center bg-white hover:bg-[#FAF7F2]/40 transition-colors"
                    >
                      {/* Product Thumbnail */}
                      <div className="relative w-16 h-22 sm:w-20 sm:h-26 shrink-0 rounded-md overflow-hidden bg-[#FAF7F2] border border-[#DDD7CC]">
                        <Image
                          src={item.product.image}
                          alt={item.product.code}
                          fill
                          className="object-cover object-top"
                        />
                      </div>

                      {/* Product Details & Stepper */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="inline-block px-2 py-0.5 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider bg-[#1C1917] text-white rounded-xs truncate">
                            {item.product.code}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.product.id)}
                            aria-label="Remove item"
                            className="text-[#A8A29E] hover:text-[#7D1D2B] p-1 shrink-0"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <h4 className="font-serif text-sm sm:text-base font-semibold text-[#1C1917] leading-snug line-clamp-2">
                          {item.product.name}
                        </h4>

                        <p className="text-[11px] text-[#78716C] mt-0.5">
                          {item.product.category} • {item.product.color}
                        </p>

                        {/* Quantity Stepper & Pieces Pill */}
                        <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#F2EBE1]">
                          <div className="flex items-center border border-[#D6CEC1] bg-[#FAF7F2] rounded-sm">
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              aria-label="Decrease quantity"
                              className="w-7 h-7 flex items-center justify-center text-[#57534E] hover:bg-[#ECE6DC]"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 h-7 flex items-center justify-center text-xs font-bold text-[#1C1917]">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              aria-label="Increase quantity"
                              className="w-7 h-7 flex items-center justify-center text-[#57534E] hover:bg-[#ECE6DC]"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-xs font-bold text-[#7D1D2B] bg-[#FAF7F2] px-2.5 py-1 border border-[#C5A880]/60 rounded-xs">
                            {item.quantity} {item.quantity === 1 ? "Piece" : "Pieces"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Consignment Summary Card */}
              <div className="p-4 bg-[#FAF7F2] border border-[#C5A880]/50 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#78716C] font-semibold block">
                      Consignment Total
                    </span>
                    <span className="text-xs text-[#57534E]">
                      {totalDesigns} Unique Design Codes
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-[#7D1D2B] block">
                      {totalPieces} Pieces
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#EAE5DC] flex items-center justify-between text-[11px] text-[#78716C]">
                  <span>Zero Price Wholesale Portal</span>
                  <span className="text-[#1E5D38] font-medium">Direct Factory Rates</span>
                </div>
              </div>

              {/* Optional Boutique / Reseller Notes (NO FORCED FORM) */}
              <div className="bg-white border border-[#EAE5DC] p-3.5 rounded-lg space-y-1.5">
                <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold">
                  Boutique / Shop Name & Notes{" "}
                  <span className="text-[#78716C] font-normal lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Radhika Boutique, Ahmedabad • Need unstitched blouse"
                  value={optionalNote}
                  onChange={(e) => setOptionalNote(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-[#FAF7F2] border border-[#D6CEC1] rounded-sm text-[#1C1917] placeholder-[#A8A29E] focus:outline-hidden focus:border-[#7D1D2B]"
                />
                <p className="text-[10px] text-[#78716C]">
                  Optional — WhatsApp will already connect your phone number directly with our production desk.
                </p>
              </div>

              {/* Visual Order Slip Section (Clean & Collapsible) */}
              <div className="border border-[#EAE5DC] rounded-lg overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => setShowSlipPreview(!showSlipPreview)}
                  className="w-full p-3 bg-[#FAF7F2] flex items-center justify-between text-xs font-semibold text-[#1C1917]"
                >
                  <div className="flex items-center space-x-2 text-[#7D1D2B]">
                    <Sparkles className="w-4 h-4" />
                    <span>Visual Order Specification Slip (.PNG)</span>
                  </div>
                  <span className="text-[11px] text-[#78716C]">
                    {showSlipPreview ? "Hide Preview ▲" : "View / Download ▼"}
                  </span>
                </button>

                {showSlipPreview && (
                  <div className="p-3 border-t border-[#EAE5DC] space-y-3">
                    <p className="text-[11px] text-[#78716C]">
                      You can download this image to attach it into your WhatsApp chat along with the pre-filled order text:
                    </p>
                    {orderSlipUrl ? (
                      <div className="max-h-52 overflow-hidden border border-[#D6CEC1] rounded-md bg-[#FAF7F2]">
                        <img
                          src={orderSlipUrl}
                          alt="Order Specification Slip"
                          className="w-full object-cover object-top"
                        />
                      </div>
                    ) : isGeneratingSlip ? (
                      <div className="py-6 text-center text-xs text-[#78716C]">
                        Generating specification slip...
                      </div>
                    ) : null}

                    <div className="flex space-x-2">
                      <button
                        type="button"
                        onClick={handleDownloadSlip}
                        className="flex-1 py-2 px-3 bg-[#1C1917] text-white hover:bg-black text-xs font-medium rounded-sm flex items-center justify-center space-x-1.5"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Slip Image</span>
                      </button>
                      <button
                        type="button"
                        onClick={handleCopyOrderText}
                        className="py-2 px-3 bg-white border border-[#D6CEC1] text-xs font-medium text-[#1C1917] hover:bg-[#FAF7F2] rounded-sm flex items-center space-x-1.5"
                      >
                        {copiedText ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#1E5D38]" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Text</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Confirmed Screen */
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#1E5D38]/10 text-[#1E5D38] border border-[#1E5D38]/30 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#7D1D2B] font-semibold">
                  Wholesale Request Prepared
                </span>
                <h3 className="font-serif text-2xl text-[#1C1917] font-medium mt-1">
                  WhatsApp Chat Opened!
                </h3>
                <p className="mt-2 text-xs text-[#78716C] max-w-sm mx-auto leading-relaxed">
                  Your order details have been formatted and opened in WhatsApp with Aksharam Textiles (**+91 9998283811**).
                </p>
              </div>

              <div className="p-3 bg-[#FAF7F2] border border-[#EAE5DC] rounded-md text-xs inline-block">
                <span className="text-[#78716C]">Order Reference: </span>
                <strong className="text-[#1C1917] font-mono">{confirmedOrderId}</strong>
              </div>

              {orderSlipUrl && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleDownloadSlip}
                    className="inline-flex items-center space-x-1.5 py-2 px-4 bg-[#1C1917] text-white text-xs font-medium hover:bg-black rounded-sm"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Order Slip Again</span>
                  </button>
                </div>
              )}

              <div className="pt-4 border-t border-[#EAE5DC]">
                <button
                  type="button"
                  onClick={handleClose}
                  className="py-2.5 px-6 bg-[#7D1D2B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#58121C] rounded-sm"
                >
                  Done / Continue Browsing
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Action Footer (Always Visible on Mobile & Desktop!) */}
        {!isConfirmed && (
          <div className="p-3.5 sm:p-4 bg-white border-t border-[#EAE5DC] shrink-0 space-y-2">
            <button
              type="button"
              onClick={handleSendViaWhatsApp}
              className="w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm uppercase tracking-wider font-bold transition-colors flex items-center justify-center space-x-2 rounded-lg shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Send Order via WhatsApp (+91 9998283811)</span>
            </button>

            <div className="flex items-center justify-between text-[11px] text-[#78716C] px-1">
              <span>Direct connection to Surat production desk</span>
              <button
                type="button"
                onClick={handleDownloadSlip}
                className="text-[#7D1D2B] font-semibold hover:underline flex items-center space-x-1"
              >
                <FileDown className="w-3 h-3" />
                <span>Save Order Slip</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
