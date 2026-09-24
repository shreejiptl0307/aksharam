import type { Metadata } from "next";
import { Clock, ShieldCheck, MessageCircle, MapPin } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";
import { getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Contact & Studio Appointments | Aksharam Ethnic LLP",
  description:
    "Connect with Aksharam Ethnic LLP in Surat, Gujarat. Direct wholesale inquiries, catalogue requests, sample coordination, and trade appointments.",
};

export default function ContactPage() {
  const departments = [
    {
      title: "Wholesale & Trade Inquiries",
      desc: "For new boutique accounts, digital line sheets, bulk pricing, and international export orders.",
      action: "Direct WhatsApp Line",
      href: getWhatsAppUrl("Hello Aksharam, I'd like to make a Wholesale inquiry for our boutique."),
    },
    {
      title: "Sample & Lookbook Coordination",
      desc: "Request curated sample sets and high-resolution lookbook assets for retail review.",
      action: "Request Samples",
      href: getWhatsAppUrl("Hello Aksharam, I would like to request sample coordination and lookbook assets."),
    },
    {
      title: "Custom Production & Atelier Desk",
      desc: "Inquire about custom colorway runs, bespoke bridesmaid group orders, and specialized size grading.",
      action: "Discuss Custom Orders",
      href: getWhatsAppUrl("Hello Aksharam, I'd like to discuss custom production and bespoke sizing."),
    },
  ];

  return (
    <>
      <PageHeader
        label="Connect & Collaborate"
        title="Let's Work"
        italicTitle="Together."
        description="Whether you are an established retailer, an emerging luxury boutique, or an international distributor, our trade desk in Surat is ready to assist."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Department Cards */}
      <section className="py-20 bg-[#EFE7DA] text-[#181715] border-b border-[#181715]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, i) => (
              <div
                key={i}
                className="p-8 bg-[#F7F3EC] border border-[#181715]/10 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#702C36] font-semibold">
                    Department 0{i + 1}
                  </span>
                  <h3 className="font-editorial text-2xl text-[#181715] mt-3 mb-3">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-[#57524B] font-light leading-relaxed mb-6">
                    {dept.desc}
                  </p>
                </div>

                <a
                  href={dept.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-medium text-[#702C36] hover:text-[#181715] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{dept.action} →</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section & Form */}
      <ContactSection />

      {/* Operating Hours & Visiting Guidelines */}
      <section className="py-20 bg-[#181715] text-[#F7F3EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="p-8 bg-[#1F1E1B] border border-white/10">
              <Clock className="w-6 h-6 text-[#B79A67] mb-4 stroke-[1.5] mx-auto md:mx-0" />
              <h4 className="font-editorial text-2xl text-[#F7F3EC] mb-2">
                Atelier Hours
              </h4>
              <p className="text-sm text-[#D8CBC4] font-light">
                Monday – Saturday <br />
                10:00 AM – 7:30 PM (IST) <br />
                <span className="text-xs text-[#7E786E]">Sunday: Closed</span>
              </p>
            </div>

            <div className="p-8 bg-[#1F1E1B] border border-white/10">
              <MapPin className="w-6 h-6 text-[#B79A67] mb-4 stroke-[1.5] mx-auto md:mx-0" />
              <h4 className="font-editorial text-2xl text-[#F7F3EC] mb-2">
                Trade Appointments
              </h4>
              <p className="text-sm text-[#D8CBC4] font-light">
                Trade visits and buyer reviews are accommodated by prior
                appointment at our Surat facility.
              </p>
            </div>

            <div className="p-8 bg-[#1F1E1B] border border-white/10">
              <ShieldCheck className="w-6 h-6 text-[#B79A67] mb-4 stroke-[1.5] mx-auto md:mx-0" />
              <h4 className="font-editorial text-2xl text-[#F7F3EC] mb-2">
                Direct Verification
              </h4>
              <p className="text-sm text-[#D8CBC4] font-light">
                AKSHARAM ETHNIC LLP <br />
                Udhna Navsari Road, Surat <br />
                Gujarat 394210, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
