const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();


const newsletterForm = document.getElementById("newsletterForm");
const newsletterStatus = document.getElementById("newsletterStatus");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterStatus.textContent =
      "Demo sürümünde kayıt yapılmadı. Backend endpoint'i bağlandığında aktif olacak.";
    newsletterForm.reset();
  });
}

/*
BACKEND CONNECTION EXAMPLE

Once your backend is ready, replace the form handler above with something like:

const API_BASE_URL = "https://api.yourdomain.com";

async function subscribe(email) {
  const response = await fetch(`${API_BASE_URL}/newsletter`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) throw new Error("Request failed");
  return response.json();
}

The same approach can later be used for:
- authentication
- contract upload
- document analysis
- AI chat
- claims / notices / EOT analysis
*/


// Insights category filter
const filterButtons = document.querySelectorAll(".blog-filter-btn");
const insightItems = document.querySelectorAll(".insight-item");

if (filterButtons.length && insightItems.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      insightItems.forEach((item) => {
        const categories = (item.dataset.category || "").split(" ");
        const show = filter === "all" || categories.includes(filter);
        item.hidden = !show;
      });
    });
  });
}


// Book Demo mailto fallback
const demoForm = document.getElementById("demoForm");
if (demoForm) {
  demoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(demoForm);
    const name = data.get("fullName") || "";
    const email = data.get("workEmail") || "";
    const company = data.get("company") || "";
    const message = data.get("message") || "";
    const subject = `Demo request - ${company || name || "Contract Solutions AI"}`;
    const body = [
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company}`,
      "",
      "What I would like to explore:",
      message
    ].join("\n");
    const status = document.getElementById("demoFormStatus");
    if (status) status.textContent = "Opening your email client...";
    window.location.href = `mailto:hello@contractsolutions.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// UPDATE 19 — Gardiner-inspired temporary colour bar for top navigation
(() => {
  if (!mainNav) return;

  const sectionThemes = {
    solutions: {
      accent: "#2F58D6",
      accentStrong: "#224DBD",
      accentSoft: "#EDF3FF",
      accentSoft2: "#DCE7FF"
    },
    "who-we-serve": {
      accent: "#17806D",
      accentStrong: "#0F6A5B",
      accentSoft: "#E8F6F2",
      accentSoft2: "#D1EEE6"
    },
    sectors: {
      accent: "#C58A20",
      accentStrong: "#A77218",
      accentSoft: "#FBF3E4",
      accentSoft2: "#F4E3BF"
    },
    insights: {
      accent: "#C95252",
      accentStrong: "#AF4040",
      accentSoft: "#FBECEC",
      accentSoft2: "#F4D4D4"
    },
    people: {
      accent: "#7E5AA6",
      accentStrong: "#69478E",
      accentSoft: "#F2ECF8",
      accentSoft2: "#E4D8F2"
    }
  };

  const navAccents = Object.fromEntries(
    Object.entries(sectionThemes).map(([key, value]) => [key, value.accent])
  );

  const pathGroups = {
    solutions: [
      "/solutions",
      "/contract-preparation-review",
      "/claim-preparation",
      "/delay-eot-analysis",
      "/variation-change-orders",
      "/arbitration-dispute-support",
      "/fidic-nec-contract-intelligence",
      "/subcontract-preparation-management",
      "/nda-mou-other-agreements"
    ],
    "who-we-serve": [
      "/who-we-serve",
      "/construction-companies",
      "/employers-developers",
      "/contract-claims-consultancies",
      "/law-firms",
      "/design-engineering-consultancies"
    ],
    sectors: [
      "/sectors",
      "/rail-transportation",
      "/infrastructure",
      "/energy-power",
      "/oil-gas-petrochemicals",
      "/water-wastewater",
      "/buildings-real-estate",
      "/airports-aviation",
      "/industrial-projects",
      "/marine-shipbuilding"
    ],
    insights: ["/insights", "/security-data"],
    people: ["/people"]
  };

  const normalisePath = (pathname) => {
    let path = pathname || "/";
    path = path.replace(/\/index\.html$/i, "/");
    path = path.replace(/\.html$/i, "");
    if (path.length > 1) path = path.replace(/\/$/, "");
    return path || "/";
  };

  const currentPath = normalisePath(window.location.pathname);
  const currentKey = Object.keys(pathGroups).find((key) =>
    pathGroups[key].includes(currentPath)
  );

  const defaultThemeKey = currentKey || "solutions";
  const activeTheme = sectionThemes[defaultThemeKey] || sectionThemes.solutions;
  document.documentElement.style.setProperty("--section-accent", activeTheme.accent);
  document.documentElement.style.setProperty("--section-accent-strong", activeTheme.accentStrong);
  document.documentElement.style.setProperty("--section-accent-soft", activeTheme.accentSoft);
  document.documentElement.style.setProperty("--section-accent-soft-2", activeTheme.accentSoft2);

  const navLinks = Array.from(mainNav.querySelectorAll("a[href]"));
  const workspaceButton = document.querySelector(".header-actions .workspace-button");
  const bookDemoButton = document.querySelector(".header-actions .nav-cta");

  if (currentPath === "/workspace" && workspaceButton) {
    workspaceButton.classList.add("current-page-action");
  }
  if (currentPath === "/book-demo" && bookDemoButton) {
    bookDemoButton.classList.add("current-page-action");
  }

  navLinks.forEach((link) => {
    const hrefPath = normalisePath(new URL(link.href, window.location.href).pathname);
    const key = hrefPath.replace(/^\//, "");
    if (!navAccents[key]) return;

    link.dataset.navKey = key;
    link.style.setProperty("--nav-accent", navAccents[key]);
  });

  // Carry the same page colour across the navigation so the bar is visible
  // for a moment on the destination page, then fades away.
  let arrivalKey = null;
  try {
    arrivalKey = sessionStorage.getItem("contractSolutionsNavArrival");
    sessionStorage.removeItem("contractSolutionsNavArrival");
  } catch (_) {
    arrivalKey = null;
  }

  if (arrivalKey && arrivalKey === currentKey) {
    const arrivalLink = navLinks.find((link) => link.dataset.navKey === arrivalKey);
    if (arrivalLink) {
      arrivalLink.classList.add("nav-arrival");
      window.setTimeout(() => arrivalLink.classList.remove("nav-arrival"), 1050);
    }
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const key = link.dataset.navKey;
      if (!key) return;

      // Preserve browser conventions such as Ctrl/Cmd-click, Shift-click,
      // middle-click and opening links in a new tab.
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target === "_blank"
      ) return;

      const targetUrl = new URL(link.href, window.location.href);
      if (targetUrl.origin !== window.location.origin) return;

      event.preventDefault();
      navLinks.forEach((item) => item.classList.remove("nav-clicking"));
      link.classList.add("nav-clicking");

      try {
        sessionStorage.setItem("contractSolutionsNavArrival", key);
      } catch (_) {
        // The click animation still works when storage is unavailable.
      }

      window.setTimeout(() => {
        window.location.href = targetUrl.href;
      }, 240);
    });
  });
})();
