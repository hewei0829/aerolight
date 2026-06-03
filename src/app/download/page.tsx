"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { downloads } from "@/lib/data";

const tabs = ["All", "Catalogue", "Portfolio"] as const;
type Tab = typeof tabs[number];

export default function DownloadPage() {
  const [tab, setTab] = useState<Tab>("All");
  const [downloaded, setDownloaded] = useState<Set<string>>(new Set());

  const filtered = downloads.filter((d) => tab === "All" || d.category === tab);

  const handleDownload = (id: string) => {
    setDownloaded((prev) => new Set(prev).add(id));
  };

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
        {/* Tabs */}
        <div className="flex gap-0 border-b border-neutral-200 mb-10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "px-6 py-3 text-sm font-medium tracking-wide uppercase transition-colors border-b-2 -mb-px",
                tab === t ? "border-gold text-black" : "border-transparent text-neutral-500 hover:text-black"
              )}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((d) => (
            <div key={d.id} className="border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group">
              {/* Thumbnail */}
              <div className={`h-44 bg-gradient-to-br ${d.bg} relative flex items-center justify-center`}>
                <FileText size={40} className="opacity-20" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              {/* Info */}
              <div className="p-5">
                <span className="text-[10px] tracking-[2px] uppercase text-gold font-semibold">{d.category}</span>
                <h3 className="text-sm font-semibold mt-1 mb-1 leading-snug">{d.title}</h3>
                <p className="text-xs text-neutral-400 mb-4">{d.year} · {d.size} · {d.downloads.toLocaleString()} downloads</p>
                <Button
                  onClick={() => handleDownload(d.id)}
                  className={cn(
                    "w-full rounded-none text-xs tracking-wider uppercase gap-2 py-5",
                    downloaded.has(d.id)
                      ? "bg-neutral-100 text-neutral-500 hover:bg-neutral-200 border border-neutral-200"
                      : "bg-black hover:bg-neutral-800 text-white"
                  )}
                >
                  <Download size={13} />
                  {downloaded.has(d.id) ? "Downloaded" : "Download"}
                </Button>
              </div>
            </div>
          ))}
        </div>

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
