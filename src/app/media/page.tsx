"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { articles } from "@/lib/data";

const tabs = ["All", "News", "Blog", "Media"] as const;
type Tab = typeof tabs[number];

export default function MediaPage() {
  const [tab, setTab] = useState<Tab>("All");
  const [visible, setVisible] = useState(6);

  const filtered = articles.filter((a) => tab === "All" || a.category === tab);
  const shown = filtered.slice(0, visible);

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white py-24 px-10">
        <div className="max-w-[1400px] mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/80">Media</span>
          </nav>
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4">Latest Updates</p>
          <h1 className="text-5xl font-light">News &amp; <strong className="font-bold">Media</strong></h1>
          <p className="text-white/60 mt-4 max-w-xl text-sm leading-relaxed">
            Industry news, project highlights, technical insights, and company updates from Aero Light.
          </p>
        </div>
      </div>

      {/* Newsletter bar */}
      <div className="bg-gold text-white py-4 px-10">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-6 flex-wrap">
          <p className="text-sm font-medium">Subscribe to our newsletter for the latest news and product launches.</p>
          <Link href="#newsletter">
            <Button className="bg-white text-gold hover:bg-white/90 rounded-none text-xs tracking-widest uppercase px-6 py-2 h-auto">
              Subscribe Now
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 py-12">
        {/* Tabs */}
        <div className="flex gap-0 border-b border-neutral-200 mb-10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setVisible(6); }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((a, i) => (
            <Link
              key={a.slug}
              href={`/media/${a.slug}`}
              className={cn(
                "group block hover:shadow-lg transition-shadow duration-300",
                i === 0 && tab === "All" ? "md:col-span-2 lg:col-span-1" : ""
              )}
            >
              {/* Image */}
              <div className={`bg-gradient-to-br ${a.bg} ${i === 0 && tab === "All" ? "h-72" : "h-52"}`} />
              {/* Body */}
              <div className="bg-white border border-neutral-200 border-t-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] tracking-[2px] uppercase text-gold font-semibold">{a.category}</span>
                  <span className="text-neutral-300">|</span>
                  <span className="flex items-center gap-1 text-[11px] text-neutral-400">
                    <Clock size={11} />{a.date}
                  </span>
                </div>
                <h3 className="font-semibold text-[15px] leading-snug mb-3">{a.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed mb-4 line-clamp-3">{a.excerpt}</p>
                <span className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Load more */}
        {visible < filtered.length && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="rounded-none border-black px-10 py-6 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-colors"
              onClick={() => setVisible((v) => v + 6)}
            >
              Load More ({filtered.length - visible} remaining)
            </Button>
          </div>
        )}
      </div>

      {/* Newsletter */}
      <div id="newsletter" className="bg-neutral-950 py-16 px-10 text-center text-white">
        <h3 className="text-2xl font-light mb-2">Stay <strong className="font-bold">Informed</strong></h3>
        <p className="text-sm text-white/50 mb-8">Subscribe for new product launches, project case studies, and industry insights.</p>
        <form onSubmit={(e) => e.preventDefault()} className="flex max-w-md mx-auto">
          <input type="email" placeholder="Enter your email address" className="flex-1 bg-neutral-900 border border-neutral-700 text-white text-sm px-5 py-3.5 outline-none placeholder:text-neutral-600 focus:border-gold transition-colors" />
          <Button type="submit" className="bg-gold hover:bg-gold/85 text-white rounded-none px-7 text-[11px] font-bold tracking-[2px] uppercase h-auto">
            Subscribe
          </Button>
        </form>
      </div>
    </>
  );
}
