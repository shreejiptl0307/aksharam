import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#181715] text-[#F7F3EC] px-6 py-32 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(112,44,54,0.2),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        <span className="text-[10px] tracking-[0.4em] uppercase font-sans text-[#B79A67] mb-4 font-semibold">
          AKSHARAM ATELIER
        </span>

        <h1 className="font-editorial text-7xl sm:text-9xl font-light tracking-tight text-[#EFE7DA] mb-4">
          404
        </h1>

        <h2 className="font-editorial text-2xl sm:text-3xl font-light text-[#F7F3EC] mb-4">
          This page seems to have left the collection.
        </h2>

        <p className="text-sm text-[#D8CBC4] font-light leading-relaxed mb-10 max-w-sm">
          The silhouette or lookbook archive you are searching for might have been
          moved or updated.
        </p>

        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-8 py-4 bg-[#702C36] text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B79A67] transition-all duration-300 shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Aksharam</span>
        </Link>
      </div>
    </div>
  );
}
