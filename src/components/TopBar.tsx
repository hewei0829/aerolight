import Link from "next/link";
import { Search, Globe } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-neutral-950 text-neutral-400 text-xs h-9 flex items-center justify-end px-10 gap-6">
      <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
        Code Finder
      </Link>
      <Link href="/products" className="hover:text-white transition-colors flex items-center gap-1.5">
        <Search size={12} />
        Search
      </Link>

      <button className="border border-neutral-600 px-3 py-0.5 rounded-sm hover:border-neutral-400 hover:text-white transition-colors flex items-center gap-1.5">
        <Globe size={12} />
        EN / 中文
      </button>
    </div>
  );
}
