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
    <div className="pt-28 md:pt-36 pb-12 md:pb-16 px-6 sm:px-10 max-w-[1400px] mx-auto border-b border-[#E4E2DD]">
      {label && (
        <p className="text-xs uppercase tracking-[0.2em] text-[#66635F] mb-3">
          {label}
        </p>
      )}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#171717] tracking-tight mb-4">
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
