"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabs = ["All", "Catalogue", "Portfolio"] as const;
type Tab = typeof tabs[number];

type DownloadItem = {
  slug: string;
  title: string;
  category: string;
  year: string | null;
  size: string | null;
  downloads: number | null;
  bg: string | null;
  file: string | null;
};

export default function DownloadList({ items }: { items: DownloadItem[] }) {
  const [tab, setTab] = useState<Tab>("All");

  const filtered = items.filter((d) => tab === "All" || d.category === tab);

  return (
    <>
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
          <div key={d.slug} className="border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow group">
            {/* Thumbnail */}
            <div className={`h-44 bg-gradient-to-br ${d.bg ?? "from-slate-200 to-slate-300"} relative flex items-center justify-center`}>
              <FileText size={40} className="opacity-20" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
            {/* Info */}
            <div className="p-5">
              <span className="text-[10px] tracking-[2px] uppercase text-gold font-semibold">{d.category}</span>
              <h3 className="text-sm font-semibold mt-1 mb-1 leading-snug">{d.title}</h3>
              <p className="text-xs text-neutral-400 mb-4">
                {[d.year, d.size, d.downloads != null ? `${d.downloads.toLocaleString()} downloads` : null]
                  .filter(Boolean).join(" · ")}
              </p>
              {d.file ? (
                <a href={d.file} download>
                  <Button className="w-full rounded-none text-xs tracking-wider uppercase gap-2 py-5 bg-black hover:bg-neutral-800 text-white">
                    <Download size={13} />
                    Download
                  </Button>
                </a>
              ) : (
                <Button disabled className="w-full rounded-none text-xs tracking-wider uppercase gap-2 py-5 bg-neutral-100 text-neutral-400 border border-neutral-200">
                  <Download size={13} />
                  Coming Soon
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
