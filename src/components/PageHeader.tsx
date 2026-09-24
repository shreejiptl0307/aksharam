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
    <div className="pt-24 sm:pt-28 md:pt-32 pb-8 md:pb-12 px-6 sm:px-10 lg:px-16 max-w-[1440px] mx-auto border-b border-[#E4E2DD]">
      {label && (
        <p className="text-xs uppercase tracking-[0.2em] text-[#66635F] mb-2.5">
          {label}
        </p>
      )}
      <h1 className="text-3xl sm:text-4xl md:text-[44px] font-light text-[#171717] tracking-tight mb-3">
        {title}
      </h1>
      {description && (
        <p className="max-w-2xl text-base text-[#66635F] font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
