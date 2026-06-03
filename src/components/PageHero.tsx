import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type Props = {
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
  bg?: string;
};

export default function PageHero({ title, subtitle, crumbs, bg = "from-[#1a1a2e] to-[#0f3460]" }: Props) {
  return (
    <div className={`bg-gradient-to-br ${bg} text-white py-20 px-10`}>
      <div className="max-w-[1400px] mx-auto">
        {crumbs && (
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-5">
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={11} />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-white transition-colors">{c.label}</Link>
                ) : (
                  <span className="text-white/80">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="text-4xl font-light">
          {title.split(" ").map((word, i, arr) =>
            i === arr.length - 1
              ? <strong key={i} className="font-bold"> {word}</strong>
              : <span key={i}>{i > 0 ? " " : ""}{word}</span>
          )}
        </h1>
        {subtitle && <p className="text-white/60 mt-3 max-w-xl text-sm leading-relaxed">{subtitle}</p>}
      </div>
    </div>
  );
}
