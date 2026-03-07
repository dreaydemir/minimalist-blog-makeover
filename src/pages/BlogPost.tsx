import { useParams, Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";

import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";

const postsData: Record<string, { image: string; category: string; title: string; date: string; content: string }> = {
  "oteden-guncele": {
    image: post1,
    category: "Sağlık",
    title: "Öteden Güncele: Fiziksel Aktivitenin Glisemik Kontrol Üzerine Etkileri",
    date: "11 Şubat 2024",
    content: `Diabetes Care dergisinin bu ayki sayısında İspanya'dan Gallardo-Gomez ve arkadaşları tarafından yürütülen "Optimal Dose and Type of Physical Activity to Improve Glycemic Control in Type 2 Diabetes" başlıklı çalışma, fiziksel aktivitenin diyabet yönetimindeki rolünü derinlemesine inceliyor.\n\nAraştırma, düzenli yürüyüşün ve orta şiddetli egzersizlerin kan şekeri kontrolü üzerinde anlamlı iyileşmeler sağladığını ortaya koyuyor. Özellikle haftada en az 150 dakika orta yoğunlukta aerobik egzersiz yapmanın, HbA1c seviyelerinde belirgin düşüşlere yol açtığı gözlemlenmiştir.\n\nÇalışmanın öne çıkan bulguları arasında:\n\n• Kombine egzersiz programlarının (aerobik + direnç) tek tip egzersizlere göre daha etkili olduğu\n• Egzersiz süresinin artırılmasının ek faydalar sağladığı ancak bir platoya ulaşıldığı\n• Bireysel egzersiz reçetelerinin standart önerilere göre daha iyi sonuçlar verdiği\n\nSonuç olarak, fiziksel aktivite diyabet yönetiminin vazgeçilmez bir parçasıdır ve bireyselleştirilmiş egzersiz programları en iyi sonuçları vermektedir.`,
  },
  "diyabet-yonetiminde-uyku": {
    image: post2,
    category: "Sağlık",
    title: "Diyabet Yönetiminde Uyku: Geceleri Yatmak Neden Bu Kadar Önemli?",
    date: "2 Mart 2024",
    content: `Diyabet, hayatımızdaki birçok faktörle ilişkilidir ve sağlıklı bir yaşam tarzı benimsemek, bu durumu kontrol altında tutmada kilit bir rol oynar. "Diabetes Care" dergisinin Şubat 2024 sayısında yayımlanan araştırma, uyku kalitesinin kan şekeri düzenlenmesi üzerindeki etkilerini kapsamlı şekilde ele alıyor.\n\nYetersiz uyku, insülin direncini artırarak kan şekeri kontrolünü zorlaştırır. Araştırmalar, gece 6 saatten az uyuyan bireylerde Tip 2 diyabet riskinin önemli ölçüde arttığını göstermektedir.\n\nUyku hijyeni için öneriler:\n\n• Her gece aynı saatte yatıp kalkmak\n• Yatmadan 2 saat önce ekran kullanımını azaltmak\n• Yatak odasını karanlık ve serin tutmak\n• Kafein tüketimini öğleden sonra sınırlandırmak\n• Düzenli fiziksel aktivite yapmak ancak yatmadan hemen önce ağır egzersizden kaçınmak\n\nSağlıklı uyku alışkanlıkları, diyabet yönetiminin göz ardı edilen ama kritik bir bileşenidir.`,
  },
  "steroid-suistimali": {
    image: post3,
    category: "Sağlık",
    title: "Vücut Geliştirme İlaçlarının Riskleri: Steroid Suistimali",
    date: "26 Mayıs 2024",
    content: `Vücut geliştirme sporu son yıllarda büyük bir popülerlik kazanmıştır. Ancak bu popülerlik beraberinde performans artırıcı ilaçların kullanımında da ciddi bir artış getirmiştir.\n\nAnabolik steroidler, doğal testosteron hormonunun sentetik türevleridir ve kas büyümesini hızlandırırlar. Ancak bu ilaçların kötüye kullanımı çok sayıda sağlık sorununa yol açabilmektedir.\n\nSteroid kullanımının bilinen riskleri:\n\n• Karaciğer hasarı ve karaciğer tümörleri\n• Kardiyovasküler hastalıklar (kalp krizi, felç riski artışı)\n• Hormonal dengesizlikler\n• Psikiyatrik sorunlar (saldırganlık, depresyon)\n• Tendon ve bağ dokusu yaralanmaları\n• Cilt sorunları ve akne\n\nSağlıklı kas gelişimi için doğal yöntemler her zaman tercih edilmelidir. Düzenli antrenman, yeterli protein alımı ve kaliteli uyku, uzun vadede en güvenli ve sürdürülebilir yaklaşımdır.`,
  },
  "egzersizle-kalp-sagligi": {
    image: post4,
    category: "Yaşam",
    title: "Egzersizle Kalbinizi Sağlıklı Tutun",
    date: "29 Temmuz 2023",
    content: `Kalp hastalıkları dünya genelinde en yaygın ölüm nedenlerinden biridir. Ancak düzenli egzersiz, kalp sağlığını korumada en etkili yöntemlerden biri olarak öne çıkmaktadır.\n\nAmerikan Kalp Derneği'nin önerilerine göre, yetişkinlerin haftada en az 150 dakika orta yoğunlukta veya 75 dakika yüksek yoğunlukta aerobik aktivite yapması gerekmektedir.\n\nKalp sağlığı için en etkili egzersiz türleri:\n\n• Tempolu yürüyüş\n• Yüzme\n• Bisiklet sürme\n• Dans\n• Hafif koşu\n\nEgzersizin kalp üzerindeki olumlu etkileri:\n\n• Kan basıncını düşürür\n• Kolesterol seviyelerini iyileştirir\n• Kilo kontrolüne yardımcı olur\n• Stresi azaltır\n• Kan dolaşımını güçlendirir\n\nHerhangi bir egzersiz programına başlamadan önce, özellikle mevcut bir sağlık sorununuz varsa, mutlaka doktorunuza danışmanız önerilir.`,
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postsData[slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <BlogHeader />
        <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6">
          <h1 className="font-serif text-3xl text-foreground">Yazı bulunamadı</h1>
          <Link to="/" className="mt-4 text-sm uppercase tracking-widest text-muted-foreground underline underline-offset-4">
            Anasayfaya dön
          </Link>
        </div>
        <BlogFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      {/* Hero image */}
      <div className="aspect-[21/9] w-full overflow-hidden">
        <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
      </div>

      {/* Content */}
      <article className="container mx-auto max-w-2xl px-6 py-16">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
          <span>{post.category}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>
        <h1 className="mt-4 font-serif text-3xl font-medium leading-snug text-foreground md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-10 space-y-4 font-sans text-base leading-relaxed text-secondary-foreground">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            to="/"
            className="text-xs uppercase tracking-widest text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            ← Tüm Yazılar
          </Link>
        </div>
      </article>

      <BlogFooter />
    </div>
  );
};

export default BlogPost;
