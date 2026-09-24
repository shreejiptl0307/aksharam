import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowUpRight, CheckCircle2, ShieldCheck, Truck, Sparkles, Layers } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import Marquee from "@/components/Marquee";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Wholesale & B2B Partnerships | Aksharam Ethnic LLP",
  description:
    "Partner with Aksharam Ethnic LLP for contemporary Indian ethnic fashion wholesale. Reliable supply, bespoke customisation, and boutique-focused apparel manufacturing in Surat, Gujarat.",
};

export default function WholesalePage() {
  const steps = [
    {
      num: "01",
      title: "Explore Line Sheets",
      desc: "Review our seasonal capsules across shisha lehengas, sarees, gowns, and co-ords to select styles tailored to your client demographic.",
    },
    {
      num: "02",
      title: "Direct WhatsApp Consultation",
      desc: "Connect directly with our trade team (+91 78018 23811) for pricing sheets, fabric swatches, and order specifications.",
    },
    {
      num: "03",
      title: "Sample & Customisation Review",
      desc: "Evaluate craftsmanship firsthand with sample sets and discuss any custom colorway or sizing requirements for your boutique.",
    },
    {
      num: "04",
      title: "Production & Secure Delivery",
      desc: "Enjoy transparent production tracking from our Surat atelier with strict multi-point quality assurance prior to dispatch.",
    },
  ];

  const faqs = [
    {
      q: "Who does Aksharam Ethnic LLP partner with?",
      a: "We partner with multi-designer boutiques, independent ethnic-wear retailers, bridal stylists, department store buyers, and global export fashion businesses.",
    },
    {
      q: "Can collections be customised for our boutique's market?",
      a: "Yes. Aksharam works closely with wholesale partners to explore custom color stories, neckline modifications, and tailored size runs across our collections.",
    },
    {
      q: "Where are Aksharam garments manufactured?",
      a: "All our collections are manufactured at our dedicated atelier in Surat, Gujarat, India, ensuring direct quality oversight and consistent craftsmanship.",
    },
    {
      q: "How can I receive the latest wholesale pricing and catalogue?",
      a: "You can click 'Start a Wholesale Conversation' to connect directly with our trade desk on WhatsApp (+91 78018 23811) or submit our B2B enquiry form below.",
    },
  ];

  return (
    <>
      <PageHeader
        label="B2B & Trade Program"
        title="Built for Boutiques."
        italicTitle="Designed for Growth."
        description="Aksharam partners with retailers, boutiques, and fashion businesses seeking distinctive ethnic collections, reliable manufacturing, and dependable trade relationships."
        breadcrumbs={[{ label: "Wholesale" }]}
      />

      <Marquee />

      {/* Trade Pillars */}
      <section className="py-24 bg-[#F7F3EC] text-[#181715]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center space-x-3 mb-4">
              <span className="w-8 h-[1px] bg-[#702C36]" />
              <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
                Why Partner With Us
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#181715]">
              Empowering Independent Boutiques & Global Retailers.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Fashion-Forward Design",
                desc: "Distinctive silhouettes balancing rich heritage mirror embroidery with contemporary ease-of-wear.",
              },
              {
                icon: ShieldCheck,
                title: "Quality Consistency",
                desc: "Every mirror, seam, and border undergoes stringent checks at our Surat facility before dispatch.",
              },
              {
                icon: Layers,
                title: "Customisation Freedom",
                desc: "Adapt colorways, fabrics, and size grading to match your region's customer preferences.",
              },
              {
                icon: Truck,
                title: "Dedicated Trade Desk",
                desc: "Direct WhatsApp support, prompt re-order fulfillment, and transparent production communication.",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className="p-8 bg-[#EFE7DA] border border-[#181715]/10 flex flex-col justify-between"
                >
                  <div>
                    <Icon className="w-6 h-6 text-[#702C36] mb-6 stroke-[1.5]" />
                    <h3 className="font-editorial text-2xl font-normal text-[#181715] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#57524B] font-light leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Wholesale Process */}
      <section className="py-24 bg-[#181715] text-[#F7F3EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#B79A67] font-semibold block mb-3">
              Fulfillment Workflow
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#F7F3EC]">
              How We Work With Trade Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-8 bg-[#1F1E1B] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <span className="font-editorial text-3xl text-[#B79A67] font-light">
                    {step.num}
                  </span>
                  <h3 className="font-editorial text-2xl font-normal text-[#F7F3EC] mt-4 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#D8CBC4] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="mt-16 text-center">
            <a
              href={getWhatsAppUrl(
                "Hello Aksharam, I would like to initiate a wholesale partnership enquiry for our boutique."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-9 py-4 bg-[#702C36] text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#B79A67] transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Start a Wholesale Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Wholesale FAQ */}
      <section className="py-24 bg-[#F7F3EC] text-[#181715]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold block mb-3">
              Trade Information
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#181715]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-8 bg-[#EFE7DA] border border-[#181715]/10"
              >
                <h3 className="font-editorial text-2xl text-[#181715] mb-3 font-normal">
                  {faq.q}
                </h3>
                <p className="text-sm text-[#57524B] font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Form */}
      <ContactSection />
    </>
  );
}
