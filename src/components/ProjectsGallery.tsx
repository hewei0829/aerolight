import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProjects } from "@/lib/reader";

export default async function ProjectsGallery() {
  const allProjects = await getProjects()
  const projects = allProjects.slice(0, 5).map((p, i) => ({ ...p, span: i === 0 }))
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-[4px] uppercase text-gold mb-2">Case Studies</p>
          <h2 className="text-3xl font-light">Featured <strong className="font-bold">Projects</strong></h2>
          <div className="w-10 h-0.5 bg-gold mx-auto mt-3" />
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-0.5">
          {projects.map((p) => (
            <Link
              key={p.name}
              href={`/projects/${p.slug}`}
              className={`relative overflow-hidden group block ${
                p.span ? "md:row-span-2 min-h-[720px]" : "min-h-[356px]"
              }`}
            >
              {p.image ? (
                <img src={p.image} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${p.bg} group-hover:scale-105 transition-transform duration-500`} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/65 to-transparent">
                <p className="text-[11px] tracking-[2px] uppercase text-gold mb-1">{p.location}</p>
                <h3 className="text-white text-base font-semibold">{p.name}</h3>
                <span className="mt-1.5 text-[11px] tracking-wider uppercase text-gold flex items-center gap-1 group-hover:gap-2.5 transition-all">
                  Read More <ArrowRight size={11} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
