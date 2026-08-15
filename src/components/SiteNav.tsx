import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/site-data";

const links = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="label-mono text-foreground hover:text-primary transition-colors">
          Ananya Taggarse
        </Link>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="label-mono rounded-sm px-3 py-2 text-muted-foreground transition-colors hover:text-foreground [&.active]:bg-primary [&.active]:text-primary-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="label-mono ml-2 hidden px-3 py-2 text-muted-foreground transition-colors hover:text-primary sm:block"
          >
            LinkedIn ↗
          </a>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="label-mono text-muted-foreground">
          Ananya Taggarse · Cornell Dyson '29 · Ithaca, NY
        </p>
        <div className="flex gap-5">
          <a
            href={`mailto:${contact.email}`}
            className="label-mono text-muted-foreground transition-colors hover:text-primary"
          >
            Email
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="label-mono text-muted-foreground transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}