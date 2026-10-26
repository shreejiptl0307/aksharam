import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { initialProducts } from "@/data/products";
import { siteConfig } from "@/data/siteConfig";
import ProductDetailClient from "./ProductDetailClient";
import { ArrowLeft, ShieldCheck, Truck, RefreshCw } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return initialProducts.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = initialProducts.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Product Details | Aksharam Textiles",
    };
  }

  return {
    title: `${product.code} - ${product.name} | Aksharam Textiles Wholesale`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = initialProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = initialProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="pt-5 sm:pt-8 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Breadcrumb Navigation */}
        <div className="mb-6 flex items-center space-x-2 text-xs text-[#78716C]">
          <Link
            href="/catalogue"
            className="hover:text-[#1C1917] flex items-center space-x-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Catalogue</span>
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="font-mono font-bold text-[#1C1917]">
            {product.code}
          </span>
        </div>

        {/* Client Interactive Detail Section */}
        <ProductDetailClient
          product={product}
          relatedProducts={relatedProducts}
        />
      </div>
    </div>
  );
}
