import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProducts } from "@/lib/reader";

function ProductSVG({ shape }: { shape: string }) {
  if (shape === "track")
    return (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="opacity-40">
        <rect x="28" y="6" width="16" height="42" rx="4" fill="#666" />
        <rect x="22" y="48" width="28" height="7" rx="2" fill="#555" />
        <circle cx="36" cy="13" r="7" fill="#888" />
      </svg>
    );
  if (shape === "circle")
    return (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="opacity-40">
        <circle cx="36" cy="36" r="24" fill="#777" />
        <circle cx="36" cy="36" r="14" fill="#999" />
        <circle cx="36" cy="36" r="6" fill="#bbb" />
      </svg>
    );
  if (shape === "cone")
    return (
      <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="opacity-40">
        <rect x="10" y="30" width="52" height="9" rx="4" fill="#777" />
        <rect x="18" y="22" width="36" height="9" rx="3" fill="#999" />
        <rect x="26" y="14" width="20" height="9" rx="2" fill="#bbb" />
      </svg>
    );
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="opacity-40">
      <rect x="4" y="32" width="64" height="5" rx="2.5" fill="#777" />
      <rect x="4" y="26" width="64" height="7" rx="2" fill="#999" />
      <rect x="4" y="37" width="64" height="11" rx="2" fill="#bbb" />
    </svg>
  );
}

export default async function ProductsSection() {
  const allProducts = await getProducts()
  const products = allProducts.slice(0, 4)
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-2">Featured Collection</p>
          <h2 className="text-3xl font-light">Our <strong className="font-bold">Products</strong></h2>
          <div className="w-10 h-0.5 bg-gold mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <Link key={p.name} href={`/products/${p.slug}`} className="block group">
              <Card className="border border-neutral-200 rounded-none shadow-none group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Image area */}
                <div className={`h-52 bg-gradient-to-br ${p.bg} flex items-center justify-center overflow-hidden`}>
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                  ) : (
                    <ProductSVG shape={p.shape} />
                  )}
                </div>

                <CardContent className="p-5">
                  <Badge variant="outline" className="text-gold border-gold/40 text-[10px] tracking-widest uppercase rounded-none mb-2">
                    {p.tag}
                  </Badge>
                  <h3 className="text-[15px] font-semibold mb-1">{p.name}</h3>
                  <p className="text-xs text-neutral-500 mb-4">{p.power} · {p.cri}</p>
                  <span className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={13} />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
