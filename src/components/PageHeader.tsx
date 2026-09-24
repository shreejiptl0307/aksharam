interface PageHeaderProps {
  label?: string;
  title: string;
  description?: string;
}

export default function PageHeader({
  label,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className="pt-20 sm:pt-26 md:pt-32 pb-6 sm:pb-8 md:pb-12 px-5 sm:px-8 lg:px-16 max-w-[1440px] mx-auto border-b border-[#E4E2DD]">
      {label && (
        <p className="text-xs uppercase tracking-[0.2em] text-[#66635F] mb-2">
          {label}
        </p>
      )}
      <h1
        style={{ fontSize: "clamp(1.875rem, 4.5vw, 2.75rem)" }}
        className="font-light text-[#171717] tracking-tight leading-tight mb-2 sm:mb-3"
      >
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl text-sm sm:text-base text-[#66635F] font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
