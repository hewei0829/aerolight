"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <div className="bg-neutral-950 py-16 px-10 text-center text-white">
      <h3 className="text-2xl font-light mb-2">
        Stay <strong className="font-bold">Informed</strong>
      </h3>
      <p className="text-sm text-white/50 mb-8">
        Subscribe to receive new product announcements, project case studies, and industry insights.
      </p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="flex-1 bg-neutral-900 border border-neutral-700 text-white text-sm px-5 py-3.5 outline-none placeholder:text-neutral-600 focus:border-gold transition-colors"
        />
        <Button
          type="submit"
          className="bg-gold hover:bg-gold/85 text-white rounded-none px-7 text-[11px] font-bold tracking-[2px] uppercase h-auto"
        >
          Subscribe
        </Button>
      </form>
    </div>
  );
}
