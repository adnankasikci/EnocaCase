# ENOCA Case Uygulaması (React - Vite - Typescript Calculator)

Bu proje, Enoca firmasının challange uygulamasıdır. <b>Vite.js</b> platformunda <b>React.js ve Typescript</b> kullanılarak geliştirilmiş bir hesap makinesidir. Modern, duyarlı ve kullanıcı dostu bir tasarıma sahip olan bu uygulama, genişletilebilir yapısıyla işlerinizi yönetmek için kolay bir yol sunar.

**Özellikler**

- Temel matematiksel işlemler (Toplama, çıkarma, çarpma, bölme, sıfırlama, yüzde alma, tersine çevirme) bulunur.
- Klavye desteği ile hızlı giriş bulunur. (0-9 & Enter & BackSpace & C & +-*/)
- `Dark` / `Light` tema desteği (Context API ve LocalStorage)
- Uygulama, yeniden kullanılabilir ve yönetilebilir bileşenlerle yapılandırılmıştır.
- Hesap makinesi işlemleri `useReducer` hook'u ile kontrol edilir; karmaşık işlem akışları kolayca yönetilir.
- Geçersiz işlemlerde hata yakalanır; kullanıcıya çökmeden gösterilir.
- Son 3 hesaplama geçmişi listelenir. Her işlemde ifade ve sonuç birlikte gösterilir.
- Proje, okunabilirliği yüksek TypeScript kodu ve anlaşılır dosya yapısıyla yeni fonksiyonlar ve operatörler (örn. %, √, x²) kolaylıkla eklenebilir.

--

**Kullanılan Teknolojiler**

- **Frontend**:
  - HTML5, CSS3, Javascript ES6
  - Vite.js
  - React.js
  - Typescript
  - Tailwind CSS
  - Styled Components / CSS Modules


- **Yapısal Teknolojiler ve Kullanılan Araçlar**:
  - Context API: Uygulama genelinde tema yönetimi `(Dark/Light)` için global state çözümü olarak kullanıldı.
  - useReducer Hook: Hesaplama işlemleri ve karmaşık state yönetimi için `Reducer` yapısı tercih edildi.
  - useEffect / useState: Komponent yaşam döngüsü ve dinamik veri kontrolü için kullanıldı.
  - Responsive Tasarım: Tailwind CSS ile mobil uyumlu, esnek grid yapısı ve uyarlanabilir bileşenler kullanıldı.
  - Keyboard Event Handling: Klavye üzerinden girişleri algılayan `keydown` dinleyicisi eklendi.
  - Component-Based Architecture: Her bileşen ayrı dosyada yönetilerek okunabilirlik sağlandı.
  - SVG Yönetimi: Tema değişimine göre dinamik olarak değişen SVG geçişleri (ChangeSVG bileşeni ile) sağlandı.
  - eval() Fonksiyonu Kullanımı: Temel işlemleri hesaplamak için kontrollü `eval()` fonksiyonu sağlandı.
  - Uygulama bileşenleri arası veri aktarımı, tip güvenliği sağlanarak `interface & type & props` gerçekleştirildi.
  - Dizi yapıları ve Map fonksiyonu ile dinamik listeleme sağlandı.Efektif render performansı elde edildi.


- **Bağımlılık Yönetimi**:
  - NPM Paket Yönetimi (Frontend Bağımlılıkları)
  - Git & Github (Versiyon Kontrolü)

<br>
<br>

**Proje Görselleri**

<p align="center">
  <img src="/finalScreen/Screen01.png" width="200" style="margin-right: 15px; max-width: 100%;"/>
  <img src="/finalScreen/Screen02.png" width="200" style="margin-right: 15px; max-width: 100%;"/>
  <img src="/finalScreen/Screen03.png" width="233" style="max-width: 100%;" />
</p>

<p align="center">
  <img src="/finalScreen/Screen04.png" width="200" style="margin-right: 15px; max-width: 100%;" />
  <img src="/finalScreen/Screen05.png" width="200" style="margin-right: 15px; max-width: 100%;" />
  <img src="/finalScreen/Screen06.png" width="200" style="max-width: 100%;" />
</p>

<br>
<br>

## Projeyi Yerel Sunucunuzda Çalıştırın

Proje yerel bir geliştirme sunucusunda çalıştırılmak üzere tasarlanmıştır.

1. Proje deposunu klonlayın.
2. Frontend bağımlılıklarını yükleyin:
   - `npm install`
3. Projeyi başlatın:
   - Frontend için: `npm run dev`
4. Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görüntüleyebilirsiniz.

<br>

## İletişim

Herhangi bir öneriniz veya geri bildiriminiz varsa, lütfen göndermekten çekinmeyin. Teşekkürler!
<br> <br>