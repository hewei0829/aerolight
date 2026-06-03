import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <div className={`relative bg-gradient-to-br ${project.bgLarge} text-white h-[480px] flex items-end overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-[1400px] mx-auto px-10 pb-14 w-full">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
            <span>/</span>
            <span className="text-white/80">{project.name}</span>
          </nav>
          <p className="text-[11px] tracking-[3px] uppercase text-gold mb-3">{project.location}</p>
          <h1 className="text-5xl font-light mb-4">
            {project.name.split(" ").slice(0, -1).join(" ")}{" "}
            <strong className="font-bold">{project.name.split(" ").at(-1)}</strong>
          </h1>
          <div className="flex items-center gap-5 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><MapPin size={13} />{project.location}</span>
            <span className="flex items-center gap-1.5"><Calendar size={13} />{project.year}</span>
            <span className="capitalize">{project.country}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 py-14">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black mb-12 transition-colors">
          <ArrowLeft size={14} /> Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-light mb-4">Project <strong className="font-bold">Overview</strong></h2>
              <p className="text-neutral-600 leading-relaxed text-base">{project.desc}</p>
            </div>

            {/* Photo grid placeholders */}
            <div>
              <h2 className="text-2xl font-light mb-5">Photo <strong className="font-bold">Gallery</strong></h2>
              <div className="grid grid-cols-2 gap-2">
                <div className={`bg-gradient-to-br ${project.bg} h-64 rounded-sm`} />
                <div className={`bg-gradient-to-tl ${project.bg} h-64 rounded-sm opacity-80`} />
                <div className={`bg-gradient-to-br ${project.bgLarge} h-48 rounded-sm opacity-70`} />
                <div className={`bg-gradient-to-tl ${project.bgLarge} h-48 rounded-sm opacity-90`} />
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-light mb-5">Project <strong className="font-bold">Highlights</strong></h2>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-neutral-700">
                    <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Project info */}
            <div className="bg-neutral-50 p-6 space-y-4">
              <h3 className="text-[11px] tracking-[2px] uppercase font-bold text-neutral-500">Project Info</h3>
              {[
                { label: "Location", value: project.location },
                { label: "Year", value: project.year.toString() },
                { label: "Hotel Brand", value: project.brand },
                { label: "Region", value: project.country },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] tracking-[2px] uppercase text-neutral-400 mb-0.5">{item.label}</p>
                  <p className="text-sm font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Products used */}
            <div>
              <h3 className="text-[11px] tracking-[2px] uppercase font-bold text-neutral-500 mb-3">Products Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.types.map((t) => (
                  <Badge key={t} variant="outline" className="rounded-none border-neutral-300 text-xs">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Areas */}
            <div>
              <h3 className="text-[11px] tracking-[2px] uppercase font-bold text-neutral-500 mb-3">Application Areas</h3>
              <div className="flex flex-wrap gap-2">
                {project.areas.map((a) => (
                  <span key={a} className="text-xs bg-neutral-100 px-3 py-1">{a}</span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-black text-white p-6">
              <p className="text-sm leading-relaxed text-white/70 mb-4">
                Interested in a similar lighting solution for your project?
              </p>
              <Link href="/contact">
                <Button className="w-full bg-gold hover:bg-gold/85 text-white rounded-none text-xs tracking-widest uppercase py-5">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </aside>
        </div>

        {/* Related projects */}
        <div className="mt-20">
          <h2 className="text-2xl font-light mb-8">More <strong className="font-bold">Projects</strong></h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0.5">
            {related.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="relative h-56 overflow-hidden group block">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.bg} group-hover:scale-105 transition-transform duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[10px] tracking-[2px] uppercase text-gold mb-1">{p.location}</p>
                  <h3 className="text-white font-semibold text-sm">{p.name}</h3>
                  <span className="text-[11px] text-gold/80 flex items-center gap-1 mt-1 group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight size={10} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
