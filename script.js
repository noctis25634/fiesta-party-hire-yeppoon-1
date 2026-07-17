const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const siteHeader = document.querySelector(".site-header");
const scrollProgressBar = document.querySelector("#scrollProgressBar");
const backToTop = document.querySelector("#backToTop");
const motionItems = [
  ...document.querySelectorAll(".feature-list article, .extras-grid figure")
];

motionItems.forEach((item) => {
  if (!item.hasAttribute("data-reveal")) item.setAttribute("data-reveal", "");
});

document.querySelectorAll("img").forEach((image) => {
  if (!image.closest(".hero-media")) {
    image.loading = image.loading || "lazy";
    image.decoding = "async";
  } else {
    image.loading = "eager";
    image.fetchPriority = "high";
  }
});

const revealItems = [...document.querySelectorAll("[data-reveal]")];
const sections = [...document.querySelectorAll("main section[id]")];
const galleryItems = [...document.querySelectorAll(".gallery-grid figure")];
const galleryFilterButtons = [...document.querySelectorAll("[data-gallery-filter]")];
const galleryResultCount = document.querySelector("#galleryResultCount");
const galleryLoadMore = document.querySelector("#galleryLoadMore");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxCaption = lightbox.querySelector("p");
const lightboxClose = lightbox.querySelector("button");
const blankImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
let lastFocusedGalleryItem = null;
let scrollFramePending = false;

function updatePageChrome() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollProgress = scrollableHeight > 0
    ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1)
    : 0;

  siteHeader?.classList.toggle("is-scrolled", window.scrollY > 24);
  if (scrollProgressBar) scrollProgressBar.style.transform = `scaleX(${scrollProgress})`;
  if (backToTop) backToTop.hidden = window.scrollY < 720;
  scrollFramePending = false;
}

window.addEventListener("scroll", () => {
  if (scrollFramePending) return;
  scrollFramePending = true;
  window.requestAnimationFrame(updatePageChrome);
}, { passive: true });

updatePageChrome();
const currentYear = document.querySelector("#currentYear");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
window.requestAnimationFrame(() => document.body.classList.add("is-page-ready"));

backToTop?.addEventListener("click", () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
});

function scrollToCurrentHash() {
  const targetId = window.location.hash.slice(1);
  if (!targetId) return;

  const target = document.getElementById(targetId);
  if (!target) return;

  target.scrollIntoView({ block: "start" });
}

window.addEventListener("load", () => {
  window.setTimeout(scrollToCurrentHash, 120);
});

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

function closeSiteNavigation(restoreFocus = false) {
  if (!siteNav.classList.contains("is-open")) return;
  siteNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  if (restoreFocus) navToggle.focus();
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeSiteNavigation();
  });
});

document.addEventListener("click", (event) => {
  if (!siteHeader?.contains(event.target)) closeSiteNavigation();
});

const staggerGroups = [
  ".service-grid .service-card",
  ".extras-grid figure",
  ".gallery-grid figure",
  ".contact-grid .contact-card",
  ".feature-list article"
];

staggerGroups.forEach((selector) => {
  document.querySelectorAll(selector).forEach((item, index) => {
    item.style.setProperty("--reveal-delay", `${Math.min(index % 12, 11) * 55}ms`);
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

revealItems.forEach((item) => revealObserver.observe(item));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${entry.target.id}`;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  });
}, { rootMargin: "-42% 0px -50% 0px" });

sections.forEach((section) => sectionObserver.observe(section));

const showcaseVideos = [...document.querySelectorAll(".fiesta-gallery-video")];

if (showcaseVideos.length) {
  showcaseVideos.forEach((video) => {
    video.addEventListener("play", () => {
      showcaseVideos.forEach((otherVideo) => {
        if (otherVideo !== video) otherVideo.pause();
      });
    });
  });
}

// The accurate, data-driven package customizer is implemented in planner.js.

function openLightbox(item) {
  const image = item.querySelector("img");
  const caption = item.querySelector("figcaption")?.textContent.trim() || image.alt;

  lastFocusedGalleryItem = item;
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = caption;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightboxClose.focus();
}

const galleryCategoryRules = {
  themes: /\b(birthday|baby shower|gatsby|christmas|valentine|carnival|butterfly|tropical|masquerade|train|kids|milestone|tuxedo|seasonal)\b/i,
  backdrops: /\b(backdrop|balloon|arch|column|display|entrance)\b/i,
  tables: /\b(table|chair|seating|centrepiece|buffet|banquet|dining|picnic)\b/i,
  marquees: /\bmarquee\b/i,
  ceremonies: /\b(wedding|bridal|ceremony|arbour|aisle)\b/i
};

let activeGalleryFilter = "all";
let galleryExpanded = false;

function getGalleryCategories(item) {
  const image = item.querySelector("img");
  const caption = item.querySelector("figcaption")?.textContent || "";
  const searchableText = `${caption} ${image?.alt || ""}`;

  return Object.entries(galleryCategoryRules)
    .filter(([, pattern]) => pattern.test(searchableText))
    .map(([category]) => category);
}

function applyGalleryFilter(filter) {
  activeGalleryFilter = filter;
  let visibleCount = 0;
  let matchingCount = 0;
  let hiddenExtraCount = 0;

  galleryItems.forEach((item) => {
    const categories = item.dataset.galleryCategories?.split(" ") || [];
    const matchesFilter = filter === "all" || categories.includes(filter);
    const isUnloadedExtra = item.dataset.galleryExtra === "true" && !galleryExpanded;
    const isVisible = matchesFilter && !isUnloadedExtra;
    item.hidden = !isVisible;
    if (matchesFilter) matchingCount += 1;
    if (matchesFilter && isUnloadedExtra) hiddenExtraCount += 1;
    if (isVisible) visibleCount += 1;
  });

  galleryFilterButtons.forEach((button) => {
    const isActive = button.dataset.galleryFilter === filter;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (galleryResultCount) {
    galleryResultCount.textContent = galleryExpanded || visibleCount === matchingCount
      ? `${visibleCount} ${visibleCount === 1 ? "photo" : "photos"}`
      : `${visibleCount} of ${matchingCount} photos`;
  }

  if (galleryLoadMore) galleryLoadMore.hidden = hiddenExtraCount === 0;
}

galleryItems.forEach((item) => {
  const image = item.querySelector("img");
  const caption = item.querySelector("figcaption")?.textContent.trim() || image.alt;
  item.dataset.galleryCategories = getGalleryCategories(item).join(" ");

  item.tabIndex = 0;
  item.setAttribute("role", "button");
  item.setAttribute("aria-label", `Open gallery photo: ${caption}`);
  item.addEventListener("click", () => openLightbox(item));
  item.addEventListener("keydown", (event) => {
    if (!['Enter', ' '].includes(event.key)) return;
    event.preventDefault();
    openLightbox(item);
  });
});

galleryFilterButtons.forEach((button, buttonIndex) => {
  button.addEventListener("click", () => applyGalleryFilter(button.dataset.galleryFilter));
  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const nextIndex = event.key === "Home"
      ? 0
      : event.key === "End"
        ? galleryFilterButtons.length - 1
        : event.key === "ArrowRight"
          ? (buttonIndex + 1) % galleryFilterButtons.length
          : (buttonIndex - 1 + galleryFilterButtons.length) % galleryFilterButtons.length;
    galleryFilterButtons[nextIndex].focus();
    galleryFilterButtons[nextIndex].click();
  });
});

galleryLoadMore?.addEventListener("click", () => {
  galleryExpanded = true;
  applyGalleryFilter(activeGalleryFilter);
  const firstExtra = galleryItems.find((item) => item.dataset.galleryExtra === "true" && !item.hidden);
  firstExtra?.focus();
});

applyGalleryFilter("all");

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxImage.src = blankImage;
  lastFocusedGalleryItem?.focus();
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
    closeSiteNavigation(true);
  }

  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }

  if (event.key === "Tab" && lightbox.classList.contains("is-open")) {
    event.preventDefault();
    lightboxClose.focus();
  }
});
