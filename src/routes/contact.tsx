import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import { contact } from "@/lib/site-data";
import resume from "@/assets/resume.pdf.asset.json";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ananya Taggarse — Cornell Dyson" },
      {
        name: "description",
        content:
          "Get in touch with Ananya Taggarse about internships, consulting projects, research collaborations, or student advising.",
      },
      { property: "og:title", content: "Contact Ananya Taggarse" },
      {
        property: "og:description",
        content: "Reach out about internships, consulting, research, or advising.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SiteNav />
      <main className="mx-auto w-full max-w-7xl flex-1 px-6 py-14">
        <h1 className="display-xl text-[clamp(3.5rem,12vw,9rem)]">Say hello</h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground">
          Open to internship conversations, consulting and research projects, brand partnerships,
          and students who want help with their applications.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <button
            onClick={copyEmail}
            className="group rounded-sm border border-border bg-card p-8 text-left transition-colors hover:border-primary"
          >
            <p className="label-mono text-muted-foreground">Email — click to copy</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-primary">
              {contact.email}
            </p>
            <p className="label-mono mt-3 text-primary">{copied ? "Copied ✓" : "\u00A0"}</p>
          </button>

          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-sm border border-border bg-card p-8 transition-colors hover:border-primary"
          >
            <p className="label-mono text-muted-foreground">LinkedIn</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-primary">
              /in/ananya-taggarse ↗
            </p>
          </a>

          <a
            href={contact.linktree}
            target="_blank"
            rel="noreferrer"
            className="group rounded-sm border border-border bg-card p-8 transition-colors hover:border-primary md:col-span-2"
          >
            <p className="label-mono text-muted-foreground">
              Linktree — content creation &amp; partnerships
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-primary">
              linktr.ee/AnanyaTaggarse ↗
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              My TikTok and Instagram content, brand partnerships, the AmbitiousAI
              pilot, and college application advising sessions all live here.
            </p>
          </a>

          <a
            href={`tel:${contact.phone.replace(/[^0-9]/g, "")}`}
            className="group rounded-sm border border-border bg-card p-8 transition-colors hover:border-primary"
          >
            <p className="label-mono text-muted-foreground">Phone</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-primary">
              {contact.phone}
            </p>
          </a>

          <a
            href={resume.url}
            target="_blank"
            rel="noreferrer"
            className="group rounded-sm border border-border bg-card p-8 transition-colors hover:border-primary"
          >
            <p className="label-mono text-muted-foreground">Résumé</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-primary">
              Download PDF ↓
            </p>
          </a>
        </div>

        <p className="label-mono mt-12 text-muted-foreground">
          Based in {contact.location} · Open to remote
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}