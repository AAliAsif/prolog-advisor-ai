import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Cpu, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/advisor", label: "Advisor" },
  { to: "/browse", label: "Browse" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold">
          <Cpu className="h-5 w-5 text-primary" />
          <span className="text-gradient">Smart Tech Buy</span>
        </Link>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-lg px-3 py-2 text-sm font-medium text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/advisor"
            className="bg-gradient-hero ml-2 rounded-lg px-4 py-2 text-sm font-semibold text-primary-foreground glow"
          >
            Start
          </Link>
        </div>

        <button
          className="sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 px-6 py-3 sm:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "rounded-lg px-3 py-2 text-sm font-medium text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
