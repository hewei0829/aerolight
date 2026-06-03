"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import PageHero from "@/components/PageHero";
import { projects } from "@/lib/data";

const brands = ["All Brands", "Hyatt", "Marriott", "Four Seasons", "Capella", "Other Luxury"];
const productTypes = ["LED Ceiling Light", "LED Track Light", "LED Strip Light", "LED Linear Light", "LED Landscape Light"];
const areas = ["Lobby", "Guest room", "Restaurant", "SPA", "Pool", "Outdoor landscape", "Lounge", "Meeting Room"];

export default function ProjectsPage() {
  const [brand, setBrand] = useState("All Brands");
  const [activeTypes, setActiveTypes] = useState<string[]>([]);
  const [activeAreas, setActiveAreas] = useState<string[]>([]);
  const [visible, setVisible] = useState(6);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (brand !== "All Brands" && p.brand !== brand) return false;
      if (activeTypes.length > 0 && !activeTypes.some((t) => p.types.includes(t))) return false;
      if (activeAreas.length > 0 && !activeAreas.some((a) => p.areas.includes(a))) return false;
      return true;
    });
  }, [brand, activeTypes, activeAreas]);

  const toggle = <T extends string>(list: T[], setList: (v: T[]) => void, val: T) =>
    setList(list.includes(val) ? list.filter((x) => x !== val) : [...list, val]);

  const clearAll = () => {
    setBrand("All Brands");
    setActiveTypes([]);
    setActiveAreas([]);
    setVisible(6);
  };

  const hasFilters = brand !== "All Brands" || activeTypes.length > 0 || activeAreas.length > 0;
  const shown = filtered.slice(0, visible);

  return (
    <>
      <PageHero
        title="Featured Projects"
        subtitle="Over 300 luxury hotel projects worldwide, each uniquely lit by Aero Light solutions."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        bg="from-[#1a2a3a] to-[#0f3460]"
      />

      <div className="max-w-[1400px] mx-auto px-10 py-12">
        {/* ── FILTERS ── */}
        <div className="space-y-5 mb-10">
          {/* Brand row */}
          <div>
            <p className="text-[11px] tracking-[3px] uppercase text-neutral-400 mb-3">Hotel Brand</p>
            <div className="flex flex-wrap gap-2">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => { setBrand(b); setVisible(6); }}
                  className={cn(
                    "px-4 py-1.5 text-xs tracking-wide border transition-colors",
                    brand === b ? "bg-black text-white border-black" : "border-neutral-300 hover:border-black"
                  )}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Product type row */}
          <div>
            <p className="text-[11px] tracking-[3px] uppercase text-neutral-400 mb-3">Product Type</p>
            <div className="flex flex-wrap gap-2">
              {productTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => { toggle(activeTypes, setActiveTypes, t); setVisible(6); }}
                  className={cn(
                    "px-4 py-1.5 text-xs tracking-wide border transition-colors",
                    activeTypes.includes(t) ? "bg-black text-white border-black" : "border-neutral-300 hover:border-black"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Area row */}
          <div>
            <p className="text-[11px] tracking-[3px] uppercase text-neutral-400 mb-3">Area of Application</p>
            <div className="flex flex-wrap gap-2">
              {areas.map((a) => (
                <button
                  key={a}
                  onClick={() => { toggle(activeAreas, setActiveAreas, a); setVisible(6); }}
                  className={cn(
                    "px-4 py-1.5 text-xs tracking-wide border transition-colors",
                    activeAreas.includes(a) ? "bg-black text-white border-black" : "border-neutral-300 hover:border-black"
                  )}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Active chips + clear */}
          {hasFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {brand !== "All Brands" && (
                <span className="flex items-center gap-1 bg-gold/10 border border-gold/30 text-xs px-3 py-1 text-gold">
                  {brand} <button onClick={() => setBrand("All Brands")}><X size={11} /></button>
                </span>
              )}
              {activeTypes.map((t) => (
                <span key={t} className="flex items-center gap-1 bg-gold/10 border border-gold/30 text-xs px-3 py-1 text-gold">
                  {t} <button onClick={() => toggle(activeTypes, setActiveTypes, t)}><X size={11} /></button>
                </span>
              ))}
              {activeAreas.map((a) => (
                <span key={a} className="flex items-center gap-1 bg-gold/10 border border-gold/30 text-xs px-3 py-1 text-gold">
                  {a} <button onClick={() => toggle(activeAreas, setActiveAreas, a)}><X size={11} /></button>
                </span>
              ))}
              <button onClick={clearAll} className="text-xs text-neutral-400 underline underline-offset-2 hover:text-black ml-2">
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* ── GRID ── */}
        <p className="text-sm text-neutral-500 mb-6">{filtered.length} projects found</p>

        {shown.length === 0 ? (
          <div className="py-24 text-center text-neutral-400">
            <p className="text-lg mb-4">No projects match the selected filters.</p>
            <Button variant="outline" onClick={clearAll} className="rounded-none">Clear Filters</Button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5">
              {shown.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="relative h-72 overflow-hidden group block"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.bg} group-hover:scale-105 transition-transform duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-[10px] tracking-[2px] uppercase text-gold mb-1">{p.location}</p>
                    <h3 className="text-white font-semibold text-base mb-1">{p.name}</h3>
                    <span className="text-[11px] uppercase tracking-wider text-gold/80 flex items-center gap-1 group-hover:gap-3 transition-all">
                      Read More <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

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
          </>
        )}
      </div>
    </>
  );
}
