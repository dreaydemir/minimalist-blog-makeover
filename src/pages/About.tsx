import BlogHeader from "@/components/BlogHeader";
import BlogFooter from "@/components/BlogFooter";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      {/* Hero */}
      <section className="container mx-auto grid gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div className="flex items-center justify-center">
          <div className="h-72 w-72 overflow-hidden rounded-full ring-4 ring-primary/20 ring-offset-4 ring-offset-background shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.25)] md:h-96 md:w-96">
            <img
              src={aboutPortrait}
              alt="Dr. Ensar Aydemir"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Hakkımda</p>
          <h1 className="mt-4 font-serif text-4xl font-medium leading-tight text-foreground md:text-5xl">
            Dr. Ensar Aydemir
          </h1>
          <p className="mt-2 text-sm font-medium text-muted-foreground">
            Endokrinoloji ve Metabolizma Hastalıkları Uzmanı
          </p>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Ensar Aydemir, 1985 Erzurum doğumlu olup evlidir. İlk ve orta öğrenimini
            Gebze'de tamamladı. Lisans eğitimini 2003-2010 yılları arasında Hacettepe
            Üniversitesi Tıp Fakültesi'nde, iç hastalıkları uzmanlık eğitimini 2013-2017
            yılları arasında Marmara Üniversitesi Pendik Eğitim ve Araştırma Hastanesi'nde
            ve son olarak Endokrinoloji uzmanlık eğitimini de 2019-2023 yılları arasında
            Bursa Uludağ Üniversitesi Tıp Fakültesi'nde aldı. Nisan 2023 tarihinden
            itibaren bir devlet hastanesinde Endokrinoloji ve Metabolizma Hastalıkları
            uzmanı olarak görev yapmaktadır.
          </p>
        </div>
      </section>

      {/* Eğitim */}
      <section className="border-t border-border">
        <div className="container mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-serif text-2xl font-medium text-foreground">Eğitim</h2>
          <div className="mt-6 space-y-6">
            {[
              { period: "2019 – 2023", title: "Endokrinoloji ve Metabolizma Hastalıkları Uzmanlığı", place: "Bursa Uludağ Üniversitesi Tıp Fakültesi" },
              { period: "2013 – 2017", title: "İç Hastalıkları Uzmanlığı", place: "Marmara Üniversitesi Pendik Eğitim ve Araştırma Hastanesi" },
              { period: "2003 – 2010", title: "Tıp Fakültesi", place: "Hacettepe Üniversitesi" },
            ].map((edu) => (
              <div key={edu.period} className="flex gap-6">
                <span className="w-28 shrink-0 text-xs uppercase tracking-widest text-muted-foreground pt-0.5">
                  {edu.period}
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">{edu.title}</p>
                  <p className="text-sm text-muted-foreground">{edu.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yayınlar */}
      <section className="border-t border-border">
        <div className="container mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-serif text-2xl font-medium text-foreground">Bilimsel Yayınlar</h2>

          {/* Uluslararası */}
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-foreground">
            A. Uluslararası Yayınlar
          </h3>
          <ol className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground list-decimal list-inside">
            <li>
              Aydemir, E., Ünsal, Y., Ateş, C., Cander, S., Gül, Ö. Ö., Saraydaroğlu, Ö., … &amp; Ertürk, E. (2023). Differences between atypical parathyroid tumors and parathyroid adenomas in patients with primary hyperparathyroidism. <em>Indian Journal of Surgery</em>, 1-10.
            </li>
            <li>
              Ünsal, Y. A., Gül, Ö. Ö., Cander, S., Ersoy, C., Aydemir, E., Ateş, C., … &amp; Ertürk, E. (2021). Retrospective analysis of vitamin D status on inflammatory markers and course of the disease in patients with COVID-19 infection. <em>Journal of Endocrinological Investigation</em>, 44(12), 2601–2607.
            </li>
            <li>
              Ünsal, Y. A., Gül, Ö. Ö., Gürbüz, B., Cander, S., Aydemir, E., &amp; Ersoy, C. (2021). Effects of continuous subcutaneous insulin infusion on clinical parameters in patients with different sociodemographic and clinical characteristics. <em>International Journal of Diabetes in Developing Countries</em>, 1-6.
            </li>
            <li>
              Sisman, P., Polat, I., Aydemir, E., Karsi, R., Gul, O. O., Cander, S., … &amp; Erturk, E. (2021). How the COVID-19 outbreak affected patients with diabetes mellitus?. <em>International Journal of Diabetes in Developing Countries</em>, 1-9.
            </li>
          </ol>

          {/* Ulusal */}
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-foreground">
            B. Ulusal Yayınlar
          </h3>
          <ol className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground list-decimal list-inside">
            <li>
              Ünsal, Y. A., Özen, Ö. Z., Cander, S., Ersoy, C., Aydemir, E., … &amp; Ertürk, E. (2021). Retrospective Evaluation of The Cases with Malignant Pheochromocytoma: A Single Center Experience. <em>Turkish Journal of Internal Medicine</em>, 3(Supplement 1), 31-33.
            </li>
            <li>
              Aydemir, E., Özen, Ö. Z., Ünsal, Y. A., … &amp; Ertürk, E. (2021). Coexistence of Medullary and Papillary Thyroid Carcinomas Detected Incidentally. <em>Turkish Journal of Internal Medicine</em>, 3(Supplement 1), 1-3.
            </li>
            <li>
              Ünsal, Y. A., Özen, Ö. Z., Cander, S., Ersoy, C., Aydemir, E., … &amp; Ertürk, E. (2020). Osteogenezis imperfekta tanılı bireylerde teriparatid tedavisinin retrospektif olarak değerlendirilmesi. <em>Uludağ Üniversitesi Tıp Fakültesi Dergisi</em>, 46(3), 373-378.
            </li>
          </ol>

          {/* Kitap Bölümleri */}
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-foreground">
            C. Kitap Bölümleri
          </h3>
          <ul className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <li>
              <em>Klinik Pratikte Endokrinolojik ve Metabolik Hastalıklara Yaklaşım</em> — Bölüm: Diyabetik Aciller (2021). Bursa Tabip Odası Yayınları, Ed: Özyardımcı Ersoy, Canan. ISBN: 978-605-9665-62-9.
            </li>
            <li>
              <em>Klinik Pratikte Endokrinolojik ve Metabolik Hastalıklara Yaklaşım</em> — Bölüm: Diyabet Teknolojileri (2021). Bursa Tabip Odası Yayınları.
            </li>
            <li>
              <em>Klinik Pratikte Endokrinolojik ve Metabolik Hastalıklara Yaklaşım</em> — Bölüm: Diyabette Beslenme (2021). Bursa Tabip Odası Yayınları.
            </li>
          </ul>

          {/* Poster / Sözlü Bildiriler */}
          <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-foreground">
            D. Poster ve Sözlü Bildiriler
          </h3>
          <ul className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <li>Karaaslan, S., Aydemir, E., et al. (2021). Hypertriglyceridemia induced recurrent pancreatitis case. <em>Turkish Journal of Internal Medicine</em>, 3(S1), 101-103.</li>
            <li>Akyol, M. N., Aydemir, E., et al. (2021). Pituitary Stalk Interruption Syndrome: A Case Report. <em>Turkish Journal of Internal Medicine</em>, 3(S1), 96-97.</li>
            <li>Gürbüz, B., Aydemir, E., et al. (2021). Premenopausal osteoporosis in a patient with autoimmune polyglandular syndrome. <em>Turkish Journal of Internal Medicine</em>, 3(S1), 98-100.</li>
            <li>Şahin, M., Aydemir, E., et al. (2021). Endogenous Obesity Associated with Cushing's Disease. <em>Turkish Journal of Internal Medicine</em>, 3(S1), 104-106.</li>
            <li>Aydemir, E., et al. (2021). A Case of very Severe Hypertriglyceridemia during Pregnancy. <em>Turkish Journal of Internal Medicine</em>, 3(S1), 94-95.</li>
            <li>Aydemir, E., et al. (2021). A Case of Resistant Hypocalcemia Treated with Teriparatide. <em>Turkish Journal of Internal Medicine</em>, 3(S1), 92-93.</li>
            <li>Ünsal, Y. A., et al. (2021). An Unusual Cause of Hypoglycemia: Insulin Autoimmune Syndrome. <em>Turkish Journal of Internal Medicine</em>, 3(1), 30-34.</li>
            <li>Aydemir, E., et al. (2021). Papiller tiroid kanseri ve nöroendokrin tümör tanıları bulunan bir akromegali olgusu. <em>16. Hipofiz Sempozyumu</em>, Ankara, Sözel Bildiri.</li>
            <li>Ateş, C., et al. (2021). Obez Hastalarda VKI'ye Göre Framingham Risk Skorlarının Karşılaştırılması. <em>17. Uludağ İç Hastalıkları Ulusal Kış Kongresi</em>.</li>
            <li>Ünsal, Y. A., et al. (2021). Malign Feokromasitoma Olgularının Değerlendirilmesi. <em>17. Uludağ İç Hastalıkları Ulusal Kış Kongresi</em>.</li>
            <li>Aydemir, E., et al. (2021). Tesadüfen Saptanan Medüller ve Papiller Tiroid Karsinomunun Birlikteliği. <em>17. Uludağ İç Hastalıkları Ulusal Kış Kongresi</em>.</li>
            <li>Ünsal, Y. A., et al. (2021). Diabetes insipidus tanısıyla takip edilen olguların değerlendirilmesi. <em>42. Türkiye Endokrinoloji ve Metabolizma Hastalıkları Kongresi</em>.</li>
            <li>Ünsal, Y. A., et al. (2021). Foliküler tiroid karsinomunun bilateral orbita metastazı. <em>42. Türkiye Endokrinoloji ve Metabolizma Hastalıkları Kongresi</em>.</li>
            <li>Ateş, C., et al. (2021). Ektopik ACTH salgılayan bronşial karsinoid tümör. <em>42. Türkiye Endokrinoloji ve Metabolizma Hastalıkları Kongresi</em>.</li>
            <li>Ateş, C., et al. (2021). Mediastinal paratiroid adenomu. <em>42. Türkiye Endokrinoloji ve Metabolizma Hastalıkları Kongresi</em>.</li>
            <li>Ateş, C., et al. (2021). Latent otoimmün diyabetle prezente olan otoimmun poliglandüler sendrom vakası. <em>17. Uludağ İç Hastalıkları Kış Kongresi</em>.</li>
            <li>Ünsal, Y. A., et al. (2021). Radyoaktif İyot Tedavisine Sekonder Gelişen Kronik Miyeloid Lösemi. <em>17. Uludağ İç Hastalıkları Kış Kongresi</em>.</li>
            <li>Ünsal, Y. A., et al. (2021). Multipl Epifizer Displazi Olgusunda Osteoporoz. <em>17. Uludağ İç Hastalıkları Kış Kongresi</em>.</li>
            <li>Aydemir, E., et al. (2022). Differences between atypical parathyroid tumors and parathyroid adenomas. <em>Society for Endocrinology ECE 2022</em>, Milano, Italy. Endocrine Abstracts 81 EP342.</li>
            <li>Aydemir, E., et al. (2022). A diabetic foot case with bilateral Charcot arthropathy. <em>Endocrine Abstracts</em> (Vol. 81). Bioscientifica.</li>
          </ul>
        </div>
      </section>

      {/* İletişim */}
      <section className="border-t border-border">
        <div className="container mx-auto max-w-3xl px-6 py-16">
          <h2 className="font-serif text-2xl font-medium text-foreground">İletişim</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Benimle iletişime geçmek veya blog yazıları hakkında görüş bildirmek için
            aşağıdaki kanalları kullanabilirsiniz.
          </p>
          <div className="mt-4 flex items-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xs uppercase tracking-widest text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground">Instagram</a>
            <a href="mailto:info@ensaraydemir.com" className="text-xs uppercase tracking-widest text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground">E-posta</a>
          </div>
        </div>
      </section>

      <BlogFooter />
    </div>
  );
};

export default About;
