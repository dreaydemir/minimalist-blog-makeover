import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";

import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";

const posts = [
  {
    image: post1,
    category: "Sağlık",
    title: "Öteden Güncele: Fiziksel Aktivitenin Glisemik Kontrol Üzerine Etkileri",
    date: "11 Şubat 2024",
    excerpt: "Diabetes Care dergisinin bu ayki sayısında yürütülen araştırma, yürüyüşün glisemik kontrol üzerindeki etkilerini inceliyor.",
  },
  {
    image: post2,
    category: "Sağlık",
    title: "Diyabet Yönetiminde Uyku: Geceleri Yatmak Neden Bu Kadar Önemli?",
    date: "2 Mart 2024",
    excerpt: "Sağlıklı bir yaşam tarzı benimsemek, diyabeti kontrol altında tutmada kilit bir rol oynar.",
  },
  {
    image: post3,
    category: "Sağlık",
    title: "Vücut Geliştirme İlaçlarının Riskleri: Steroid Suistimali",
    date: "26 Mayıs 2024",
    excerpt: "Vücut geliştirme sporunda kullanılan ilaçların sağlık üzerindeki ciddi riskleri ve dikkat edilmesi gerekenler.",
  },
  {
    image: post4,
    category: "Yaşam",
    title: "Egzersizle Kalbinizi Sağlıklı Tutun",
    date: "29 Temmuz 2023",
    excerpt: "Düzenli egzersizin kalp sağlığı üzerindeki olumlu etkileri ve günlük rutine eklenmesi gereken alışkanlıklar.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <HeroSection />

      {/* Trending Posts */}
      <section className="container mx-auto px-6 py-20">
        <div className="mb-10 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Son Yazılar</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => (
            <BlogCard key={i} {...post} index={i} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-10 px-6 py-20 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Hakkımda</p>
            <h2 className="mt-4 font-serif text-3xl font-medium text-foreground">
              Dr. Ensar Aydemir
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sağlık alanında güncel bilimsel gelişmeleri, araştırmaları ve sağlıklı yaşam
              önerilerini paylaştığım kişisel bloguma hoş geldiniz. Burada diyabet yönetiminden
              egzersiz bilimlerine, beslenme önerilerinden yaşam kalitesine kadar geniş bir
              yelpazede içerikler bulabilirsiniz.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://twitter.com" className="text-xs uppercase tracking-widest text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground">
                Twitter
              </a>
              <a href="https://instagram.com" className="text-xs uppercase tracking-widest text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground">
                Instagram
              </a>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={post4}
              alt="Dr. Ensar Aydemir"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <BlogFooter />
    </div>
  );
};

export default Index;
