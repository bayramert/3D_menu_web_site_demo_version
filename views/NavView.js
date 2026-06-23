// =========================================
// VIEW: NavView.js
// =========================================

const NavView = {

  render() {
    const nav = document.getElementById('app-nav');
    nav.innerHTML = `
      <nav class="navbar" id="navbar">
        <div class="navbar__logo">
          <div class="navbar__logo-icon">R</div>
          <div class="navbar__logo-text">RUZ <span>CAFÉ</span></div>
        </div>

        <ul class="navbar__links" id="nav-links">
          <li><a href="/" data-link class="nav-link" id="nav-link-home">Anasayfa</a></li>
          <li><a href="/menu" data-link class="nav-link" id="nav-link-menu">Menü</a></li>
          <li><a href="#about" class="nav-link">Hakkımızda</a></li>
        </ul>

        <div class="navbar__hamburger" id="hamburger" aria-label="Menüyü Aç">
          <span></span><span></span><span></span>
        </div>
      </nav>

      <div class="mobile-nav" id="mobile-nav">
        <a href="/" data-link class="nav-link">Anasayfa</a>
        <a href="/menu" data-link class="nav-link">Menü</a>
        <a href="#about" class="nav-link">Hakkımızda</a>
      </div>
    `;
  },

  setActive(page) {
    const homeBtn = document.getElementById('nav-link-home');
    const menuBtn = document.getElementById('nav-link-menu');
    
    if (homeBtn) homeBtn.classList.remove('active');
    if (menuBtn) menuBtn.classList.remove('active');

    if (page === 'home' && homeBtn) homeBtn.classList.add('active');
    if (page === 'menu' && menuBtn) menuBtn.classList.add('active');
  },

  bindScroll() {
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  },

  bindHamburger() {
    const btn = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    if (!btn) return;
    btn.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
  }

};
