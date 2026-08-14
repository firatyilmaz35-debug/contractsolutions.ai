# Contract Solution AI — Frontend

Bu paket, onayladığınız kurumsal ana sayfa görselinden esinlenerek hazırlanmış, doğrudan yayına alınabilir statik frontend sürümüdür.

## Dosyalar

- `index.html` — ana sayfa
- `styles.css` — tüm tasarım ve responsive yapı
- `app.js` — mobil menü ve temel etkileşimler
- `assets/hero-approved-style.jpg` — onayladığınız görselden alınan hero görseli
- `assets/favicon.svg` — geçici logo/favicon

## Lokal olarak açma

En kolay yöntem: `index.html` dosyasına çift tıklayın.

Daha düzgün geliştirme ortamı için VS Code kullanıyorsanız **Live Server** eklentisi ile klasörü açabilirsiniz.

Alternatif olarak terminalden:

```bash
python -m http.server 8080
```

Sonra tarayıcıda:

```text
http://localhost:8080
```

## Backend'e bağlama

`app.js` dosyasının en altında örnek `fetch()` yapısı bırakıldı.

Backend ekibinden ihtiyaç duyulacak temel bilgiler:

1. API base URL
2. Login endpoint'i
3. Dosya yükleme endpoint'i
4. Contract analysis endpoint'i
5. Claims / notices / EOT endpoint'leri
6. Authentication yöntemi (JWT / session vb.)
7. CORS ayarları
8. Request ve response JSON örnekleri

Backend dokümantasyonu geldiğinde bu landing page'in yanında kullanıcı paneli/dashboard da aynı tasarım diliyle bağlanabilir.

## Font

Başlıklarda **Libre Caslon Display**, gövde metninde **DM Sans** kullanıldı. Google Fonts üzerinden yüklenir.

## Görseller

Hero görseli yerel dosyadır. Bazı sektör kartlarında prototip amacıyla Unsplash görselleri kullanılmaktadır. Üretim sürümünde tüm görsellerin şirketin kendi lisanslı/generatif görselleriyle değiştirilmesi tavsiye edilir.

## Yayına Alma — Vercel

En pratik yöntem:

1. Bu klasörü GitHub repository'sine yükleyin.
2. Vercel hesabı açın.
3. **Add New → Project** ile GitHub repository'nizi seçin.
4. Framework seçmeniz gerekmez; bu proje statik HTML/CSS/JS'dir.
5. Deploy edin.
6. Vercel size önce `...vercel.app` şeklinde geçici bir adres verir.
7. Vercel Project → **Settings → Domains** bölümünden kendi alan adınızı ekleyin.
8. Vercel'in gösterdiği DNS kaydını alan adınızı aldığınız firmanın DNS paneline girin.

### Alan adı örneği

Alan adınız:

```text
contractsolution.ai
```

ise iki kullanım mümkündür:

```text
contractsolution.ai
www.contractsolution.ai
```

Vercel paneli size hangi DNS kayıtlarını girmeniz gerektiğini otomatik gösterir. Apex/root domain için genellikle A kaydı, `www` gibi subdomain için CNAME kaydı istenir.

DNS değişikliğinin yayılması biraz zaman alabilir.

## Önemli

Eğer mevcut alan adınızda şirket e-postaları da çalışıyorsa MX/TXT kayıtlarını silmeyin. Sadece Vercel'in istediği web kayıtlarını değiştirin.


## Content update
This version keeps the same design, but updates:
- Hero slogan to:
  "A Unified AI-Powered Workspace for Contract, Claim and Delay Management"
- Hero supporting line to:
  "AI-Powered Contract Management, Claim Preparation and Delay Analysis"
- Solutions section text to include:
  - Contract Preparation & Review
  - Claim Preparation
  - Delay & EOT Analysis
  - Variation & Change Orders
  - Arbitration & Dispute Supports
  - FIDIC & NEC Contract Intelligence


## v3 update
- Any remaining “FAQ” label was replaced with “About”
- The brand mark/logo was upgraded with a custom SVG monogram for Contract Solution AI


## v4 update
- Added `People` to the top navigation before `About`
- Added a dedicated `people.html` page
- Added `People` to the footer company links
- Page structure is ready for real team names and photographs later


## v5 update
- Selected blue Contract Solution AI logo added to the site
- `Who We Serve` updated to:
  - Construction Companies
  - Contract & Claims Consultancies
  - Law Firms
  - Design & Engineering Consultancies
  - Employers & Developers
- New `Sectors` section added:
  - Infrastructure
  - Rail & Transportation
  - Energy
  - Buildings & Real Estate
  - Industrial Projects


## v6 update
- Added dedicated solution page: `contract-preparation-review.html`
- Updated the Contract Preparation & Review card to open the new page
- Dedicated page includes:
  - solution overview
  - key capabilities
  - workflow
  - target user groups
  - book-a-demo CTA


## v7 update — consolidated site update
- Added `Open Workspace` beside `Book Demo`
- `Open Workspace` currently points to `https://app.contractsolutions.ai`
- Removed the Insights cards from the homepage
- Added a dedicated blog-style `insights.html` page with category filters
- Updated navigation to:
  - Solutions
  - Who We Serve
  - Sectors
  - Insights
  - People
  - About
  - Open Workspace
  - Book Demo
- Kept `People` as a separate page
- Kept `Contract Preparation & Review` as a dedicated solution page
- Added `vercel.json` with `cleanUrls: true`, so Vercel serves:
  - `/insights`
  - `/people`
  - `/contract-preparation-review`
  instead of requiring `.html`
- Package is FLAT / Vercel-ready: `index.html` is at ZIP root.

## Deployment note
Use the FLAT ZIP package. `index.html` and `vercel.json` are at ZIP root.
After extracting the ZIP, run from that extracted folder:
`npx.cmd vercel link`
then:
`npx.cmd vercel --prod`


## Update 1
- All six Solutions now link to dedicated pages:
  - /contract-preparation-review
  - /claim-preparation
  - /delay-eot-analysis
  - /variation-change-orders
  - /arbitration-dispute-support
  - /fidic-nec-contract-intelligence
- Footer Solutions list updated to all six solutions across the site.
- Homepage hero hierarchy updated:
  - AI-Powered Contract Intelligence enlarged.
  - A Unified AI-Powered Workspace for Contract, Claim and Delay Management reduced for readability.
- Open Workspace button changed to logo-matched blue.


## Update 2
- Open Workspace now points to the internal `/workspace` page.
- Added a dedicated workspace landing page at `/workspace`.
- Removed the secondary `Book a Demo` button from the homepage hero.
- Header `Book Demo` remains unchanged.
- Workspace landing page is ready to connect to the real AI application later.


## Update 3
- Increased all section overline labels to the same visual scale as `AI-POWERED CONTRACT INTELLIGENCE`.
- Applies consistently to labels such as:
  - OUR PURPOSE
  - FEATURED SOLUTIONS
  - WHO WE SERVE
  - SECTORS
  - INSIGHTS
  - PEOPLE
  - THE CHALLENGE
  - KEY CAPABILITIES
  - WORKFLOW
  - DESIGNED FOR
  - WORKSPACE MODULES
- Dark-section overlines retain readable light colouring.


## Update 4
- Section labels enlarged again across the site
- More meaningful icons for solution and who-we-serve cards
- Dedicated pages created for each "Who We Serve" audience
- Dedicated Book Demo page created
- Contact strip updated with address and email
- All who-we-serve cards now use visual backgrounds
- Footer links updated to dedicated pages
- Open Workspace button kept as blue and linked to /workspace
