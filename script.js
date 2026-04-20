const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const year = document.querySelector("#year");
const form = document.querySelector("#quote-form");
const revealEls = document.querySelectorAll(".reveal");

function i18nT(key) {
  return window.MIREROI18n?.t?.(key) ?? key;
}

if (year) year.textContent = String(new Date().getFullYear());

if (revealEls.length) {
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  if (reduceMotion) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));
  }
}

function setNavOpen(open) {
  if (!navToggle || !nav) return;
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  nav.dataset.open = open ? "true" : "false";
}

if (navToggle && nav) {
  const navLabel = navToggle.querySelector(".sr-only");

  navToggle.addEventListener("click", () => {
    const isOpen = nav.dataset.open === "true";
    setNavOpen(!isOpen);
    if (navLabel) navLabel.textContent = isOpen ? i18nT("nav.menuOpen") : i18nT("nav.menuClose");
  });

  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLAnchorElement && target.classList.contains("nav-link")) {
      setNavOpen(false);
    }
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (nav.contains(target) || navToggle.contains(target)) return;
    setNavOpen(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setNavOpen(false);
  });

  window.addEventListener("mirero:locale", () => {
    setNavOpen(false);
    if (navLabel) navLabel.textContent = i18nT("nav.menuOpen");
  });
}

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const statusEl = document.querySelector("#form-status");
    const setStatus = (key, fallback) => {
      const msg = window.MIREROI18n?.t?.(key);
      const text = msg && msg !== key ? msg : fallback;
      if (statusEl) statusEl.textContent = text;
    };

    const endpoint = form.getAttribute("action") || "";
    if (!endpoint || endpoint.includes("REPLACE_ME")) {
      setStatus(
        "form.statusNeedsSetup",
        "Form is not connected yet. Replace the Formspree URL in the form action."
      );
      return;
    }

    const data = new FormData(form);
    setStatus("form.statusSending", "Sending…");

    fetch(endpoint, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then(async (res) => {
        if (res.ok) return;
        let details = "";
        try {
          const json = await res.json();
          if (json?.errors?.length) details = json.errors.map((e) => e.message).join(" ");
        } catch {
          /* ignore */
        }
        throw new Error(details || `HTTP ${res.status}`);
      })
      .then(() => {
        form.reset();
        setStatus("form.statusSuccess", "Thanks. Your message has been sent.");
      })
      .catch(() => {
        setStatus("form.statusError", "Sorry. Something went wrong. Please try again.");
      });
  });
}

