import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles } from "@/lib/data";
import NewsletterForm from "@/components/NewsletterForm";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const fallback = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className={`bg-gradient-to-br ${article.bg} h-80 flex items-end`}>
        <div className="max-w-[1400px] mx-auto px-10 pb-10 w-full">
          <nav className="flex items-center gap-2 text-xs text-black/50 mb-4">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/media" className="hover:text-black transition-colors">Media</Link>
            <span>/</span>
            <span className="text-black/70">{article.category}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 py-12">
        <Link href="/media" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black mb-10 transition-colors">
          <ArrowLeft size={14} /> Back to Media
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Article */}
          <article className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] tracking-[3px] uppercase font-bold text-gold">{article.category}</span>
              <span className="text-neutral-300">|</span>
              <span className="flex items-center gap-1 text-xs text-neutral-400">
                <Clock size={11} />{article.date}
              </span>
            </div>
            <h1 className="text-3xl font-light leading-tight mb-6">
              {article.title.split(" ").slice(0, -2).join(" ")}{" "}
              <strong className="font-bold">{article.title.split(" ").slice(-2).join(" ")}</strong>
            </h1>
            <div className="prose prose-neutral max-w-none">
              <p className="text-base text-neutral-600 leading-relaxed mb-5">{article.excerpt}</p>
              <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                Aero Light continues to set the standard for premium hospitality lighting across the Asia-Pacific region and beyond. Our dedicated team of lighting specialists works closely with interior designers, hotel operators, and lighting consultants to deliver solutions that exceed expectations at every touchpoint.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                With over a decade of exclusive focus on the hospitality sector, our product development process is deeply informed by real-world feedback from properties operating at the highest tier of service. Every new product launch reflects lessons learned from hundreds of live installations in some of the world&apos;s most demanding environments.
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                For more information about how Aero Light can support your next project, please contact our team or download our latest product catalogue from the Downloads section.
              </p>
            </div>

            <div className="flex gap-3 mt-10">
              <Link href="/contact">
                <Button className="bg-black hover:bg-neutral-800 text-white rounded-none px-8 py-5 text-xs tracking-widest uppercase">
                  Enquire Now
                </Button>
              </Link>
              <Link href="/download">
                <Button variant="outline" className="rounded-none border-black px-6 py-5 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-colors">
                  Download Catalogue
                </Button>
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-[11px] tracking-[2px] uppercase font-bold text-neutral-500 mb-4">More Articles</h3>
              <div className="space-y-5">
                {(related.length > 0 ? related : fallback).map((a) => (
                  <Link key={a.slug} href={`/media/${a.slug}`} className="flex gap-4 group">
                    <div className={`w-20 h-16 flex-shrink-0 bg-gradient-to-br ${a.bg} rounded-sm`} />
                    <div>
                      <p className="text-[10px] tracking-[2px] uppercase text-gold mb-1">{a.category}</p>
                      <p className="text-xs font-semibold leading-snug group-hover:text-gold transition-colors line-clamp-2">{a.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-neutral-950 text-white p-6">
              <p className="text-[11px] tracking-[2px] uppercase text-gold mb-3">Stay Updated</p>
              <p className="text-sm text-white/60 mb-4 leading-relaxed">Subscribe for product launches and news from Aero Light.</p>
              <NewsletterForm variant="sidebar" />
            </div>

            <div>
              <h3 className="text-[11px] tracking-[2px] uppercase font-bold text-neutral-500 mb-4">Quick Links</h3>
              {[
                { label: "Browse Products", href: "/products" },
                { label: "View Projects", href: "/projects" },
                { label: "Download Catalogues", href: "/download" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }) => (
                <Link key={href} href={href} className="flex items-center justify-between py-2.5 border-b border-neutral-100 text-sm hover:text-gold transition-colors group">
                  {label}
                  <ArrowRight size={13} className="text-neutral-400 group-hover:text-gold transition-colors" />
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
