import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import headshot from "@/assets/ananya-headshot.jpg.asset.json";
import resume from "@/assets/resume.pdf.asset.json";
import {
  awards,
  certifications,
  education,
  interests,
  languages,
  toolkit,
} from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ananya Taggarse — Cornell Dyson '29" },
      {
        name: "description",
        content:
          "Ananya Taggarse studies Finance and International Business at Cornell Dyson, working across energy access, sustainability, and founded ventures.",
      },
      { property: "og:title", content: "About Ananya Taggarse" },
      {
        property: "og:description",
        content:
          "Cornell Dyson '29 — finance, international business, energy access, and ventures.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [openAwards, setOpenAwards] = useState(false);
  const shownAwards = openAwards ? awards : awards.slice(0, 4);

  return (
    <div className="min-h-screen">
      <SiteNav />
      <main className="mx-auto max-w-7xl px-6 py-14">
        <h1 className="display-xl text-[clamp(3.5rem,12vw,9rem)]">About</h1>

        <section className="mt-12 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xl leading-relaxed text-foreground/90 sm:text-2xl">
              I'm a Cornell Dyson student studying finance and international business, drawn to
              the places where capital, energy, and access overlap. Right now that means reading
              World Bank electrification documents, advising small businesses on circular-economy
              strategy, and building a product that gets students in front of opportunities they'd
              never otherwise hear about.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              I started early. At fifteen I was researching how to turn rice-hull waste into
              renewable fuel and cold-emailing the USDA about it. In parallel I built a content
              practice that has crossed 8.1 million organic views and advised 60+ students through
              their college applications. The through-line is the same: find something underused,
              figure out the economics, and get people to move on it.
            </p>
            <a
              href={resume.url}
              target="_blank"
              rel="noreferrer"
              className="label-mono mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-primary-foreground transition-opacity hover:opacity-85"
            >
              Download résumé ↓
            </a>
          </div>
          <div className="grain overflow-hidden rounded-sm border border-border">
            <img
              src={headshot.url}
              alt="Portrait of Ananya Taggarse in a black blazer on Cornell's campus"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <section className="mt-20">
          <h2 className="label-mono text-primary">Education</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {education.map((e) => (
              <article key={e.school} className="rounded-sm border border-border bg-card p-6">
                <p className="label-mono text-muted-foreground">{e.period}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-tight">{e.school}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
                <p className="mt-3 text-sm text-foreground/85">{e.line}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {e.honors.map((h) => (
                    <li
                      key={h}
                      className="label-mono rounded-sm border border-border px-2 py-1 text-muted-foreground"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="label-mono text-primary">Awards & Programs</h2>
            <ul className="mt-6 border-t border-border">
              {shownAwards.map((a) => (
                <li
                  key={a}
                  className="border-b border-border py-4 text-sm text-foreground/85 transition-colors hover:text-primary"
                >
                  {a}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setOpenAwards((v) => !v)}
              className="label-mono mt-4 text-muted-foreground transition-colors hover:text-primary"
            >
              {openAwards ? "Show less −" : `Show all ${awards.length} +`}
            </button>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="label-mono text-primary">Toolkit</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {toolkit.map((t) => (
                  <li
                    key={t}
                    className="label-mono rounded-sm border border-border bg-card px-3 py-2 transition-colors hover:border-primary hover:text-primary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="label-mono text-primary">Certifications</h2>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {certifications.map((c) => (
                  <li key={c}>— {c}</li>
                ))}
              </ul>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="label-mono text-primary">Languages</h2>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {languages.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="label-mono text-primary">Off the clock</h2>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {interests.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}