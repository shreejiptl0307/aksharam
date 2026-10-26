# AKSHARAM TEXTILES — Wholesale B2B Ordering Portal

A production-quality B2B textile catalogue and wholesale ordering platform built for **Aksharam Textiles**, a premier Indian textile manufacturer based in Surat, Gujarat.

The platform empowers boutique owners, retailers, and resellers worldwide to browse authentic factory designs, select piece quantities, review orders, download branded visual order slips, and transmit structured order requests directly to Aksharam Textiles' WhatsApp production desk (**+91 9998283811**).

---

## 🌟 Key Architecture & Business Principles

### 1. Zero-Price Wholesale Policy
In accordance with B2B textile manufacturer standards, **no prices, monetary amounts, discounts, or payment gateways are displayed anywhere on the website**. Resellers can browse freely and share design links with their clients without revealing wholesale mill pricing. All invoicing and availability are confirmed directly via WhatsApp.

### 2. 100% Authentic Factory Product Images & Tags
The catalogue uses the original, physical garment photos uploaded from the factory floor. Every product preserves its official manufacturer identifier:
* **`D.NO.39750 RED (SILK)`** — Royal Heritage Bridal Silk Lehenga (Heavy Zardozi, Elephant & Peacock Motifs)
* **`D.NO.40270 RED (SILK)`** — Architectural Temple Arch Silk Lehenga (Pavilion Arches & Woodland Deer)
* **`D.NO-4152-(SILK) RANI`** — Panelled Zari Silk Lehenga (Linear Zari Panels & Medallion Buttas)
* **`D.NO.40260(RED)SILK`** — Ceremonial Procession & Kamdhenu Silk Lehenga (Garba Dancers & Sacred Cow)
* **`D.NO-3992-(TISHU) PINK`** — Mandala Luminous Tissue Lehenga (Circular Floral Mandala & Cut-Dana Work)

### 3. Pure Piece-Based Cart & Steppers
* Stepper controls (`[-]` `[qty]` `[+]`) and quick bulk presets (1, 2, 5, 10, 20 pcs).
* Slide-over Cart Drawer accessible from any page.
* Full-page `/cart` view.
* Live piece counter in header: e.g., `🛒 25 Pieces`.
* Persists automatically in `localStorage` across refreshes and navigations.

### 4. Direct WhatsApp Ordering (`+91 9998283811`)
When the reseller clicks **"Send Order via WhatsApp"**:
1. Validates boutique / reseller details (Shop Name, Contact Person, City).
2. Generates a neatly formatted, URL-encoded WhatsApp message.
3. Automatically opens WhatsApp to destination **`919998283811`** (`https://api.whatsapp.com/send?phone=919998283811&text=...`).
4. Logs the order in the Admin Orders History.

#### Official WhatsApp Message Structure:
```text
NEW WHOLESALE ORDER — AKSHARAM TEXTILES

Reseller: [Shop Name]
Contact Person: [Name]
City: [City]
Phone: [Phone Number]

ORDER DETAILS

1. Product Code: [Actual Tag]
   Product Name: [Product Name]
   Quantity: [Quantity] pieces
   Product Image: [Public Product Image URL]

2. Product Code: [Actual Tag]
   Product Name: [Product Name]
   Quantity: [Quantity] pieces
   Product Image: [Public Product Image URL]

TOTAL DESIGNS: [Number]
TOTAL PIECES: [Total Quantity]

Additional Notes: [Notes]

Please confirm availability and order details.
```

### 5. High-Resolution Visual Order Slip Generator
Because WhatsApp click-to-chat links cannot silently attach files, the platform includes a client-side HTML5 Canvas generator (`src/utils/canvasOrderSlip.ts`):
* Renders a branded specification slip card with Aksharam Textiles header, reseller details, product thumbnails, design tags, and total pieces count.
* Offers one-click **"Download Slip (.PNG)"** and **"Copy Text"** buttons so resellers can attach the slip into their WhatsApp chat for visual verification.

### 6. Protected Admin Dashboard (`/admin`)
* Protected by Passcode / PIN (default: `aksharam2026`).
* **Product Inventory Management**: Add new designs, edit existing codes/fabrics, upload images, group multiple photos into a gallery, and toggle Published/Hidden status.
* **Wholesale Orders History**: View all incoming reseller orders, inspect items and piece counts, update status (`New`, `Acknowledged`, `Processing`, `Dispatched`, `Completed`), and export to CSV or JSON.
* **Factory Reset Option**: One-click restore to the 5 initial verified factory uploaded products.

---

## 🛠️ Technology Stack

* **Framework**: Next.js 16 (App Router with Turbopack)
* **Language**: TypeScript 5
* **UI & Styling**: Tailwind CSS v4, Lucide React Icons
* **Typography**: Playfair Display (Luxury Serif Headings) + Manrope (Clean Modern Sans-Serif Body)
* **Image Engine**: Next.js Image Optimization + HTML5 Canvas API
* **State & Persistence**: React Context API + LocalStorage Persistent Engine with Supabase Cloud Migration readiness

---

## 🚀 Running Locally

### Prerequisites
* Node.js 18+ (Node 20+ recommended)
* npm, yarn, pnpm, or bun

### Setup Steps
```bash
# Navigate to the project directory
cd /Users/Shreeji/.gemini/antigravity/scratch/aksharam-ethnic

# Install dependencies (if not already installed)
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Key Routes
* `/` — Luxury Homepage with Hero, Featured Uploads, and Ordering Guide
* `/catalogue` — Full Wholesale Product Catalogue with real-time search & filters
* `/products/[id]` — Individual Product Detail Page with gallery and WhatsApp inquiry
* `/cart` — Dedicated Wholesale Shopping Cart
* `/admin` — Protected Admin Management Portal (Passcode: `aksharam2026`)

---

## ☁️ Optional Supabase Cloud Integration

The website is fully functional out-of-the-box using its zero-configuration local persistence engine. If you want a centralized PostgreSQL cloud database:

1. Create a project at [supabase.com](https://supabase.com).
2. Create a `.env.local` file with:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
3. Run the SQL schema:
   ```sql
   create table products (
     id text primary key,
     code text not null,
     design_no text,
     name text not null,
     category text not null,
     color text,
     fabric text,
     work text,
     image text not null,
     gallery text[],
     description text,
     is_published boolean default true,
     created_at timestamptz default now()
   );

   create table wholesale_orders (
     id text primary key,
     created_at timestamptz default now(),
     reseller jsonb not null,
     items jsonb not null,
     total_designs int not null,
     total_pieces int not null,
     status text default 'New'
   );
   ```

---

## 🚢 Deploying to Vercel

1. Push this project to your GitHub, GitLab, or Bitbucket repository.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New..."** -> **"Project"** and import the repository.
4. Framework Preset: **Next.js** (detected automatically).
5. Build Command: `npm run build`
6. Output Directory: `.next`
7. Click **"Deploy"**.

---

## 📞 Factory Contact & Production Desk

* **Manufacturer**: AKSHARAM TEXTILES
* **Address**: First Floor, Plot No. D-134-135, Laxmi Narayan Industrial Park, Udhna Navsari Road, Near BRC Complex, Surat, Gujarat 394210, India
* **WhatsApp**: [+91 9998283811](https://api.whatsapp.com/send?phone=919998283811)
* **Email**: orders@aksharamtextiles.com
