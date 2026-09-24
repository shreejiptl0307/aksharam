import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  label: string;
  title: string;
  italicTitle?: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageHeader({
  label,
  title,
  italicTitle,
  description,
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-20 bg-[#181715] text-[#F7F3EC] relative overflow-hidden border-b border-[#F7F3EC]/10">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(112,44,54,0.18),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-[11px] tracking-[0.2em] uppercase text-[#D8CBC4]/70 mb-6">
            <Link href="/" className="hover:text-[#B79A67] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <div key={i} className="flex items-center space-x-2">
                <ChevronRight className="w-3 h-3 text-[#B79A67]" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-[#B79A67] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#F7F3EC]">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Small Label */}
        <div className="inline-flex items-center space-x-3 mb-4">
          <span className="w-6 h-[1px] bg-[#B79A67]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-sans text-[#B79A67] font-semibold">
            {label}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] tracking-tight text-[#F7F3EC] mb-6">
          {title} {italicTitle && <span className="italic text-[#EFE7DA]">{italicTitle}</span>}
        </h1>

        {/* Description */}
        {description && (
          <p className="max-w-2xl text-base sm:text-lg text-[#D8CBC4] font-light leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
