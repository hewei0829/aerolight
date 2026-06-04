"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, Heart, ArrowLeftRight, Mail, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "About Aero", href: "/about" },
  { label: "Media", href: "/media" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
  { label: "Download", href: "/download" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      {/* Main nav row */}
      <div className="max-w-[1400px] mx-auto h-[72px] flex items-center justify-between px-10">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-[4px] uppercase">
          AERO <span className="text-gold">LIGHT</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-[13px] font-medium tracking-wide uppercase relative pb-1 transition-colors",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300",
                  isActive ? "after:w-full text-black" : "after:w-0 hover:after:w-full text-neutral-700"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Utils */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/products" className="text-neutral-700 hover:text-black transition-colors">
            <Search size={18} />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 pt-10 bg-white text-black">
            <nav className="flex flex-col gap-5 px-6">
              {navItems.map(({ label, href }) => (
                <Link key={href} href={href} className="text-sm font-medium tracking-widest uppercase border-b border-neutral-100 pb-3">
                  {label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Icon toolbar */}
      <div className="bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-[1400px] mx-auto h-10 hidden lg:flex items-center justify-end px-10 gap-7">
          {[
            { icon: <UserCircle size={14} />, label: "MyAero", href: "/contact" },
            { icon: <ArrowLeftRight size={14} />, label: "Compare", href: "/products" },
            { icon: <Heart size={14} />, label: "Favourites", href: "/products" },
            { icon: <Mail size={14} />, label: "Contact", href: "/contact" },
          ].map(({ icon, label, href }) => (
            <Link key={label} href={href} className="flex items-center gap-1.5 text-[11px] text-neutral-500 hover:text-black transition-colors">
              {icon}
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
