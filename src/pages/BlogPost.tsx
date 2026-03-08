import { useParams, Link } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";

import post1 from "@/assets/post-1.jpg";
import post2 from "@/assets/post-2.jpg";
import post3 from "@/assets/post-3.jpg";
import post4 from "@/assets/post-4.jpg";
import post5 from "@/assets/post-5.jpg";
import post6 from "@/assets/post-6.png";

const postsData: Record<string, { image: string; category: string; title: string; date: string; content: string }> = {
  "zayiflama-ilaclari": {
    image: post5,
    category: "Sağlık",
    title: "Zayıflama İlaçlarını Bıraktığınızda Kilo Geri Gelir Mi?",
    date: "7 Mart 2026",
    content: `Kliniğimde son yıllarda en çok sorulan sorulardan biri şu: "Bu ilacı ne kadar süre kullanmam gerekecek?" GLP-1 (bağırsaktan salgılanan, insülin salınımını uyaran hormon) reseptör agonistleri — semaglutid ve tirzepatid gibi ilaçlar — kilo yönetiminde ve tip 2 diyabet tedavisinde gerçek bir devrim yarattı. Ancak bu ilaçların yan etki profili ve kesilmesinin ardından ne olacağı, hastalarımın zihnini en çok meşgul eden konuların başında geliyor.

GLP-1 İlaçları Kesildiğinde Kilo Geri Gelir mi?

Kısaca yanıt: Evet, ve oldukça hızlı. BMJ'de Ocak 2026'da yayımlanan kapsamlı bir sistematik derleme ve meta-analiz (West ve ark., n=9.341 katılımcı, 37 çalışma), bu soruya net bir veri sağladı.

Araştırmanın başlıca bulguları şöyle:

• Herhangi bir kilo yönetimi ilacını bırakan kişiler ortalama ayda 0,4 kg geri alıyor.
• Semaglutid veya tirzepatid gibi yeni nesil inkretin mimetiklerini bırakanlarda bu hız ayda 0,8 kg'a çıkıyor.
• Tüm kardiyometabolik göstergeler (HbA1c, kan şekeri, tansiyon, kolesterol) ilacın kesilmesinden ortalama 1,4 yıl içinde başlangıç değerlerine dönüyor.
• Davranışsal kilo yönetimi programlarına (diyet+egzersiz) kıyasla ilaç kesilmesi sonrası kilo geri alımı aylık 0,3 kg daha hızlı gerçekleşiyor.

GLP-1 İlaçlarının Yan Etkileri: Paniklemeden Bilmeniz Gerekenler

Journal of Clinical Investigation'da 2026 yılında yayımlanan kapsamlı bir derleme (Jalleh ve ark.), GLP-1 reseptör agonistlerinin güvenlik profilini sistematik biçimde ele aldı. Bu ilaçları kullanan ya da kullanmayı planlayan hastalarım için kritik bilgileri özetliyorum.

Gastrointestinal (sindirim sistemi) yan etkiler: Bu ilaçlarla en sık görülen sorunlar mide bulantısı, kusma, ishal ve kabızlıktır. Randomize kontrollü çalışmalarda hastaların %15-45'i bu yakınmaları bildiriyor; mide bulantısı tedaviyi bırakmanın başlıca nedeni. İyi haber: Yavaş doz artışı ile bu risk azaltılabilir ve zamanla tolerans gelişiyor.

Tiroid ile ilgili endişeler: Hayvan çalışmalarında GLP-1 ilaçları kemirgenlerde tiroid C hücrelerinde proliferasyona yol açtı. İnsanlarda bu riski doğrudan kanıtlamak güç olsa da Fransa'dan gelen sigorta verileri (hazard ratio 1,78) medüller tiroid kanseri riskinde artışa işaret ediyor. Bu nedenle ailede veya kendisinde medüller tiroid kanseri ya da MEN2 öyküsü olanlar bu ilaçları kullanmamalıdır.

Göz komplikasyonları: GLP-1 ilaçlarıyla kan şekerinin hızlı düşmesi, mevcut proliferatif diyabetik retinopatisi olan hastalarda retinopati komplikasyonlarını geçici olarak kötüleştirebilir. Bu nedenle bu ilaçlara başlamadan önce göz muayenesi yaptırılması büyük önem taşır.

Anestezi ve endoskopi öncesi dikkat: GLP-1 ilaçları mide boşalmasını yavaşlatır. Bu durum endoskopi veya genel anestezi öncesi mide içeriğinin birikmesine yol açarak aspirasyon riskini artırabilir.

Kas kütlesi kaybı: Kilo verirken yağsız doku (kas) da kaybedilir. Semaglutid kullananların kaybettikleri kilonun %39'u, tirzepatid kullananların ise %25'i yağsız dokudan geliyor. Bu riski azaltmak için düzenli direnç egzersizi ve yeterli protein alımı kritik önem taşır.

ÖNEMLİ NOKTALAR

✓ GLP-1 ilaçlarını bırakan hastalar ortalama 1,7 yıl içinde başlangıç kilolarına geri dönüyor; bu ilaçlar kronik kullanım için tasarlanmış.
✓ Mide bulantısı en sık yan etkidir; yavaş doz artışıyla yönetilebilir.
✓ Ailede medüller tiroid kanseri veya MEN2 öyküsü varsa bu ilaçlar kontrendikedir.
✓ İlaca başlamadan önce göz muayenesi yaptırın; özellikle mevcut retinopati varsa.
✓ Kas kaybını önlemek için direnç egzersizi ve yeterli protein alımı şarttır.

Hekim Notu

Kliniğimde bu ilaçları öneren bir hekim olarak şunu açıkça ifade etmeliyim: GLP-1 ilaçları mucize değil, kronik bir hastalık yönetim aracıdır. Kilo vermeniz için başladığınız bu ilacı aniden bırakmanız, elde ettiğiniz tüm metabolik kazanımları hızla geri alabilir. Hastalarıma her zaman şunu söylüyorum: "Bu ilaç başlamadan önce nasıl devam edeceğimizi konuşalım." Özellikle retinopati açısından risk taşıyan hastalarımı ilaca başlamadan önce mutlaka göz doktoruna yönlendiriyorum. Kas kütlesi kaybı da beni gerçekten endişelendiren bir konu; bu nedenle tedavi süresince protein alımı ve egzersiz konusunda hastalarımı yakından takip ediyorum.

⚠ Sorumluluk Reddi: Bu içerik yalnızca genel bilgilendirme amaçlıdır ve bireysel tıbbi tavsiye yerine geçmez. Tedavi kararları için hekiminize danışınız.

Kaynaklar:

1. West S, et al. Weight regain after cessation of medication for weight management: systematic review and meta-analysis. BMJ. 2026;392:e085304.
2. Jalleh RJ, Talley NJ, Horowitz M, Nauck MA. The science of safety: adverse effects of GLP-1 receptor agonists as glucose-lowering and obesity medications. J Clin Invest. 2026;136(4):e194740.`,
  },
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
