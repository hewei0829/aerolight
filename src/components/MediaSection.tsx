import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { getArticles } from "@/lib/reader";
export default async function MediaSection() {
  const allArticles = await getArticles()
  const articles = allArticles.slice(0, 3).map((a, i) => ({ ...a, large: i === 0 }))
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-2">Latest Updates</p>
          <h2 className="text-3xl font-light">News &amp; <strong className="font-bold">Media</strong></h2>
          <div className="w-10 h-0.5 bg-gold mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <Link key={a.slug} href={`/media/${a.slug}`} className="block group">
              <Card className="rounded-none border-0 shadow-none group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className={`bg-gradient-to-br ${a.bg} ${a.large ? "h-72" : "h-52"} overflow-hidden`}>
                  {a.image && <img src={a.image} alt={a.title} className="w-full h-full object-cover" />}
                </div>
                <CardContent className="p-6">
                  <p className="text-[11px] tracking-[2px] uppercase text-gold mb-2">{a.date}</p>
                  <h3 className="text-[15px] font-semibold leading-snug mb-2">{a.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-4">{a.excerpt}</p>
                  <span className="text-[11px] font-bold tracking-wider uppercase flex items-center gap-1.5 group-hover:gap-3 transition-all">
                    Read More <ArrowRight size={12} />
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
