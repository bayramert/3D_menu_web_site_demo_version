// =========================================
// VIEW: MenuView.js
// =========================================

const MenuView = {

  render(data, activeCategory = 'all') {
    const filteredItems = activeCategory === 'all'
      ? data.menu
      : data.menu.filter(item => item.category === activeCategory);

    return `
      <div class="page-enter">
        <section style="background:var(--black); padding:160px 48px 80px; text-align:center; position:relative; overflow:hidden;">
          <div class="hero__grid" style="opacity:.4"></div>
          <div style="position:relative;z-index:2">
            <p style="font-family:var(--font-display);font-size:12px;letter-spacing:5px;color:var(--red);text-transform:uppercase;margin-bottom:16px">☕ RUZ Café</p>
            <h1 style="font-family:var(--font-display);font-size:clamp(48px,8vw,88px);font-weight:700;color:var(--white);text-transform:uppercase;line-height:.95;margin-bottom:20px">
              Menümüz
            </h1>
            <p style="font-size:16px;color:rgba(255,255,255,.45);max-width:440px;margin:0 auto">
              Ürünlerimizi ve 3D modelleri inceleyin.
            </p>
          </div>
        </section>

        <section class="section section--dark" id="menu">
          <div class="menu-categories">
            <button class="menu-cat-btn ${activeCategory === 'all' ? 'active' : ''}" data-category="all">Tümü</button>
            ${data.categories.map(cat => `
              <button class="menu-cat-btn ${activeCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
                ${cat.emoji} ${cat.label}
              </button>
            `).join('')}
          </div>

          <div class="menu-grid" id="menu-grid">
            ${filteredItems.map(item => this._renderCard(item)).join('')}
          </div>
        </section>
      </div>
    `;
  },

  _renderCard(item) {
    const visual = item.modelSrc 
      ? `
        <model-viewer 
          src="${item.modelSrc}" 
          alt="${item.name}" 
          auto-rotate 
          camera-controls 
          touch-action="pan-y" 
          shadow-intensity="1" 
          class="menu-card__front-3d">
        </model-viewer>
      ` 
      : `<div class="menu-card__front-img">${item.emoji}</div>`;

    return `
      <div class="menu-card" data-id="${item.id}">
        ${visual}
        ${item.badge ? `<div class="menu-card__hint">${item.badge}</div>` : ''}
        <div class="menu-card__front-body">
          <div class="menu-card__category-tag">${item.category.toUpperCase()}</div>
          <div class="menu-card__name">${item.name}</div>
          <div class="menu-card__desc">${item.desc}</div>
          <div class="menu-card__details">${item.details}</div>
        </div>
        <div class="menu-card__price">${item.price}</div>
      </div>
    `;
  }

};