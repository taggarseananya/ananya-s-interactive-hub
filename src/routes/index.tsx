import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { Marquee } from "@/components/Marquee";
import headshot from "@/assets/ananya-headshot.jpg.asset.json";
import resume from "@/assets/resume.pdf.asset.json";
import { roles, categoryLabels, toolkit, awards } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ananya Taggarse — Finance, Energy Access & Ventures" },
      {
        name: "description",
        content:
          "Cornell Dyson '29 studying finance and international business. Energy-access research, sustainability consulting, and founded ventures.",
      },
      { property: "og:title", content: "Ananya Taggarse — Finance, Energy Access & Ventures" },
      {
        property: "og:description",
        content:
          "Cornell Dyson '29. Energy-access research, sustainability consulting, and founded ventures.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "8.1M+", label: "Organic views driven" },
  { value: "90+", label: "World Bank docs analyzed" },
  { value: "1,000+", label: "Students reached" },
  { value: "$14K", label: "Scholarships earned" },
];

function Index() {
  const [hovered, setHovered] = useState<string | null>(null);
  const featured = roles.slice(0, 5);

  return (
    <div className="min-h-screen">
      <SiteNav />

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div className="rise">
            <p className="label-mono text-primary">Cornell University · Dyson '29</p>
            <h1 className="display-xl mt-6 text-[clamp(3.2rem,11vw,10rem)]">
              Ananya
              <br />
              Taggarse
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Finance and international business student working at the intersection of energy
              access, sustainability strategy, and things I decide to build myself.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/work"
                className="label-mono rounded-sm bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-85"
              >
                See the work →
              </Link>
              <a
                href={resume.url}
                target="_blank"
                rel="noreferrer"
                className="label-mono rounded-sm border border-border px-6 py-3 text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Résumé ↓
              </a>
            </div>
          </div>

          <div className="grain overflow-hidden rounded-sm border border-border">
            <img
              src={headshot.url}
              alt="Ananya Taggarse, Cornell Dyson student, portrait on campus"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </section>

        <Marquee items={toolkit} />

        <section className="mx-auto grid max-w-7xl gap-px border-x border-border bg-border px-0 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-8">
              <p className="font-display text-4xl text-primary sm:text-5xl">{s.value}</p>
              <p className="label-mono mt-3 text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display-xl text-[clamp(2.5rem,7vw,5rem)]">Selected work</h2>
            <Link to="/work" className="label-mono text-muted-foreground hover:text-primary">
              All {roles.length} →
            </Link>
          </div>

          <ul className="mt-10 border-t border-border">
            {featured.map((role) => (
              <li key={role.slug} className="border-b border-border">
                <Link
                  to="/work"
                  onMouseEnter={() => setHovered(role.slug)}
                  onMouseLeave={() => setHovered(null)}
                  className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline"
                >
                  <div>
                    <span
                      className={`text-2xl font-semibold tracking-tight transition-transform duration-300 sm:text-3xl ${
                        hovered === role.slug ? "inline-block translate-x-2 text-primary" : ""
                      }`}
                    >
                      {role.title}
                    </span>
                    <p
                      className={`overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-300 ${
                        hovered === role.slug ? "mt-3 max-h-24 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {role.summary}
                    </p>
                  </div>
                  <span className="label-mono text-right text-muted-foreground">
                    {role.org} · {categoryLabels[role.category]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="display-xl text-[clamp(2.5rem,7vw,5rem)]">Recognition</h2>
              <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
                National competitions, selective programs, and scholarships that funded the rest
                of it.
              </p>
              <Link
                to="/about"
                className="label-mono mt-8 inline-block text-primary hover:opacity-80"
              >
                More about me →
              </Link>
            </div>
            <ul className="border-t border-border">
              {awards.slice(0, 6).map((a) => (
                <li
                  key={a}
                  className="border-b border-border py-4 text-sm text-foreground/85 transition-colors hover:text-primary"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center">
            <h2 className="display-xl text-[clamp(2.5rem,9vw,7rem)]">Let's build something</h2>
            <Link
              to="/contact"
              className="label-mono mt-10 inline-block rounded-sm bg-primary px-8 py-4 text-primary-foreground transition-opacity hover:opacity-85"
            >
              Get in touch →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
