"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Variant = "sidebar" | "full";

export default function NewsletterForm({ variant = "full" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setDone(true);
  };

  if (done) {
    return (
      <p className={cn("text-xs", variant === "sidebar" ? "text-white/60" : "text-white/60")}>
        ✓ Subscribed! Thank you.
      </p>
    );
  }

  if (variant === "sidebar") {
    return (
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full bg-neutral-900 border border-neutral-700 text-white text-xs px-4 py-2.5 outline-none placeholder:text-neutral-600 focus:border-gold transition-colors"
        />
        <Button type="submit" className="w-full bg-gold hover:bg-gold/85 text-white rounded-none text-[11px] font-bold tracking-[2px] uppercase py-4">
          Subscribe
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="flex-1 bg-neutral-900 border border-neutral-700 text-white text-sm px-5 py-3.5 outline-none placeholder:text-neutral-600 focus:border-gold transition-colors"
      />
      <Button type="submit" className="bg-gold hover:bg-gold/85 text-white rounded-none px-7 text-[11px] font-bold tracking-[2px] uppercase h-auto">
        Subscribe
      </Button>
    </form>
  );
}
