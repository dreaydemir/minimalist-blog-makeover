# Dr. Ensar Aydemir — WordPress Teması

Minimalist editoryal tıp blogu teması.

## Dosya Yapısı

```
ensar-aydemir/
├── style.css              ← Ana stil dosyası (tema başlığı dahil)
├── functions.php          ← Tema kurulumu, menü, widget, font yükleme
├── header.php             ← Üst kısım: logo, menü
├── footer.php             ← Alt kısım: widget alanı, telif hakkı
├── front-page.php         ← Anasayfa: hero, son yazılar, hakkımda
├── index.php              ← Varsayılan blog listesi
├── single.php             ← Tekil yazı sayfası
├── page.php               ← Statik sayfa şablonu
├── archive.php            ← Kategori/etiket arşivi
├── 404.php                ← Sayfa bulunamadı
├── js/
│   └── main.js            ← Mobil menü ve kopyalama JS
├── images/
│   ├── hero-blog.jpg      ← Hero arka plan görseli
│   └── about-portrait.jpg ← Hakkımda bölümü fotoğrafı
└── screenshot.png         ← Tema önizleme görseli (1200x900 px)
```

## Kurulum

1. Bu klasörü `ensar-aydemir` olarak adlandırın
2. `images/` klasörüne `hero-blog.jpg` ve `about-portrait.jpg` dosyalarını ekleyin
3. 1200×900 px boyutunda bir `screenshot.png` oluşturun
4. Klasörü ZIP yapın
5. WordPress Yönetim Paneli → Görünüm → Temalar → Yeni Ekle → Tema Yükle
6. Aktifleştirin

## Kurulum Sonrası

- **Menü:** Görünüm → Menüler → "Ana Menü" oluşturun ve "primary" konumuna atayın
- **Widget:** Görünüm → Widget → "Footer Widget Alanı"na widget ekleyin
- **Yazılar:** Her yazıya öne çıkan görsel eklemeyi unutmayın
- **Sayfalar:** "Hakkımda" ve "İletişim" sayfalarını oluşturun
- **Anasayfa:** Ayarlar → Okuma → "Statik bir sayfa" seçin ve front-page olarak ayarlayın (veya "Son yazılarınız" seçili bırakın — front-page.php otomatik kullanılır)
