import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getDownloads } from "@/lib/reader";
import DownloadList from "@/components/DownloadList";

export default async function DownloadPage() {
  const downloads = await getDownloads();

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] text-white py-24 px-10">
        <div className="max-w-[1400px] mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Service Support</Link>
            <span>/</span>
            <span className="text-white/80">Download</span>
          </nav>
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4">Resource Library</p>
          <h1 className="text-5xl font-light">Document <strong className="font-bold">Downloads</strong></h1>
          <p className="text-white/60 mt-4 max-w-xl text-sm leading-relaxed">
            Sharing is one of the core values of Aero. Welcome to download our product catalogues and project portfolios.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 py-12">
        <DownloadList items={downloads} />

        {/* Info blurb */}
        <div className="mt-16 bg-neutral-50 border border-neutral-200 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Free to Download", body: "All catalogues and portfolios are freely available to designers, specifiers, and project owners." },
            { title: "Always Up to Date", body: "Documents are updated with each new product launch. Bookmark this page to stay current." },
            { title: "Need Custom Specs?", body: "For project-specific IES files, photometric data, or BIM objects, contact our technical team." },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-bold text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-neutral-500 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-neutral-500 mb-4">Can&apos;t find what you need?</p>
          <Link href="/contact">
            <Button variant="outline" className="rounded-none border-black px-8 py-5 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
              Contact Our Technical Team
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
