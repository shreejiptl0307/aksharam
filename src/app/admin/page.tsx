"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, WholesaleOrderRecord } from "@/types";
import { siteConfig } from "@/data/siteConfig";
import {
  getStoredProducts,
  saveProduct,
  deleteProduct,
  resetProductsToFactoryDefault,
  getStoredOrders,
  updateOrderStatus,
  clearAllOrders,
  isAdminAuthenticated,
  setAdminAuthenticated,
} from "@/utils/storage";
import {
  Shield,
  KeyRound,
  Plus,
  Edit2,
  Trash2,
  Eye,
  EyeOff,
  ShoppingBag,
  Package,
  Layers,
  Database,
  Download,
  Check,
  AlertCircle,
  ExternalLink,
  LogOut,
  Sparkles,
  Upload,
  RefreshCw,
  X,
} from "lucide-react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");
  const [activeTab, setActiveTab] = useState<"products" | "orders" | "settings">("products");

  // Products State
  const [products, setProducts] = useState<Product[]>([]);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form State for Adding / Editing Product
  const [formData, setFormData] = useState({
    code: "",
    designNo: "",
    name: "",
    category: "Bridal Silk" as Product["category"],
    color: "",
    fabric: "",
    work: "",
    description: "",
    image: "",
    galleryUrls: "",
    isPublished: true,
    isFeatured: false,
  });

  // Orders State
  const [orders, setOrders] = useState<WholesaleOrderRecord[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<WholesaleOrderRecord | null>(null);

  // Check auth on mount
  useEffect(() => {
    setIsAuthenticated(isAdminAuthenticated());
  }, []);

  const loadData = () => {
    setProducts(getStoredProducts());
    setOrders(getStoredOrders());
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
    }
  }, [isAuthenticated]);

  // Auth Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === siteConfig.admin.defaultPin) {
      setAdminAuthenticated(true);
      setIsAuthenticated(true);
      setPinError("");
      loadData();
    } else {
      setPinError(`Incorrect Passcode. Default factory PIN is "${siteConfig.admin.defaultPin}"`);
    }
  };

  const handleLogout = () => {
    setAdminAuthenticated(false);
    setIsAuthenticated(false);
    setPinInput("");
  };

  // Product Actions
  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setFormData({
      code: "",
      designNo: "",
      name: "",
      category: "Bridal Silk",
      color: "Red",
      fabric: "Pure Heavy Silk",
      work: "",
      description: "",
      image: "",
      galleryUrls: "",
      isPublished: true,
      isFeatured: false,
    });
    setIsProductModalOpen(true);
  };

  const handleOpenEditModal = (p: Product) => {
    setEditingProduct(p);
    setFormData({
      code: p.code,
      designNo: p.designNo,
      name: p.name,
      category: p.category,
      color: p.color,
      fabric: p.fabric,
      work: p.work,
      description: p.description,
      image: p.image,
      galleryUrls: p.gallery.join(", "),
      isPublished: p.isPublished,
      isFeatured: p.isFeatured,
    });
    setIsProductModalOpen(true);
  };

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.code.trim()) {
      alert("Design Tag / Code is required");
      return;
    }
    if (!formData.name.trim()) {
      alert("Product Name is required");
      return;
    }
    if (!formData.image.trim()) {
      alert("Product Image is required");
      return;
    }

    const galleryList = formData.galleryUrls
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const fullGallery = [
      formData.image,
      ...galleryList.filter((g) => g !== formData.image),
    ];

    const productToSave: Product = {
      id: editingProduct
        ? editingProduct.id
        : `prod-${Date.now().toString(36)}`,
      code: formData.code.trim(),
      designNo: formData.designNo.trim() || formData.code.replace(/[^0-9]/g, ""),
      name: formData.name.trim(),
      category: formData.category,
      color: formData.color.trim() || "Multi",
      fabric: formData.fabric.trim() || "Silk",
      work: formData.work.trim() || "Handcrafted Zari & Embroidery",
      description:
        formData.description.trim() ||
        `${formData.name} - Official design ${formData.code} from Aksharam Textiles Surat.`,
      image: formData.image.trim(),
      gallery: fullGallery,
      isPublished: formData.isPublished,
      isFeatured: formData.isFeatured,
      tags: [
        formData.code,
        formData.color,
        formData.fabric,
        formData.category,
      ],
      createdAt: editingProduct
        ? editingProduct.createdAt
        : new Date().toISOString(),
    };

    const updated = saveProduct(productToSave);
    setProducts(updated);
    setIsProductModalOpen(false);
  };

  const handleDeleteProduct = (id: string, code: string) => {
    if (confirm(`Are you sure you want to delete design ${code}?`)) {
      const updated = deleteProduct(id);
      setProducts(updated);
    }
  };

  const handleTogglePublish = (p: Product) => {
    const updated = saveProduct({ ...p, isPublished: !p.isPublished });
    setProducts(updated);
  };

  const handleResetFactoryDefaults = () => {
    if (
      confirm(
        "Reset catalogue to the 5 factory uploaded images? (Any custom items will be replaced with original items)"
      )
    ) {
      const reset = resetProductsToFactoryDefault();
      setProducts(reset);
    }
  };

  // Orders Actions
  const handleUpdateStatus = (
    orderId: string,
    status: WholesaleOrderRecord["status"]
  ) => {
    const updated = updateOrderStatus(orderId, status);
    setOrders(updated);
  };

  const handleClearOrders = () => {
    if (confirm("Are you sure you want to clear all recorded wholesale orders?")) {
      clearAllOrders();
      setOrders([]);
      setSelectedOrder(null);
    }
  };

  const exportOrdersCSV = () => {
    if (orders.length === 0) {
      alert("No orders to export.");
      return;
    }

    const headers = [
      "Order ID",
      "Date",
      "Shop Name",
      "Contact Person",
      "City",
      "Phone",
      "Total Designs",
      "Total Pieces",
      "Status",
      "Order Details",
    ];

    const rows = orders.map((o) => [
      `"${o.id}"`,
      `"${new Date(o.createdAt).toLocaleString("en-IN")}"`,
      `"${o.reseller.shopName}"`,
      `"${o.reseller.contactPerson}"`,
      `"${o.reseller.city}"`,
      `"${o.reseller.phone || ""}"`,
      o.totalDesigns,
      o.totalPieces,
      `"${o.status}"`,
      `"${o.items.map((i) => `${i.productCode} (${i.quantity} pcs)`).join("; ")}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Aksharam_Wholesale_Orders_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Compute Total Metrics
  const totalPiecesInOrders = orders.reduce((sum, o) => sum + o.totalPieces, 0);

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <div className="pt-28 pb-20 min-h-screen bg-[#FAF7F2] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white border border-[#EAE5DC] shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="w-14 h-14 rounded-full bg-[#7D1D2B]/10 border border-[#7D1D2B]/20 flex items-center justify-center text-[#7D1D2B] mx-auto mb-3">
              <Shield className="w-7 h-7" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-[#7D1D2B] font-semibold">
              Admin & Mill Management
            </span>
            <h1 className="font-serif text-2xl font-medium text-[#1C1917] mt-1">
              Aksharam Textiles Portal
            </h1>
            <p className="mt-1 text-xs text-[#78716C]">
              Authorized access for catalogue maintenance and wholesale orders.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                Enter Admin Passcode
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-[#A8A29E] absolute left-3 top-3.5" />
                <input
                  type="password"
                  placeholder="Enter passcode..."
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-[#FAF7F2] border border-[#D6CEC1] text-sm text-[#1C1917] focus:outline-hidden focus:border-[#7D1D2B]"
                />
              </div>
              {pinError && (
                <p className="mt-2 text-xs text-[#C53030] flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{pinError}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#7D1D2B] hover:bg-[#58121C] text-white text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Unlock Admin Portal
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-[#F2EBE1] text-center">
            <p className="text-xs text-[#78716C]">
              Default Factory Passcode:{" "}
              <code className="bg-[#FAF7F2] px-1.5 py-0.5 border border-[#EAE5DC] text-[#7D1D2B] font-bold font-mono">
                {siteConfig.admin.defaultPin}
              </code>
            </p>
            <Link
              href="/"
              className="mt-3 inline-block text-xs text-[#78716C] hover:text-[#1C1917]"
            >
              ← Return to Reseller Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // AUTHENTICATED DASHBOARD
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Admin Header */}
        <div className="border-b border-[#EAE5DC] pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-widest text-[#7D1D2B] font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Production Admin Session Active</span>
            </div>
            <h1 className="font-serif text-3xl font-medium text-[#1C1917] mt-0.5">
              Aksharam Textiles Control Center
            </h1>
            <p className="text-xs text-[#78716C]">
              Maintain live product inventory, manage tags, and review wholesale reseller orders.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              href="/catalogue"
              target="_blank"
              className="py-2 px-3.5 bg-white border border-[#D6CEC1] text-xs font-medium text-[#1C1917] hover:bg-[#FAF7F2] flex items-center space-x-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Preview Live Catalogue</span>
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="py-2 px-3.5 bg-[#FAF7F2] border border-[#D6CEC1] text-xs font-medium text-[#7D1D2B] hover:bg-[#EAE5DC] flex items-center space-x-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Lock / Exit</span>
            </button>
          </div>
        </div>

        {/* Overview Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white border border-[#EAE5DC] p-5 shadow-2xs">
            <span className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold block">
              Total Mill Designs
            </span>
            <span className="font-serif text-3xl font-bold text-[#1C1917] mt-1 block">
              {products.length}
            </span>
            <span className="text-xs text-[#78716C] mt-0.5 block">
              {products.filter((p) => p.isPublished).length} published online
            </span>
          </div>

          <div className="bg-white border border-[#EAE5DC] p-5 shadow-2xs">
            <span className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold block">
              Wholesale Inquiries
            </span>
            <span className="font-serif text-3xl font-bold text-[#7D1D2B] mt-1 block">
              {orders.length}
            </span>
            <span className="text-xs text-[#78716C] mt-0.5 block">
              Received via WhatsApp flow
            </span>
          </div>

          <div className="bg-white border border-[#EAE5DC] p-5 shadow-2xs">
            <span className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold block">
              Total Pieces Ordered
            </span>
            <span className="font-serif text-3xl font-bold text-[#1E5D38] mt-1 block">
              {totalPiecesInOrders}
            </span>
            <span className="text-xs text-[#78716C] mt-0.5 block">
              Sum of requested lots
            </span>
          </div>

          <div className="bg-white border border-[#EAE5DC] p-5 shadow-2xs">
            <span className="text-[10px] uppercase tracking-wider text-[#78716C] font-semibold block">
              WhatsApp Desk
            </span>
            <span className="font-mono text-lg font-bold text-[#1C1917] mt-1 block">
              {siteConfig.whatsapp.displayNumber}
            </span>
            <span className="text-xs text-[#1E5D38] mt-0.5 block">
              Active Click-to-Chat
            </span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#EAE5DC] mb-6 space-x-2">
          <button
            type="button"
            onClick={() => setActiveTab("products")}
            className={`py-3 px-6 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === "products"
                ? "border-[#7D1D2B] text-[#7D1D2B] bg-white"
                : "border-transparent text-[#78716C] hover:text-[#1C1917]"
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Catalogue Designs ({products.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("orders")}
            className={`py-3 px-6 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === "orders"
                ? "border-[#7D1D2B] text-[#7D1D2B] bg-white"
                : "border-transparent text-[#78716C] hover:text-[#1C1917]"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Wholesale Orders Log ({orders.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("settings")}
            className={`py-3 px-6 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all flex items-center space-x-2 ${
              activeTab === "settings"
                ? "border-[#7D1D2B] text-[#7D1D2B] bg-white"
                : "border-transparent text-[#78716C] hover:text-[#1C1917]"
            }`}
          >
            <Database className="w-4 h-4" />
            <span>Storage & Supabase Integration</span>
          </button>
        </div>

        {/* TAB 1: PRODUCT CATALOGUE MANAGEMENT */}
        {activeTab === "products" && (
          <div className="bg-white border border-[#EAE5DC] shadow-xs">
            <div className="p-4 sm:p-5 bg-[#FAF7F2] border-b border-[#EAE5DC] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-lg font-medium text-[#1C1917]">
                  Textile Design Inventory
                </h2>
                <p className="text-xs text-[#78716C]">
                  All products feature exact manufacturer tags and original factory photographs.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={handleResetFactoryDefaults}
                  className="py-2 px-3 text-xs bg-white border border-[#D6CEC1] text-[#78716C] hover:text-[#1C1917] flex items-center space-x-1"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Restore 5 Factory Uploads</span>
                </button>
                <button
                  type="button"
                  onClick={handleOpenAddModal}
                  className="py-2 px-4 bg-[#7D1D2B] text-white hover:bg-[#58121C] text-xs uppercase tracking-wider font-semibold flex items-center space-x-1.5 shadow-2xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Design</span>
                </button>
              </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF7F2] border-b border-[#EAE5DC] text-[#78716C] uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Design Photo</th>
                    <th className="py-3 px-4">Official Tag / Code</th>
                    <th className="py-3 px-4">Product Name</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Color & Fabric</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EAE5DC]">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-[#FAF7F2]/50">
                      <td className="py-3 px-4">
                        <div className="relative w-12 h-16 bg-[#FAF7F2] border border-[#DDD7CC] overflow-hidden">
                          <Image
                            src={p.image}
                            alt={p.code}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-mono font-bold text-xs bg-[#1C1917] text-white px-2 py-0.5">
                          {p.code}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-serif text-sm font-medium text-[#1C1917] block">
                          {p.name}
                        </span>
                        <span className="text-[11px] text-[#78716C] line-clamp-1">
                          {p.work}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider bg-[#FAF7F2] border border-[#EAE5DC] text-[#7D1D2B]">
                          {p.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[#57534E]">
                        {p.color} • {p.fabric}
                      </td>
                      <td className="py-3 px-4">
                        <button
                          type="button"
                          onClick={() => handleTogglePublish(p)}
                          className={`inline-flex items-center space-x-1 px-2 py-0.5 text-[10px] uppercase font-semibold border ${
                            p.isPublished
                              ? "bg-[#1E5D38]/10 text-[#1E5D38] border-[#1E5D38]/20"
                              : "bg-[#78716C]/10 text-[#78716C] border-[#78716C]/20"
                          }`}
                        >
                          {p.isPublished ? (
                            <>
                              <Eye className="w-3 h-3" />
                              <span>Published</span>
                            </>
                          ) : (
                            <>
                              <EyeOff className="w-3 h-3" />
                              <span>Hidden (Draft)</span>
                            </>
                          )}
                        </button>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            type="button"
                            onClick={() => handleOpenEditModal(p)}
                            aria-label="Edit design"
                            className="p-1.5 text-[#57534E] hover:text-[#1C1917] hover:bg-[#FAF7F2] border border-[#EAE5DC]"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteProduct(p.id, p.code)}
                            aria-label="Delete design"
                            className="p-1.5 text-[#A8A29E] hover:text-[#C53030] hover:bg-[#FAF7F2] border border-[#EAE5DC]"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: WHOLESALE ORDERS HISTORY */}
        {activeTab === "orders" && (
          <div className="bg-white border border-[#EAE5DC] shadow-xs">
            <div className="p-4 sm:p-5 bg-[#FAF7F2] border-b border-[#EAE5DC] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-serif text-lg font-medium text-[#1C1917]">
                  Reseller Wholesale Orders Log
                </h2>
                <p className="text-xs text-[#78716C]">
                  Recorded automatically when resellers transmit order requests via WhatsApp.
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={exportOrdersCSV}
                  className="py-2 px-3 text-xs bg-white border border-[#D6CEC1] text-[#1C1917] hover:bg-[#FAF7F2] flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export CSV</span>
                </button>
                {orders.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearOrders}
                    className="py-2 px-3 text-xs bg-white border border-[#D6CEC1] text-[#C53030] hover:bg-[#FAF7F2]"
                  >
                    Clear Orders
                  </button>
                )}
              </div>
            </div>

            {orders.length === 0 ? (
              <div className="py-16 text-center text-[#78716C] p-6">
                <ShoppingBag className="w-12 h-12 text-[#A8A29E] mx-auto mb-3 stroke-[1.2]" />
                <h3 className="font-serif text-base text-[#1C1917] font-medium">
                  No Wholesale Orders Recorded Yet
                </h3>
                <p className="text-xs text-[#78716C] mt-1">
                  Orders submitted through the WhatsApp checkout flow will appear here with full piece counts and reseller details.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF7F2] border-b border-[#EAE5DC] text-[#78716C] uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3 px-4">Order Ref / Date</th>
                      <th className="py-3 px-4">Boutique & Reseller</th>
                      <th className="py-3 px-4">City</th>
                      <th className="py-3 px-4">Ordered Items & Tags</th>
                      <th className="py-3 px-4 text-center">Total Pieces</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE5DC]">
                    {orders.map((o) => (
                      <tr key={o.id} className="hover:bg-[#FAF7F2]/50">
                        <td className="py-3.5 px-4">
                          <span className="font-mono font-bold text-xs text-[#1C1917] block">
                            {o.id}
                          </span>
                          <span className="text-[11px] text-[#78716C]">
                            {new Date(o.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="font-serif text-sm font-medium text-[#1C1917] block">
                            {o.reseller.shopName}
                          </span>
                          <span className="text-xs text-[#57534E]">
                            Attn: {o.reseller.contactPerson}{" "}
                            {o.reseller.phone && `• ${o.reseller.phone}`}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 font-medium text-[#1C1917]">
                          {o.reseller.city}
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex flex-wrap gap-1 max-w-xs">
                            {o.items.map((i, idx) => (
                              <span
                                key={idx}
                                className="inline-block px-1.5 py-0.5 text-[10px] font-mono bg-[#FAF7F2] border border-[#DDD7CC] text-[#1C1917]"
                              >
                                {i.productCode} ({i.quantity}p)
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <span className="font-serif text-base font-bold text-[#7D1D2B]">
                            {o.totalPieces} pcs
                          </span>
                        </td>
                        <td className="py-3.5 px-4">
                          <select
                            value={o.status}
                            onChange={(e) =>
                              handleUpdateStatus(
                                o.id,
                                e.target.value as WholesaleOrderRecord["status"]
                              )
                            }
                            className="py-1 px-2 bg-white border border-[#D6CEC1] text-xs font-semibold text-[#1C1917]"
                          >
                            <option value="New">New</option>
                            <option value="Acknowledged">Acknowledged</option>
                            <option value="Processing">Processing</option>
                            <option value="Dispatched">Dispatched</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <button
                            type="button"
                            onClick={() => setSelectedOrder(o)}
                            className="text-xs text-[#7D1D2B] font-semibold hover:underline"
                          >
                            View Slip
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: STORAGE & SUPABASE GUIDE */}
        {activeTab === "settings" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Storage Status */}
            <div className="bg-white border border-[#EAE5DC] p-6 shadow-xs space-y-4">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#7D1D2B] font-semibold">
                <Database className="w-4 h-4" />
                <span>Active Storage Configuration</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1C1917]">
                Local Persistent Storage (Client Engine)
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                The catalogue and orders are currently operating via browser-persisted local storage (<code className="bg-[#FAF7F2] px-1 py-0.5 font-mono">aksharam_products_v1</code> and <code className="bg-[#FAF7F2] px-1 py-0.5 font-mono">aksharam_orders_v1</code>). All product edits, image uploads, additions, and incoming wholesale orders are fully persistent and reactive in real time.
              </p>

              <div className="p-4 bg-[#FAF7F2] border border-[#EAE5DC] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#78716C]">Current Mode:</span>
                  <strong className="text-[#1E5D38]">Local Persistence (Active)</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78716C]">WhatsApp Destination:</span>
                  <strong className="font-mono text-[#1C1917]">919998283811</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#78716C]">Order WhatsApp Link:</span>
                  <span className="text-[#1E5D38]">Official Click-to-Chat API</span>
                </div>
              </div>
            </div>

            {/* Supabase Optional Integration Guide */}
            <div className="bg-white border border-[#EAE5DC] p-6 shadow-xs space-y-4">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#7D1D2B] font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Supabase Cloud Integration Guide</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1C1917]">
                Ready for Cloud Database & Image Storage
              </h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                To connect a central Supabase database across multiple devices and team members:
              </p>

              <ol className="list-decimal pl-5 text-xs text-[#57534E] space-y-2">
                <li>
                  Create a free project at <strong>supabase.com</strong>.
                </li>
                <li>
                  Add to <code className="bg-[#FAF7F2] px-1 font-mono">.env.local</code>:
                  <div className="bg-[#1C1917] text-[#FAF7F2] p-2 mt-1 font-mono text-[11px] rounded-xs">
                    NEXT_PUBLIC_SUPABASE_URL=your_project_url<br />
                    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
                  </div>
                </li>
                <li>
                  Run SQL table migrations for <code className="font-mono">products</code> and <code className="font-mono">orders</code>.
                </li>
              </ol>

              <div className="pt-2 text-xs text-[#78716C]">
                Because Supabase credentials are not supplied in this environment, the application runs on its zero-configuration local persistence engine with full functionality.
              </div>
            </div>
          </div>
        )}

        {/* ADD / EDIT PRODUCT MODAL */}
        {isProductModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-[#EAE5DC] shadow-2xl w-full max-w-2xl p-6 relative my-8">
              <button
                type="button"
                onClick={() => setIsProductModalOpen(false)}
                className="absolute top-4 right-4 text-[#A8A29E] hover:text-[#1C1917]"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="font-serif text-xl font-medium text-[#1C1917] mb-1">
                {editingProduct ? "Edit Textile Design" : "Add New Textile Design"}
              </h2>
              <p className="text-xs text-[#78716C] mb-5">
                Keep the original manufacturer tag as the product code.
              </p>

              <form onSubmit={handleSaveProduct} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                      Design Tag / Code <span className="text-[#7D1D2B]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. D.NO.39750 RED (SILK)"
                      value={formData.code}
                      onChange={(e) =>
                        setFormData({ ...formData, code: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#FAF7F2] border border-[#D6CEC1] text-xs font-mono font-bold text-[#1C1917]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                      Design Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 39750"
                      value={formData.designNo}
                      onChange={(e) =>
                        setFormData({ ...formData, designNo: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#FAF7F2] border border-[#D6CEC1] text-xs text-[#1C1917]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                      Product Name <span className="text-[#7D1D2B]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Royal Heritage Bridal Silk Lehenga"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#FAF7F2] border border-[#D6CEC1] text-xs text-[#1C1917]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          category: e.target.value as Product["category"],
                        })
                      }
                      className="w-full p-2.5 bg-[#FAF7F2] border border-[#D6CEC1] text-xs text-[#1C1917]"
                    >
                      <option value="Bridal Silk">Bridal Silk</option>
                      <option value="Festive Silk">Festive Silk</option>
                      <option value="Tissue">Tissue</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                      Color
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Red, Rani, Pink"
                      value={formData.color}
                      onChange={(e) =>
                        setFormData({ ...formData, color: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#FAF7F2] border border-[#D6CEC1] text-xs text-[#1C1917]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                      Fabric
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Silk, Tissue"
                      value={formData.fabric}
                      onChange={(e) =>
                        setFormData({ ...formData, fabric: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#FAF7F2] border border-[#D6CEC1] text-xs text-[#1C1917]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                      Work / Embroidery
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Zardozi, Peacock Motifs"
                      value={formData.work}
                      onChange={(e) =>
                        setFormData({ ...formData, work: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#FAF7F2] border border-[#D6CEC1] text-xs text-[#1C1917]"
                    />
                  </div>

                  {/* Image Upload / URL */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                      Product Photograph (Upload File or Enter URL) <span className="text-[#7D1D2B]">*</span>
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        placeholder="e.g. /products/media_1793041527137.jpg or image URL"
                        value={formData.image}
                        onChange={(e) =>
                          setFormData({ ...formData, image: e.target.value })
                        }
                        className="flex-1 p-2.5 bg-[#FAF7F2] border border-[#D6CEC1] text-xs text-[#1C1917]"
                        required
                      />
                      <label className="py-2.5 px-3 bg-white border border-[#D6CEC1] hover:bg-[#FAF7F2] text-xs text-[#1C1917] cursor-pointer flex items-center justify-center space-x-1 shrink-0">
                        <Upload className="w-3.5 h-3.5" />
                        <span>Upload File</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageFileUpload}
                          className="hidden"
                        />
                      </label>
                    </div>

                    {formData.image && (
                      <div className="mt-2 flex items-center space-x-3 p-2 bg-[#FAF7F2] border border-[#EAE5DC]">
                        <div className="relative w-12 h-16 bg-white border border-[#DDD7CC] overflow-hidden">
                          <img
                            src={formData.image}
                            alt="Preview"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        <span className="text-[11px] text-[#78716C] truncate">
                          Image preview loaded
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                      Additional Gallery Image URLs (comma separated)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. /products/img2.jpg, /products/img3.jpg"
                      value={formData.galleryUrls}
                      onChange={(e) =>
                        setFormData({ ...formData, galleryUrls: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#FAF7F2] border border-[#D6CEC1] text-xs text-[#1C1917]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-1">
                      Product Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe the fabric, borders, blouse, and dupatta..."
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className="w-full p-2.5 bg-[#FAF7F2] border border-[#D6CEC1] text-xs text-[#1C1917]"
                    />
                  </div>

                  <div className="sm:col-span-2 flex items-center space-x-4">
                    <label className="flex items-center space-x-2 text-xs font-medium text-[#1C1917] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isPublished}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            isPublished: e.target.checked,
                          })
                        }
                        className="w-4 h-4 accent-[#7D1D2B]"
                      />
                      <span>Publish Design in Reseller Catalogue</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EAE5DC] flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setIsProductModalOpen(false)}
                    className="py-2.5 px-4 text-xs uppercase tracking-wider text-[#78716C]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2.5 px-6 bg-[#7D1D2B] text-white hover:bg-[#58121C] text-xs uppercase tracking-widest font-semibold"
                  >
                    Save Design
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* VIEW ORDER DETAILS MODAL */}
        {selectedOrder && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-[#EAE5DC] shadow-2xl w-full max-w-xl p-6 relative">
              <button
                type="button"
                onClick={() => setSelectedOrder(null)}
                className="absolute top-4 right-4 text-[#A8A29E] hover:text-[#1C1917]"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-[10px] uppercase tracking-widest text-[#7D1D2B] font-semibold">
                Wholesale Order Specification
              </span>
              <h3 className="font-serif text-xl font-medium text-[#1C1917] mt-0.5">
                {selectedOrder.id}
              </h3>

              <div className="mt-4 p-3 bg-[#FAF7F2] border border-[#EAE5DC] space-y-1 text-xs">
                <p>
                  <strong>Boutique:</strong> {selectedOrder.reseller.shopName}
                </p>
                <p>
                  <strong>Contact:</strong> {selectedOrder.reseller.contactPerson} (
                  {selectedOrder.reseller.city})
                </p>
                {selectedOrder.reseller.phone && (
                  <p>
                    <strong>Phone:</strong> {selectedOrder.reseller.phone}
                  </p>
                )}
                {selectedOrder.reseller.notes && (
                  <p className="italic text-[#78716C]">
                    &quot;{selectedOrder.reseller.notes}&quot;
                  </p>
                )}
              </div>

              <div className="mt-4 space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-[#78716C] font-semibold">
                  Items ({selectedOrder.items.length})
                </h4>
                <div className="divide-y divide-[#EAE5DC] border border-[#EAE5DC]">
                  {selectedOrder.items.map((it, idx) => (
                    <div
                      key={idx}
                      className="p-3 flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative w-10 h-12 bg-[#FAF7F2] border border-[#DDD7CC] overflow-hidden">
                          <Image
                            src={it.productImage}
                            alt={it.productCode}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div>
                          <span className="font-mono font-bold text-[#1C1917] block">
                            {it.productCode}
                          </span>
                          <span className="text-[#78716C]">{it.productName}</span>
                        </div>
                      </div>
                      <span className="font-bold text-[#7D1D2B]">
                        {it.quantity} pieces
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 p-3 bg-[#7D1D2B] text-white flex justify-between items-center text-xs">
                <span className="uppercase tracking-wider">Total Pieces Ordered:</span>
                <span className="font-serif text-lg font-bold">
                  {selectedOrder.totalPieces} Pieces
                </span>
              </div>

              <div className="mt-6 text-right">
                <button
                  type="button"
                  onClick={() => setSelectedOrder(null)}
                  className="py-2 px-4 bg-[#1C1917] text-white text-xs uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
