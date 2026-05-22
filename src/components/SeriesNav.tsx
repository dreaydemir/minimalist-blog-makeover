import { Link } from "react-router-dom";

export interface SeriesPost {
  slug: string;
  title: string;
  publishDate?: string;
}

interface SeriesNavProps {
  seriesName: string;
  posts: SeriesPost[];
  currentSlug: string;
}

const partRegex = /Bölüm\s+(\d+)/i;

/**
 * Auto-orders posts belonging to a series by parsing "Bölüm N" from their titles.
 * Unpublished (future-dated) parts are shown as disabled placeholders.
 */
const SeriesNav = ({ seriesName, posts, currentSlug }: SeriesNavProps) => {
  const today = new Date();

  const items = posts
    .map((p) => {
      const match = p.title.match(partRegex);
      if (!match) return null;
      const part = parseInt(match[1], 10);
      const subtitle = p.title.split(":").slice(1).join(":").trim() || p.title;
      const isUnpublished = p.publishDate ? new Date(p.publishDate) > today : false;
      return { ...p, part, subtitle, isUnpublished };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null)
    .sort((a, b) => a.part - b.part);

  if (items.length < 2) return null;

  return (
    <aside className="mt-12 border border-border bg-muted/30 p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Yazı Dizisi</p>
      <h3 className="mt-3 font-serif text-2xl font-medium text-foreground">{seriesName}</h3>
      <ol className="mt-5 space-y-3">
        {items.map((item) => {
          const isCurrent = item.slug === currentSlug;
          const label = (
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-sm font-semibold text-foreground shrink-0">
                Bölüm {item.part}
              </span>
              <span
                className={`text-sm leading-snug ${
                  isCurrent ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {item.subtitle}
                {item.isUnpublished && (
                  <span className="ml-2 text-xs uppercase tracking-widest text-muted-foreground/70">
                    · Yakında
                  </span>
                )}
              </span>
            </div>
          );

          if (isCurrent) {
            return (
              <li
                key={item.slug}
                className="border-l-2 border-foreground pl-3"
                aria-current="true"
              >
                {label}
              </li>
            );
          }

          if (item.isUnpublished) {
            return (
              <li key={item.slug} className="border-l-2 border-transparent pl-3 opacity-60">
                {label}
              </li>
            );
          }

          return (
            <li key={item.slug} className="border-l-2 border-transparent pl-3 transition-colors hover:border-border">
              <Link to={`/blog/${item.slug}`} className="block hover:text-foreground">
                {label}
              </Link>
            </li>
          );
        })}
      </ol>
    </aside>
  );
};

export default SeriesNav;
