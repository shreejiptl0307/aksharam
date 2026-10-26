export type ProductCategory =
  | "Bridal Silk"
  | "Festive Silk"
  | "Tissue"
  | "All Collections";

export interface Product {
  id: string;
  code: string; // Exact tag from image, e.g. "D.NO.39750 RED (SILK)"
  designNo: string; // e.g. "39750"
  name: string; // Sensible label derived from metadata
  category: "Bridal Silk" | "Festive Silk" | "Tissue";
  color: string;
  fabric: string;
  work: string;
  image: string; // Primary image path
  gallery: string[]; // Multiple images if available
  description: string;
  isPublished: boolean;
  isFeatured: boolean;
  tags: string[];
  createdAt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ResellerInfo {
  shopName: string;
  contactPerson: string;
  city: string;
  phone?: string;
  notes?: string;
}

export interface WholesaleOrderRecord {
  id: string;
  createdAt: string;
  reseller: ResellerInfo;
  items: {
    productId: string;
    productCode: string;
    productName: string;
    productImage: string;
    quantity: number;
    category: string;
    color: string;
  }[];
  totalDesigns: number;
  totalPieces: number;
  status: "New" | "Acknowledged" | "Processing" | "Dispatched" | "Completed";
}
