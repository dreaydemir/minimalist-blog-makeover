import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Anasayfa", to: "/" },
  { label: "Hakkımda", to: "/hakkimda" },
  { label: "İletişim", to: "/iletisim" },
];

const BlogHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        <Link to="/" className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          Dr. Ensar Aydemir
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 font-sans text-sm uppercase tracking-widest text-muted-foreground md:flex">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="text-foreground md:hidden"
          aria-label="Menüyü aç/kapat"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-border px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4 font-sans text-sm uppercase tracking-widest text-muted-foreground">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default BlogHeader;
