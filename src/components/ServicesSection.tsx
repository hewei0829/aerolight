"use client";

import { Lightbulb, Wrench, Package, Sparkles, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: <Lightbulb size={24} />,
    title: "Lighting Design",
    desc: "Custom lighting plans tailored to your project vision and space requirements.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Technical Support",
    desc: "Expert engineers available for on-site and remote technical consultation.",
  },
  {
    icon: <Package size={24} />,
    title: "Global Logistics",
    desc: "Reliable worldwide shipping with end-to-end project delivery management.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Custom Products",
    desc: "OEM and bespoke product development for unique hospitality requirements.",
  },
  {
    icon: <HeadphonesIcon size={24} />,
    title: "After Sales",
    desc: "Dedicated post-installation support and comprehensive warranty programs.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-2">What We Offer</p>
          <h2 className="text-3xl font-light">Our <strong className="font-bold">Services</strong></h2>
          <div className="w-10 h-0.5 bg-gold mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0.5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-neutral-50 px-6 py-9 text-center hover:bg-neutral-950 transition-colors duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full border border-neutral-200 group-hover:border-white/20 flex items-center justify-center mx-auto mb-5 text-neutral-600 group-hover:text-white transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="text-[12px] font-bold tracking-widest uppercase mb-3 text-black group-hover:text-white transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-xs text-neutral-500 group-hover:text-white/60 leading-relaxed transition-colors duration-300">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
