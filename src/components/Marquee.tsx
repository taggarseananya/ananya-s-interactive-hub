export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-border/70 py-4">
      <div className="marquee-track flex w-max gap-10">
        {doubled.map((item, i) => (
          <span key={i} className="label-mono whitespace-nowrap text-muted-foreground">
            {item} <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}