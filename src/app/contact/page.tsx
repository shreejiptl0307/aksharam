import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Aksharam Ethnic LLP",
  description:
    "Contact Aksharam Ethnic LLP in Surat, Gujarat. Direct wholesale enquiries, catalogue requests and appointments.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Get in Touch"
        description="For wholesale enquiries, catalogues and appointments with our team in Surat."
      />

      <ContactSection />
    </>
  );
}
