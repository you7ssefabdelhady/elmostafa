/* ============================================================
   منطق عرض الصفحات المشترك — كتالوج عرض بدون سلة ولا أسعار
   ============================================================ */

const ICONS = {
  gate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 21V6l8-3 8 3v15M4 21h16M8 21V9M12 21V7.5M16 21V9"/></svg>`,
  chair: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 10V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5M5 10h14l-1 5H6l-1-5Z"/><path d="M7 15v5M17 15v5"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v4M12 17v4M4.2 4.2l2.8 2.8M17 17l2.8 2.8M3 12h4M17 12h4M4.2 19.8 7 17M17 7l2.8-2.8"/><circle cx="12" cy="12" r="2.4"/></svg>`,
  hammer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m14.5 3.5 6 6-2 2-2-2-7 7-3-3 7-7-2-2 2-2Z"/><path d="m3 21 5-5"/></svg>`,
  sun: `<svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.4M12 19.1v2.4M4.6 4.6l1.7 1.7M17.7 17.7l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.6 19.4l1.7-1.7M17.7 6.3l1.7-1.7"/></svg>`,
  moon: `<svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m4 4 16 16M20 4 4 20"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.9h2.65l.4-3.08h-3.05V8.05c0-.89.25-1.5 1.52-1.5h1.63V3.85A22 22 0 0 0 14.3 3.7c-2.36 0-3.98 1.44-3.98 4.08v2.24H7.65v3.08h2.67V21h3.18Z"/></svg>`,
  // instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17" cy="7" r="1"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.3 3h2.6c.16 1.5 1.08 2.9 2.6 3.6.6.28 1.24.42 1.9.46v2.7a7 7 0 0 1-4.5-1.7v6.4a5.4 5.4 0 1 1-5.4-5.4c.2 0 .4 0 .6.03v2.75a2.7 2.7 0 1 0 1.9 2.58L14.3 3Z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.3A9 9 0 1 0 12 3Zm0 1.8a7.2 7.2 0 0 1 6.1 11.1l-.2.3.6 2.2-2.3-.6-.3.2A7.2 7.2 0 1 1 12 4.8Zm-3.4 3.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.1 1.8 2.9 4.5 4 .6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3l-2-.9c-.3-.1-.5-.2-.7.1l-.4.6c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.9-.1-.2 0-.4.1-.5l.3-.4c.1-.2.2-.3.2-.5.1-.2 0-.3 0-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5Z"/></svg>`
};

function renderCategoryGrid(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = CATEGORIES.map(
    (cat) => `
    <a class="category-card" href="products.html?cat=${cat.id}">
      <div class="category-icon">${ICONS[cat.icon]}</div>
      <h3>${cat.name}</h3>
    </a>`
  ).join("");
}

function productCardHTML(p) {
  return `
    <article class="product-card">
      <a href="product.html?id=${p.id}" class="product-thumb">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
      </a>
      <div class="product-info">
        <span class="product-cat">${getCategoryName(p.category)}</span>
        <a href="product.html?id=${p.id}" class="product-name">${p.name}</a>
        <a class="inquire-btn" href="${inquiryWhatsAppUrl(p)}" target="_blank" rel="noopener">
          ${ICONS.whatsapp}
          استفسر عن السعر
        </a>
      </div>
    </article>`;
}

function renderProducts(containerId, list) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (list.length === 0) {
    el.innerHTML = `<p class="empty-state">لا توجد منتجات في هذا التصنيف حاليًا.</p>`;
    return;
  }
  el.innerHTML = list.map(productCardHTML).join("");
}

/* ---------------- صفحة المنتجات ---------------- */

function initProductsPage() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;

  const params = new URLSearchParams(window.location.search);
  let activeCat = params.get("cat") || "all";

  const filterBar = document.getElementById("filterBar");
  if (filterBar) {
    const chips = [{ id: "all", name: "الكل" }, ...CATEGORIES];
    filterBar.innerHTML = chips
      .map(
        (c) =>
          `<button type="button" class="filter-chip${c.id === activeCat ? " active" : ""}" data-cat="${c.id}">${c.name}</button>`
      )
      .join("");

    filterBar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-chip");
      if (!btn) return;
      activeCat = btn.dataset.cat;
      filterBar
        .querySelectorAll(".filter-chip")
        .forEach((c) => c.classList.toggle("active", c === btn));
      const url = new URL(window.location);
      if (activeCat === "all") url.searchParams.delete("cat");
      else url.searchParams.set("cat", activeCat);
      window.history.replaceState({}, "", url);
      renderProducts(
        "productGrid",
        activeCat === "all"
          ? PRODUCTS
          : PRODUCTS.filter((p) => p.category === activeCat)
      );
    });
  }

  renderProducts(
    "productGrid",
    activeCat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeCat)
  );
}

/* ---------------- صفحة تفاصيل المنتج ---------------- */

function initProductDetailPage() {
  const wrap = document.getElementById("productDetail");
  if (!wrap) return;

  const params = new URLSearchParams(window.location.search);
  const product = getProductById(params.get("id"));

  if (!product) {
    wrap.innerHTML = `<p class="empty-state">لم يتم العثور على هذا المنتج. <a href="products.html" style="color:var(--accent);font-weight:700">تصفّح كل المنتجات</a></p>`;
    return;
  }

  document.title = `${product.name} | ${SITE_CONFIG.brandName}`;

  document.getElementById("breadcrumbCat").textContent = getCategoryName(product.category);
  document.getElementById("breadcrumbCat").href = `products.html?cat=${product.category}`;
  document.getElementById("breadcrumbName").textContent = product.name;

  wrap.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image}" alt="${product.name}" />
    </div>
    <div class="product-detail-info">
      <span class="product-cat">${getCategoryName(product.category)}</span>
      <h1>${product.name}</h1>
      <p class="product-detail-desc">${product.description}</p>
      <p class="ask-hint">مهتم بالمنتج ده؟ اسألنا عن السعر وتفاصيل التوصيل، وهنرد عليك في أسرع وقت 😊</p>
      <div class="product-detail-actions">
        <a class="btn btn-primary" href="${inquiryWhatsAppUrl(product)}" target="_blank" rel="noopener">
          ${ICONS.whatsapp}
          استفسر عن السعر عبر واتساب
        </a>
        <a class="btn btn-outline" href="products.html?cat=${product.category}">تصفّح نفس التصنيف</a>
      </div>
    </div>`;

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);
  const relatedSection = document.getElementById("relatedProducts");
  if (relatedSection) {
    if (related.length) {
      document.getElementById("relatedGrid").innerHTML = related.map(productCardHTML).join("");
    } else {
      relatedSection.style.display = "none";
    }
  }

  renderProductNav(product);
}

/* التنقل بين منتجات نفس التصنيف (السابق / التالي) من غير الرجوع لصفحة التصنيف */
function renderProductNav(product) {
  const nav = document.getElementById("productNav");
  if (!nav) return;

  const catProducts = PRODUCTS.filter((p) => p.category === product.category);
  if (catProducts.length < 2) {
    nav.innerHTML = "";
    return;
  }

  const i = catProducts.findIndex((p) => p.id === product.id);
  const prev = catProducts[(i - 1 + catProducts.length) % catProducts.length];
  const next = catProducts[(i + 1) % catProducts.length];

  nav.innerHTML = `
    <a class="product-nav-link prev" href="product.html?id=${prev.id}">
      <div class="product-nav-thumb"><img src="${prev.image}" alt="" /></div>
      <div class="product-nav-text">
        <small>السابق</small>
        <span>${prev.name}</span>
      </div>
    </a>
    <span class="product-nav-count">${i + 1} / ${catProducts.length}</span>
    <a class="product-nav-link next" href="product.html?id=${next.id}">
      <div class="product-nav-thumb"><img src="${next.image}" alt="" /></div>
      <div class="product-nav-text">
        <small>التالي</small>
        <span>${next.name}</span>
      </div>
    </a>`;
}

/* ---------------- عناصر مشتركة: القائمة، الفوتر ---------------- */

function initHeaderAndChrome() {
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  document.querySelectorAll(".wa-float-link").forEach((el) => {
    el.href = SITE_CONFIG.social.whatsapp;
  });
  document.querySelectorAll(".footer-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}

function renderFooterSocial(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <a href="${SITE_CONFIG.social.facebook}" target="_blank" rel="noopener" aria-label="فيسبوك">${ICONS.facebook}</a>
    <a href="${SITE_CONFIG.social.tiktok}" target="_blank" rel="noopener" aria-label="تيك توك">${ICONS.tiktok}</a>
    <a href="${SITE_CONFIG.social.whatsapp}" target="_blank" rel="noopener" aria-label="واتساب">${ICONS.whatsapp}</a>`;
}

document.addEventListener("DOMContentLoaded", () => {
  initHeaderAndChrome();
  renderCategoryGrid("categoryGrid");
  renderProducts("featuredGrid", PRODUCTS.slice(0, 8));
  initProductsPage();
  initProductDetailPage();
  renderFooterSocial("footerSocial");
});
