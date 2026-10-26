import { CartItem, ResellerInfo } from "@/types";
import { siteConfig } from "@/data/siteConfig";

export function formatWhatsAppOrderMessage(
  cart: CartItem[],
  reseller: ResellerInfo,
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
  lines.push(`Reseller: ${reseller.shopName || "N/A"}`);
  lines.push(`Contact Person: ${reseller.contactPerson || "N/A"}`);
  lines.push(`City: ${reseller.city || "N/A"}`);
  if (reseller.phone) {
    lines.push(`Phone: ${reseller.phone}`);
  }

  lines.push(``);
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

  if (reseller.notes && reseller.notes.trim()) {
    lines.push(``);
    lines.push(`Additional Notes: ${reseller.notes.trim()}`);
  }

  lines.push(``);
  lines.push(`Please confirm availability and order details.`);

  return lines.join("\n");
}

export function generateWhatsAppOrderUrl(
  cart: CartItem[],
  reseller: ResellerInfo,
  baseUrl?: string
): string {
  const message = formatWhatsAppOrderMessage(cart, reseller, baseUrl);
  const encoded = encodeURIComponent(message);
  // Using official WhatsApp API click-to-chat destination 919998283811
  return `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp.number}&text=${encoded}`;
}
