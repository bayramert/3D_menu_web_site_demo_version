// =========================================
// CONTROLLER: AppController.js
// =========================================

const AppController = {

  init() {
    NavView.render();
    NavView.bindScroll();
    NavView.bindHamburger();
    FooterView.render(AppData.site);

    // URL'ye göre doğru sayfayı aç (hash dahil)
    this.handleRoute(window.location.pathname + window.location.hash);

    // Tarayıcı geri/ileri butonları için
    window.addEventListener('popstate', (e) => {
      this.handleRoute(window.location.pathname + window.location.hash, false);
    });

    // Tıklamaları yakala ve sayfayı yenilemeden URL'yi değiştir
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[data-link]');
      if (link) {
        e.preventDefault();
        const targetPath = link.getAttribute('href');
        this.navigate(targetPath);
      }

      // Menü sayfasında kategori değiştirme
      const catBtn = e.target.closest('.menu-cat-btn');
      if (catBtn) {
        const category = catBtn.dataset.category;
        const root = document.getElementById('app-root');
        root.innerHTML = MenuView.render(AppData, category);
        // URL'yi kategori ile güncelle
        window.history.pushState(null, null, `/menu#${category}`);
      }

      // Site içi # (hakkımızda vb.) linklerine yumuşak kaydırma
      const anchor = e.target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const hash = anchor.getAttribute('href');
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  },

  navigate(path) {
    if ((window.location.pathname + window.location.hash) === path) return;
    window.history.pushState(null, null, path);
    this.handleRoute(path, true);
  },

  handleRoute(path, shouldScroll = true) {
    const root = document.getElementById('app-root');
    const metaDesc = document.getElementById('meta-desc');

    document.getElementById('mobile-nav')?.classList.remove('open');
    if (shouldScroll) window.scrollTo({ top: 0, behavior: 'smooth' });

    const [pathname, hash] = (path || '').split('#');
    if (pathname === '/menu' || pathname.endsWith('/menu')) {
      const category = hash || 'all';
      root.innerHTML = MenuView.render(AppData, category);
      NavView.setActive('menu');
      
      document.title = "Menü — RUZ Café | Kahvaltı, Kahve ve Yemek";
      if (metaDesc) metaDesc.setAttribute('content', "RUZ Café menüsü: kahvaltılar, ana yemekler, pizzalar, makarnalar, tatlılar ve sıcak kahveler.");
    } else {
      root.innerHTML = HomeView.render(AppData);
      NavView.setActive('home');

      document.title = "RUZ Café – Hayatın Tadı | Eyüpsultan Kahve & Yemek";
      if (metaDesc) metaDesc.setAttribute('content', "2012'den bu yana Eyüpsultan'da, taze malzemeler ve sevgiyle hazırlanan lezzetlerin buluşma noktası.");
    }
  }

};

document.addEventListener('DOMContentLoaded', () => AppController.init());
