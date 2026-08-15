import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { roles, categoryLabels, type Category } from "@/lib/site-data";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Ananya Taggarse | Energy, Consulting & Ventures" },
      {
        name: "description",
        content:
          "Explore Ananya Taggarse's work across energy-access research, sustainability consulting, founded ventures, and student leadership.",
      },
      { property: "og:title", content: "Work — Ananya Taggarse" },
      {
        property: "og:description",
        content:
          "Energy-access research, sustainability consulting, founded ventures, and leadership roles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const filters = ["all", "research", "consulting", "venture", "leadership"] as const;

function WorkPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("all");
  const [activeSlug, setActiveSlug] = useState(roles[0].slug);

  const visible = roles.filter((r) => filter === "all" || r.category === filter);
  const active = roles.find((r) => r.slug === activeSlug) ?? visible[0];

  const count = (f: (typeof filters)[number]) =>
    f === "all" ? roles.length : roles.filter((r) => r.category === f).length;

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-7xl px-6 py-14">
        <h1 className="display-xl text-[clamp(3.5rem,12vw,9rem)]">Work</h1>

        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                const first = roles.find((r) => f === "all" || r.category === f);
                if (first) setActiveSlug(first.slug);
              }}
              className={`label-mono rounded-sm border px-4 py-2 transition-colors ${
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {f === "all" ? "All" : categoryLabels[f as Category]} {count(f)}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <ul className="border-t border-border">
            {visible.map((role) => {
              const isActive = role.slug === active?.slug;
              return (
                <li key={role.slug} className="border-b border-border">
                  <button
                    onMouseEnter={() => setActiveSlug(role.slug)}
                    onFocus={() => setActiveSlug(role.slug)}
                    onClick={() => setActiveSlug(role.slug)}
                    className="group flex w-full items-baseline justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={`text-xl font-semibold tracking-tight transition-all sm:text-2xl ${
                        isActive
                          ? "translate-x-1 text-foreground"
                          : "text-muted-foreground group-hover:translate-x-1 group-hover:text-foreground"
                      }`}
                    >
                      {role.title}
                    </span>
                    <span
                      className={`label-mono shrink-0 text-right ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {role.org}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {active && (
            <aside key={active.slug} className="rise lg:sticky lg:top-28 lg:self-start">
              <p className="label-mono text-muted-foreground">
                {categoryLabels[active.category]} · {active.period}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary">{active.org}</h2>
              <h3 className="display-xl mt-3 text-[clamp(2rem,5vw,3.5rem)]">{active.title}</h3>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {active.summary}
              </p>
              <ul className="mt-6 space-y-3">
                {active.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <span className="text-primary">—</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {active.metrics.map((m) => (
                  <div key={m.label} className="rounded-sm border border-border bg-card px-4 py-3">
                    <p className="font-display text-2xl text-primary">{m.value}</p>
                    <p className="label-mono mt-1 text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
              <p className="label-mono mt-8 text-muted-foreground">{active.location}</p>
            </aside>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}