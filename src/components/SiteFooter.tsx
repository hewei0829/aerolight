import Link from "next/link";
import { Mail, Phone, MapPin, Globe, Rss, Share2, Play } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Indoor: [
    { label: "Track Lights", href: "/products?category=indoor" },
    { label: "Downlights", href: "/products?category=indoor" },
    { label: "Strip Lights", href: "/products?category=indoor" },
    { label: "Pendant Lights", href: "/products?category=indoor" },
    { label: "Wall Lights", href: "/products?category=indoor" },
  ],
  Outdoor: [
    { label: "Facade Lighting", href: "/products?category=outdoor" },
    { label: "Landscape", href: "/products?category=outdoor" },
    { label: "Flood Lights", href: "/products?category=outdoor" },
    { label: "Path Lights", href: "/products?category=outdoor" },
  ],
  Projects: [
    { label: "Hotels", href: "/projects" },
    { label: "Resorts", href: "/projects" },
    { label: "Restaurants", href: "/projects" },
    { label: "Commercial", href: "/projects" },
    { label: "Residential", href: "/projects" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Download", href: "/download" },
    { label: "Media", href: "/media" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white/60">
      <div className="max-w-[1400px] mx-auto px-10 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12">
        {/* Brand col */}
        <div>
          <Link href="/" className="text-lg font-bold tracking-[4px] uppercase text-white block mb-5">
            AERO <span className="text-gold">LIGHT</span>
          </Link>
          <p className="text-sm leading-relaxed mb-5">
            Specialising in premium hospitality lighting for luxury hotels and resorts worldwide.
            Over a decade of expertise delivering five-star illumination experiences.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={13} className="text-gold flex-shrink-0" /> info@aerolight.cn
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={13} className="text-gold flex-shrink-0" /> +86 755 0000 0000
            </a>
            <p className="flex items-start gap-2">
              <MapPin size={13} className="text-gold flex-shrink-0 mt-0.5" /> Shenzhen, Guangdong, China
            </p>
          </div>
          {/* Socials */}
          <div className="flex gap-3 mt-6">
            {[Globe, Rss, Share2, Play].map((Icon, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-colors"
              >
                <Icon size={14} />
              </button>
            ))}
          </div>
        </div>

        {/* Link cols */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h4 className="text-[11px] font-bold tracking-[2px] uppercase text-white mb-5">{heading}</h4>
            <ul className="space-y-2.5">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-white/50 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Separator className="bg-neutral-900 max-w-[1400px] mx-auto" />

      <div className="max-w-[1400px] mx-auto px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
        <span>© 2024 Aero Light. All rights reserved.</span>
        <div className="flex gap-6">
          {[
            { label: "Privacy Policy", href: "/about" },
            { label: "Terms of Use", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }) => (
            <Link key={label} href={href} className="hover:text-white/60 transition-colors">{label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
