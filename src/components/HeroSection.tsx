import heroBg from "@/assets/hero-blog.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <img
        src={heroBg}
        alt="Dr. Ensar Aydemir Blog"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/20" />
      <div className="absolute inset-0 flex items-end">
        <div className="container mx-auto px-6 pb-16">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-primary-foreground/80">
            Sağlık & Yaşam
          </p>
          <h1 className="mt-3 max-w-lg font-serif text-4xl font-medium italic leading-tight text-primary-foreground md:text-5xl">
            Hikayeni Anlat
          </h1>
          <p className="mt-3 max-w-md font-sans text-sm leading-relaxed text-primary-foreground/80">
            Sağlıklı ve bilinçli bir yaşam için bilgi paylaşımları
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
