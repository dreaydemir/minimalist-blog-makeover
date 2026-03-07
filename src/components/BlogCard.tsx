import { Link } from "react-router-dom";

interface BlogCardProps {
  slug: string;
  image: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  index?: number;
}

const BlogCard = ({ slug, image, category, title, date, excerpt, index = 0 }: BlogCardProps) => {
  return (
    <Link
      to={`/yazi/${slug}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span>{category}</span>
          <span>·</span>
          <span>{date}</span>
        </div>
        <h3 className="mt-2 font-serif text-xl font-medium leading-snug text-foreground transition-colors group-hover:text-muted-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {excerpt}
        </p>
        <span className="mt-3 inline-block text-xs uppercase tracking-widest text-foreground underline underline-offset-4">
          Devamını Oku
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;
