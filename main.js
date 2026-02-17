const translations = {
    tr: {
        nav: {
            home: "Anasayfa",
            about: "Hakkımızda",
            products: "Ürünler",
            gallery: "Galeri",
            contact: "İletişim",
            sectors: "Sektörler"
        },
        hero: {
            title: "Plastikte <span>Mükemmellik</span> ve İnovasyon",
            subtitle: "HMPLAST olarak, medikalden otomotive tüm sektörler için yüksek hassasiyetli plastik çözümleri üretiyoruz.",
            cta: "Ürünlerimizi Keşfedin",
            btn2: "Kataloğu İndir"
        },
        about: {
            title: "Geleceği Şekillendiriyoruz",
            subtitle: "Hakkımızda",
            content1: "HM Plast, Türkiye pazarında öncü firmalardan biri olarak 10 yılı aşkın tecrübesiyle, müşteri memnuniyetini odak noktasına koyarak hizmet vermektedir.",
            content2: "Eğitim, oyuncak, otomotiv, spor aletleri ve özellikle medikal sektörü gibi plastiğin girdiği her alanda, Asya ve Avrupa pazarlarındaki iş birliklerimizle faaliyetlerimize devam ediyoruz.",
            content3: "Vakum, enjeksiyon ve şişirme teknolojilerimizle, profesyonel kadromuzun titiz işçiliğini birleştirerek en karmaşık projelerinizi hayata geçiriyoruz.",
            f1: "Yüksek Kalite",
            f1d: "Uluslararası standartlarda sertifikalı ham madde kullanımı.",
            f2: "İleri Teknoloji",
            f2d: "En son teknoloji enjeksiyon ve vakum makineleri.",
            f3: "Geniş Sektör Deneyimi",
            f3d: "Medikalden otomotive çok yönlü üretim kabiliyeti.",
            f4: "Global İş Birlikleri",
            f4d: "Asya ve Avrupa pazarlarında güçlü çözüm ortakları."
        },
        stats: {
            years: "Yıllık Deneyim",
            projects: "Başarılı Proje",
            machines: "Makina Parkuru",
            clients: "Mutlu Müşteri"
        },
        products: {
            title: "Üretim Kabiliyetlerimiz",
            subtitle: "Ürünler ve Hizmetler",
            all: "Tümü",
            mechanism: "Mekanizma",
            spare: "Yedek Parça",
            machine: "Makina Parkı",
            tag_mechanism: "Tıbbi Mekanizma",
            tag_spare: "Plastik Parça",
            tag_machine: "Makina"
        },
        sectors: {
            title: "Hizmet Verdiğimiz Sektörler",
            subtitle: "Uzmanlık Alanlarımız",
            medikal: "Medikal ve Sağlık",
            automotive: "Otomotiv",
            education: "Eğitim ve Oyuncak",
            sports: "Spor ve Rekreasyon"
        },
        contact: {
            title: "Bizimle İletişime Geçin",
            subtitle: "İletişim",
            address: "Adres",
            phone: "Telefon",
            email: "E-posta",
            name_p: "Adınız Soyadınız",
            email_p: "E-posta Adresiniz",
            subj_p: "Konu",
            msg_p: "Mesajınız",
            send: "Mesajı Gönder",
            sending: "Gönderiliyor...",
            success: "Mesajınız iletildi. Teşekkür ederiz!"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About Us",
            products: "Products",
            gallery: "Gallery",
            contact: "Contact",
            sectors: "Sectors"
        },
        hero: {
            title: "<span>Excellence</span> and Innovation in Plastic",
            subtitle: "As HMPLAST, we produce high-precision plastic solutions for all sectors from medical to automotive.",
            cta: "Explore Our Products",
            btn2: "Download Catalog"
        },
        about: {
            title: "Shaping the Future",
            subtitle: "About Us",
            content1: "HM Plast, as one of the leading companies in the Turkish market with more than 10 years of experience, provides services by focusing on customer satisfaction.",
            content2: "We continue our activities in every field where plastic is involved, such as education, toys, automotive, sports equipment and especially the medical sector, with our collaborations in Asian and European markets.",
            content3: "By combining our vacuum, injection and blow molding technologies with the meticulous workmanship of our professional staff, we realize your most complex projects.",
            f1: "High Quality",
            f1d: "Use of certified raw materials at international standards.",
            f2: "Advanced Tech",
            f2d: "Latest technology injection and vacuum machines.",
            f3: "Sector Experience",
            f3d: "Versatile production capability from medical to automotive.",
            f4: "Global Partners",
            f4d: "Strong solution partners in Asian and European markets."
        },
        stats: {
            years: "Years Experience",
            projects: "Projects Completed",
            machines: "Machine Pool",
            clients: "Happy Clients"
        },
        products: {
            title: "Our Production Capabilities",
            subtitle: "Products and Services",
            all: "All",
            mechanism: "Mechanism",
            spare: "Spare Parts",
            machine: "Machinery",
            tag_mechanism: "Medical Mechanism",
            tag_spare: "Plastic Part",
            tag_machine: "Machine"
        },
        sectors: {
            title: "Sectors We Serve",
            subtitle: "Our Expertise",
            medikal: "Medical & Health",
            automotive: "Automotive",
            education: "Education & Toys",
            sports: "Sports & Recreation"
        },
        contact: {
            title: "Get in Touch",
            subtitle: "Contact",
            address: "Address",
            phone: "Phone",
            email: "Email",
            name_p: "Full Name",
            email_p: "Email Address",
            subj_p: "Subject",
            msg_p: "Message",
            send: "Send Message",
            sending: "Sending...",
            success: "Your message has been sent. Thank you!"
        }
    }
};

const productList = [
    // Medikal Mekanizmalar (Yeni Görsellerden)
    { title: { tr: "Hastane Yatağı Yan Korkuluk", en: "Hospital Bed Side Rail" }, cat: "mechanism", img: "WhatsApp Image 2026-02-16 at 21.03.05 (1).jpeg" },
    { title: { tr: "Yatak Sabitleme Aparatı", en: "Bed Fixation Part" }, cat: "mechanism", img: "WhatsApp Image 2026-02-16 at 21.03.05 (2).jpeg" },
    { title: { tr: "Kilitleme Mekanizması", en: "Locking Mechanism" }, cat: "mechanism", img: "WhatsApp Image 2026-02-16 at 21.03.05 (3).jpeg" },
    { title: { tr: "Plastik Montaj Grubu", en: "Plastic Assembly Group" }, cat: "mechanism", img: "WhatsApp Image 2026-02-16 at 21.03.05 (4).jpeg" },
    { title: { tr: "Medikal Destek Parçası", en: "Medical Support Part" }, cat: "mechanism", img: "WhatsApp Image 2026-02-16 at 21.03.05 (5).jpeg" },
    { title: { tr: "Teleskopik Bağlantı", en: "Telescopic Connector" }, cat: "mechanism", img: "WhatsApp Image 2026-02-16 at 21.03.05 (6).jpeg" },
    { title: { tr: "Korkuluk Butonu", en: "Railing Button" }, cat: "mechanism", img: "WhatsApp Image 2026-02-16 at 21.03.05 (7).jpeg" },
    
    // Plastik Ürünler / Yedek Parçalar
    { title: { tr: "Özel Enjeksiyon Kalıbı", en: "Custom Injection Mold" }, cat: "spare", img: "ürünler 1.jpeg" },
    { title: { tr: "Endüstriyel Bağlantı Elemanı", en: "Industrial Fastener" }, cat: "spare", img: "ürünler2.jpeg" },
    { title: { tr: "Yüksek Hassasiyetli Parça", en: "High Precision Part" }, cat: "spare", img: "ürünler3.jpeg" },
    { title: { tr: "Plastik Gövde Grubu", en: "Plastic Shell Group" }, cat: "spare", img: "ürünler4.jpeg" },
    { title: { tr: "Teknik Yedek Parça", en: "Technical Spare Part" }, cat: "spare", img: "ürünler 5.jpeg" },
    
    // Makina Parkı
    { title: { tr: "Vakum Şişirme Ekipmanı", en: "Vacuum Blow Molding" }, cat: "machine", img: "mmakina parkı.jpeg" },
    { title: { tr: "Enjeksiyon Makinası 1", en: "Injection Machine 1" }, cat: "machine", img: "mmakina parkı 1.jpeg" },
    { title: { tr: "Üretim Hattı Detayı", en: "Production Line Detail" }, cat: "machine", img: "mmakina parkı2.jpeg" }
];

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('lang') || 'tr';
    const header = document.querySelector('header');
    const langBtn = document.getElementById('lang-toggle');
    const productContainer = document.getElementById('product-container');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function updateContent() {
        const t = translations[currentLang];
        
        // Universal data-key update
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            const keys = key.split('.');
            let val = t;
            keys.forEach(k => { val = val[k]; });
            
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = val;
            } else if (el.tagName === 'BUTTON' || el.classList.contains('btn')) {
                // Check if it has an icon
                const icon = el.querySelector('i');
                if (icon) {
                    el.innerHTML = `${icon.outerHTML} ${val}`;
                } else {
                    el.innerHTML = val;
                }
            } else {
                el.innerHTML = val;
            }
        });

        langBtn.textContent = currentLang === 'tr' ? 'EN' : 'TR';
        displayProducts();
    }

    function displayProducts(category = 'all') {
        if (!productContainer) return;
        productContainer.innerHTML = '';
        const t = translations[currentLang];
        const filtered = category === 'all' 
            ? productList 
            : productList.filter(p => p.cat === category);

        filtered.forEach((p, index) => {
            const card = document.createElement('div');
            card.className = 'product-card reveal';
            const tag = p.cat === 'mechanism' ? t.products.tag_mechanism : p.cat === 'machine' ? t.products.tag_machine : t.products.tag_spare;
            
            card.innerHTML = `
                <div class="product-img">
                    <img src="/images/products/${encodeURIComponent(p.img)}" loading="lazy" alt="${p.title[currentLang]}">
                </div>
                <div class="product-info">
                    <span class="product-tag">${tag}</span>
                    <h3>${p.title[currentLang]}</h3>
                </div>
            `;
            productContainer.appendChild(card);
            
            // Re-observe
            observer.observe(card);
        });
    }

    // Scroll Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once visible
                // observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Scroll Header Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Event Listeners
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'tr' ? 'en' : 'tr';
        localStorage.setItem('lang', currentLang);
        updateContent();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayProducts(btn.dataset.filter);
        });
    });

    // Mobile Menu (Simple toggle)
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.flexDirection = 'column';
                navLinks.style.background = 'white';
                navLinks.style.padding = '2rem';
                navLinks.style.textAlign = 'center';
            }
        });
    }

    // Init
    updateContent();
});
