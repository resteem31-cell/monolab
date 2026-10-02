(function () {
  // 문의 폼이 전송될 이메일 주소 (FormSubmit 서비스 사용, README.md 참고)
  var INQUIRY_EMAIL = "resteem@naver.com";
  var FORM_ENDPOINT = "https://formsubmit.co/ajax/" + INQUIRY_EMAIL;

  var LANGS = ["ko", "en", "zh"];
  var HTML_LANG = { ko: "ko", en: "en", zh: "zh-CN" };
  var current = "ko";

  // ---- i18n ----
  // 한국어 원문은 HTML에서 읽어 보관해 두고, 언어를 바꿀 때 사전에서 교체합니다.
  var textEls = document.querySelectorAll("[data-i18n]");
  var phEls = document.querySelectorAll("[data-i18n-ph]");
  textEls.forEach(function (el) { el._ko = el.innerHTML; });
  phEls.forEach(function (el) { el._ko = el.getAttribute("placeholder"); });
  var koTitle = document.title;

  function t(key) {
    var dict = window.I18N[current] || {};
    return dict[key] != null ? dict[key] : (window.I18N.ko[key] || "");
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) < 0) lang = "ko";
    current = lang;
    var dict = window.I18N[lang] || {};
    textEls.forEach(function (el) {
      var v = lang === "ko" ? el._ko : dict[el.dataset.i18n];
      el.innerHTML = v != null ? v : el._ko;
    });
    phEls.forEach(function (el) {
      var v = lang === "ko" ? el._ko : dict[el.dataset.i18nPh];
      el.setAttribute("placeholder", v != null ? v : el._ko);
    });
    document.title = lang === "ko" ? koTitle : (dict["meta.title"] || koTitle);
    document.documentElement.lang = HTML_LANG[lang];
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    renderReviews();
    try { localStorage.setItem("monolab-lang", lang); } catch (e) {}
    var url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  }

  function initialLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && LANGS.indexOf(q) >= 0) return q;
    try {
      var saved = localStorage.getItem("monolab-lang");
      if (saved && LANGS.indexOf(saved) >= 0) return saved;
    } catch (e) {}
    var nav = (navigator.language || "ko").toLowerCase();
    if (nav.indexOf("ko") === 0) return "ko";
    if (nav.indexOf("zh") === 0) return "zh";
    return "en";
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang); });
  });

  // ---- Reviews ----
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function pick(obj) { return obj ? (obj[current] || obj.ko || "") : ""; }

  function renderReviews() {
    var list = document.getElementById("reviewList");
    var reviews = window.REVIEWS || [];
    var hasSample = reviews.some(function (r) { return r.sample; });
    document.getElementById("sampleNotice").hidden = !hasSample;
    var sampleLabel = { ko: "예시", en: "Sample", zh: "示例" }[current];
    list.innerHTML = reviews.map(function (r) {
      var stars = "★★★★★".slice(0, r.rating) + "☆☆☆☆☆".slice(0, 5 - r.rating);
      return '<article class="review">' +
        '<div class="r-top"><span class="r-prod">' + esc(pick(window.PRODUCT_NAMES[r.product])) + '</span>' +
        (r.sample ? '<span class="badge">' + sampleLabel + '</span>' : '') + '</div>' +
        '<div class="stars" aria-label="' + r.rating + ' / 5">' + stars + '</div>' +
        '<h4>' + esc(pick(r.title)) + '</h4>' +
        '<p>' + esc(pick(r.body)) + '</p>' +
        '<span class="who">' + esc(pick(r.who)) + '</span>' +
        '</article>';
    }).join("");
  }

  // ---- Mobile menu ----
  var menuBtn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // ---- Inquiry form ----
  var form = document.getElementById("inquiryForm");
  var msg = document.getElementById("formMsg");

  function showMsg(text, cls) { msg.textContent = text; msg.className = "form-msg " + (cls || ""); }

  function collect() {
    var fd = new FormData(form);
    var methodSel = form.elements.method;
    return {
      "문의유형 Type": fd.get("type"),
      "이름 Name": fd.get("name").trim(),
      "회사명 Company": fd.get("company").trim(),
      "연락처 Contact": fd.get("phone").trim(),
      "이메일 Email": fd.get("email").trim(),
      "지역 Region": fd.get("region").trim(),
      "수출국가 Export country": fd.get("country").trim(),
      "판매방법 Sales channel": methodSel.value,
      "문의사항 Message": fd.get("message").trim(),
      "작성 언어 Language": current.toUpperCase()
    };
  }

  function mailtoLink(data) {
    var body = Object.keys(data).map(function (k) { return k + ": " + data[k]; }).join("\n");
    return "mailto:" + INQUIRY_EMAIL + "?subject=" + encodeURIComponent("[MONOLAB] " + data["문의유형 Type"] + " - " + data["회사명 Company"]) +
      "&body=" + encodeURIComponent(body);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var invalid = false;
    form.querySelectorAll("[required]").forEach(function (el) {
      if (el.type === "checkbox") return;
      var bad = !el.value.trim();
      el.classList.toggle("invalid", bad);
      if (bad) invalid = true;
    });
    if (invalid) { showMsg(t("msg.required"), "err"); return; }
    if (!form.elements.consent.checked) { showMsg(t("msg.consent"), "err"); return; }
    if (form.elements._honey.value) return; // 스팸 봇

    var data = collect();
    var payload = Object.assign({}, data, {
      _subject: "[MONOLAB 홈페이지] " + data["문의유형 Type"] + " - " + data["회사명 Company"],
      _template: "table",
      _captcha: "false"
    });
    if (data["이메일 Email"]) payload._replyto = data["이메일 Email"];

    var btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    showMsg(t("msg.sending"));

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(function (r) { return r.json(); })
      .then(function (res) {
        if (String(res.success) !== "true") throw new Error(res.message || "failed");
        form.reset();
        showMsg(t("msg.ok"), "ok");
      })
      .catch(function () {
        msg.className = "form-msg err";
        msg.textContent = t("msg.err") + " ";
        var a = document.createElement("a");
        a.href = mailtoLink(data);
        a.textContent = t("msg.mail");
        msg.appendChild(a);
      })
      .then(function () { btn.disabled = false; });
  });

  form.addEventListener("input", function (e) { e.target.classList.remove("invalid"); });

  setLang(initialLang());
})();
