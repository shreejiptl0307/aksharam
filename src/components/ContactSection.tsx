"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Check } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    city: "",
    enquiryType: "Wholesale",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [whatsappComposedUrl, setWhatsappComposedUrl] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct formatted WhatsApp message with form details
    const msg = `*New B2B Enquiry for Aksharam Ethnic LLP*
• *Name:* ${formData.name}
• *Boutique / Business:* ${formData.businessName || "N/A"}
• *Phone:* ${formData.phone}
• *Email:* ${formData.email || "N/A"}
• *City:* ${formData.city || "N/A"}
• *Enquiry Type:* ${formData.enquiryType}
• *Message:* ${formData.message || "Looking for latest wholesale catalogue and pricing."}`;

    const url = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(msg)}`;
    setWhatsappComposedUrl(url);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#F7F3EC] text-[#181715]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-[#702C36]" />
            <span className="text-[11px] tracking-[0.3em] uppercase font-sans text-[#702C36] font-semibold">
              Get in Touch
            </span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight text-[#181715]">
            Let&apos;s Work Together.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57524B] font-light">
            Connect with our atelier desk for wholesale accounts, lookbook
            catalogues, boutique sample requests, and bespoke customisation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Company & Location Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Brand Title */}
              <div>
                <h3 className="font-editorial text-2xl md:text-3xl text-[#181715] mb-2 font-normal">
                  AKSHARAM ETHNIC LLP
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-[#702C36] font-medium">
                  Apparel Manufacturing & Wholesale Trade
                </p>
              </div>

              {/* Address Block */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#EFE7DA] text-[#702C36] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-sm text-[#57524B] font-light leading-relaxed">
                  <p className="font-medium text-[#181715] mb-1 font-sans text-xs uppercase tracking-wider">
                    Manufacturing Atelier & Registered Address
                  </p>
                  <p>{siteConfig.address.line1}</p>
                  <p>{siteConfig.address.line2}</p>
                  <p>{siteConfig.address.line3}</p>
                  <p>
                    {siteConfig.address.city}, {siteConfig.address.state}{" "}
                    {siteConfig.address.pincode}
                  </p>
                  <p>{siteConfig.address.country}</p>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#EFE7DA] text-[#702C36] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-sm text-[#57524B] font-light">
                  <p className="font-medium text-[#181715] mb-1 font-sans text-xs uppercase tracking-wider">
                    Direct Trade & Atelier Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-base text-[#181715] hover:text-[#702C36] transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                  <p className="text-xs text-[#7E786E] mt-0.5">
                    Mon – Sat, 10:00 AM – 7:30 PM IST
                  </p>
                </div>
              </div>

              {/* Email Block */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#EFE7DA] text-[#702C36] shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm text-[#57524B] font-light">
                  <p className="font-medium text-[#181715] mb-1 font-sans text-xs uppercase tracking-wider">
                    Official Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base text-[#181715] hover:text-[#702C36] transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Quick Action Buttons */}
            <div className="mt-10 pt-8 border-t border-[#181715]/10 grid grid-cols-2 gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center space-x-2 py-3 px-4 bg-[#EFE7DA] text-[#181715] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#181715] hover:text-[#F7F3EC] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#702C36]" />
                <span>Call Us</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center space-x-2 py-3 px-4 bg-[#EFE7DA] text-[#181715] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#181715] hover:text-[#F7F3EC] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#702C36]" />
                <span>Email</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 py-3 px-4 bg-[#702C36] text-[#F7F3EC] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#B79A67] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 py-3 px-4 border border-[#181715]/20 text-[#181715] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#181715] hover:text-[#F7F3EC] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#702C36]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Minimal B2B Enquiry Form */}
          <div className="lg:col-span-7 bg-[#EFE7DA] p-8 md:p-12 border border-[#181715]/10">
            <div className="mb-6">
              <h4 className="font-editorial text-2xl md:text-3xl font-normal text-[#181715]">
                Trade & Wholesale Enquiry
              </h4>
              <p className="text-xs sm:text-sm text-[#57524B] font-light mt-1">
                Fill out the details below to receive our digital line sheets or
                coordinate sample appointments.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-6">
                <div className="w-12 h-12 rounded-full bg-[#702C36] text-[#F7F3EC] flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-editorial text-2xl text-[#181715]">
                    Enquiry Form Prepared
                  </h5>
                  <p className="text-sm text-[#57524B] font-light mt-2 max-w-md mx-auto">
                    Your enquiry details have been formulated. You can immediately
                    send this to our WhatsApp trade desk or copy your message.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappComposedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#702C36] text-[#F7F3EC] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#B79A67] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        businessName: "",
                        phone: "",
                        email: "",
                        city: "",
                        enquiryType: "Wholesale",
                        message: "",
                      });
                    }}
                    className="px-6 py-3 border border-[#181715]/30 text-xs uppercase tracking-[0.15em] hover:bg-white transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#181715] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-4 py-3 bg-[#F7F3EC] border border-[#181715]/15 focus:border-[#702C36] focus:outline-hidden text-sm text-[#181715] transition-colors"
                    />
                  </div>

                  {/* Business / Boutique Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#181715] mb-2">
                      Boutique / Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="e.g. Aara Couture Boutique"
                      className="w-full px-4 py-3 bg-[#F7F3EC] border border-[#181715]/15 focus:border-[#702C36] focus:outline-hidden text-sm text-[#181715] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Number */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#181715] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#F7F3EC] border border-[#181715]/15 focus:border-[#702C36] focus:outline-hidden text-sm text-[#181715] transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#181715] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="buyer@boutique.com"
                      className="w-full px-4 py-3 bg-[#F7F3EC] border border-[#181715]/15 focus:border-[#702C36] focus:outline-hidden text-sm text-[#181715] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* City */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#181715] mb-2">
                      City / Region
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Mumbai / London"
                      className="w-full px-4 py-3 bg-[#F7F3EC] border border-[#181715]/15 focus:border-[#702C36] focus:outline-hidden text-sm text-[#181715] transition-colors"
                    />
                  </div>

                  {/* Type of Enquiry */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#181715] mb-2">
                      Type of Enquiry *
                    </label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#F7F3EC] border border-[#181715]/15 focus:border-[#702C36] focus:outline-hidden text-sm text-[#181715] transition-colors"
                    >
                      <option value="Wholesale">Wholesale</option>
                      <option value="Catalogue">Catalogue</option>
                      <option value="Customisation">Customisation</option>
                      <option value="Retailer Partnership">Retailer Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] font-medium text-[#181715] mb-2">
                    Message / Order Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your boutique, preferred collection categories, estimated quantities, or custom requirements..."
                    className="w-full px-4 py-3 bg-[#F7F3EC] border border-[#181715]/15 focus:border-[#702C36] focus:outline-hidden text-sm text-[#181715] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center space-x-2 py-4 bg-[#181715] text-[#F7F3EC] text-xs uppercase tracking-[0.25em] font-semibold hover:bg-[#702C36] transition-all duration-300 group shadow-sm"
                  >
                    <span>Send Enquiry</span>
                    <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-[11px] text-center text-[#7E786E] mt-3">
                    Your enquiry will be instantly formatted with direct trade desk connectivity.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
