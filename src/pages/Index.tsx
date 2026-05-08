import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import HeroSection from "@/components/HeroSection";
import BlogCard from "@/components/BlogCard";

import aboutPortrait from "@/assets/about-portrait.jpg";
import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import post5 from "@/assets/post-5.jpg";
import post6 from "@/assets/post-6.png";
import post7 from "@/assets/post-7.png";
import post8 from "@/assets/post-8.png";
import post9 from "@/assets/post-9.png";
import post10 from "@/assets/post-10.png";
import post11 from "@/assets/post-11.png";
import post12 from "@/assets/post-12.png";

const allPosts = [
  {
    slug: "vki-hesaplama",
    image: post12,
    category: "Sağlık",
    title: "VKİ Hesaplama: Kilom Sağlığım Hakkında Ne Söylüyor?",
    date: "15 Mayıs 2026",
    publishDate: "2026-05-15",
    excerpt: "VKİ nasıl hesaplanır, ne anlama gelir? Bel çevresi, viseral yağlanma ve obezite riskinin değerlendirilmesi hakkında bilmeniz gerekenler.",
  },
  {
    slug: "obezite-hastalik-mi",
    image: post11,
    category: "Sağlık",
    title: "Obezite Bir İrade Sorunu mu, Hastalık mı?",
    date: "8 Mayıs 2026",
    publishDate: "2026-05-08",
    excerpt: "Obezite neden sadece fazla kilo değildir? Genetik, hormonlar ve yağ dokusunun aktif endokrin rolü hakkında bilmeniz gerekenler.",
  },
  {
    slug: "insulin-direnci",
    image: post10,
    category: "Sağlık",
    title: "İnsülin Direnci Nedir? Belirtileri, HOMA-IR Değeri ve Tedavi Yöntemleri",
    date: "13 Mart 2026",
    excerpt: "İnsülin direnci nedir, belirtileri nelerdir, HOMA-IR değeri nasıl yorumlanır? Tanı, tedavi ve yaşam tarzı önerileri hakkında kapsamlı rehber.",
  },
  {
    slug: "selenyum-ve-tiroid",
    image: post9,
    category: "Sağlık",
    title: "Selenyum ve Tiroid: Takviye Almadan Önce Bilmeniz Gerekenler",
    date: "8 Mart 2026",
    excerpt: "Selenyumun tiroid sağlığıyla ilişkisi, hangi hastalıklarda faydalı olabileceği ve takviye almadan önce dikkat edilmesi gerekenler.",
  },
  {
    slug: "prolaktin-yuksekligi",
    image: post8,
    category: "Sağlık",
    title: "Prolaktin Değerim Yüksek Çıktı: Panik Yapmadan Önce Bilmeniz Gerekenler",
    date: "8 Mart 2026",
    excerpt: "Prolaktin yüksekliğinin nedenleri, doğru test koşulları, tedavi seçenekleri ve gebelikte takip hakkında sık sorulan sorular.",
  },
  {
    slug: "hipofiz-adenomu",
    image: post7,
    category: "Sağlık",
    title: "Beyninizdeki Mercimek Tanesi: Hipofiz Adenomu Hakkında Merak Edilenler",
    date: "8 Mart 2026",
    excerpt: "Hipofiz adenomu nedir, kimlerde görülür, ne zaman tedavi gerekir? Sık sorulan sorular ve hekim notları.",
  },
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
    slug: "graves-hastaligi",
    image: post4,
    category: "Sağlık",
    title: "Tiroid Beziniz Hızlı Çalışıyorsa Ne Olur? Graves Hastalığı Hakkında Merak Edilenler",
    date: "8 Mart 2026",
    excerpt: "Hipertiroidi ve Graves hastalığı nedir, nasıl tanı konur, tedavi seçenekleri nelerdir? Sık sorulan sorular ve hekim notları.",
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
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              Endokrinoloji ve Metabolizma Hastalıkları Uzmanı
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Ensar Aydemir, lisans eğitimini Hacettepe Üniversitesi Tıp Fakültesi'nde,
              iç hastalıkları uzmanlığını Marmara Üniversitesi'nde ve endokrinoloji
              uzmanlığını Bursa Uludağ Üniversitesi'nde tamamladı. Bir devlet hastanesinde
              Endokrinoloji ve Metabolizma Hastalıkları uzmanı olarak görev yapmaktadır.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={aboutPortrait}
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
