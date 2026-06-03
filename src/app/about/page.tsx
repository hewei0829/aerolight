import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Globe, FlaskConical, Award } from "lucide-react";

const stats = [
  { number: "5★", label: "Five-Star Service Standard" },
  { number: "10+", label: "Years Focused on Hospitality" },
  { number: "300+", label: "Hotel Projects Worldwide" },
  { number: "50+", label: "Countries & Territories" },
];

const features = [
  {
    icon: <FlaskConical size={28} />,
    title: "Research & Development",
    points: [
      "200+ active patents in LED optics and thermal design",
      "In-house optical lab with integrating sphere measurement",
      "MacAdam 2-step colour consistency across all batches",
      "Custom product development for unique specifications",
      "Qualification testing: LM-80, LM-79, TM-21",
    ],
  },
  {
    icon: <Globe size={28} />,
    title: "Global Marketing Network",
    points: [
      "Showrooms in Guangzhou, Shanghai, Beijing, Shenzhen",
      "Regional offices in Singapore, Hong Kong, Seoul, Taipei",
      "Distributor network spanning 50+ countries",
      "Dedicated project managers for international accounts",
      "Multi-language technical support team",
    ],
  },
  {
    icon: <Award size={28} />,
    title: "Quality Products & Service",
    points: [
      "CRI 90+ standard across all hospitality products",
      "Salt-spray Level 9 tested outdoor fixtures",
      "CREE, OSRAM, and Epistar LED chips",
      "ISO 9001:2015 certified manufacturing",
      "5-year product warranty on full range",
    ],
  },
];

const culture = [
  { title: "Vision", body: "To be the most trusted and innovative hospitality lighting brand globally, illuminating extraordinary guest experiences across every continent." },
  { title: "Mission", body: "To craft precision-engineered, aesthetically refined lighting solutions that elevate the ambience of luxury hospitality spaces worldwide." },
  { title: "Core Values", body: "Mutual Respect · Innovation & Sharing · Sincere Service · Lifelong Learning" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-white py-24 px-10">
        <div className="max-w-[1400px] mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">About Aero</span>
          </nav>
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4">Passionate for Hospitality Lighting</p>
          <h1 className="text-5xl font-light max-w-2xl leading-tight">
            About <strong className="font-bold">Aero Light</strong>
          </h1>
          <p className="text-white/60 mt-5 max-w-xl leading-relaxed">
            The top and most standardised production scale in the hospitality lighting industry — trusted by over 300 five-star luxury hotels worldwide.
          </p>
        </div>
      </div>

      {/* Opening statement */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4">The Start of Aero</p>
              <h2 className="text-3xl font-light mb-6">
                Light is <strong className="font-bold">passion</strong>, and passion is what we build into every fixture.
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-5">
                Founded with a single focus — hospitality lighting — Aero Light has spent over a decade perfecting the art and science of illuminating luxury spaces. We believe light shapes emotion, and the right light transforms a hotel room into an experience.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                300 five-star luxury hotels have been equipped with Aero products, from intimate boutique properties to iconic global landmarks. Each project taught us something new, and every lesson made our products better.
              </p>
              <Link href="/projects">
                <Button className="bg-black hover:bg-neutral-800 text-white rounded-none px-8 py-6 text-xs tracking-widest uppercase">
                  View Our Projects
                </Button>
              </Link>
            </div>
            {/* Visual block */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gradient-to-br from-[#1a2a3a] to-[#2c4a6e] h-52 rounded-sm" />
                <div className="bg-gradient-to-br from-[#2a1a3a] to-[#5a3a6e] h-52 rounded-sm mt-6" />
                <div className="bg-gradient-to-br from-[#1a3a2a] to-[#2e6e5a] h-40 rounded-sm" />
                <div className="bg-gradient-to-br from-[#3a2a1a] to-[#6e4e2e] h-40 rounded-sm mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-950 py-16">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-800">
            {stats.map((s, i) => (
              <div key={i} className="text-center py-8 px-6">
                <div className="text-5xl font-bold text-gold mb-3">{s.number}</div>
                <p className="text-xs tracking-[2px] uppercase text-white/50 leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature sections */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[4px] uppercase text-gold mb-2">Why Choose Aero</p>
            <h2 className="text-3xl font-light">Our <strong className="font-bold">Capabilities</strong></h2>
            <div className="w-10 h-0.5 bg-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5">
            {features.map((f, i) => (
              <div key={i} className={`p-10 ${i === 1 ? "bg-black text-white" : "bg-neutral-50"}`}>
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${i === 1 ? "bg-white/10 text-white" : "bg-white border border-neutral-200 text-black"}`}>
                  {f.icon}
                </div>
                <h3 className={`text-lg font-bold mb-5 ${i === 1 ? "text-white" : "text-black"}`}>{f.title}</h3>
                <ul className="space-y-3">
                  {f.points.map((point) => (
                    <li key={point} className={`flex items-start gap-2.5 text-sm ${i === 1 ? "text-white/70" : "text-neutral-600"}`}>
                      <Check size={13} className="text-gold flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel showcase */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[4px] uppercase text-gold mb-2">Our Portfolio</p>
            <h2 className="text-3xl font-light">Hotels We&apos;ve <strong className="font-bold">Illuminated</strong></h2>
            <div className="w-10 h-0.5 bg-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {["Marriott", "Hyatt", "Four Seasons", "IHG", "Accor", "Capella", "Hilton", "Wyndham"].map((brand) => (
              <div key={brand} className="bg-white border border-neutral-200 h-16 flex items-center justify-center">
                <span className="text-xs font-semibold tracking-[2px] uppercase text-neutral-400">{brand}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" className="rounded-none border-black px-10 py-6 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
                Browse All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-12">
            <p className="text-[11px] tracking-[4px] uppercase text-gold mb-2">Who We Are</p>
            <h2 className="text-3xl font-light">Corporate <strong className="font-bold">Culture</strong></h2>
            <div className="w-10 h-0.5 bg-gold mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {culture.map((c, i) => (
              <div key={i} className={`p-10 text-center ${i === 1 ? "bg-gold text-white" : "bg-neutral-50"}`}>
                <h3 className={`text-[11px] tracking-[3px] uppercase font-bold mb-4 ${i === 1 ? "text-white/80" : "text-gold"}`}>{c.title}</h3>
                <p className={`text-sm leading-relaxed ${i === 1 ? "text-white" : "text-neutral-600"}`}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-950 text-white py-20 px-10 text-center">
        <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4">Get In Touch</p>
        <h2 className="text-3xl font-light mb-3">Ready to start your <strong className="font-bold">project?</strong></h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">Our team of lighting specialists is ready to help you design the perfect illumination for your property.</p>
        <Link href="/contact">
          <Button className="bg-gold hover:bg-gold/85 text-white rounded-none px-10 py-6 text-xs tracking-widest uppercase">
            Contact Our Team
          </Button>
        </Link>
      </section>
    </>
  );
}
