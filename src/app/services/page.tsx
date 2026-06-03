import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const techSections = [
  {
    title: "Light Source Quality",
    items: [
      {
        brand: "CREE",
        usage: "Fixtures above 6W",
        desc: "MacAdam 2 step only — the tightest colour consistency standard available. CRI 90+, 50,000-hour rated lifespan.",
      },
      {
        brand: "OSRAM",
        usage: "Fixtures under 6W",
        desc: "Premium European LED chips maintaining colour consistency across brands and batch productions for complete room uniformity.",
      },
      {
        brand: "Epistar",
        usage: "Linear & Strip Lights",
        desc: "High-density LED strip with CRI 90+ standard, UGR<16 anti-glare performance, and dot-free continuous light output.",
      },
    ],
  },
];

const sections = [
  {
    title: "Colour Rendering Index (CRI)",
    body: "All light sources used in Aero products are CRI 90+ standard. Higher CRI means skin tones look healthier, food appears more appetising, and décor colours remain true to their design intent. For luxury hospitality, this is non-negotiable.",
    items: ["R1–R8: Saturated primary colours", "R9: Saturated red — critical for skin rendering", "R13: Caucasian skin tone accuracy", "R15: Asian skin tone accuracy"],
  },
  {
    title: "Optical Design & Anti-Glare",
    body: "Every Aero fixture undergoes precision optical design to achieve target beam angles, maximum efficiency, and superior glare control. Our products achieve UGR < 16 in standard configurations.",
    items: ["Honeycomb anti-glare grilles", "Deep-set lens recessing", "Asymmetric reflectors for wall-wash", "Custom lens angles: 10°, 20°, 36°, 60°"],
  },
  {
    title: "Heat Dissipation & Durability",
    body: "Thermal management is critical to LED lifespan. Aero's die-cast aluminium housings, combined with optimised thermal paste and heat sink fin geometry, ensure LED junction temperatures remain within safe operating limits.",
    items: ["Die-cast aluminium bodies", "Salt-spray Level 9 tested (outdoor range)", "Operating temperature: –20°C to +50°C", "IP20 to IP68 ratings available"],
  },
  {
    title: "Dimming & Control Systems",
    body: "Aero products support the full range of modern dimming and control protocols used in luxury hotel installations, from simple analogue dimming to full digital addressable systems.",
    items: ["TRIAC leading/trailing edge", "0-10V analogue dimming", "DALI-2 digital addressable", "KNX / BACnet integration", "Warm dim 3000K → 1800K"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] text-white py-24 px-10">
        <div className="max-w-[1400px] mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Services</span>
          </nav>
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4">Technical Excellence</p>
          <h1 className="text-5xl font-light">Technical <strong className="font-bold">Support</strong></h1>
          <p className="text-white/60 mt-4 max-w-xl text-sm leading-relaxed">
            Understanding our products in depth — from chip quality to control systems — ensures you specify the right solution every time.
          </p>
        </div>
      </div>

      {/* Light Source Quality */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[4px] uppercase text-gold mb-2">Premium Components</p>
            <h2 className="text-3xl font-light">Light Source <strong className="font-bold">Quality</strong></h2>
            <div className="w-10 h-0.5 bg-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {techSections[0].items.map((item, i) => (
              <div key={item.brand} className={`p-10 ${i === 1 ? "bg-black text-white" : "bg-neutral-50"}`}>
                <div className={`text-3xl font-bold mb-1 ${i === 1 ? "text-gold" : "text-black"}`}>{item.brand}</div>
                <p className={`text-[11px] tracking-[2px] uppercase mb-4 ${i === 1 ? "text-white/50" : "text-gold"}`}>{item.usage}</p>
                <p className={`text-sm leading-relaxed ${i === 1 ? "text-white/70" : "text-neutral-600"}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion-style sections */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-10 space-y-0.5">
          {sections.map((s, i) => (
            <div key={s.title} className={`p-10 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50"}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-[11px] tracking-[3px] uppercase text-gold mb-2">0{i + 1}</p>
                  <h3 className="text-2xl font-light mb-4">{s.title.split(" ").slice(0, -1).join(" ")} <strong className="font-bold">{s.title.split(" ").at(-1)}</strong></h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">{s.body}</p>
                </div>
                <ul className="space-y-3 pt-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                      <Check size={14} className="text-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Site service */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4">On-Site Support</p>
            <h2 className="text-3xl font-light mb-5">Site <strong className="font-bold">Service</strong></h2>
            <p className="text-white/60 leading-relaxed mb-6 text-sm">
              Our site service team provides hands-on support throughout the installation and commissioning process, ensuring every fixture is correctly aimed, every control system is programmed, and every scene is perfect.
            </p>
            <ul className="space-y-3 mb-8">
              {["Pre-installation technical briefing", "On-site commissioning support", "DALI / control system programming", "Post-installation inspection", "Lighting scene optimisation"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                  <Check size={14} className="text-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button className="bg-gold hover:bg-gold/85 text-white rounded-none px-8 py-6 text-xs tracking-widest uppercase">
                Request Site Service
              </Button>
            </Link>
          </div>
          <div className="relative h-80 bg-neutral-900">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a3a] to-[#2c4a6e] opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/30">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <div className="text-xs tracking-[3px] uppercase">Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-10 text-center">
        <h2 className="text-2xl font-light mb-3">Have a technical <strong className="font-bold">question?</strong></h2>
        <p className="text-neutral-500 text-sm mb-8 max-w-md mx-auto">Our engineers are ready to assist with specifications, compatibility questions, and control system integration.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/contact">
            <Button className="bg-black hover:bg-neutral-800 text-white rounded-none px-10 py-6 text-xs tracking-widest uppercase">
              Contact Support
            </Button>
          </Link>
          <Link href="/download">
            <Button variant="outline" className="rounded-none border-black px-10 py-6 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
              Download Datasheets
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
