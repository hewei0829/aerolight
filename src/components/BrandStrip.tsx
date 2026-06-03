const brands = [
  "Marriott", "Hilton", "Hyatt", "IHG", "Accor", "Four Seasons", "Mandarin Oriental",
];

export default function BrandStrip() {
  return (
    <div className="bg-neutral-50 border-y border-neutral-200 py-10 overflow-hidden">
      <div className="flex items-center justify-center gap-16 flex-wrap px-10">
        {brands.map((brand) => (
          <span key={brand} className="text-xs font-semibold tracking-[3px] uppercase text-neutral-300 whitespace-nowrap">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
