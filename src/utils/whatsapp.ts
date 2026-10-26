import { CartItem, ResellerInfo } from "@/types";
import { siteConfig } from "@/data/siteConfig";

export function formatWhatsAppOrderMessage(
  cart: CartItem[],
  reseller?: Partial<ResellerInfo> | string,
  baseUrl?: string
): string {
  const origin =
    baseUrl ||
    (typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : siteConfig.url);

  const lines: string[] = [];

  lines.push(`NEW WHOLESALE ORDER — AKSHARAM TEXTILES`);
  lines.push(``);

  if (typeof reseller === "string" && reseller.trim()) {
    lines.push(`Boutique / Notes: ${reseller.trim()}`);
    lines.push(``);
  } else if (reseller && typeof reseller === "object") {
    if (reseller.shopName && reseller.shopName.trim()) {
      lines.push(`Reseller: ${reseller.shopName.trim()}`);
    }
    if (reseller.contactPerson && reseller.contactPerson.trim()) {
      lines.push(`Contact Person: ${reseller.contactPerson.trim()}`);
    }
    if (reseller.city && reseller.city.trim()) {
      lines.push(`City: ${reseller.city.trim()}`);
    }
    if (reseller.phone && reseller.phone.trim()) {
      lines.push(`Phone: ${reseller.phone.trim()}`);
    }
    if (reseller.notes && reseller.notes.trim()) {
      lines.push(`Notes: ${reseller.notes.trim()}`);
    }
    if (
      reseller.shopName ||
      reseller.contactPerson ||
      reseller.city ||
      reseller.phone ||
      reseller.notes
    ) {
      lines.push(``);
    }
  }

  lines.push(`ORDER DETAILS`);
  lines.push(``);

  cart.forEach((item, index) => {
    const itemNumber = index + 1;
    // Build accessible URL for product image
    const fullImageUrl = item.product.image.startsWith("http")
      ? item.product.image
      : `${origin}${item.product.image}`;

    lines.push(`${itemNumber}. Product Code: ${item.product.code}`);
    lines.push(`   Product Name: ${item.product.name}`);
    lines.push(`   Quantity: ${item.quantity} pieces`);
    lines.push(`   Product Image: ${fullImageUrl}`);
    lines.push(``);
  });

  const totalDesigns = cart.length;
  const totalPieces = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  lines.push(`TOTAL DESIGNS: ${totalDesigns}`);
  lines.push(`TOTAL PIECES: ${totalPieces}`);
  lines.push(``);
  lines.push(`Please confirm availability and order details.`);

  return lines.join("\n");
}

export function generateWhatsAppOrderUrl(
  cart: CartItem[],
  reseller?: Partial<ResellerInfo> | string,
  baseUrl?: string
): string {
  const message = formatWhatsAppOrderMessage(cart, reseller, baseUrl);
  const encoded = encodeURIComponent(message);
  // Using official WhatsApp API click-to-chat destination 919998283811
  return `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encoded}`;
}
