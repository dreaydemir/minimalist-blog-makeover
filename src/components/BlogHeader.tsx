import { Link } from "react-router-dom";

const BlogHeader = () => {
  return (
    <header className="border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          Dr. Ensar Aydemir
        </Link>
        <nav className="hidden items-center gap-8 font-sans text-sm uppercase tracking-widest text-muted-foreground md:flex">
          <Link to="/" className="transition-colors hover:text-foreground">Anasayfa</Link>
          <Link to="/kategori/saglik" className="transition-colors hover:text-foreground">Sağlık</Link>
          <Link to="/hakkimda" className="transition-colors hover:text-foreground">Hakkımda</Link>
          <Link to="/iletisim" className="transition-colors hover:text-foreground">İletişim</Link>
        </nav>
      </div>
    </header>
  );
};

export default BlogHeader;
