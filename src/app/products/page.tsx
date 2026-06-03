"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import PageHero from "@/components/PageHero";
import { products } from "@/lib/data";

type FilterState = {
  category: string;
  type: string;
  installation: string;
  isNew: boolean;
};

const INIT: FilterState = { category: "", type: "", installation: "", isNew: false };

const categories = [
  { value: "", label: "All" },
  { value: "indoor", label: "Indoor" },
  { value: "outdoor", label: "Outdoor" },
  { value: "tracking", label: "Auto Tracking" },
];
const types = ["Fixed/Adjustable", "RGB/Tunable White", "Dot-free", "Auto Tracking"];
const installations = ["Track", "Surface Mounted", "Recessed"];

function ProductSVG({ shape }: { shape: string }) {
  if (shape === "track")
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-30">
        <rect x="24" y="4" width="16" height="40" rx="4" fill="#555" />
        <rect x="20" y="44" width="24" height="7" rx="2" fill="#444" />
        <circle cx="32" cy="11" r="7" fill="#777" />
      </svg>
    );
  if (shape === "circle")
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-30">
        <circle cx="32" cy="32" r="22" fill="#666" />
        <circle cx="32" cy="32" r="13" fill="#888" />
        <circle cx="32" cy="32" r="5" fill="#aaa" />
      </svg>
    );
  if (shape === "cone")
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-30">
        <rect x="8" y="28" width="48" height="9" rx="4" fill="#666" />
        <rect x="16" y="20" width="32" height="9" rx="3" fill="#888" />
        <rect x="24" y="12" width="16" height="9" rx="2" fill="#aaa" />
      </svg>
    );
  if (shape === "strip")
    return (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-30">
        <rect x="4" y="28" width="56" height="5" rx="2.5" fill="#666" />
        <rect x="4" y="22" width="56" height="7" rx="2" fill="#888" />
        <rect x="4" y="33" width="56" height="11" rx="2" fill="#aaa" />
      </svg>
    );
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="opacity-30">
      <rect x="10" y="8" width="44" height="48" rx="4" fill="#666" />
      <rect x="18" y="16" width="28" height="20" rx="2" fill="#888" />
    </svg>
  );
}

export default function ProductsPage() {
  const [filters, setFilters] = useState<FilterState>(INIT);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.category && p.category !== filters.category) return false;
      if (filters.type && !p.type.includes(filters.type)) return false;
      if (filters.installation && !p.installation.includes(filters.installation)) return false;
      if (filters.isNew && !p.isNew) return false;
      return true;
    });
  }, [filters]);

  const activeCount = (filters.isNew ? 1 : 0) + (filters.category ? 1 : 0) + (filters.type ? 1 : 0) + (filters.installation ? 1 : 0);

  const clearFilter = (key: keyof FilterState) =>
    setFilters((f) => ({ ...f, [key]: key === "isNew" ? false : "" }));

  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="LED lighting engineered exclusively for luxury hospitality environments worldwide."
        crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <div className="max-w-[1400px] mx-auto px-10 py-12 flex gap-10">
        {/* ── SIDEBAR ── */}
        <aside className={cn(
          "w-64 flex-shrink-0 space-y-8",
          "lg:block",
          sidebarOpen ? "block fixed inset-y-0 left-0 z-40 bg-white w-72 overflow-y-auto p-8 shadow-2xl" : "hidden lg:block"
        )}>
          {sidebarOpen && (
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden flex justify-end w-full mb-2">
              <X size={20} />
            </button>
          )}

          {/* New / All */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-neutral-500 mb-3">Product Range</h3>
            {[{ v: false, label: "All Products" }, { v: true, label: "New Arrivals" }].map(({ v, label }) => (
              <button
                key={label}
                onClick={() => setFilters((f) => ({ ...f, isNew: v }))}
                className={cn(
                  "block w-full text-left text-sm py-1.5 px-2 rounded transition-colors",
                  filters.isNew === v ? "bg-black text-white font-semibold" : "hover:bg-neutral-100"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <Separator />

          {/* Category */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-neutral-500 mb-3">Application Area</h3>
            {categories.map(({ value, label }) => (
              <button
                key={label}
                onClick={() => setFilters((f) => ({ ...f, category: value }))}
                className={cn(
                  "block w-full text-left text-sm py-1.5 px-2 rounded transition-colors",
                  filters.category === value ? "bg-black text-white font-semibold" : "hover:bg-neutral-100"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <Separator />

          {/* Type */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-neutral-500 mb-3">Type</h3>
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setFilters((f) => ({ ...f, type: f.type === t ? "" : t }))}
                className={cn(
                  "block w-full text-left text-sm py-1.5 px-2 rounded transition-colors",
                  filters.type === t ? "bg-black text-white font-semibold" : "hover:bg-neutral-100"
                )}
              >
                {t}
              </button>
            ))}
          </div>

          <Separator />

          {/* Installation */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[2px] uppercase text-neutral-500 mb-3">Installation</h3>
            {installations.map((inst) => (
              <button
                key={inst}
                onClick={() => setFilters((f) => ({ ...f, installation: f.installation === inst ? "" : inst }))}
                className={cn(
                  "block w-full text-left text-sm py-1.5 px-2 rounded transition-colors",
                  filters.installation === inst ? "bg-black text-white font-semibold" : "hover:bg-neutral-100"
                )}
              >
                {inst}
              </button>
            ))}
          </div>

          {activeCount > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="w-full rounded-none text-xs tracking-wider uppercase border-neutral-300"
              onClick={() => setFilters(INIT)}
            >
              Clear All Filters
            </Button>
          )}
        </aside>

        {/* ── MAIN ── */}
        <main className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
            <div className="flex items-center gap-3 flex-wrap">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 text-sm border border-neutral-300 px-3 py-2"
              >
                <SlidersHorizontal size={14} /> Filters {activeCount > 0 && `(${activeCount})`}
              </button>

              {/* Active filter chips */}
              {filters.isNew && (
                <span className="flex items-center gap-1 bg-black text-white text-xs px-3 py-1">
                  New Arrivals
                  <button onClick={() => clearFilter("isNew")}><X size={11} /></button>
                </span>
              )}
              {filters.category && (
                <span className="flex items-center gap-1 bg-black text-white text-xs px-3 py-1 capitalize">
                  {filters.category}
                  <button onClick={() => clearFilter("category")}><X size={11} /></button>
                </span>
              )}
              {filters.type && (
                <span className="flex items-center gap-1 bg-black text-white text-xs px-3 py-1">
                  {filters.type}
                  <button onClick={() => clearFilter("type")}><X size={11} /></button>
                </span>
              )}
              {filters.installation && (
                <span className="flex items-center gap-1 bg-black text-white text-xs px-3 py-1">
                  {filters.installation}
                  <button onClick={() => clearFilter("installation")}><X size={11} /></button>
                </span>
              )}
            </div>
            <span className="text-sm text-neutral-500">{filtered.length} products</span>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="py-24 text-center text-neutral-400">
              <p className="text-lg mb-2">No products match your filters.</p>
              <Button variant="outline" onClick={() => setFilters(INIT)} className="rounded-none mt-2">Clear Filters</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group border border-neutral-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
                >
                  {/* Image */}
                  <div className={`h-52 bg-gradient-to-br ${p.bg} flex items-center justify-center relative`}>
                    <ProductSVG shape={p.shape} />
                    {p.isNew && (
                      <Badge className="absolute top-3 left-3 bg-gold text-white rounded-none text-[10px] tracking-widest uppercase border-0">
                        New
                      </Badge>
                    )}
                  </div>
                  {/* Info */}
                  <div className="p-5">
                    <p className="text-[10px] tracking-[2px] uppercase text-gold mb-1">{p.tag}</p>
                    <h3 className="text-[15px] font-semibold mb-1">{p.name}</h3>
                    <p className="text-xs text-neutral-500 mb-4">{p.power} · {p.cri} · {p.ip}</p>
                    <span className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 group-hover:gap-3 transition-all">
                      View Details <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </>
  );
}
