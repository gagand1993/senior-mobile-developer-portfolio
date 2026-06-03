"use client";

import { Download, Menu } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/portfolio-data";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl light:border-slate-200 light:bg-cloud/88">
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-teal-450 text-sm font-black text-ink">
            GS
          </span>
          <span className="hidden text-sm font-bold tracking-wide sm:block">Gagandeep Singh</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.07] hover:text-white light:text-slate-600 light:hover:bg-slate-100 light:hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/Gagan.pdf"
            download
            className="btn-primary focus-ring hidden rounded-full px-4 py-2 md:inline-flex"
          >
            <Download size={16} />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.07] lg:hidden light:border-slate-200 light:bg-white"
          >
            <Menu size={18} />
          </button>
        </div>
      </nav>
      {isOpen ? (
        <div className="section-shell pb-4 lg:hidden">
          <div className="glass grid gap-1 rounded-lg p-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="focus-ring rounded-md px-4 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/[0.07] hover:text-white light:text-slate-700 light:hover:bg-slate-100 light:hover:text-slate-950"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/Gagan.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="btn-primary focus-ring mt-1"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
