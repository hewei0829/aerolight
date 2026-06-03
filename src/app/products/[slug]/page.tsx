import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Download, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products } from "@/lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

function ProductSVG({ shape, size = 120 }: { shape: string; size?: number }) {
  const s = size;
  if (shape === "track")
    return (
      <svg width={s} height={s} viewBox="0 0 120 120" fill="none" className="opacity-40">
        <rect x="46" y="8" width="28" height="72" rx="6" fill="#555" />
        <rect x="38" y="80" width="44" height="12" rx="3" fill="#444" />
        <circle cx="60" cy="22" r="14" fill="#777" />
      </svg>
    );
  if (shape === "circle")
    return (
      <svg width={s} height={s} viewBox="0 0 120 120" fill="none" className="opacity-40">
        <circle cx="60" cy="60" r="44" fill="#666" />
        <circle cx="60" cy="60" r="26" fill="#888" />
        <circle cx="60" cy="60" r="10" fill="#aaa" />
      </svg>
    );
  if (shape === "cone")
    return (
      <svg width={s} height={s} viewBox="0 0 120 120" fill="none" className="opacity-40">
        <rect x="10" y="52" width="100" height="18" rx="7" fill="#666" />
        <rect x="24" y="36" width="72" height="18" rx="5" fill="#888" />
        <rect x="40" y="20" width="40" height="18" rx="4" fill="#aaa" />
      </svg>
    );
  return (
    <svg width={s} height={s} viewBox="0 0 120 120" fill="none" className="opacity-40">
      <rect x="6" y="52" width="108" height="10" rx="5" fill="#666" />
      <rect x="6" y="40" width="108" height="14" rx="4" fill="#888" />
      <rect x="6" y="62" width="108" height="20" rx="4" fill="#aaa" />
    </svg>
  );
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  const specs = [
    { label: "Power", value: product.power },
    { label: "CRI", value: product.cri },
    { label: "CCT", value: product.cct },
    { label: "IP Rating", value: product.ip },
    { label: "Installation", value: product.installation.join(", ") },
    { label: "Type", value: product.type.join(", ") },
    { label: "Series", value: product.series },
    { label: "Category", value: product.category.charAt(0).toUpperCase() + product.category.slice(1) },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-neutral-50 border-b border-neutral-200 px-10 py-3">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2 text-xs text-neutral-500">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-black transition-colors">Products</Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 py-14">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black mb-10 transition-colors">
          <ArrowLeft size={14} /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image panel */}
          <div className={`bg-gradient-to-br ${product.bg} rounded-sm aspect-square flex items-center justify-center relative`}>
            <ProductSVG shape={product.shape} size={200} />
            {product.isNew && (
              <Badge className="absolute top-5 left-5 bg-gold text-white rounded-none text-[11px] tracking-widest uppercase border-0 px-3 py-1">
                New Arrival
              </Badge>
            )}
          </div>

          {/* Info panel */}
          <div>
            <p className="text-[11px] tracking-[3px] uppercase text-gold mb-2">{product.tag}</p>
            <h1 className="text-4xl font-light mb-1">
              {product.name.split(" ").slice(0, -1).join(" ")}{" "}
              <strong className="font-bold">{product.name.split(" ").at(-1)}</strong>
            </h1>
            <p className="text-neutral-500 text-sm mb-6">{product.series} Series</p>

            <Separator className="mb-6" />

            <p className="text-neutral-600 leading-relaxed mb-8">{product.desc}</p>

            {/* Quick specs */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {specs.slice(0, 4).map((s) => (
                <div key={s.label} className="bg-neutral-50 px-4 py-3">
                  <p className="text-[10px] tracking-[2px] uppercase text-neutral-400 mb-0.5">{s.label}</p>
                  <p className="text-sm font-semibold">{s.value}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-[11px] tracking-[2px] uppercase font-bold text-neutral-500 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check size={14} className="text-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact">
                <Button className="bg-black hover:bg-neutral-800 text-white rounded-none px-8 py-6 text-xs tracking-widest uppercase">
                  Request Quote
                </Button>
              </Link>
              <Link href="/download">
                <Button variant="outline" className="rounded-none px-6 py-6 text-xs tracking-widest uppercase border-black gap-2">
                  <Download size={14} /> Datasheet
                </Button>
              </Link>
              <Button variant="ghost" className="rounded-none px-4 py-6 text-xs tracking-widest uppercase gap-2">
                <Share2 size={14} /> Share
              </Button>
            </div>
          </div>
        </div>

        {/* Full specs table */}
        <div className="mt-20">
          <h2 className="text-2xl font-light mb-8">Technical <strong className="font-bold">Specifications</strong></h2>
          <div className="border border-neutral-200 divide-y divide-neutral-200">
            {specs.map((s, i) => (
              <div key={s.label} className={`flex ${i % 2 === 0 ? "bg-neutral-50" : "bg-white"}`}>
                <div className="w-48 px-6 py-4 text-xs font-bold tracking-wider uppercase text-neutral-500 flex-shrink-0">{s.label}</div>
                <div className="px-6 py-4 text-sm">{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-light mb-8">Related <strong className="font-bold">Products</strong></h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/products/${r.slug}`}
                  className="group border border-neutral-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300 block"
                >
                  <div className={`h-44 bg-gradient-to-br ${r.bg} flex items-center justify-center`}>
                    <ProductSVG shape={r.shape} size={80} />
                  </div>
                  <div className="p-4">
                    <p className="text-[10px] tracking-[2px] uppercase text-gold mb-1">{r.tag}</p>
                    <h3 className="text-sm font-semibold">{r.name}</h3>
                    <p className="text-xs text-neutral-500 mt-1">{r.power}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
