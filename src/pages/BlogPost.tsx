import { useParams, Link, useLocation } from "react-router-dom";
import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import ShareButtons from "@/components/ShareButtons";

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
    title: "Haftanın Öne Çıkanları: Yürüyüş, İnsülin ve BPA",
    date: "11 Şubat 2024",
    content: `Hastalarımın en çok sorduğu konulardan birini bu hafta üç farklı araştırmayla ele alıyorum: egzersiz gerçekten kan şekerini düzeltiyor mu, insülin tedavisine geç başlamak ne kadar sorun, ve plastik ambalajlardaki kimyasallar tiroid hastalığına yol açıyor mu? Gelin birlikte bakalım.

Günde 36 Dakika Tempolu Yürüyüş Yeterli mi?

Diyabetli hastalarım bana sıklıkla soruyor: "Hocam, ne kadar yürüyeyim?" Artık buna sayıyla yanıt verebiliyorum.

Diabetes Care dergisinde yayımlanan İspanyol araştırmacıların sistematik derlemesi (Gallardo-Gomez ve ark.), tip 2 diyabetli bireylerde kan şekeri kontrolü için optimal egzersiz dozunu belirlemeye çalıştı. Haftada 1.100 MET/dakika yani günlük karşılığı yaklaşık 36 dakika tempolu yürüyüş, HbA1c (son 3 ayın ortalama kan şekeri göstergesi) düzeylerinde istatistiksel olarak anlamlı ve optimal bir düzelme ile ilişkilendirildi.

Bu rakam ulaşılabilir bir hedef. Hastama şunu söylüyorum: Sabah 20 dakika, akşam 16 dakika. Asansör yerine merdiven, bir durak erken inmek. Büyük bir yaşam değişikliğine gerek yok; tutarlılık, süre kadar önemli.

İnsülin Glarjin U300: Geç Başlamak Zorunda Değilsiniz

Ülkemizden değerli meslektaşlarımızın katkılarıyla Endocrinology Research and Practice dergisinde yayımlanan EASE çalışması, daha önce hiç insülin kullanmamış, ağızdan alınan diyabet ilaçlarıyla yeterli kan şekeri kontrolü sağlayamamış tip 2 diyabetli hastalarda insülin glarjin U300 (bazal insülin, günde bir kez uygulanan uzun etkili insülin türü) tedavisinin etkinliğini değerlendirdi.

Yaklaşık 6 aylık takipte ortalama HbA1c değerleri 9,4'ten 7,3'e geriledi. Hastaların %43'ü hedef HbA1c değerlerine ulaştı. Türkiye'de gerçek dünya koşullarında yürütülmüş bu veri, bazal insülin başlangıcının doğru dozlama ile hem etkili hem güvenli olduğunu ortaya koyuyor.

Kliniğimde sık karşılaştığım bir durum: Hastalar insülin sözcüğünden korkuyor, başlamayı erteliyor. Bu çalışma, uygun adayda erken ve doğru dozlanmış insülin başlangıcının somut fayda sağladığını bir kez daha gösteriyor.

BPA ve Tiroid: Endişe Edilmeli mi?

Bisfenol A (BPA) yani plastik şişeler, konserve kutuları ve ambalajlarda yaygın bulunan bir endokrin bozucu (hormon sistemini etkileyebilen kimyasal madde), uzun süredir tiroid hastalıklarıyla ilişkilendirilip ilişkilendirilmediği tartışılıyor.

Frontiers in Endocrinology'de yayımlanan Çinli araştırmacıların çalışması, üreme çağındaki kadınlarda BPA'yı otoimmün tiroid hastalığı (bağışıklık sisteminin tiroid bezine saldırısıyla gelişen hastalık) ile ilişkilendiren kanıt bulamadı. Ancak idrardaki BPA düzeyleri ile iyot miktarı ve serbest T4 (tiroid hormonunun kandaki serbest formu) seviyeleri arasında bir korelasyon dikkat çekti.

Araştırmacılar, literatürdeki çelişkili bulguları da göz önüne alarak net bir yargıya varılamayacağını belirtiyor. Mevcut veriler BPA'nın otoimmün tiroid hastalığına neden olduğunu kanıtlamıyor; ancak tiroid hormonu metabolizmasını etkileyebileceğine dair sinyaller var. Şimdilik tetikte olmak, paniklemeden takip etmek doğru yaklaşım.

Önemli Noktalar

✓ Günde 36 dakika tempolu yürüyüş, tip 2 diyabette kan şekeri kontrolü için kanıta dayalı bir hedef.
✓ Ağızdan alınan ilaçlarla kontrol sağlanamayan uygun hastalarda bazal insülin başlangıcı, 6 ayda HbA1c'yi ortalama 2,1 puan düşürebilir.
✓ BPA'nın otoimmün tiroid hastalığına neden olduğu henüz kanıtlanmadı; aşırı plastik maruziyetinden kaçınmak makul bir önlem olmaya devam ediyor.

Hekim Notu

Bu haftanın derlemesinde beni en çok sevindiren, hem egzersiz hem insülin başlangıcı konusundaki verilerin "yapılabilir" olması. Hastalarıma hep şunu söylüyorum: Mükemmel planı beklemek, iyi planı ertelememeli. 36 dakika yürümek de, insülin iğnesine alışmak da sanıldığından çok daha kolay ve farkı çok büyük.

⚠ Sorumluluk Reddi: Bu içerik yalnızca genel bilgilendirme amaçlıdır ve bireysel tıbbi tavsiye yerine geçmez. Tedavi kararları için hekiminize danışınız.

Kaynaklar:

1. Gallardo-Gomez D, et al. Optimal Dose and Type of Physical Activity to Improve Glycemic Control in People Diagnosed With Type 2 Diabetes. Diabetes Care. 2024.
2. EASE Study Group. Effectiveness and Safety of Initiation and Titration of Insulin Glargine 300 U/mL in Insulin-Naive Patients with Type 2 Diabetes Mellitus. Endocrinology Research and Practice. 2024.
3. Çin araştırma grubu. Relationship between bisphenol A and autoimmune thyroid disease in women of childbearing age. Frontiers in Endocrinology. 2024.`,
  },
  "diyabet-yonetiminde-uyku": {
    image: post2,
    category: "Sağlık",
    title: "Diyabet Yönetiminde Uyku: Geceleri Yatmak Neden Bu Kadar Önemli?",
    date: "2 Mart 2024",
    content: `Hastalarımın büyük çoğunluğu diyabet yönetiminde beslenmeye ve ilaca odaklanır. Uyku konusunu gündeme getirdiğimde ise çoğunlukla şaşırırlar. Oysa Diabetes Care dergisinin Şubat 2024 sayısında yayımlanan "Waking Up to the Importance of Sleep in Type 2 Diabetes Management" başlıklı derleme, uykunun kan şekeri kontrolündeki rolünü çok net biçimde ortaya koyuyor. Gelin bu araştırmanın klinik önemine birlikte bakalım.

Uyku da Bir "Diyabet İlacı" mı?

Makale, günlük fiziksel davranışları beş başlıkta ele alan "5S" çerçevesiyle açılıyor: uyku (sleep), oturma (sitting), adım atma (stepping), terleme (sweating) ve güçlenme (strengthening). Uyku bu beş bileşenin ilki ve bence en çok göz ardı edileni.

Uyku; REM ve NREM evrelerinden oluşan döngülerin gece boyunca birkaç kez tekrar etmesiyle şekillenir. NREM'in üçüncü evresi olan derin uyku, en onarıcı aşamadır. Hücreler, dokular ve kaslar bu evrede yenilenir. Bu evrenin yetersiz kalması yalnızca yorgunluğa değil, kan şekeri dengesizliğine de zemin hazırlar.

Kaç Saat, Ne Zaman, Nasıl Uyumalısınız?

Araştırma uyku sorununu üç boyutta ele alıyor ve her birinin diyabet üzerindeki etkisi ayrı ayrı ölçülmüş.

Süre: Genel sağlık için önerilen uyku süresi 7 ila 9 saattir. Prediyabetik bireylerde bu süreden daha kısa veya daha uzun uyumak, tip 2 diyabet riskini %50'ye kadar artırabiliyor. Daha çarpıcı bir veri: Her bir saatlik uyku değişimi, diyabet riskini %9 ila 14 oranında artırıyor.

Zamanlama: Gece geç saatlere kadar uyanık kalıp sabah geç saatlerde uyananlar için risk daha yüksek. Araştırmaya göre düzenli uyku saatlerine uymayan, gece kuşu profiline uyan bireylerde diyabet gelişme riski 2,5 kat daha fazla. Bir de "sosyal jet lag" kavramı var; hafta içi ile hafta sonu uyku saatlerinin orta noktaları arasındaki fark 1,5 saati aştığında HbA1c (son 3 ayın ortalama kan şekeri göstergesi) değerlerinde kötüleşme gözlemleniyor.

Kalite: Uykuya geçmekte ya da kesintisiz bir uykuyu sürdürmekte zorlanıyorsanız diyabet riskiniz %40 ila 84 daha yüksek olabilir. Kalitesiz uyku aynı zamanda mevcut diyabetik hastalarda HbA1c düzeylerini de olumsuz etkiliyor.

Biyolojik Saatiniz Bozulursa Ne Olur?

Sirkadiyen ritim (biyolojik saatimizin uyku düzenini ve hormonal dengeleri yönetme sistemi) bozulduğunda zincirleme bir etki başlıyor: damar duvarlarında oksidatif stres artıyor, insülin salgılayan pankreas hücreleri olumsuz etkileniyor, obeziteye yatkınlık ve hormonal dengesizlik ortaya çıkıyor. Vardiyalı çalışma, düzensiz beslenme saatleri ve uyku bozuklukları bu bozulmanın başlıca tetikçileri.

Sirkadiyen ritmi yeniden düzene sokmak için araştırmanın önerdiği yollar şunlar: Belirli saatler arasında yemek yeme alışkanlığı kazanmak (zaman kısıtlı beslenme), gündüz saatlerinde doğal güneş ışığına maruz kalmak, düzenli fiziksel aktivite, uyku öncesi rahatlatıcı bir rutin oluşturmak ve gerektiğinde melatonin kullanımı.

Önemli Noktalar

✓ Her gece 7 ila 9 saat uyumak, diyabet riskini azaltmanın en basit ve maliyetsiz yollarından biri.
✓ Düzensiz uyku saatleri ve gece geç yatma alışkanlığı, diyabet gelişme riskini 2,5 katına çıkarabiliyor.
✓ Hafta içi ile hafta sonu uyku saatleri arasındaki 1,5 saatten fazla fark, kan şekeri kontrolünü bozuyor.
✓ Sirkadiyen ritmi düzenlemek için beslenme zamanlaması, ışığa maruz kalma ve egzersiz birlikte ele alınmalı.

Hekim Notu

Kliniğimde artık her diyabetli hastama uyku alışkanlıklarını soruyorum. Kaç saat uyuduğu, kaçta yattığı, hafta sonu uyku düzeninin değişip değişmediği, gece sık uyanıp uyanmadığı. Bu sorular bazen ilaç dozundan çok daha fazlasını anlatıyor. Uyku, bedava bir ilaçtır; ama reçete etmesini bilmek gerekiyor.

⚠ Sorumluluk Reddi: Bu içerik yalnızca genel bilgilendirme amaçlıdır ve bireysel tıbbi tavsiye yerine geçmez. Tedavi kararları için hekiminize danışınız.

Kaynak:

1. Reutrakul S, et al. Waking Up to the Importance of Sleep in Type 2 Diabetes Management: A Narrative Review. Diabetes Care. 2024;47(2).`,
  },
  "steroid-suistimali": {
    image: post3,
    category: "Sağlık",
    title: "Vücut Geliştirme İlaçlarının Riskleri: Steroid Suistimali Hakkında Bilmeniz Gerekenler",
    date: "26 Mayıs 2024",
    content: `Polikliniğimde zaman zaman genç hastalar karşıma çıkıyor; kas kütlesi kazanmak amacıyla tıbbi yeterliliği olmayan kişilerin önerisiyle çeşitli ilaçlara başlamışlar. Bu tabloyu her gördüğümde endişeyle karışık bir üzüntü duyuyorum. Bu yazıda Barbells and Ken: Bodybuilders and Androgenic Steroid Abuse başlıklı derlemenin öne çıkan bulgularını sizinle paylaşmak istiyorum; çünkü bu konuda doğru bilgi, yanlış bir kararı önleyebilir.

Kimler Kullanıyor, Neden?

Anabolik steroidler ve türevleri; kas kütlesi kazanmak ve atletik performansı artırmak amacıyla yaygın biçimde kötüye kullanılıyor. Kadınlarda son derece nadir görülen bu durum, erkeklerin ömürleri boyunca %1 ila 5'ini etkiliyor.

Hollanda menşeili HAARLEM çalışması, androjenik steroidleri (erkeklik hormonu benzeri ilaçlar) kötüye kullanan yaklaşık 100 erkek erişkini iki yıl boyunca takip etti. Katılımcı profiline bakıldığında dikkat çekici bir tablo çıkıyor: %90'ı lise veya üzeri eğitim düzeyine sahip, %99'u aktif vücut geliştirici ve %80'i daha önce de bu tür ilaçları kullanmış bireyler. Yani bu bir eğitimsizlik sorunu değil; doğru bilgiye ulaşamama ya da riski küçümseme sorunu.

Katılımcıların bu ilaçları genellikle satıcılardan, tanıdıklarından veya internetten temin ettiği görülmüş. Üstelik yaklaşık yarısı amfetamin ve kokain gibi yasadışı maddeleri de eş zamanlı kullandığını belirtmiş.

Sadece Steroid Değil, Çok Daha Geniş Bir Tablo

Araştırma yalnızca steroid kullanımının değil, çok daha geniş bir ilaç yelpazesinin bu amaçla kötüye kullanıldığını ortaya koyuyor. Büyüme hormonu, büyüme faktörü ve tiroid hormonu (tiroid bezinin ürettiği ve metabolizmayı düzenleyen hormon) da performans amacıyla kullanılan maddeler arasında yer alıyor.

Katılımcıların yüksek doz ve ardından düşük doz testosteron içeren döngüler uyguladığı görülmüş. Döngü sonrasında "detoks" aşamasına geçtiklerini belirten katılımcılar bu süreçte tamoksifen (%70), klomifen (%54), insan koryonik gonadotropini yani hCG (%55) veya bir aromataz inhibitörü (%32) kullandıklarını ifade etmiş. Başka bir deyişle hormonal dengeyi bozan bir ilacı düzeltmek için bir başka ilaç zinciri başlatılıyor; bu kez de tıbbi denetim dışında.

Vücuda Ne Yapıyor?

Kısa süreli kullanımlarda sağlık sorunları minimal ya da geri dönüşümlü olabiliyor. Asıl risk uzun vadede ortaya çıkıyor:

Çalışmada katılımcıların kan basıncı değerlerinde ve kolesterol düzeylerinde artış saptandı. Bir katılımcıda ise kalp yetmezliği gelişti. Uzun süreli kullanımın bilinen riskleri arasında yoksunluk sendromu, hipotalamus-hipofiz-testis ekseninde (beyinden testislere uzanan hormon üretim zinciri) kalıcı işlev bozukluğu ve kardiyovasküler hastalık riskinde artış yer alıyor.

Önemli Noktalar

✓ Anabolik steroid kullanımı eğitim düzeyinden bağımsız olarak her kesimde görülüyor; risk küçümsenmemeli.
✓ Steroidle birlikte büyüme hormonu, tiroid hormonu ve çeşitli ilaçların da kötüye kullanımı yaygın.
✓ Döngü sonrası uygulanan "detoks" protokolleri de tıbbi denetim dışında ciddi riskler taşıyor.
✓ Uzun süreli kullanım kalp yetmezliği dahil geri dönüşü güç sağlık sorunlarına yol açabiliyor.

Hekim Notu

Bu konuda kendi tutumumu net biçimde ifade etmeliyim: Performans amacıyla androjenik steroid, büyüme hormonu veya tiroid hormonu reçete etmek tıbbi etik açısından kabul edilemez ve bu talepleri karşılamıyorum. Spor salonları ve fitness merkezleri sağlıklı bir yaşam tarzını desteklemeli; mutlaka sağlık alanına gireceklerse bu konuda yetkin kişilerden destek almalıdırlar. Kaslarınızı büyütmek için vücudunuzun hormonal dengesini riske atmak, hiçbir estetik kazanıma değmez.

⚠ Sorumluluk Reddi: Bu içerik yalnızca genel bilgilendirme amaçlıdır ve bireysel tıbbi tavsiye yerine geçmez. Tedavi kararları için hekiminize danışınız.

Kaynak:

1. Smit DL, et al. Barbells and Ken: Bodybuilders and Androgenic Steroid Abuse. 2024.`,
  },
  "graves-hastaligi": {
    image: post4,
    category: "Sağlık",
    title: "Tiroid Beziniz Hızlı Çalışıyorsa Ne Olur? Graves Hastalığı Hakkında Merak Edilenler",
    date: "8 Mart 2026",
    content: `Kliniğimde Graves hastalığı tanısı alan hastalarımın ilk tepkisi çoğunlukla şaşkınlık oluyor. Çarpıntı, kilo kaybı, el titremesi gibi şikayetlerle geliyorlar; "tiroid" kelimesini duyunca ise ne anlama geldiğini tam olarak bilmiyorlar. Bu yazıda tiroid bezinin hızlı çalışmasına, yani hipertiroidi ve Graves hastalığına dair en sık sorulan soruları yanıtlıyorum.

Tiroid Bezi Nedir, Ne İşe Yarar?

Boynun ön bölgesinde, adem elmasının hemen altında soluk borusunun önünde yer alan kelebek şeklindeki bu bez, yaklaşık 10 ila 20 gram ağırlığında olup tiroid hormonlarını üretir. Beyindeki hipofiz bezinden salgılanan TSH (tiroid uyarıcı hormon) sinyaliyle çalışır. Tiroid fonksiyon testleri denildiğinde kanda ölçülen değerler TSH, serbest T3 ve serbest T4'tür; etkin formlar serbest olanlar olduğu için ölçümde bunlar tercih edilir.

Sık Sorulan Sorular

Tiroid hızlı çalışınca hangi belirtiler ortaya çıkar?

Sıcağa tahammülsüzlük, el titremesi, çarpıntı, kaygı hali, iştah normale göre artmış olmasına rağmen kilo kaybı, bağırsak hareketlerinde sıklaşma ve nefes darlığı en sık görülen yakınmalardır. Hızlı konuşma, aşırı hareketlilik, cilt kuruluğu ve kaşıntı da eşlik edebilir. Gözlerde yanma, batma ve dışa doğru büyüme ise özellikle dikkat edilmesi gereken bulgular arasındadır.

Tetkiklerde hipertiroidi nasıl anlaşılır?

TSH değerinin düşük, buna karşın serbest T3 ve serbest T4 değerlerinin normalin üzerinde olması hipertiroidiyi işaret eder.

Her hipertiroidi Graves hastalığı mıdır?

Hayır. Ancak en sık görülen tip Graves hastalığıdır. Graves tanısı için tiroid fonksiyon testlerine ek olarak kanda TSH reseptör antikoru (TRAb) bakılır; bu değerin yüksek çıkması tanıyı destekler.

Sintigrafi veya ultrason şart mı?

TRAb pozitif çıktığında ek görüntülemeye her zaman gerek yoktur. TRAb'ın negatif ya da ulaşılamaz olduğu durumlarda tiroid sintigrafisi veya radyoaktif iyot uptake taraması yapılabilir. Renkli Doppler ultrason deneyimli ellerde tanıya katkı sağlayabilir; ancak zorunlu değildir.

Graves hastalığında AntiTPO ve AntiTG yüksek olabilir mi?

Evet. Graves hastalarının yaklaşık %80'inde AntiTPO, %30 ila 40'ında ise AntiTG yüksekliği görülebilir. Bu durum zaman zaman tanı sürecinde kafa karışıklığına yol açabilir.

Göz ve cilt bulguları olur mu?

Graves hastalığında göz tutulumu ciddi bir tablo oluşturabilir; bazı hastalarda ameliyat ya da radyoterapi gerekebilir. Sigara kullanan hastalarda göz bulguları daha ağır bir seyir izler. Bu nedenle Graves tanısı alan hastalarıma sigarayı bırakmalarını her fırsatta hatırlatırım.

Tedavi seçenekleri nelerdir?

Üç temel seçenek vardır: ilaç tedavisi, radyoaktif iyot (atom) tedavisi ve ameliyat. Başlangıçta tiroid hormon üretimini baskılamak için ilaç tedavisi tercih edilir. Hastalığın tekrarlama ihtimali yüksek olduğundan yaklaşık 1 ila 2 yıllık ilaç kullanımının ardından kalıcı tedavi olarak atom tedavisi ya da ameliyat planlanabilir.

Hangi ilaç ne zaman kullanılır?

İki temel antitiroid ilaç (tiyonamid grubu, tiroid hormonu sentezini baskılayan ilaçlar) vardır: metimazol ve propiltiyourasil. Gebeliğin ilk üç ayında propiltiyourasil tercih edilirken diğer durumlarda genellikle metimazol öncelikli seçenektir. Semptomları hafifletmek amacıyla gebelik dışında betabloker adı verilen ilaçlar da ek olarak kullanılabilir.

İlaçların yan etkileri nelerdir, ne zaman bırakılmalıdır?

Cilt döküntüsü, eklem ağrısı, geçici kan hücresi azalması ve sindirim sistemi şikayetleri görülebilir; bunlar için ilacı kesmek gerekmez. Ancak akyuvar sayısında ani düşme (agranülositoz), damar iltihabı (vaskülit) ve karaciğer hasarı (hepatit) nadir fakat ciddi yan etkilerdir. Ciddi boğaz ağrısı, ateş ya da sarılık geliştiğinde hastanın vakit kaybetmeksizin hekimine başvurması ve bu durumlarda ilacın bırakılması gerekir.

Atom mu, ameliyat mı?

Ciddi göz bulgusu yoksa ve yakın dönemde gebelik planlanmıyorsa günümüzde radyoaktif iyot tedavisi öncelikli tercih olmaktadır. Atom tedavisinden 4 ila 6 hafta sonra tiroid fonksiyon testleri kontrol edilmeli; hipotiroidi gelişirse tedavisi düzenlenmelidir. Ameliyatta tiroid bezi tümüyle alındığı için işlemden hemen sonra tiroid hormon ilacına (levotiroksin) başlanır, 6 ila 8 hafta sonra doz ayarlaması yapılır.

Önemli Noktalar

✓ Graves hastalığında erken tanı ve tedavi, ciddi komplikasyonları önlemede belirleyici rol oynar.
✓ TRAb testi, Graves'i diğer hipertiroidi nedenlerinden ayırt etmenin en pratik yoludur.
✓ Göz tutulumu olan hastalarda sigara kullanımı hastalığın seyrini belirgin biçimde kötüleştirir; bırakmak tedavinin ayrılmaz parçasıdır.
✓ Antitiroid ilaç kullanırken ciddi boğaz ağrısı, ateş veya sarılık gelişirse hemen hekime başvurulmalıdır.
✓ Kalıcı tedavi olarak atom tedavisi veya ameliyat, hastalığın tekrarını önler.

Hekim Notu

Graves hastalığı tanısı koymak bazen zannedildiğinden güçtür; özellikle AntiTPO yüksekliği zaman zaman Hashimoto ile karıştırılmaya yol açar. Hastalarıma şunu söylüyorum: Şikayetlerinizin kaynağını bulmak için doğru testi doğru sırayla yapmak gerekir. Tanı netleşince tedavi yolculuğunuz da netleşir.

⚠ Sorumluluk Reddi: Bu içerik yalnızca genel bilgilendirme amaçlıdır ve bireysel tıbbi tavsiye yerine geçmez. Tedavi kararları için hekiminize danışınız.`,
  },
  "gestasyonel-diyabet": {
    image: post6,
    category: "Sağlık",
    title: "Gebelikte Ortaya Çıkan Şeker Hastalığı: Gestasyonel Diyabet",
    date: "29 Ağustos 2023",
    content: `Gestasyonel diabetes mellitus (GDM) nedir?\n\nDaha önce bilinen şeker hastalığı olmayan kadınlarda ilk kez gebelik sırasında ortaya çıkan şeker hastalığıdır.\n\nGebelikte neden şeker hastalığı ortaya çıkmaktadır?\n\nGebelik genellikle insülin direncinin eşlik ettiği bir durumdur. Pankreas organ fonksiyonlarının insülin direncini aşmakta yetersiz kaldığı durumlarda gebelikte şeker hastalığı gelişebilmektedir.\n\nDiyabet gebelikte neden önemlidir?\n\nDiyabetik gebelerde preeklampsi, haftasına göre çok büyük bebeklerin olması, sezaryen ihtiyacı gelişmesi vb istenmeyen durumlar meydana gelebilmektedir. Gebelikte şeker hastalığı gelişen kadınların geri kalan hayatlarında tip 2 şeker hastası olma olasılıkları yüksektir.\n\nHangi gebeler risk altındadır?\n\n• Önceki gebeliğinde gebelik şekeri olan\n• Açlık şekeri bozulmuş olan, 3 aylık şekeri (HbA1c) değeri ≥5.7 olan\n• Birinci derece yakınlarında şeker hastalığı olan\n• Gebelik öncesi vücut kitle indeksi (VKI) ≥30 kg/m2 olan ya da gebelikte ciddi kilo artışı olan\n• 35 yaş ve üzeri gebeler\n• Polikistik over sendromu (PKOS) gibi şeker hastalığına yatkınlık yapan hastalıkları olan\n• Daha önce 4000 gram ve üzeri bebek doğurmuş olanlar\n\nŞeker yüklemesi ile tarama yapılması neden önemlidir?\n\nTarama sonucu tespit edilen şeker hastalığının uygun bir şekilde tedavi edilmesi ile şekere bağlı komplikasyon oranlarında %40 azalma sağlanabilmektedir.\n\nTaramalar nasıl yapılmaktadır?\n\nGebeliğin 24-28. haftalar arasında şeker yüklemesi yapılarak gerçekleştirilmektedir.\n\nİki farklı yöntem bulunmaktadır:\n\n• İki adımlı (50 gr ve 100 gr glukoz yükleme (OGTT))\n• Tek adımlı (75 gr glukoz yükleme (OGTT))\n\nŞeker yüklemesini yaptıramayan ya da yaptırırken problem yaşayan gebelerde tarama amaçlı başka neler yapılabilir?\n\nBulantı ve/veya kusma nedeni ile şeker yüklemesini tolere edemeyenlerde şekerli içeceğin içerisine bir miktar buz ilave edilerek bu şikayetler azaltılabilir.\n\nŞeker yükleme yaptıramayan gebelerde açlık ve tokluk kan şekeri takipleri istenerek 1-2 hafta sonra kan tetkikleri ile yeniden değerlendirilebilir. Yüksek riskli bir gebe ise 32. hafta civarında bu takipler yeniden yaptırılabilir.\n\nGestasyonel diyabetli bireylerde ilaç tedavisi gerekli midir?\n\nGebelerin çoğunda diyet ve egzersiz gibi temel yaşam tarzı değişiklikleri ile kan şekeri değerleri kontrol altına alınabilir. Ancak gebelerin üçte birinde ilaç tedavisi ihtiyacı olabilmektedir.\n\nTedavide hedef kan şekeri değerleri kaç olmalıdır?\n\nAçlık kan şekeri <95 mg/dl, 1.saat tokluk şekeri <140 mg/dl ve 2.saat tokluk şekeri <120 mg/dl olmalıdır.\n\nHangi durumlarda ilaç tedavisine başlanmalıdır?\n\nDiyet ve egzersize rağmen kan şekeri değerleri yüksek seyrediyorsa ya da bebek olması gerekenden çok büyükse (makrozomik) kan şekeri değerleri normal olsa bile tedavi başlanabilir.\n\nTedavide hangi ilaçlar kullanılabilir?\n\nÖncelikle insülin tedavileri tercih edilmektedir. Regüler insülin, detemir, lispro, aspart insülin kullanılabilen seçenekler arasındadır. Metformin ve glibürid gibi şeker haplarının kullanılabileceğine dair görüşler mevcut olsa da ülkemizde henüz bu konuda fikir birliği bulunmamaktadır.\n\nDoğum sonrası da takip gerekli midir?\n\nDoğum sonrasında çoğu hastanın şekeri normal düzeyine döner. Ancak gebelikte diyabet gelişmiş kadınlarda doğum sonrası 4-12. haftalar arasında şeker yüklemesi ile şeker hastalığı taraması yapılması önerilmektedir. Bu hastaların hayatları boyunca şeker hastalığı meydana gelme riskleri bulunduğundan dönem dönem takip ve kontrollerinin yapılması uygun bir yaklaşım olacaktır.`,
  },
  "hipofiz-adenomu": {
    image: post7,
    category: "Sağlık",
    title: "Beyninizdeki Mercimek Tanesi: Hipofiz Adenomu Hakkında Merak Edilenler",
    date: "8 Mart 2026",
    content: `Kliniğimde zaman zaman şöyle bir tabloyla karşılaşıyorum: Hasta tamamen başka bir nedenle beyin görüntülemesi yaptırmış, raporda "hipofiz adenomu" yazıyor. O ana kadar hiçbir şikayeti olmayan kişi panikleyerek geliyor. Oysa çoğu zaman sakinleşmek için geçerli sebepler var. Bu yazıda hipofiz adenomuna dair en sık sorulan soruları yanıtlıyorum.

Hipofiz Bezi Nedir, Neden Bu Kadar Önemlidir?

Hipofiz bezi, beynin tabanında yer alan yaklaşık bir nohut büyüklüğündeki bir yapıdır. Küçük boyutuna karşın prolaktin, büyüme hormonu, ACTH (kortizol salınımını uyaran hormon), TSH (tiroid uyarıcı hormon), LH ve FSH (üreme hormonları) gibi kritik hormonları salgılayarak vücudun pek çok sistemini yönetir. Bu bezde gelişen iyi huylu tümörlere hipofiz adenomu adı verilir.

Toplumdaki görülme sıklığının yaklaşık %10 olduğu tahmin ediliyor. Büyük çoğunluğu yavaş seyirli ve iyi huylu olan bu tümörlerin önemli bir kısmı, başka bir nedenle yapılan görüntülemede tesadüfen saptanır; tıp dilinde buna "insidentaloma" (rastlantısal olarak bulunan kitle) denir.

Sık Sorulan Sorular

Mikroadenom ve makroadenom arasındaki fark nedir?

Boyuta göre ayrım yapılır. Görüntülemede 10 mm'nin altında saptananlar mikroadenom, 10 mm ve üzerindekiler makroadenom olarak adlandırılır. 40 mm'yi aşanlar ise dev adenom olarak tanımlanır.

Adenom tespit edilince ne yapılmalıdır?

Makroadenom saptandığında kişinin şikayetleri ve muayene bulguları ayrıntılı biçimde değerlendirilir; gerekirse görme alanı testi yapılır ve hormon düzeyleri ölçülür. Mikroadenomlarda ise klinik değerlendirmede şüphe varsa hormon tetkikleri istenir. Tüm adenom hastalarına ilk başvuruda hormon testlerinin yapılması gerektiğini savunan görüşler de mevcuttur.

Hangi şikayetlere yol açabilir?

Adenomların büyük çoğunluğu herhangi bir şikayete neden olmaz. Ancak kitle büyüdüğünde görme sinirlerini sıkıştırarak görme bozukluğuna yol açabilir. Buna ek olarak baş ağrısı, adet düzensizliği, ereksiyon sorunları, yorgunluk, kilo değişimleri, kabızlık, soğuğa tahammülsüzlük, eklem ağrıları, tansiyon düşüklüğü, bulantı ve kusma da görülebilir. Şunu belirtmek gerekir ki bu yakınmalar başka pek çok nedenden de kaynaklanabilir.

Hormon salgılayan adenomlarda ise tablo farklıdır; hangi hormonun fazla üretildiğine bağlı olarak kendine özgü bulgular ortaya çıkar.

Ne zaman ameliyat gerekir?

Aşağıdaki durumlarda cerrahi planlanabilir: görme alanında daralma gelişmesi, göz kaslarında felç oluşması, görme sinirlerinin sıkışması, hipofiz bezi içine ani kanama (hipofiz apopleksisi) ve takip sürecinde tümörün beklenmedik hızda büyümesi.

Görüntüleme takibi ne sıklıkla yapılmalı?

Makroadenomlar için ilk kontrol genellikle 6 ila 12 ay sonra yapılır, ardından yıllık görüntüleme ile izleme devam edilir. Mikroadenomlarda ise 4 mm'nin altındaki lezyonlarda kontrol görüntülemeye gerek yoktur. Daha büyük mikroadenomlarda 1 ila 2 yılda bir görüntüleme yeterlidir.

Önemli Noktalar

✓ Hipofiz adenomlarının büyük çoğunluğu tesadüfen saptanır ve herhangi bir tedavi gerektirmez.
✓ Boyut sınırı olan 10 mm, mikroadenom ile makroadenom arasındaki temel ayrım noktasıdır.
✓ Makroadenom saptandığında görme alanı değerlendirmesi ve hormon testleri ihmal edilmemelidir.
✓ Görme bozukluğu, göz kası felci veya ani baş ağrısı gelişmesi acil değerlendirme gerektirir.
✓ Takip sıklığı adenomun boyutuna ve hormon salgılayıp salgılamadığına göre kişiselleştirilmelidir.

Hekim Notu

"Beynimde tümör var" ifadesi hastaları doğal olarak endişelendiriyor. Ancak hipofiz adenomlarının büyük çoğunluğunun yavaş seyirli, iyi huylu ve birçok durumda müdahale gerektirmeyen lezyonlar olduğunu açıkladığımda yüzlerdeki ifadenin değiştiğini görüyorum. Panik değil, doğru takip gerekiyor. Tanıyı koyduktan sonraki en önemli adım, kişiye özgü bir izlem planı oluşturmak.

⚠ Sorumluluk Reddi: Bu içerik yalnızca genel bilgilendirme amaçlıdır ve bireysel tıbbi tavsiye yerine geçmez. Tedavi kararları için hekiminize danışınız.`,
  },
  "prolaktin-yuksekligi": {
    image: post8,
    category: "Sağlık",
    title: "Prolaktin Değerim Yüksek Çıktı: Panik Yapmadan Önce Bilmeniz Gerekenler",
    date: "8 Mart 2026",
    content: `Polikliniğimde en sık şu sahneyle karşılaşıyorum: Hasta elinde laboratuvar sonucu, yüzünde endişe. "Prolaktin yüksek çıktı, ne olacak şimdi?" diye soruyor. Çoğu zaman cevabım şu oluyor: "Önce sakin olalım, sonra konuşalım." Çünkü prolaktin yüksekliğinin pek çok masum nedeni var. Bu yazıda en sık sorulan soruları yanıtlıyorum.

Prolaktin Nedir, Neden Yükselir?

Hipofiz bezi, beynin tabanında Türk eyeri adı verilen kemik yapının içinde yer alan bezelye büyüklüğünde bir hormonal merkezdir. Buradan salgılanan prolaktin, halk arasında "süt hormonu" olarak bilinir; ancak hem kadınlarda hem de erkeklerde bulunur ve yükselebilir.

Çoğu laboratuvarda prolaktinin üst sınırı 20 ila 25 ng/ml'dir. Salgılanması gün içinde dalgalanır; en yüksek değerlere sabahın erken saatlerinde, uykunun REM evresinde ulaşır. Bu nedenle testin doğru koşullarda yapılması sonucu doğrudan etkiler.

Sık Sorulan Sorular

Prolaktin yüksekliği hangi şikayetlere yol açar?

Kadınlarda adet düzensizliği veya adet kesilmesi, baş ağrısı ve göğüsten süt gelmesi (galaktore) görülebilir. Erkeklerde ise enerji azlığı, cinsel isteksizlik, ereksiyon sorunları, kas ve kemik kaybı ile kısırlık ön plana çıkabilir.

Prolaktini yükselten fizyolojik yani normal nedenler nelerdir?

Gebelik, emzirme, meme ucunun uyarılması, yoğun egzersiz, stres, yüksek proteinli diyet, düşük kan şekeri ve göğüs duvarındaki bazı hastalıklar prolaktini geçici olarak yükseltebilir. Bu durumlarda paniğe gerek yoktur; neden ortadan kalkınca değer düzelir.

Hangi hastalıklar prolaktini yükseltir?

Hipofiz adenomları, hipotiroidi (tiroid bezinin yavaş çalışması), kronik böbrek yetmezliği, karaciğer sirozu, polikistik over sendromu (PKOS) ve bazı romatolojik hastalıklar patolojik yükselmenin başlıca nedenleri arasındadır.

Hangi ilaçlar prolaktini yükseltir?

Bazı psikiyatri ilaçları (antipsikotikler, antidepresanlar), metoklopramid içeren bulantı ilaçları ve bazı tansiyon ilaçları prolaktini artırabilir. İlaca bağlı yüksekliklerde değer genellikle 20 ila 100 ng/ml arasında kalır. Risperidon ve metoklopramid gibi bazı istisnalarda 200 ng/ml ve üzeri değerler görülebilir. İlaca bağlı şüphelenilen durumlarda mümkünse ilaç kesilip en erken 3 ila 4 gün sonra test tekrarlanması önerilir.

Test nasıl ve ne zaman yapılmalıdır?

Prolaktin değeri yemekten etkilendiğinden tercihen en az 8 saat açlık sonrasında ölçülmelidir. Aç karnına yapılmamış bir testte hafif yükseklik saptanmışsa test uygun koşullarda tekrarlanmalıdır.

Laboratuvar sonucu bizi yanıltabilir mi?

İki önemli tuzak vardır. Birincisi kanca etkisi (hook effect): Hipofizde çok büyük bir adenom olmasına karşın prolaktin değeri beklenenden düşük çıkabilir. Bu durumda kan örneği 1/100 oranında sulandırılarak yeniden ölçüm yapılmalıdır. İkincisi makroprolaktinemi: Kandaki prolaktinin büyük ve biyolojik olarak aktif olmayan bir formu olan makroprolaktin, laboratuvarda yükseklik olarak görünebilir ama klinik belirti vermez. Şikayet ve görüntüleme sonuçları prolaktin değeriyle uyumsuzsa bu ihtimal araştırılmalıdır.

Görüntüleme gerekli midir?

İlaç kullanımıyla açıklanamayan prolaktin yüksekliğinde hipofiz MR görüntülemesi önerilir. İlaca bağlı yükseklikte ise 100 ng/ml altındaki değerlerde MR çekilmesi genellikle tavsiye edilmez; risperidon kullanımında bu sınır 300 ng/ml olarak kabul edilmektedir.

Galaktore var ama prolaktin normal. Ne yapmalı?

Bu durumda hormonal açıdan ek bir değerlendirmeye gerek yoktur. Öncelikle başka nedenler araştırılmalıdır.

Tedavi ilaç mı, ameliyat mı?

Prolaktinomalar (prolaktin salgılayan hipofiz adenomları), hipofiz tümörleri arasında ilaç tedavisine en iyi yanıt veren gruptur. Kabergolin veya bromokriptin gibi ilaçlar ilk tercih olup birkaç ay içinde değerlerde belirgin düzelme sağlar. Ameliyat yalnızca ilaçlara yanıtsız durumlarda ya da 3 cm üzerindeki çok büyük adenomlarda, özellikle yakın dönemde gebelik planlanan kadınlarda gündeme gelebilir.

İlaçlar ne kadar süre kullanılmalıdır?

Mikroadenomlu (1 cm altı) hastalarda en az 1 yıl tedavi uygulanır. Yaklaşık 1 yıl sonra prolaktin değeri normale dönmüşse doz yavaş azaltılır. En az 2 yıldır prolaktin değeri normal ve MR'da adenom izlenmiyorsa ilaç kademeli olarak kesilir. Makroadenomlu hastalarda da adenom kaybolduktan ve prolaktin 2 yıl boyunca normale döndükten sonra benzer şekilde ilaç azaltılarak sonlandırılır.

İlaçların yan etkileri nelerdir?

Bulantı, baş dönmesi (özellikle ayağa kalkınca), zihinsel bulanıklık en sık görülenlerdir. Bunların yanı sıra burun tıkanıklığı, depresyon ve kabızlık da bildirilmiştir. İlacı akşam yemeğiyle ya da gece yatmadan önce almak bu etkileri azaltabilir. Çok nadir olmakla birlikte uzun süreli yüksek doz kullanımında kalp kapakçığı hastalığı ve dürtü kontrol bozuklukları görülebilir.

Gebelikte durum değişir mi?

Gebelikte fizyolojik prolaktin yüksekliği normaldir. Tedavi almakta olan bir hasta gebe kalırsa ilaç kesilmelidir. Mikroadenomlarda gebelikte anlamlı büyüme riski yaklaşık %2 iken makroadenomlu hastalarda bu oran %23'e yükselir. Bu nedenle mikroadenomlu gebeler 3 ayda bir, makroadenomlu gebeler ise her trimesterde görme alanı değerlendirmesiyle izlenmelidir.

Önemli Noktalar

✓ Prolaktin yüksekliğinin pek çok fizyolojik ve ilaç kaynaklı nedeni vardır; her yükseklik adenom anlamına gelmez.
✓ Test aç karnına ve doğru koşullarda yapılmalıdır; aksi halde sonuç yanıltıcı olabilir.
✓ Prolaktinomalar ilaç tedavisine en iyi yanıt veren hipofiz tümörleridir; ameliyat nadiren gerekir.
✓ Gebelik planlayan hastalarda takip protokolü değişir; bu durumu mutlaka hekiminizle konuşun.

Hekim Notu

Prolaktin yüksekliği haberini alan hastaların büyük çoğunluğu gereksiz yere panik yaşıyor. Oysa çoğu zaman tek gereken şey doğru koşullarda tekrar bir test ve kapsamlı bir değerlendirme. Panik yerine doğru soruyu sormak her zaman daha iyi bir başlangıç noktasıdır.

⚠ Sorumluluk Reddi: Bu içerik yalnızca genel bilgilendirme amaçlıdır ve bireysel tıbbi tavsiye yerine geçmez. Tedavi kararları için hekiminize danışınız.`,
  },
  "selenyum-ve-tiroid": {
    image: post9,
    category: "Sağlık",
    title: "Selenyum ve Tiroid: Takviye Almadan Önce Bilmeniz Gerekenler",
    date: "8 Mart 2026",
    content: `Hastalarım zaman zaman ellerinde bir kutu selenyum takviyeliğiyle geliyor. "Tiroid için iyi diye aldım" diyorlar. Bu yazıda selenyumun tiroid sağlığıyla ilişkisini bilimsel araştırmalar ışığında ele alıyorum; çünkü bu konuda hem umut verici hem de dikkatli olunmasını gerektiren veriler bir arada mevcut.

Selenyum Neden Bu Kadar Önemli?

1813 yılında keşfedilen selenyum, vücutta selenoprotein adı verilen özel protein yapılarının içinde yer alır. Bu yapılar tiroid hormon metabolizmasını destekler ve oksidatif strese karşı antioksidan işlev görür. Tiroid bezi, insan vücudunda selenyum içeriğinin en yüksek olduğu dokulardan biridir.

İyot eksikliği durumunda vücutta hidrojen peroksit (H2O2) birikimi artar ve tiroid hücrelerini hasar görmeye başlar. Selenoproteinler bu süreçte adeta bir kalkan görevi üstlenerek tiroid hücrelerini korumaya çalışır. Bu mekanizma, selenyumun tiroid sağlığıyla ilişkisinin temel biyolojik gerekçesini oluşturuyor.

Tiroid Hastalıklarında Selenyumun Rolü

Hipertiroidi (tiroid bezinin hızlı çalışması): Bazı araştırmalarda selenyum desteğinin iyileşme sürecini hızlandırabileceği bildirilmiş olsa da bu bulgu diğer çalışmalarla tutarlı biçimde desteklenemedi. Sonuç olarak hipertiroidideki yeri henüz netlik kazanmamıştır.

Graves orbitopatisi (Graves hastalığına bağlı göz tutulumu): Hafif göz tutulumu olan vakalarda 6 aylık selenyum kullanımının faydalı olabileceğine dair öneriler mevcuttur. Bu alan, selenyumun tiroid hastalıklarındaki en güçlü kanıta sahip olduğu başlıklardan biridir.

Hashimoto tiroiditi (bağışıklık sisteminin tiroid bezine saldırısı): Selenyum eksikliği, Hashimoto hastalığı için bir risk faktörü olarak tanımlanmaktadır. Bağışıklık sistemi üzerinde olumlu etkileri gösterilmiş olsa da selenyum takviyesinin hastalığın seyrini iyileştirip iyileştirmediği konusunda henüz net bir yanıt yoktur.

Tiroid kanseri: Selenyum eksikliği ile tiroid kanseri riski arasında bir ilişki olabileceğine dair görüşler bulunmaktadır. Bazı çalışmalarda selenyum eksikliği olan tiroid kanserli bireylerde hastalığın daha hızlı ilerlediği bildirilmiştir. Radyasyon tedavisi alacak hastalarda selenyum kullanımının tükürük bezleri üzerindeki olumsuz etkileri azaltabileceğine dair veriler de dikkat çekicidir.

Selenyum Takviyesi Alınmalı mı?

Selenyum insan vücudunda üretilemeyen bir mineraldir; ihtiyacımızın tamamı besinlerden karşılanır. Selenyumdan zengin besinler arasında fındık, balık, yumurta, tavuk, dana eti, brokoli, süt ve karaciğer sayılabilir.

Takviye formunda ise iki tür bulunur: inorganik form toksik etkiye sahip olup vücut tarafından iyi emilmez ve kullanımı uygun değildir. Organik (fitoaktif) form ise yüksek dozlarda bile ciddi toksik etki göstermediğinden tercih edilebilir bir formdur.

Selenyum kanda, idrarda ve saçta ölçülebilir; ancak bu ölçümler dokulardaki gerçek durumu tam olarak yansıtmayabilir. Kan değeri normal çıksa bile tiroid bezindeki selenyum düzeyi düşük olabilir.

Aşırı selenyum alımı da tehlikelidir. Kırılgan saçlar, tırnak kırılması, sindirim sistemi sorunları, cilt döküntüsü, kemik zayıflığı ve sinir sistemi bozuklukları selenyum zehirlenmesinin başlıca belirtileri arasındadır.

Önemli Noktalar

✓ Selenyum, tiroid hormon metabolizması ve oksidatif strese karşı koruma açısından kritik bir mineraldir.
✓ Graves orbitopatisinin hafif formlarında kısa süreli selenyum takviyesi faydalı olabilir; bu alan en güçlü kanıta sahip olandır.
✓ Hashimoto ve hipertiroidideki etkinliği ise hâlâ tartışmalıdır.
✓ Aşırı selenyum alımı zehirlenmeye yol açabilir; takviyeye başlamadan önce mutlaka hekim değerlendirmesi gereklidir.

Hekim Notu

Selenyum içerikli ürünlerin tiroid için faydalı olduğu söylentisi, özellikle Hashimoto hastalarımın bu takviyelere yönelmesine neden oluyor. Benim tutumum şu: Eksiklik kanıtlanmadan ve hekim değerlendirmesi yapılmadan başlatılan takviye tedavisi fayda sağlamayabilir, üstelik yanlış dozda zarara yol açabilir. "Doğal" etiketli her ürün güvenli değildir; içeriğini bilmediğiniz ve hekiminizin önermediği takviyelere temkinli yaklaşmanızı öneririm.

⚠ Sorumluluk Reddi: Bu içerik yalnızca genel bilgilendirme amaçlıdır ve bireysel tıbbi tavsiye yerine geçmez. Tedavi kararları için hekiminize danışınız.

Kaynaklar:

1. Wang F, et al. Selenium and thyroid diseases. Frontiers in Endocrinology. 2023;14:1133000.
2. Winther KH, et al. Selenium in thyroid disorders: essential knowledge for clinicians. Nature Reviews Endocrinology. 2020;16(3):165–176.
3. Gorini F, et al. Selenium: An Element of Life Essential for Thyroid Function. Molecules. 2021;26(23):7084.`,
  },
  "insulin-direnci": {
    image: post10, 
    category: "Sağlık",
    title: "İnsülin Direnci Nedir? Belirtileri, HOMA-IR Değeri ve Tedavi Yöntemleri",
    date: "13 Mart 2026",
    content: `Kliniğimde en sık duyduğum sorulardan biri şu: "Doktor, çok yoruluyorum, kilo veremiyorum, insülin direncim mi var acaba?" Bu soru yalnızca merak değil; çoğu zaman yıllardır süren bir yorgunluğun, inatlaşan bir kilonun ve açıklanamayan belirtilerin birikmiş sesini taşır. İnsülin direnci (hücrelerin insüline yeterince yanıt verememesi) günümüzde tip 2 diyabet ve metabolik sendromun öncüsü olarak karşımıza çıkıyor. Bu yazıda, ne olduğunu, nasıl anlaşıldığını ve ne yapılabileceğini birlikte ele alacağız.

### İnsülin Direnci Nedir?

İnsülin, pankreastan salgılanan ve kandaki şekerin (glikozun) hücre içine girerek enerjiye dönüşmesini sağlayan bir hormondur. İnsülin direnci geliştiğinde ise karaciğer, kas ve yağ dokusundaki hücreler bu hormona gereği gibi yanıt veremez hale gelir. Vücut bu durumu telafi etmek için daha fazla insülin üretir; bu da kanda yüksek insülin seviyelerine (hiperinsülinemi) yol açar. Zaman içinde pankreas bu yükü taşıyamazsa, kan şekeri yükselmekte ve tip 2 diyabete zemin hazırlamaktadır.

### İnsülin Direncinin Belirtileri Nelerdir?

İnsülin direnci çoğunlukla sinsi ilerler; yıllarca fark edilmeden devam edebilir. Ancak vücut bazı önemli sinyaller verir:

• **Boyun ve koltuk altında koyulaşma (Akantozis Nigrikans):** Deri kıvrımlarında kadifemsi, kahverengi-siyah lekelenmeler, insülin direncinin en tipik klinik bulgusudur.
• **Sürekli yorgunluk:** Hücreler kandaki şekeri enerji olarak kullanamadığından kişi kendini sürekli bitkin hisseder.
• **Tatlı ve karbonhidratlı besinlere aşırı istek:** Hücrelerin enerji açlığı ani yeme krizlerini tetikler.
• **Bel çevresinde yağlanma:** Özellikle karın ve iç organ çevresindeki (viseral) yağlanma artar.
• **Sık idrara çıkma ve aşırı susama:** Kan şekeri dengesizliklerine bağlı olarak sıvı ihtiyacı yükselir.
• **El ve ayaklarda uyuşma-karıncalanma:** Sinir dokusundaki hafif değişiklikler bu şikayete yol açabilir.

> **Önemli not:** Bu belirtilerin tamamının aynı anda görülmesi gerekmez. Tek bir belirti bile bir endokrinoloji uzmanına başvurmak için yeterlidir.

### İnsülin Direnci Nasıl Teşhis Edilir? HOMA-IR Değeri Kaç Olmalıdır?

İnsülin direncini kesin olarak ölçmenin "altın standart" yöntemi hiperinsülinemik-öglisemik klemp testidir. Ancak bu yöntem araştırma ortamlarında kullanılır; günlük klinik pratikte uygulanması mümkün değildir.

Kliniğimde en sık başvurduğum yöntem, açlık kan şekeri ve açlık insülin değerlerinden hesaplanan **HOMA-IR** (Homeostatik Model Değerlendirmesi - İnsülin Direnci) indeksidir. Formülü şudur:

$$HOMA-IR = \frac{Açlık\ insülini\ (\mu IU/mL) \times Açlık\ kan\ şekeri\ (mg/dL)}{405}$$

*(Not: mmol/L birimi kullanılıyorsa payda 22,5 olarak alınır.)*

Peki HOMA-IR kaç olmalı? Dünya genelinde kabul edilmiş tek bir evrensel sınır değer yoktur. Bilimsel verilere göre:

• **1,0 ile 2,0 arası:** Düşük riskli, sağlıklı kabul edilir.
• **2,0 ile 2,5 üzeri:** Pek çok çalışmada insülin direnci eşiği olarak değerlendirilir (Kosmas ve ark., 2024).
• Bazı toplumsal çalışmalarda metabolik sendrom için kesme noktası **2,43** olarak belirlenmiştir.

Bu değerler yaşa, cinsiyete ve etnik kökene göre farklılık gösterir. Bu yüzden sonuçlarınızı tek başınıza yorumlamaya çalışmayın; bir uzman hekim tarafından tüm klinik tablo değerlendirilmelidir.

### İnsülin Direnci Kilo Aldırır mı?

Hastaların sık sorduğu bir soru: "İnsülin direncim olduğu için mi kilo alıyorum?" Bilimsel veriler bu soruya ilginç bir yanıt veriyor.

Uzun vadeli (boylamsal) araştırmalar, insülin direncinin genellikle kilo almanın nedeni değil, sonucu olduğunu göstermektedir. Fazla kalori alımı ve buna bağlı yağlanma, vücutta iltihap sinyallerini (enflamasyon) tetikler; bu da hücrelerin insüline duyarsızlaşmasına yol açar. Araştırmacılar, insülin direncinin vücudun enerji fazlalığına karşı geliştirdiği bir savunma mekanizması olduğunu düşünmektedir (Li ve ark., 2022).

### İnsülin Direnci Nasıl Tedavi Edilir?

İyi haber şu: insülin direnci, doğru adımlarla büyük ölçüde geri döndürülebilir (**reversible**).

1. **Beslenme düzenlemesi:** Rafine karbonhidratlardan ve eklenti şekerden uzaklaşmak, glisemik indeksi düşük besinleri tercih etmek ve lif alımını artırmak insülin duyarlılığını belirgin şekilde iyileştirir.
2. **Düzenli egzersiz:** Haftada en az 150 dakika orta yoğunlukta aerobik egzersiz (örneğin tempolu yürüyüş), kasların insüline ihtiyaç duymadan kandaki şekeri kullanmasını sağlar. Mevcut vücut ağırlığının yalnızca %5-7'sini vermek bile tip 2 diyabet riskini %60 oranında azaltabilir (Ahn, 2025).
3. **İlaç tedavisi:** Yaşam tarzı değişikliklerinin yeterli olmadığı durumlarda birinci basamak ilaç olarak metformin kullanılır. Bunun yanı sıra GLP-1 reseptör agonistleri ve SGLT2 inhibitörleri gibi yeni nesil tedaviler de etkilidir.

### ÖNEMLİ NOKTALAR

✓ İnsülin direnci, hücrelerin insüline yeterince yanıt verememesiyle ortaya çıkar ve tip 2 diyabetin öncüsüdür.
✓ HOMA-IR 2,0 ile 2,5 üzerindeki değerler insülin direncine işaret edebilir; ancak sonuç mutlaka uzman hekim tarafından yorumlanmalıdır.
✓ Bilimsel veriler, insülin direncinin çoğunlukla kilo almanın nedeni değil sonucu olduğunu göstermektedir.
✓ Yaşam tarzı değişiklikleri tedavinin temelini oluşturur; vücut ağırlığının %5-7'sinin verilmesi bile diyabet riskini belirgin düşürür.

### Hekim Notu

Kliniğimde sık gördüğüm bir tablo şu: HOMA-IR değeri 2,8 çıkmış, hasta internette "2,5 üzeri tehlikeli" yazısını okumuş ve büyük bir endişeyle geliyor. Bu kaygıyı anlıyorum; ama tek bir sayının sizi tanımladığını düşünmeyin. HOMA-IR önemli bir ipucu, ancak klinik bir değerlendirme için bel çevresi ölçüsü, trigliserit düzeyi, aile öyküsü ve yaşam tarzı bir bütün olarak ele alınmalıdır. Öte yandan şunu da eklemeliyim: erken yakalandığında insülin direnci, ilaçsız yalnızca yaşam tarzı değişiklikleriyle bile tamamen geriletilebilir. Bu, endokrinolojide beni en çok umut veren tablolardan biridir.

⚠ **Sorumluluk Reddi:** Bu içerik yalnızca genel bilgilendirme amaçlıdır ve bireysel tıbbi tavsiye yerine geçmez. Tedavi kararları için hekiminize danışınız.

**Kaynaklar:**
1. Ahn, B. (2025). Advances in insulin resistance: molecular mechanisms, therapeutic targets, and future directions. International Journal of Molecular Sciences, 26(6), 2574.
2. Kosmas, C. E., et al. (2024). Biomarkers of insulin sensitivity/resistance. Journal of International Medical Research, 52(10), 1–40.
3. Li, M., et al. (2022). Trends in insulin resistance: insights into mechanisms and therapeutic strategy. Signal Transduction and Targeted Therapy, 7(1), 216.`,
},
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const post = slug ? postsData[slug] : null;
  const fullUrl = `https://www.ensaraydemir.com${location.pathname}`;

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
          {post.content.split("\n\n").map((paragraph, i) => {
            const trimmed = paragraph.trim();
            const isSubheading =
              i > 0 &&
              trimmed.length > 0 &&
              trimmed.length < 100 &&
              !trimmed.startsWith("•") &&
              !trimmed.startsWith("✓") &&
              !trimmed.startsWith("⚠") &&
              !/^\d+\.\s/.test(trimmed) &&
              !trimmed.endsWith(".") &&
              trimmed.split(" ").length < 15;

            if (isSubheading) {
              return (
                <p key={i} className="font-serif text-lg font-semibold text-foreground pt-4">
                  {trimmed}
                </p>
              );
            }
            return <p key={i}>{paragraph}</p>;
          })}
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            to="/"
            className="text-xs uppercase tracking-widest text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
          >
            ← Tüm Yazılar
          </Link>
          <ShareButtons title={post.title} url={fullUrl} />
        </div>
      </article>

      <BlogFooter />
    </div>
  );
};

export default BlogPost;
