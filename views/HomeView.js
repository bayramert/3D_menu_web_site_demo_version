// =========================================
// VIEW: HomeView.js
// =========================================

const HomeView = {

  render(data) {
    return `
      <div class="page-enter">
        ${this._renderHero(data.site)}
        ${this._renderCategories(data.categories)}
        ${this._renderAbout()}
      </div>
    `;
  },

  _renderHero(site) {
    return `
      <section class="hero" id="home">
        <div class="hero__grid"></div>
        <div class="hero__inner">
          <div class="hero__content">
            <p class="hero__eyebrow">${site.name} — ${site.tagline}</p>
            <h1 class="hero__title">
              Sakin Bir
              <em>Kahve Molası</em>
            </h1>
            <p class="hero__subtitle">
              Eyüpsultan'da ahşap, adaçayı tonları ve sade lezzetlerle kurulmuş sıcak bir buluşma noktası.
            </p>
            <div class="hero__actions">
              <a href="/menu" data-link class="btn btn--primary">Menüyü Keşfet</a>
              <a href="#about" class="btn btn--outline">Mekanı Tanı</a>
            </div>
            <div class="hero__meta">
              <div class="hero__meta-item">
                <span>Konum</span>
                <strong>Eyüpsultan</strong>
              </div>
              <div class="hero__meta-item">
                <span>Saatler</span>
                <strong>${site.hours.replace('Her gün ', '')}</strong>
              </div>
              <div class="hero__meta-item">
                <span>Stil</span>
                <strong>Sade ve sıcak</strong>
              </div>
            </div>
          </div>
          <div class="hero__visual" aria-hidden="true">
            <div class="interior-scene">
              <div class="interior-scene__mirror"></div>
              <div class="interior-scene__frames"></div>
              <div class="interior-scene__chair interior-scene__chair--left"></div>
              <div class="interior-scene__table"></div>
              <div class="interior-scene__chair interior-scene__chair--right"></div>
              <div class="interior-scene__pedestal"></div>
            </div>
          </div>
        </div>
        <div class="hero__scroll">Keşfet</div>
      </section>
    `;
  },

  _renderCategories(categories) {
    const tones = [
      ['#ffffff', '#eef1eb'],
      ['#ffffff', '#f1e1d8'],
      ['#ffffff', '#efe4d5'],
      ['#f8f5ef', '#dbe1d7'],
      ['#ffffff', '#f6f1ea'],
      ['#fbf7f0', '#e7cfc3']
    ];

    return `
      <section class="section section--cream" style="padding-top:0;padding-bottom:0;">
        <div class="categories">
          ${categories.map((cat, index) => `
            <a href="/menu#${cat.id}" data-link class="category-card" style="text-decoration: none;">
              <div class="category-card__bg" style="background:linear-gradient(135deg, ${tones[index % tones.length][0]} 0%, ${tones[index % tones.length][1]} 100%); opacity:1;"></div>
              <div class="category-card__content">
                <div class="category-card__number">${String(index + 1).padStart(2, '0')}</div>
                <div class="category-card__line"></div>
                <div class="category-card__label">${cat.label}</div>
                <div class="category-card__desc">${cat.description}</div>
                <div class="category-card__cta">İncele</div>
              </div>
            </a>
          `).join('')}
        </div>
      </section>
    `;
  },

  _renderAbout() {
    return `
      <section class="section section--cream" id="about">
        <div class="about-grid">
          <div class="about-visual">
            <div class="about-img-main">
              <iframe 
                src="https://www.google.com/maps?q=%C4%B0slambey%2C%20Ruznameci%20Sk.%20NO%3A9%2C%2034050%20Ey%C3%BCpsultan%2F%C4%B0stanbul&output=embed" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div class="about-img-badge">
              <strong>12</strong>
              <span>Yıldır</span>
              <span>Açığız</span>
            </div>
          </div>
          <div class="about-text">
            <h3>Kimiz Biz?</h3>
            <h2>Lezzet Bir<br>Tutkudur</h2>
            <p>
              2012'den bu yana Eyüpsultan'da, her sabah aynı tutku ve özenle kapılarımızı açıyoruz. RUZ'da sade bir masa, iyi kahve ve özenli tabaklar etrafında yavaşlayan anlara yer açıyoruz.
            </p>
            <div class="about-features">
              <div class="about-feature">Taze Malzeme</div>
              <div class="about-feature">Yerel Üretici</div>
              <div class="about-feature">El Yapımı Tarifler</div>
              <div class="about-feature">Ev Sıcaklığı</div>
            </div>
            <a href="/menu" data-link class="btn btn--primary">Menüyü Gör</a>
          </div>
        </div>
      </section>
    `;
  }

};
