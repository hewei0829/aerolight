import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NewArrivals() {
  return (
    <section className="py-20 bg-neutral-950 text-white">
      <div className="max-w-[1400px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-4">Innovation Series</p>
          <h2 className="text-3xl font-light mb-3">
            New <strong className="font-bold">Arrivals</strong>
          </h2>
          <div className="w-10 h-0.5 bg-gold mb-6" />
          <p className="text-white/60 leading-relaxed mb-8 max-w-md">
            Experience our latest generation of hospitality lighting — engineered for precision,
            designed for ambience. Every detail refined for the world&apos;s finest spaces.
          </p>
          <Link href="/products">
            <Button className="bg-gold hover:bg-gold/85 text-white rounded-none px-9 py-6 text-xs font-semibold tracking-[2px] uppercase">
              Browse Collection
            </Button>
          </Link>
        </div>

        {/* Visual */}
        <div className="relative h-[400px] bg-neutral-900 flex items-center justify-center overflow-hidden">
          {/* Glow */}
          <div className="absolute w-52 h-52 rounded-full bg-gold/20 blur-3xl" />
          {/* Silhouette */}
          <div className="relative z-10 w-44 h-72 bg-gradient-to-b from-neutral-500 to-neutral-700 rounded-t-full rounded-b-sm shadow-2xl" />
          {/* Light beam */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-40 bg-gradient-to-b from-gold/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
