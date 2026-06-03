"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { offices } from "@/lib/data";

type FormData = {
  name: string; email: string; company: string; project: string; message: string;
};
const EMPTY: FormData = { name: "", email: "", company: "", project: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email address";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  const set = (k: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] text-white py-24 px-10">
        <div className="max-w-[1400px] mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Contact Us</span>
          </nav>
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4">Global Service Network</p>
          <h1 className="text-5xl font-light">Contact <strong className="font-bold">Us</strong></h1>
          <p className="text-white/60 mt-4 max-w-xl text-sm leading-relaxed">
            Aero makes every endeavour to exceed client&apos;s expectations. Reach our team in any of our global offices.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* ── FORM ── */}
        <div>
          <h2 className="text-2xl font-light mb-2">Send Us a <strong className="font-bold">Message</strong></h2>
          <p className="text-sm text-neutral-500 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

          {submitted ? (
            <div className="flex flex-col items-center py-16 text-center gap-4">
              <CheckCircle size={48} className="text-gold" />
              <h3 className="text-xl font-semibold">Message Sent!</h3>
              <p className="text-neutral-500 text-sm max-w-xs">Thank you for reaching out. Our team will contact you shortly.</p>
              <Button variant="outline" className="rounded-none mt-4 border-black" onClick={() => { setForm(EMPTY); setSubmitted(false); }}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { key: "name" as const, label: "Name *", placeholder: "Your full name" },
                { key: "email" as const, label: "Email *", placeholder: "your@email.com", type: "email" },
                { key: "company" as const, label: "Company", placeholder: "Hotel / Design firm" },
                { key: "project" as const, label: "Project Name", placeholder: "Project reference" },
              ].map(({ key, label, placeholder, type }) => (
                <div key={key}>
                  <label className="block text-[11px] tracking-[2px] uppercase font-bold text-neutral-500 mb-2">{label}</label>
                  <input
                    type={type || "text"}
                    value={form[key]}
                    onChange={set(key)}
                    placeholder={placeholder}
                    className={`w-full border px-4 py-3 text-sm outline-none focus:border-black transition-colors ${errors[key] ? "border-red-400" : "border-neutral-300"}`}
                  />
                  {errors[key] && <p className="text-red-500 text-xs mt-1">{errors[key]}</p>}
                </div>
              ))}

              <div>
                <label className="block text-[11px] tracking-[2px] uppercase font-bold text-neutral-500 mb-2">Message *</label>
                <textarea
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us about your project requirements…"
                  rows={5}
                  className={`w-full border px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none ${errors.message ? "border-red-400" : "border-neutral-300"}`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" className="bg-black hover:bg-neutral-800 text-white rounded-none w-full py-6 text-xs tracking-widest uppercase gap-2">
                <Send size={14} /> Send Message
              </Button>
            </form>
          )}
        </div>

        {/* ── OFFICES ── */}
        <div>
          <h2 className="text-2xl font-light mb-2">Our <strong className="font-bold">Offices</strong></h2>
          <p className="text-sm text-neutral-500 mb-8">Eight locations across Asia for your convenience.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {offices.map((o) => (
              <div key={o.city} className="bg-neutral-50 p-5 border border-neutral-200 hover:border-gold/40 transition-colors">
                <h3 className="font-bold text-sm mb-0.5">{o.city}</h3>
                <p className="text-[10px] tracking-[2px] uppercase text-gold mb-3">{o.label}</p>
                <div className="space-y-1.5 text-xs text-neutral-600">
                  <a href={`tel:${o.phone}`} className="flex items-center gap-2 hover:text-black transition-colors">
                    <Phone size={11} className="text-gold flex-shrink-0" />{o.phone}
                  </a>
                  <a href={`mailto:${o.email}`} className="flex items-center gap-2 hover:text-black transition-colors">
                    <Mail size={11} className="text-gold flex-shrink-0" />{o.email}
                  </a>
                  <p className="flex items-start gap-2">
                    <MapPin size={11} className="text-gold flex-shrink-0 mt-0.5" />{o.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="bg-neutral-100 h-72 flex items-center justify-center border-y border-neutral-200">
        <div className="text-center text-neutral-400">
          <MapPin size={32} className="mx-auto mb-2 opacity-30" />
          <p className="text-sm tracking-wider">Interactive Map — Google Maps Integration</p>
        </div>
      </div>
    </>
  );
}
