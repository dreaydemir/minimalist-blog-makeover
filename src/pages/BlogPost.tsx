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
  "gestasyonel-diyabet": {
    image: post6,
    category: "Sağlık",
    title: "Gebelikte Ortaya Çıkan Şeker Hastalığı: Gestasyonel Diyabet",
    date: "29 Ağustos 2023",
    content: `Gestasyonel diabetes mellitus (GDM) nedir?\n\nDaha önce bilinen şeker hastalığı olmayan kadınlarda ilk kez gebelik sırasında ortaya çıkan şeker hastalığıdır.\n\nGebelikte neden şeker hastalığı ortaya çıkmaktadır?\n\nGebelik genellikle insülin direncinin eşlik ettiği bir durumdur. Pankreas organ fonksiyonlarının insülin direncini aşmakta yetersiz kaldığı durumlarda gebelikte şeker hastalığı gelişebilmektedir.\n\nDiyabet gebelikte neden önemlidir?\n\nDiyabetik gebelerde preeklampsi, haftasına göre çok büyük bebeklerin olması, sezaryen ihtiyacı gelişmesi vb istenmeyen durumlar meydana gelebilmektedir. Gebelikte şeker hastalığı gelişen kadınların geri kalan hayatlarında tip 2 şeker hastası olma olasılıkları yüksektir.\n\nHangi gebeler risk altındadır?\n\n• Önceki gebeliğinde gebelik şekeri olan\n• Açlık şekeri bozulmuş olan, 3 aylık şekeri (HbA1c) değeri ≥5.7 olan\n• Birinci derece yakınlarında şeker hastalığı olan\n• Gebelik öncesi vücut kitle indeksi (VKI) ≥30 kg/m2 olan ya da gebelikte ciddi kilo artışı olan\n• 35 yaş ve üzeri gebeler\n• Polikistik over sendromu (PKOS) gibi şeker hastalığına yatkınlık yapan hastalıkları olan\n• Daha önce 4000 gram ve üzeri bebek doğurmuş olanlar\n\nŞeker yüklemesi ile tarama yapılması neden önemlidir?\n\nTarama sonucu tespit edilen şeker hastalığının uygun bir şekilde tedavi edilmesi ile şekere bağlı komplikasyon oranlarında %40 azalma sağlanabilmektedir.\n\nTaramalar nasıl yapılmaktadır?\n\nGebeliğin 24-28. haftalar arasında şeker yüklemesi yapılarak gerçekleştirilmektedir.\n\nİki farklı yöntem bulunmaktadır:\n\n• İki adımlı (50 gr ve 100 gr glukoz yükleme (OGTT))\n• Tek adımlı (75 gr glukoz yükleme (OGTT))\n\nŞeker yüklemesini yaptıramayan ya da yaptırırken problem yaşayan gebelerde tarama amaçlı başka neler yapılabilir?\n\nBulantı ve/veya kusma nedeni ile şeker yüklemesini tolere edemeyenlerde şekerli içeceğin içerisine bir miktar buz ilave edilerek bu şikayetler azaltılabilir.\n\nŞeker yükleme yaptıramayan gebelerde açlık ve tokluk kan şekeri takipleri istenerek 1-2 hafta sonra kan tetkikleri ile yeniden değerlendirilebilir. Yüksek riskli bir gebe ise 32. hafta civarında bu takipler yeniden yaptırılabilir.\n\nGestasyonel diyabetli bireylerde ilaç tedavisi gerekli midir?\n\nGebelerin çoğunda diyet ve egzersiz gibi temel yaşam tarzı değişiklikleri ile kan şekeri değerleri kontrol altına alınabilir. Ancak gebelerin üçte birinde ilaç tedavisi ihtiyacı olabilmektedir.\n\nTedavide hedef kan şekeri değerleri kaç olmalıdır?\n\nAçlık kan şekeri <95 mg/dl, 1.saat tokluk şekeri <140 mg/dl ve 2.saat tokluk şekeri <120 mg/dl olmalıdır.\n\nHangi durumlarda ilaç tedavisine başlanmalıdır?\n\nDiyet ve egzersize rağmen kan şekeri değerleri yüksek seyrediyorsa ya da bebek olması gerekenden çok büyükse (makrozomik) kan şekeri değerleri normal olsa bile tedavi başlanabilir.\n\nTedavide hangi ilaçlar kullanılabilir?\n\nÖncelikle insülin tedavileri tercih edilmektedir. Regüler insülin, detemir, lispro, aspart insülin kullanılabilen seçenekler arasındadır. Metformin ve glibürid gibi şeker haplarının kullanılabileceğine dair görüşler mevcut olsa da ülkemizde henüz bu konuda fikir birliği bulunmamaktadır.\n\nDoğum sonrası da takip gerekli midir?\n\nDoğum sonrasında çoğu hastanın şekeri normal düzeyine döner. Ancak gebelikte diyabet gelişmiş kadınlarda doğum sonrası 4-12. haftalar arasında şeker yüklemesi ile şeker hastalığı taraması yapılması önerilmektedir. Bu hastaların hayatları boyunca şeker hastalığı meydana gelme riskleri bulunduğundan dönem dönem takip ve kontrollerinin yapılması uygun bir yaklaşım olacaktır.`,
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
