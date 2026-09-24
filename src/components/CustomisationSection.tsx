import { getWhatsAppUrl } from "@/data/siteConfig";

export default function CustomisationSection() {
  return (
    <section className="py-16 md:py-24 px-6 sm:px-10 max-w-[1400px] mx-auto border-t border-[#E4E2DD]">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-light text-[#171717] tracking-tight mb-2">
            Looking for something specific?
          </h3>
          <p className="text-sm text-[#66635F] font-light">
            Speak with our team about collection and customisation requirements.
          </p>
        </div>

        <div>
          <a
            href={getWhatsAppUrl(
              "Hello Aksharam, I would like to discuss collection and customisation requirements for my boutique."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs uppercase tracking-[0.15em] font-medium text-[#171717] hover:opacity-70 transition-opacity"
          >
            Discuss your requirements →
          </a>
        </div>
      </div>
    </section>
  );
}
