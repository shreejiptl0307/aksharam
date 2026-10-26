import { CartItem, ResellerInfo } from "@/types";
import { siteConfig } from "@/data/siteConfig";

/**
 * Loads an image into an HTMLImageElement safely
 */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => {
      // In case of error loading image, resolve an empty canvas or fallback
      reject(new Error(`Failed to load image: ${src}`));
    };
    img.src = src;
  });
}

/**
 * Generates an elegant high-resolution order specification card via HTML5 canvas
 */
export async function generateOrderSlipCanvas(
  cart: CartItem[],
  reseller: ResellerInfo,
  orderId: string
): Promise<string> {
  const width = 1000;
  // Calculate dynamic height based on number of items
  const headerHeight = 220;
  const resellerSectionHeight = 160;
  const itemRowHeight = 130;
  const summaryHeight = 190;
  const footerHeight = 70;
  const totalHeight =
    headerHeight +
    resellerSectionHeight +
    cart.length * itemRowHeight +
    summaryHeight +
    footerHeight;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = totalHeight;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Unable to initialize canvas 2D context");
  }

  // 1. Background
  ctx.fillStyle = "#FAF7F2"; // Warm ivory background
  ctx.fillRect(0, 0, width, totalHeight);

  // 2. Header Banner (Deep Burgundy)
  const burgundyGradient = ctx.createLinearGradient(0, 0, width, 0);
  burgundyGradient.addColorStop(0, "#58121C");
  burgundyGradient.addColorStop(0.5, "#7D1D2B");
  burgundyGradient.addColorStop(1, "#58121C");
  ctx.fillStyle = burgundyGradient;
  ctx.fillRect(0, 0, width, headerHeight);

  // Gold decorative border under header
  ctx.fillStyle = "#C5A880";
  ctx.fillRect(0, headerHeight - 4, width, 4);

  // Header Typography
  ctx.textAlign = "center";
  ctx.fillStyle = "#FAF7F2";
  ctx.font = "bold 34px Georgia, serif";
  ctx.fillText("AKSHARAM TEXTILES", width / 2, 60);

  ctx.fillStyle = "#E4D5BE";
  ctx.font = "14px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(
    "MANUFACTURER & WHOLESALE SUPPLIER OF LUXURY INDIAN ETHNIC WEAR",
    width / 2,
    92
  );

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 20px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText("OFFICIAL WHOLESALE ORDER SPECIFICATION", width / 2, 138);

  ctx.fillStyle = "#E4D5BE";
  ctx.font = "13px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(
    `Order Ref: ${orderId}  •  Surat Mill Unit  •  WhatsApp: ${siteConfig.whatsapp.displayNumber}`,
    width / 2,
    172
  );

  // 3. Reseller Information Card
  let currentY = headerHeight + 25;
  const cardX = 40;
  const cardWidth = width - 80;

  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#EAE5DC";
  ctx.lineWidth = 1;
  roundRect(ctx, cardX, currentY, cardWidth, 120, 10);
  ctx.fill();
  ctx.stroke();

  ctx.textAlign = "left";
  ctx.fillStyle = "#7D1D2B";
  ctx.font = "bold 13px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText("RESELLER & CONSIGNMENT DETAILS", cardX + 24, currentY + 30);

  ctx.fillStyle = "#1C1917";
  ctx.font = "bold 18px Georgia, serif";
  ctx.fillText(`Shop: ${reseller.shopName || "Registered Reseller"}`, cardX + 24, currentY + 60);

  ctx.fillStyle = "#55524E";
  ctx.font = "14px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(
    `Attn: ${reseller.contactPerson || "Boutique Owner"}    |    City: ${reseller.city || "India"}`,
    cardX + 24,
    currentY + 86
  );

  const orderDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  ctx.textAlign = "right";
  ctx.fillStyle = "#78716C";
  ctx.font = "13px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(`Generated: ${orderDate}`, cardX + cardWidth - 24, currentY + 35);
  ctx.fillText(`Wholesale ID: ${orderId}`, cardX + cardWidth - 24, currentY + 60);

  // 4. Products List
  currentY += 140;

  ctx.textAlign = "left";
  ctx.fillStyle = "#1C1917";
  ctx.font = "bold 16px Georgia, serif";
  ctx.fillText(`ORDERED DESIGNS (${cart.length} ITEMS)`, cardX, currentY);
  currentY += 15;

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const rowY = currentY + i * itemRowHeight;

    // Row Container
    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#ECE7DE";
    ctx.lineWidth = 1;
    roundRect(ctx, cardX, rowY, cardWidth, 115, 8);
    ctx.fill();
    ctx.stroke();

    // Product Image Thumbnail
    const imgX = cardX + 16;
    const imgY = rowY + 12;
    const imgSize = 90;

    try {
      const img = await loadImage(item.product.image);
      ctx.save();
      roundRect(ctx, imgX, imgY, imgSize, imgSize, 6);
      ctx.clip();
      ctx.drawImage(img, imgX, imgY, imgSize, imgSize);
      ctx.restore();
    } catch {
      // Fallback gray box
      ctx.fillStyle = "#F5EFEB";
      roundRect(ctx, imgX, imgY, imgSize, imgSize, 6);
      ctx.fill();
      ctx.fillStyle = "#888";
      ctx.font = "11px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Design", imgX + imgSize / 2, imgY + imgSize / 2);
    }

    // Border around thumbnail
    ctx.strokeStyle = "#DDD8CE";
    ctx.lineWidth = 1;
    roundRect(ctx, imgX, imgY, imgSize, imgSize, 6);
    ctx.stroke();

    // Item Details
    const textX = imgX + imgSize + 22;
    ctx.textAlign = "left";

    // Item Number & Design Tag Badge
    ctx.fillStyle = "#7D1D2B";
    ctx.font = "bold 11px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.fillText(`ITEM #${i + 1}`, textX, rowY + 28);

    ctx.fillStyle = "#1C1917";
    ctx.font = "bold 17px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.fillText(item.product.code, textX + 60, rowY + 28);

    // Product Title
    ctx.fillStyle = "#44403C";
    ctx.font = "14px Georgia, serif";
    ctx.fillText(item.product.name, textX, rowY + 54);

    // Fabric & Color specifications
    ctx.fillStyle = "#78716C";
    ctx.font = "13px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.fillText(
      `Category: ${item.product.category}  |  Fabric: ${item.product.fabric}  |  Color: ${item.product.color}`,
      textX,
      rowY + 78
    );

    // Quantity Badge (Prominent on Right)
    const qtyBoxWidth = 140;
    const qtyBoxHeight = 44;
    const qtyBoxX = cardX + cardWidth - qtyBoxWidth - 20;
    const qtyBoxY = rowY + 36;

    ctx.fillStyle = "#FAF5EE";
    ctx.strokeStyle = "#C5A880";
    ctx.lineWidth = 1.5;
    roundRect(ctx, qtyBoxX, qtyBoxY, qtyBoxWidth, qtyBoxHeight, 8);
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.fillStyle = "#7D1D2B";
    ctx.font = "bold 18px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.fillText(`${item.quantity} PIECES`, qtyBoxX + qtyBoxWidth / 2, qtyBoxY + 28);
  }

  // 5. Total Pieces & Summary Section
  currentY += cart.length * itemRowHeight + 15;

  const totalPieces = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  ctx.fillStyle = "#FFFFFF";
  ctx.strokeStyle = "#D6CEC1";
  ctx.lineWidth = 1.5;
  roundRect(ctx, cardX, currentY, cardWidth, 140, 10);
  ctx.fill();
  ctx.stroke();

  // Highlight bar inside summary
  ctx.fillStyle = "#7D1D2B";
  roundRect(ctx, cardX, currentY, cardWidth, 6, 0);
  ctx.fill();

  ctx.textAlign = "left";
  ctx.fillStyle = "#1C1917";
  ctx.font = "bold 20px Georgia, serif";
  ctx.fillText("WHOLESALE CONSIGNMENT SUMMARY", cardX + 24, currentY + 45);

  ctx.fillStyle = "#55524E";
  ctx.font = "14px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(
    `Total Selected Designs: ${cart.length} Unique Catalogue Codes`,
    cardX + 24,
    currentY + 78
  );

  if (reseller.notes && reseller.notes.trim()) {
    ctx.fillStyle = "#78716C";
    ctx.font = "italic 13px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
    ctx.fillText(
      `Special Instructions: ${reseller.notes.trim().slice(0, 75)}${reseller.notes.length > 75 ? "..." : ""}`,
      cardX + 24,
      currentY + 105
    );
  }

  // Big Total Pieces Pill
  const totalPillWidth = 240;
  const totalPillHeight = 65;
  const totalPillX = cardX + cardWidth - totalPillWidth - 24;
  const totalPillY = currentY + 36;

  ctx.fillStyle = "#7D1D2B";
  roundRect(ctx, totalPillX, totalPillY, totalPillWidth, totalPillHeight, 10);
  ctx.fill();

  ctx.textAlign = "center";
  ctx.fillStyle = "#E4D5BE";
  ctx.font = "11px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText("TOTAL ORDER QUANTITY", totalPillX + totalPillWidth / 2, totalPillY + 24);

  ctx.fillStyle = "#FFFFFF";
  ctx.font = "bold 26px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(`${totalPieces} PIECES`, totalPillX + totalPillWidth / 2, totalPillY + 52);

  // 6. Footer Note
  currentY += 155;
  ctx.textAlign = "center";
  ctx.fillStyle = "#78716C";
  ctx.font = "12px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(
    "Please send this order slip to WhatsApp: +91 9998283811 for immediate mill confirmation and dispatch schedule.",
    width / 2,
    currentY + 15
  );

  ctx.fillStyle = "#A8A29E";
  ctx.font = "11px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
  ctx.fillText(
    "Aksharam Textiles • First Floor, Laxmi Narayan Industrial Park, Udhna Navsari Road, Surat, Gujarat 394210",
    width / 2,
    currentY + 35
  );

  return canvas.toDataURL("image/png");
}

/**
 * Helper to draw rounded rectangle in canvas
 */
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

/**
 * Triggers browser download of generated PNG image
 */
export function downloadDataUrl(dataUrl: string, filename: string): void {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
