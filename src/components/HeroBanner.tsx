"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const slides = [
  {
    eyebrow: "New Release 2024",
    title: "The newly upgraded",
    highlight: "ALA Track Light",
    desc: "Compact and simple — family-style design, diverse accessories, suitable for more scene spaces.",
    bg: "from-[#1a1a2e] via-[#16213e] to-[#0f3460]",
  },
  {
    eyebrow: "Auto Tracking Technology",
    title: "Precision meets",
    highlight: "ATL Ultra Recessed",
    desc: "Intelligent auto-tracking light that follows art pieces and objects with silent precision.",
    bg: "from-[#1a2a1a] via-[#1e3a1e] to-[#0f3020]",
  },
  {
    eyebrow: "Hospitality Collection",
    title: "Illuminate luxury with",
    highlight: "AMOO Downlight",
    desc: "Crafted for the world's finest hotel spaces — warmth, elegance, and energy efficiency in one.",
    bg: "from-[#2a1a0a] via-[#3a240a] to-[#4a3010]",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[640px] overflow-hidden">
      <div className={cn("absolute inset-0 bg-gradient-to-br transition-all duration-700", slide.bg)} />

      <div className="relative h-full max-w-[1400px] mx-auto px-20 flex items-center">
        <div className="text-white max-w-[560px]">
          <p className="text-xs tracking-[4px] uppercase text-gold mb-4">{slide.eyebrow}</p>
          <h1 className="text-5xl font-light leading-tight mb-5">
            {slide.title}
            <br />
            <strong className="font-bold">{slide.highlight}</strong>
          </h1>
          <p className="text-base text-white/70 mb-9">{slide.desc}</p>
          <Link href="/products">
            <Button className="bg-gold hover:bg-gold/85 text-white rounded-none px-9 py-6 text-xs font-semibold tracking-[2px] uppercase">
              Explore Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              i === current ? "bg-white scale-125" : "bg-white/40"
            )}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute bottom-5 right-16 flex gap-1">
        <button
          onClick={prev}
          className="w-10 h-10 border border-white/40 text-white flex items-center justify-center hover:bg-white/15 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 border border-white/40 text-white flex items-center justify-center hover:bg-white/15 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
