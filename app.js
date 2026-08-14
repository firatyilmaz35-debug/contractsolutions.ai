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
