import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      {/* Hero */}
      <section className="container mx-auto grid gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="aspect-square overflow-hidden">
          <img
            src={aboutPortrait}
            alt="Dr. Ensar Aydemir"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Hakkımda</p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
            Dr. Ensar Aydemir
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Sağlık alanında bilimsel gelişmeleri takip eden ve bu bilgileri herkesin
            anlayabileceği bir dille paylaşmayı amaçlayan bir hekimim. Bu blog, güncel
            tıbbi araştırmaları, sağlıklı yaşam önerilerini ve klinik deneyimlerimi
            okuyucularımla buluşturduğum kişisel alanımdır.
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="border-t border-border">
        <div className="container mx-auto max-w-3xl px-6 py-20">
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-2xl font-medium text-foreground">Uzmanlık Alanları</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• Diyabet yönetimi ve metabolik hastalıklar</li>
                <li>• Egzersiz fizyolojisi ve spor hekimliği</li>
                <li>• Beslenme ve sağlıklı yaşam</li>
                <li>• Koruyucu hekimlik</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-foreground">Blog Hakkında</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Bu blogda, özellikle Diabetes Care gibi saygın bilimsel dergilerde
                yayımlanan araştırmaları ele alıyor, günlük yaşama uygulanabilir
                sağlık bilgileri sunuyorum. Diyabet yönetiminden uyku hijyenine,
                egzersiz bilimlerinden beslenme önerilerine kadar geniş bir yelpazede
                içerikler üretiyorum.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Amacım, kanıta dayalı tıp ilkeleri çerçevesinde, herkesin sağlığı
                hakkında bilinçli kararlar almasına yardımcı olmaktır.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-medium text-foreground">İletişim</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Benimle iletişime geçmek veya blog yazıları hakkında görüş
                bildirmek için aşağıdaki kanalları kullanabilirsiniz.
              </p>
              <div className="mt-4 flex items-center gap-6">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  Twitter
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  Instagram
                </a>
                <a
                  href="mailto:info@ensaraydemir.com"
                  className="text-xs uppercase tracking-widest text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  E-posta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogFooter />
    </div>
  );
};

export default About;
