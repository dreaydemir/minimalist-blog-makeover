import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";

import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import post5 from "@/assets/post-5.jpg";
import post6 from "@/assets/post-6.png";

const posts = [
  {
    slug: "zayiflama-ilaclari",
    image: post5,
    category: "Sağlık",
    title: "Zayıflama İlaçlarını Bıraktığınızda Kilo Geri Gelir Mi?",
    date: "7 Mart 2026",
    excerpt: "GLP-1 ilaçları kesildiğinde kilo geri gelir mi? BMJ'de yayımlanan kapsamlı meta-analiz ve yan etki profili hakkında bilmeniz gerekenler.",
  },
  {
    slug: "oteden-guncele",
    image: post1,
    category: "Sağlık",
    title: "Haftanın Öne Çıkanları: Yürüyüş, İnsülin ve BPA",
    date: "11 Şubat 2024",
    excerpt: "Günde 36 dakika tempolu yürüyüş yeterli mi? İnsülin tedavisine geç başlamak ne kadar sorun? Plastik ambalajlardaki kimyasallar tiroid hastalığına yol açıyor mu?",
  },
  {
    slug: "diyabet-yonetiminde-uyku",
    image: post2,
    category: "Sağlık",
    title: "Diyabet Yönetiminde Uyku: Geceleri Yatmak Neden Bu Kadar Önemli?",
    date: "2 Mart 2024",
    excerpt: "Uyku süresi, zamanlaması ve kalitesi diyabet riskini nasıl etkiliyor? Diabetes Care'de yayımlanan araştırmanın klinik önemi.",
  },
  {
    slug: "steroid-suistimali",
    image: post3,
    category: "Sağlık",
    title: "Vücut Geliştirme İlaçlarının Riskleri: Steroid Suistimali Hakkında Bilmeniz Gerekenler",
    date: "26 Mayıs 2024",
    excerpt: "Anabolik steroidler ve türevlerinin kötüye kullanımı, sağlık riskleri ve HAARLEM çalışmasının öne çıkan bulguları.",
  },
  {
    slug: "gestasyonel-diyabet",
    image: post6,
    category: "Sağlık",
    title: "Gebelikte Ortaya Çıkan Şeker Hastalığı: Gestasyonel Diyabet",
    date: "29 Ağustos 2023",
    excerpt: "Gestasyonel diabetes mellitus nedir, kimlerde görülür ve nasıl tedavi edilir? Gebelikte şeker hastalığı hakkında bilmeniz gerekenler.",
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
