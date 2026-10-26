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
  User,
  MapPin,
  Phone,
  FileText,
  AlertCircle,
  Sparkles,
} from "lucide-react";

export default function OrderReviewModal() {
  const {
    cart,
    totalPieces,
    totalDesigns,
    isReviewOpen,
    setIsReviewOpen,
    resellerInfo,
    setResellerInfo,
    clearCart,
  } = useCart();

  const [step, setStep] = useState<"details" | "review" | "confirmed">("details");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [orderSlipUrl, setOrderSlipUrl] = useState<string | null>(null);
  const [isGeneratingSlip, setIsGeneratingSlip] = useState(false);
  const [copiedSlip, setCopiedSlip] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [confirmedOrderId, setConfirmedOrderId] = useState<string>("");

  // Sync initial state
  useEffect(() => {
    if (isReviewOpen) {
      if (resellerInfo.shopName && resellerInfo.contactPerson && resellerInfo.city) {
        setStep("review");
      } else {
        setStep("details");
      }
      setErrors({});
    }
  }, [isReviewOpen, resellerInfo]);

  // Generate Canvas Order Slip when entering review step
  useEffect(() => {
    if (step === "review" && cart.length > 0) {
      setIsGeneratingSlip(true);
      const tempId = `ORD-${Date.now().toString(36).toUpperCase().slice(-5)}`;
      generateOrderSlipCanvas(cart, resellerInfo, tempId)
        .then((url) => {
          setOrderSlipUrl(url);
          setIsGeneratingSlip(false);
        })
        .catch((err) => {
          console.error("Error generating slip canvas:", err);
          setIsGeneratingSlip(false);
        });
    }
  }, [step, cart, resellerInfo]);

  if (!isReviewOpen) return null;

  const validateDetails = (): boolean => {
    const errs: { [key: string]: string } = {};
    if (!resellerInfo.shopName.trim()) {
      errs.shopName = "Boutique / Reseller Name is required";
    }
    if (!resellerInfo.contactPerson.trim()) {
      errs.contactPerson = "Contact person name is required";
    }
    if (!resellerInfo.city.trim()) {
      errs.city = "City / Location is required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateDetails()) {
      setStep("review");
    }
  };

  const handleDownloadSlip = () => {
    if (orderSlipUrl) {
      const filename = `Aksharam-Order-${resellerInfo.shopName.replace(/\s+/g, "_") || "Wholesale"}.png`;
      downloadDataUrl(orderSlipUrl, filename);
    }
  };

  const handleCopyOrderText = () => {
    const message = formatWhatsAppOrderMessage(cart, resellerInfo);
    navigator.clipboard.writeText(message).then(() => {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    });
  };

  const handleSendViaWhatsApp = () => {
    if (!validateDetails()) {
      setStep("details");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty. Please add products before sending an order.");
      return;
    }

    // 1. Record order locally in Admin records
    const recorded = recordNewOrder(resellerInfo, cart);
    setConfirmedOrderId(recorded.id);

    // 2. Generate WhatsApp link
    const waUrl = generateWhatsAppOrderUrl(cart, resellerInfo);

    // 3. Open WhatsApp in new tab / app
    window.open(waUrl, "_blank");

    // 4. Move to confirmed step
    setStep("confirmed");
  };

  const handleClose = () => {
    setIsReviewOpen(false);
    if (step === "confirmed") {
      clearCart();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl border border-[#EAE5DC] shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#FAF7F2] border-b border-[#EAE5DC] flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-[#7D1D2B] font-semibold">
              <Building2 className="w-3.5 h-3.5" />
              <span>Aksharam Textiles Wholesale Desk</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1917] mt-0.5">
              {step === "details"
                ? "Reseller & Boutique Information"
                : step === "review"
                ? "Review Order Before Submitting"
                : "Order Sent Successfully!"}
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
        <div className="p-6 overflow-y-auto flex-1">
          {/* STEP 1: RESELLER DETAILS */}
          {step === "details" && (
            <form onSubmit={handleDetailsSubmit} className="space-y-4">
              <p className="text-xs text-[#78716C] leading-relaxed">
                Please enter your store or boutique details. We do not require account registration — this information is used by our Surat factory team to prepare your wholesale order.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Shop / Reseller Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                    Boutique / Shop / Reseller Name <span className="text-[#7D1D2B]">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#A8A29E] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Maharani Boutique & Bridal Studio"
                      value={resellerInfo.shopName}
                      onChange={(e) =>
                        setResellerInfo({ ...resellerInfo, shopName: e.target.value })
                      }
                      className={`w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF7F2] border ${
                        errors.shopName ? "border-[#C53030]" : "border-[#D6CEC1]"
                      } text-[#1C1917] focus:outline-hidden focus:border-[#7D1D2B]`}
                    />
                  </div>
                  {errors.shopName && (
                    <p className="mt-1 text-[11px] text-[#C53030] flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.shopName}</span>
                    </p>
                  )}
                </div>

                {/* Contact Person */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                    Contact Person Name <span className="text-[#7D1D2B]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#A8A29E] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Patel"
                      value={resellerInfo.contactPerson}
                      onChange={(e) =>
                        setResellerInfo({
                          ...resellerInfo,
                          contactPerson: e.target.value,
                        })
                      }
                      className={`w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF7F2] border ${
                        errors.contactPerson ? "border-[#C53030]" : "border-[#D6CEC1]"
                      } text-[#1C1917] focus:outline-hidden focus:border-[#7D1D2B]`}
                    />
                  </div>
                  {errors.contactPerson && (
                    <p className="mt-1 text-[11px] text-[#C53030] flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.contactPerson}</span>
                    </p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                    City & State <span className="text-[#7D1D2B]">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#A8A29E] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Ahmedabad, Gujarat"
                      value={resellerInfo.city}
                      onChange={(e) =>
                        setResellerInfo({ ...resellerInfo, city: e.target.value })
                      }
                      className={`w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF7F2] border ${
                        errors.city ? "border-[#C53030]" : "border-[#D6CEC1]"
                      } text-[#1C1917] focus:outline-hidden focus:border-[#7D1D2B]`}
                    />
                  </div>
                  {errors.city && (
                    <p className="mt-1 text-[11px] text-[#C53030] flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.city}</span>
                    </p>
                  )}
                </div>

                {/* Phone / WhatsApp (Optional) */}
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                    Contact Phone / WhatsApp Number{" "}
                    <span className="text-[#78716C] font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#A8A29E] absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. +91 98765 43210"
                      value={resellerInfo.phone || ""}
                      onChange={(e) =>
                        setResellerInfo({ ...resellerInfo, phone: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF7F2] border border-[#D6CEC1] text-[#1C1917] focus:outline-hidden focus:border-[#7D1D2B]"
                    />
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                    Special Wholesale Notes / Dispatch Instructions{" "}
                    <span className="text-[#78716C] font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-[#A8A29E] absolute left-3 top-3" />
                    <textarea
                      rows={3}
                      placeholder="e.g. Require urgent delivery for wedding season; please confirm blouse unstitched fabric length."
                      value={resellerInfo.notes || ""}
                      onChange={(e) =>
                        setResellerInfo({ ...resellerInfo, notes: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-[#FAF7F2] border border-[#D6CEC1] text-[#1C1917] focus:outline-hidden focus:border-[#7D1D2B]"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EAE5DC] flex items-center justify-between">
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-xs uppercase tracking-wider text-[#78716C] hover:text-[#1C1917]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-3 px-6 bg-[#7D1D2B] text-white hover:bg-[#58121C] text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Continue to Order Review →
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: ORDER REVIEW */}
          {step === "review" && (
            <div className="space-y-6">
              {/* Reseller Info Badge with Edit button */}
              <div className="p-4 bg-[#FAF7F2] border border-[#EAE5DC] flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-serif text-base font-semibold text-[#1C1917]">
                      {resellerInfo.shopName}
                    </span>
                    <span className="text-xs text-[#78716C]">
                      ({resellerInfo.city})
                    </span>
                  </div>
                  <p className="text-xs text-[#57534E] mt-0.5">
                    Attn: {resellerInfo.contactPerson} {resellerInfo.phone && `• ${resellerInfo.phone}`}
                  </p>
                  {resellerInfo.notes && (
                    <p className="text-xs text-[#78716C] italic mt-1">
                      &quot;{resellerInfo.notes}&quot;
                    </p>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setStep("details")}
                  className="text-xs text-[#7D1D2B] font-medium hover:underline px-2 py-1"
                >
                  Edit Details
                </button>
              </div>

              {/* Items Table */}
              <div>
                <h3 className="text-xs uppercase tracking-widest font-semibold text-[#1C1917] mb-3">
                  Selected Designs ({cart.length})
                </h3>

                <div className="border border-[#EAE5DC] divide-y divide-[#EAE5DC] overflow-hidden">
                  {cart.map((item, idx) => (
                    <div
                      key={item.product.id}
                      className="p-3 sm:p-4 flex items-center justify-between bg-white hover:bg-[#FAF7F2]/50 transition-colors"
                    >
                      <div className="flex items-center space-x-3.5">
                        <span className="text-xs font-mono text-[#A8A29E] w-5">
                          #{idx + 1}
                        </span>
                        <div className="relative w-14 h-18 shrink-0 overflow-hidden bg-[#FAF7F2] border border-[#DDD7CC]">
                          <Image
                            src={item.product.image}
                            alt={item.product.code}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div>
                          <span className="inline-block px-1.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-[#1C1917] text-white mb-0.5">
                            {item.product.code}
                          </span>
                          <h4 className="font-serif text-sm font-medium text-[#1C1917] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <p className="text-[11px] text-[#78716C]">
                            {item.product.category} • {item.product.color} • {item.product.fabric}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="inline-block px-3 py-1 bg-[#FAF7F2] border border-[#C5A880] text-xs font-bold text-[#7D1D2B]">
                          {item.quantity} Pieces
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Total Pieces Banner (NO PRICES) */}
              <div className="p-4 bg-[#7D1D2B] text-white flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#E4D5BE] block">
                    Consignment Total
                  </span>
                  <span className="text-xs text-white/80">
                    {totalDesigns} Unique Design Codes
                  </span>
                </div>
                <div className="text-right">
                  <span className="font-serif text-2xl font-bold block">
                    {totalPieces} Pieces
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-[#E4D5BE]">
                    Zero Price Wholesale Portal
                  </span>
                </div>
              </div>

              {/* Visual Order Slip Preview & Download Section */}
              <div className="p-4 bg-[#FAF7F2] border border-[#EAE5DC] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-[#7D1D2B]" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                      Visual Order Specification Slip
                    </span>
                  </div>
                  {orderSlipUrl && (
                    <div className="flex items-center space-x-2">
                      <button
                        type="button"
                        onClick={handleCopyOrderText}
                        className="text-xs flex items-center space-x-1 text-[#57534E] hover:text-[#1C1917] bg-white border border-[#D6CEC1] px-2.5 py-1"
                      >
                        {copiedText ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#1E5D38]" />
                            <span>Copied Text!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Text</span>
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={handleDownloadSlip}
                        className="text-xs flex items-center space-x-1 bg-[#1C1917] text-white hover:bg-black px-3 py-1"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Slip (.PNG)</span>
                      </button>
                    </div>
                  )}
                </div>

                <p className="text-[11px] text-[#78716C] leading-relaxed">
                  WhatsApp click-to-chat sends your complete order text directly to our factory number (+91 9998283811). You can also download this visual order slip to attach it in WhatsApp for instant visual confirmation.
                </p>

                {/* Slip Preview Thumbnail */}
                {orderSlipUrl ? (
                  <div className="relative max-h-48 overflow-hidden border border-[#D6CEC1] bg-white shadow-xs">
                    <img
                      src={orderSlipUrl}
                      alt="Order Slip Preview"
                      className="w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center p-2">
                      <button
                        type="button"
                        onClick={handleDownloadSlip}
                        className="text-[11px] text-white font-medium underline"
                      >
                        Click to download full high-res specification image
                      </button>
                    </div>
                  </div>
                ) : isGeneratingSlip ? (
                  <div className="py-6 text-center text-xs text-[#78716C]">
                    Generating visual order specification slip...
                  </div>
                ) : null}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm uppercase tracking-widest font-bold transition-colors flex items-center justify-center space-x-2.5 shadow-md"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Order via WhatsApp to +91 9998283811</span>
                </button>

                <div className="flex items-center justify-between text-xs text-[#78716C]">
                  <button
                    type="button"
                    onClick={() => setStep("details")}
                    className="hover:text-[#1C1917]"
                  >
                    ← Back to Reseller Details
                  </button>
                  <span>Destination: +91 9998283811 (Aksharam Textiles Surat)</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: ORDER CONFIRMED */}
          {step === "confirmed" && (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1E5D38]/10 text-[#1E5D38] border border-[#1E5D38]/30 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#7D1D2B] font-semibold">
                  Wholesale Inquiry Transmitted
                </span>
                <h3 className="font-serif text-2xl text-[#1C1917] font-medium mt-1">
                  WhatsApp Chat Opened!
                </h3>
                <p className="mt-2 text-xs text-[#78716C] max-w-md mx-auto leading-relaxed">
                  Your order details have been generated and opened in WhatsApp with Aksharam Textiles (+91 9998283811). Our production team will verify stock and reply shortly.
                </p>
              </div>

              <div className="inline-block p-3 bg-[#FAF7F2] border border-[#EAE5DC] text-xs">
                <span className="text-[#78716C]">Recorded Order Reference: </span>
                <strong className="text-[#1C1917] font-mono">{confirmedOrderId}</strong>
              </div>

              {orderSlipUrl && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleDownloadSlip}
                    className="inline-flex items-center space-x-2 py-2 px-4 bg-[#1C1917] text-white text-xs uppercase tracking-wider font-medium hover:bg-black"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Visual Slip Again</span>
                  </button>
                </div>
              )}

              <div className="pt-6 border-t border-[#EAE5DC]">
                <button
                  type="button"
                  onClick={handleClose}
                  className="py-2.5 px-6 bg-[#7D1D2B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#58121C]"
                >
                  Done / Continue Shopping
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
