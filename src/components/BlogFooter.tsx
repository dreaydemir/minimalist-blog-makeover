const BlogFooter = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="font-serif text-lg text-foreground">Dr. Ensar Aydemir</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Sağlık ve yaşam üzerine kişisel blog
        </p>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">Instagram</a>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dr. Ensar Aydemir. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default BlogFooter;
