/* 页面逻辑：语言切换 + 按 data.js 渲染论文和动态。一般不需要改。 */
(function () {
  "use strict";

  const STORE_KEY = "lang";

  function getLang() {
    let saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    if (saved === "en" || saved === "zh") return saved;
    const nav = (navigator.language || "en").toLowerCase();
    return nav.startsWith("zh") ? "zh" : "en";
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  function fill(str, vars) {
    return str.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? vars[k] : m));
  }

  const counts = {
    total: PAPERS.length,
    lead: PAPERS.filter((p) => p.role === "first" || p.role === "cofirst").length,
    balance: PAPERS.filter((p) => p.topic === "balance").length,
    gait: PAPERS.filter((p) => p.topic === "gait").length,
    assist: PAPERS.filter((p) => p.topic === "assist").length
  };

  function authorsHTML(authors) {
    return esc(authors).replace(/S\. Zhang(#?)/, '<b class="me">S. Zhang$1</b>');
  }

  function linksHTML(p) {
    const items = [];
    if (p.doi) items.push(`<a href="https://doi.org/${esc(p.doi)}" target="_blank" rel="noopener">DOI</a>`);
    if (p.pdf) items.push(`<a href="${esc(p.pdf)}" target="_blank" rel="noopener">PDF</a>`);
    if (p.code) items.push(`<a href="${esc(p.code)}" target="_blank" rel="noopener">Code</a>`);
    if (p.video) items.push(`<a href="${esc(p.video)}" target="_blank" rel="noopener">Video</a>`);
    return items.length ? `<span class="paper-links">${items.join("")}</span>` : "";
  }

  function paperItem(p, lang, withRole) {
    const t = I18N[lang];
    const role = withRole && p.role ? `<span class="role">${t["role." + p.role]}</span>` : "";
    return `<li class="paper">
      <span class="paper-year">${p.year}</span>
      <div class="paper-body">
        <span class="paper-title">${esc(p.title)}</span>
        <span class="paper-meta">${authorsHTML(p.authors)} · <i>${esc(p.venue)}</i></span>
        <span class="paper-tags"><span class="abbr">${esc(p.abbr)}</span>${role}${linksHTML(p)}</span>
      </div>
    </li>`;
  }

  let currentFilter = "all";

  function render(lang) {
    const t = I18N[lang];
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = document.body.dataset.page === "publications"
      ? `${t["pubs.page.title"]} · ${lang === "zh" ? "张石生" : "Shisheng Zhang"}`
      : t["meta.title"];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (t[key] !== undefined) el.innerHTML = fill(t[key], { ...counts, n: counts[el.dataset.n] });
    });

    document.querySelectorAll("[data-lang-btn]").forEach((b) => {
      const on = b.dataset.langBtn === lang;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });

    const sel = document.getElementById("selected-papers");
    if (sel) sel.innerHTML = PAPERS.filter((p) => p.selected).map((p) => paperItem(p, lang, false)).join("");

    const news = document.getElementById("news-list");
    if (news) news.innerHTML = NEWS.map((n) => `<p><span class="news-date">${esc(n.date)}</span>${n[lang]}</p>`).join("");

    const all = document.getElementById("all-papers");
    if (all) {
      const list = PAPERS.filter((p) => currentFilter === "all" || p.topic === currentFilter);
      const years = [...new Set(list.map((p) => p.year))];
      all.innerHTML = years.map((y) => `<section class="year-group">
          <h2 class="year">${y}</h2>
          <ol class="paper-list">${list.filter((p) => p.year === y).map((p) => paperItem(p, lang, true)).join("")}</ol>
        </section>`).join("");
      document.querySelectorAll("[data-filter]").forEach((b) => {
        const on = b.dataset.filter === currentFilter;
        b.classList.toggle("active", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
        const c = b.dataset.filter === "all" ? counts.total : counts[b.dataset.filter];
        b.innerHTML = `${t["filter." + b.dataset.filter]} <span class="count">${c}</span>`;
      });
    }
  }

  let lang = getLang();

  document.addEventListener("click", (e) => {
    const lb = e.target.closest("[data-lang-btn]");
    if (lb) {
      lang = lb.dataset.langBtn;
      try { localStorage.setItem(STORE_KEY, lang); } catch (err) {}
      render(lang);
      return;
    }
    const fb = e.target.closest("[data-filter]");
    if (fb) {
      currentFilter = fb.dataset.filter;
      history.replaceState(null, "", currentFilter === "all" ? location.pathname : "#" + currentFilter);
      render(lang);
    }
  });

  const hash = location.hash.replace("#", "");
  if (["balance", "gait", "assist"].includes(hash)) currentFilter = hash;

  render(lang);
})();
