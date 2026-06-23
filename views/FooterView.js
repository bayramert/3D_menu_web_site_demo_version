// =========================================
// VIEW: FooterView.js
// =========================================

const FooterView = {

  render(site) {
    const el = document.getElementById('app-footer');
    el.innerHTML = `
      <footer class="footer">
        <div class="footer__grid">
          <div class="footer__brand">
            <div class="navbar__logo" style="margin-bottom:8px">
              <div class="navbar__logo-icon">R</div>
              <div class="navbar__logo-text">RUZ <span>CAFÉ</span></div>
            </div>
            <p>${site.tagline} — Her lokmada bir hikaye. 2012'den beri İstanbul'dayız.</p>
          </div>

          <div class="footer__col">
            <h4>Keşfet</h4>
            <ul>
              <li><a href="/" data-link>Anasayfa</a></li>
              <li><a href="/menu" data-link>Menü</a></li>
              <li><a href="#about">Hakkımızda</a></li>
            </ul>
          </div>

          <div class="footer__col">
            <h4>İletişim</h4>
            <div class="footer__contact-item"><span>Adres</span><span>${site.address}</span></div>
            <div class="footer__contact-item"><span>Saatler</span><span>${site.hours}</span></div>
            <div class="footer__contact-item"><span>Tel</span><span>${site.phone}</span></div>
            <div class="footer__contact-item"><span>E-posta</span><span>${site.email}</span></div>
          </div>
        </div>

        <div class="footer__bottom">
          <p class="footer__copy">© 2024 <span>RUZ Café</span>. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    `;
  }

};
