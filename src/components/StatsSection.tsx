
const stats = [
  { number: "5", suffix: "★", label: "Five-Star Service\nStandard" },
  { number: "10", suffix: "+", label: "Years For\nHospitality Lighting Only" },
  { number: "300", suffix: "+", label: "Hotel Projects\nWorldwide" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center py-10 px-6 text-center">
              <div className="text-6xl font-bold leading-none mb-3">
                <span className="text-gold">{s.number}</span>
                <span className="text-2xl">{s.suffix}</span>
              </div>
              <p className="text-xs tracking-[2px] uppercase text-neutral-500 leading-relaxed whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
