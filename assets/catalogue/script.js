const controls = document.getElementById("controls");
const printButton = document.getElementById("printButton");
const toggleControls = document.getElementById("toggleControls");
const allGalleryImages = [
  "733443011_1399880695536006_6680311752568557163_n.jpg",
  "738395988_1773032303689777_2856028005893033296_n.jpg",
  "baby-shower-set-up.webp",
  "baby-shower-theme-2.webp",
  "baby-shower-theme1.webp",
  "birthday-theme1.webp",
  "birthday-theme2.webp",
  "birthday-theme3.webp",
  "bridal-shower-set-up.webp",
  "chatgpt-image-jul-6-2026-09-55-16-pm.webp",
  "chatgpt-image-jun-14-2026-11-04-33-pm-1.webp",
  "chatgpt-image-jun-14-2026-11-04-33-pm-2.webp",
  "chatgpt-image-jun-14-2026-11-04-33-pm-3.webp",
  "chatgpt-image-jun-14-2026-11-04-34-pm-4.webp",
  "chatgpt-image-jun-14-2026-11-04-34-pm-5.webp",
  "chatgpt-image-jun-14-2026-11-04-35-pm-6.webp",
  "chatgpt-image-jun-14-2026-11-04-35-pm-7.webp",
  "chatgpt-image-jun-14-2026-11-04-36-pm-8.webp",
  "chatgpt-image-jun-14-2026-11-04-36-pm-9.webp",
  "chatgpt-image-jun-14-2026-11-17-36-pm-1.webp",
  "chatgpt-image-jun-14-2026-11-17-36-pm-10.webp",
  "chatgpt-image-jun-14-2026-11-17-36-pm-2.webp",
  "chatgpt-image-jun-14-2026-11-17-36-pm-3.webp",
  "chatgpt-image-jun-14-2026-11-17-36-pm-4.webp",
  "chatgpt-image-jun-14-2026-11-17-36-pm-5.webp",
  "chatgpt-image-jun-14-2026-11-17-36-pm-6.webp",
  "chatgpt-image-jun-14-2026-11-17-36-pm-7.webp",
  "chatgpt-image-jun-14-2026-11-17-36-pm-8.webp",
  "chatgpt-image-jun-14-2026-11-17-36-pm-9.webp",
  "chatgpt-image-jun-14-2026-11-54-44-pm-1.webp",
  "chatgpt-image-jun-14-2026-11-54-45-pm-2.webp",
  "chatgpt-image-jun-14-2026-11-54-45-pm-3.webp",
  "chatgpt-image-jun-14-2026-11-54-46-pm-4.webp",
  "chatgpt-image-jun-14-2026-11-54-46-pm-5.webp",
  "chatgpt-image-jun-14-2026-11-54-46-pm-6.webp",
  "chatgpt-image-jun-14-2026-11-54-47-pm-7.webp",
  "chatgpt-image-jun-14-2026-11-54-47-pm-8.webp",
  "chatgpt-image-jun-14-2026-11-54-48-pm-10.webp",
  "chatgpt-image-jun-14-2026-11-54-48-pm-9.webp",
  "chatgpt-image-jun-15-2026-02-22-56-am-1.webp",
  "chatgpt-image-jun-15-2026-02-22-56-am-2.webp",
  "chatgpt-image-jun-15-2026-02-22-56-am-3.webp",
  "chatgpt-image-jun-15-2026-02-22-56-am-4.webp",
  "chatgpt-image-jun-15-2026-02-22-57-am-5.webp",
  "chatgpt-image-jun-15-2026-02-22-57-am-6.webp",
  "chatgpt-image-jun-15-2026-02-22-58-am-7.webp",
  "chatgpt-image-jun-15-2026-02-22-58-am-8.webp",
  "chatgpt-image-jun-15-2026-02-23-00-am-9.webp",
  "chatgpt-image-jun-15-2026-02-23-01-am-10.webp",
  "chatgpt-image-jun-15-2026-02-27-41-am-1.webp",
  "chatgpt-image-jun-15-2026-02-27-42-am-2.webp",
  "chatgpt-image-jun-15-2026-02-27-42-am-3.webp",
  "chatgpt-image-jun-15-2026-02-27-43-am-4.webp",
  "chatgpt-image-jun-15-2026-02-27-43-am-5.webp",
  "chatgpt-image-jun-15-2026-02-27-43-am-6.webp",
  "chatgpt-image-jun-15-2026-02-27-44-am-7.webp",
  "chatgpt-image-jun-15-2026-02-27-44-am-8.webp",
  "chatgpt-image-jun-15-2026-02-51-00-am-1.webp",
  "chatgpt-image-jun-15-2026-02-51-00-am-2.webp",
  "chatgpt-image-jun-15-2026-02-51-01-am-3.webp",
  "chatgpt-image-jun-15-2026-02-51-01-am-4.webp",
  "chatgpt-image-jun-15-2026-02-51-01-am-5.webp",
  "chatgpt-image-jun-15-2026-02-51-02-am-6.webp",
  "chatgpt-image-jun-15-2026-02-51-02-am-7.webp",
  "chatgpt-image-jun-15-2026-02-51-02-am-8.webp",
  "chatgpt-image-jun-15-2026-02-51-03-am-10.webp",
  "chatgpt-image-jun-15-2026-02-51-03-am-9.webp",
  "chatgpt-image-jun-15-2026-02-57-04-am-1.webp",
  "chatgpt-image-jun-15-2026-02-57-04-am-2.webp",
  "chatgpt-image-jun-15-2026-02-57-05-am-3.webp",
  "chatgpt-image-jun-15-2026-02-57-05-am-4.webp",
  "chatgpt-image-jun-15-2026-02-57-05-am-5.webp",
  "chatgpt-image-jun-15-2026-02-57-06-am-7.webp",
  "chatgpt-image-jun-15-2026-02-57-07-am-8.webp",
  "chatgpt-image-jun-15-2026-02-57-04-am-1.webp",
  "chatgpt-image-jun-15-2026-02-57-04-am-2.webp",
  "chatgpt-image-jun-15-2026-02-57-05-am-3.webp",
  "chatgpt-image-jun-15-2026-02-57-05-am-4.webp",
  "chatgpt-image-jun-15-2026-02-57-05-am-5.webp",
  "chatgpt-image-jun-15-2026-02-57-06-am-7.webp",
  "chatgpt-image-jun-15-2026-02-57-07-am-8.webp",
  "chatgpt-image-jun-15-2026-03-09-52-am-1.webp",
  "chatgpt-image-jun-15-2026-03-09-53-am-2.webp",
  "chatgpt-image-jun-15-2026-03-09-54-am-3.webp",
  "chatgpt-image-jun-15-2026-03-09-54-am-4.webp",
  "chatgpt-image-jun-15-2026-03-09-54-am-5.webp",
  "chatgpt-image-jun-15-2026-03-09-54-am-6.webp",
  "chatgpt-image-jun-15-2026-03-09-55-am-7.webp",
  "chatgpt-image-jun-15-2026-03-09-55-am-8.webp",
  "chatgpt-image-jun-15-2026-03-09-56-am-10.webp",
  "chatgpt-image-jun-15-2026-03-09-56-am-9.webp",
  "chatgpt-image-jun-15-2026-03-16-15-am-1.webp",
  "chatgpt-image-jun-15-2026-03-16-15-am-2.webp",
  "chatgpt-image-jun-15-2026-03-16-16-am-3.webp",
  "chatgpt-image-jun-15-2026-03-16-16-am-4.webp",
  "chatgpt-image-jun-15-2026-03-16-16-am-5.webp",
  "chatgpt-image-jun-15-2026-03-16-17-am-6.webp",
  "chatgpt-image-jun-15-2026-10-34-45-am-1.webp",
  "chatgpt-image-jun-15-2026-10-34-47-am-2.webp",
  "chatgpt-image-jun-15-2026-10-34-47-am-3.webp",
  "chatgpt-image-jun-15-2026-10-34-47-am-4.webp",
  "chatgpt-image-jun-15-2026-10-34-48-am-5.webp",
  "chatgpt-image-jun-15-2026-10-34-49-am-6.webp",
  "chatgpt-image-jun-15-2026-10-34-49-am-7.webp",
  "chatgpt-image-jun-15-2026-10-34-50-am-10.webp",
  "chatgpt-image-jun-15-2026-10-34-50-am-8.webp",
  "chatgpt-image-jun-15-2026-10-34-50-am-9.webp",
  "chatgpt-image-jun-15-2026-10-34-48-am-5.webp",
  "christmas-theme1.webp",
  "gatsby-themed-party.webp",
  "valentine-theme-1.webp"
];

const galleryCaptionMap = {
  "733443011_1399880695536006_6680311752568557163_n.jpg": "Red Carpet Balloon Setup",
  "738395988_1773032303689777_2856028005893033296_n.jpg": "Pink Balloon Floral Backdrop",
  "baby-shower-set-up.webp": "Baby Shower Setup",
  "baby-shower-theme-2.webp": "Baby Shower Theme",
  "baby-shower-theme1.webp": "Baby Shower Theme",
  "birthday-theme1.webp": "Birthday Theme Setup",
  "birthday-theme2.webp": "Birthday Theme Setup",
  "birthday-theme3.webp": "Birthday Theme Setup",
  "bridal-shower-set-up.webp": "Bridal Shower Setup",
  "chatgpt-image-jul-6-2026-09-55-16-pm.webp": "Outdoor Ceremony Setup",
  "chatgpt-image-jun-14-2026-11-04-33-pm-1.webp": "Butterfly Balloon Backdrop",
  "chatgpt-image-jun-14-2026-11-04-33-pm-2.webp": "Balloon Draping Backdrop",
  "chatgpt-image-jun-14-2026-11-04-33-pm-3.webp": "Children's Birthday Setup",
  "chatgpt-image-jun-14-2026-11-04-34-pm-4.webp": "Tropical Birthday Display",
  "chatgpt-image-jun-14-2026-11-04-34-pm-5.webp": "Baby Shower Backdrop",
  "chatgpt-image-jun-14-2026-11-04-35-pm-6.webp": "Floral Backdrop Setup",
  "chatgpt-image-jun-14-2026-11-04-35-pm-7.webp": "Birthday Dessert Table",
  "chatgpt-image-jun-14-2026-11-04-36-pm-8.webp": "Balloon Character Column",
  "chatgpt-image-jun-14-2026-11-04-36-pm-9.webp": "Outdoor Table Setup",
  "chatgpt-image-jun-14-2026-11-17-36-pm-1.webp": "Formal Table Setup",
  "chatgpt-image-jun-14-2026-11-17-36-pm-10.webp": "Balloon Column Display",
  "chatgpt-image-jun-14-2026-11-17-36-pm-2.webp": "Marquee Seating Setup",
  "chatgpt-image-jun-14-2026-11-17-36-pm-3.webp": "Indoor Table Setup",
  "chatgpt-image-jun-14-2026-11-17-36-pm-4.webp": "Outdoor Marquee Setup",
  "chatgpt-image-jun-14-2026-11-17-36-pm-5.webp": "70th Birthday Backdrop",
  "chatgpt-image-jun-14-2026-11-17-36-pm-6.webp": "Pink Balloon Backdrop",
  "chatgpt-image-jun-14-2026-11-17-36-pm-7.webp": "Balloon Arch Backdrop",
  "chatgpt-image-jun-14-2026-11-17-36-pm-8.webp": "White Table Setup",
  "chatgpt-image-jun-14-2026-11-17-36-pm-9.webp": "Marquee Chair Setup",
  "chatgpt-image-jun-14-2026-11-54-44-pm-1.webp": "White Balloon Arch",
  "chatgpt-image-jun-14-2026-11-54-45-pm-2.webp": "40th Birthday Backdrop",
  "chatgpt-image-jun-14-2026-11-54-45-pm-3.webp": "Outdoor Marquee Chairs",
  "chatgpt-image-jun-14-2026-11-54-46-pm-4.webp": "Indoor Balloon Arch",
  "chatgpt-image-jun-14-2026-11-54-46-pm-5.webp": "Outdoor Birthday Setup",
  "chatgpt-image-jun-14-2026-11-54-46-pm-6.webp": "Balloon Column Draping",
  "chatgpt-image-jun-14-2026-11-54-47-pm-7.webp": "Birthday Balloon Backdrop",
  "chatgpt-image-jun-14-2026-11-54-47-pm-8.webp": "Round Table Setup",
  "chatgpt-image-jun-14-2026-11-54-48-pm-10.webp": "Display Table Setup",
  "chatgpt-image-jun-14-2026-11-54-48-pm-9.webp": "Purple Balloon Arch",
  "chatgpt-image-jun-15-2026-02-22-56-am-1.webp": "Round Table and Chairs",
  "chatgpt-image-jun-15-2026-02-22-56-am-2.webp": "Floral Ceremony Backdrop",
  "chatgpt-image-jun-15-2026-02-22-56-am-3.webp": "Floral Display Table",
  "chatgpt-image-jun-15-2026-02-22-56-am-4.webp": "Reception Table Setup",
  "chatgpt-image-jun-15-2026-02-22-57-am-5.webp": "Wedding Style Backdrop",
  "chatgpt-image-jun-15-2026-02-22-57-am-6.webp": "Hanging Decor Detail",
  "chatgpt-image-jun-15-2026-02-22-58-am-7.webp": "Reception Room Setup",
  "chatgpt-image-jun-15-2026-02-22-58-am-8.webp": "Green Balloon Column",
  "chatgpt-image-jun-15-2026-02-23-00-am-9.webp": "Poolside Marquee Setup",
  "chatgpt-image-jun-15-2026-02-23-01-am-10.webp": "Poolside Event Setup",
  "chatgpt-image-jun-15-2026-02-27-41-am-1.webp": "Poolside Table Setup",
  "chatgpt-image-jun-15-2026-02-27-42-am-2.webp": "Red and White Backdrop",
  "chatgpt-image-jun-15-2026-02-27-42-am-3.webp": "Buffet Display Table",
  "chatgpt-image-jun-15-2026-02-27-43-am-4.webp": "Poolside Marquee Setup",
  "chatgpt-image-jun-15-2026-02-27-43-am-5.webp": "Marquee Table Setup",
  "chatgpt-image-jun-15-2026-02-27-43-am-6.webp": "Pink Balloon Photo Area",
  "chatgpt-image-jun-15-2026-02-27-44-am-7.webp": "Tropical Birthday Table",
  "chatgpt-image-jun-15-2026-02-27-44-am-8.webp": "Red and White Table Setup",
  "chatgpt-image-jun-15-2026-02-51-00-am-1.webp": "Indoor Table Rows",
  "chatgpt-image-jun-15-2026-02-51-00-am-2.webp": "Indoor Table and Arch",
  "chatgpt-image-jun-15-2026-02-51-01-am-3.webp": "Feather Centrepiece Detail",
  "chatgpt-image-jun-15-2026-02-51-01-am-4.webp": "Tropical Birthday Display",
  "chatgpt-image-jun-15-2026-02-51-01-am-5.webp": "Outdoor Table Setup",
  "chatgpt-image-jun-15-2026-02-51-02-am-6.webp": "Tropical Table Detail",
  "chatgpt-image-jun-15-2026-02-51-02-am-7.webp": "Marquee Table Setup",
  "chatgpt-image-jun-15-2026-02-51-02-am-8.webp": "Marquee Aisle Setup",
  "chatgpt-image-jun-15-2026-02-51-03-am-10.webp": "Tropical Birthday Setup",
  "chatgpt-image-jun-15-2026-02-51-03-am-9.webp": "Tropical Table Setup",
  "chatgpt-image-jun-15-2026-02-57-04-am-1.webp": "Teepee Party Setup",
  "chatgpt-image-jun-15-2026-02-57-04-am-2.webp": "Angel Birthday Backdrop",
  "chatgpt-image-jun-15-2026-02-57-05-am-3.webp": "Lighted Teepee Prop",
  "chatgpt-image-jun-15-2026-02-57-05-am-4.webp": "Teepee Marquee Setup",
  "chatgpt-image-jun-15-2026-02-57-05-am-5.webp": "Teepee Low Table Setup",
  "chatgpt-image-jun-15-2026-02-57-06-am-7.webp": "Angel Birthday Display",
  "chatgpt-image-jun-15-2026-02-57-07-am-8.webp": "Outdoor Teepee Prop",
  "chatgpt-image-jun-15-2026-02-57-04-am-1.webp": "Teepee Party Setup",
  "chatgpt-image-jun-15-2026-02-57-04-am-2.webp": "Angel Birthday Backdrop",
  "chatgpt-image-jun-15-2026-02-57-05-am-3.webp": "Lighted Teepee Prop",
  "chatgpt-image-jun-15-2026-02-57-05-am-4.webp": "Teepee Marquee Setup",
  "chatgpt-image-jun-15-2026-02-57-05-am-5.webp": "Teepee Low Table Setup",
  "chatgpt-image-jun-15-2026-02-57-06-am-7.webp": "Angel Birthday Display",
  "chatgpt-image-jun-15-2026-02-57-07-am-8.webp": "Outdoor Teepee Prop",
  "chatgpt-image-jun-15-2026-03-09-52-am-1.webp": "Green Table Setup",
  "chatgpt-image-jun-15-2026-03-09-53-am-2.webp": "Balcony Table Setup",
  "chatgpt-image-jun-15-2026-03-09-54-am-3.webp": "Green Birthday Backdrop",
  "chatgpt-image-jun-15-2026-03-09-54-am-4.webp": "Green and White Table Setup",
  "chatgpt-image-jun-15-2026-03-09-54-am-5.webp": "Green Balloon Birthday Setup",
  "chatgpt-image-jun-15-2026-03-09-54-am-6.webp": "Blue Marquee Table Setup",
  "chatgpt-image-jun-15-2026-03-09-55-am-7.webp": "Blue Table Setup",
  "chatgpt-image-jun-15-2026-03-09-55-am-8.webp": "Blue Birthday Backdrop",
  "chatgpt-image-jun-15-2026-03-09-56-am-10.webp": "Red Floral Table Detail",
  "chatgpt-image-jun-15-2026-03-09-56-am-9.webp": "Red and White Backdrop",
  "chatgpt-image-jun-15-2026-03-16-15-am-1.webp": "Red and White Marquee",
  "chatgpt-image-jun-15-2026-03-16-15-am-2.webp": "Marquee Display Table",
  "chatgpt-image-jun-15-2026-03-16-16-am-3.webp": "Draped Ceremony Backdrop",
  "chatgpt-image-jun-15-2026-03-16-16-am-4.webp": "Ceremony Table Setup",
  "chatgpt-image-jun-15-2026-03-16-16-am-5.webp": "Marquee Long Table Setup",
  "chatgpt-image-jun-15-2026-03-16-17-am-6.webp": "Long Table Setup",
  "chatgpt-image-jun-15-2026-10-34-45-am-1.webp": "Lighted Centrepiece Detail",
  "chatgpt-image-jun-15-2026-10-34-47-am-2.webp": "Black and Gold Table Setup",
  "chatgpt-image-jun-15-2026-10-34-47-am-3.webp": "Black and Gold Event Setup",
  "chatgpt-image-jun-15-2026-10-34-47-am-4.webp": "Red Carpet Table Setup",
  "chatgpt-image-jun-15-2026-10-34-48-am-5.webp": "Black and Gold Long Table",
  "chatgpt-image-jun-15-2026-10-34-49-am-6.webp": "50th Birthday Backdrop",
  "chatgpt-image-jun-15-2026-10-34-49-am-7.webp": "Black and Gold Draping",
  "chatgpt-image-jun-15-2026-10-34-50-am-10.webp": "Tuxedo Style Backdrop",
  "chatgpt-image-jun-15-2026-10-34-50-am-8.webp": "Pink Birthday Backdrop",
  "chatgpt-image-jun-15-2026-10-34-50-am-9.webp": "Balloon Centrepiece Detail",
  "chatgpt-image-jun-15-2026-10-34-48-am-5.webp": "Black and Gold Long Table",
  "christmas-theme1.webp": "Christmas Theme",
  "gatsby-themed-party.webp": "Gatsby Theme",
  "valentine-theme-1.webp": "Valentine Theme"
};

printButton.addEventListener("click", () => window.print());

toggleControls.addEventListener("click", () => {
  controls.classList.toggle("hidden");
  toggleControls.textContent = controls.classList.contains("hidden")
    ? "Show Controls"
    : "Hide Controls";
});

document.querySelectorAll(".package-card button, .rental-card button").forEach((button) => {
  button.type = "button";
  button.addEventListener("click", () => {
    window.location.href = "../../index.html#contact";
  });
});

function createGalleryImage(fileName) {
  const frame = document.createElement("div");
  frame.className = "image-frame";

  const image = document.createElement("img");
  image.src = `../gallery/${encodeURIComponent(fileName)}`;
  image.alt = "Gallery image";

  const label = document.createElement("span");
  label.textContent = makeCaptionFromFileName(fileName);

  frame.append(image, label);
  return frame;
}

function cleanCaptionText(text) {
  return text
    .replace(/\bplaceholder\b/gi, "")
    .replace(/\bimage\b/gi, "")
    .replace(/\bexample\b/gi, "")
    .replace(/\bsetup\b/gi, "Setup")
    .replace(/\s+/g, " ")
    .trim();
}

function makeCaptionFromFileName(fileName) {
  const decodedFileName = decodeURIComponent(fileName);
  if (galleryCaptionMap[decodedFileName]) return galleryCaptionMap[decodedFileName];

  const name = decodeURIComponent(fileName)
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/^ChatGPT Image /i, "")
    .replace(/_/g, " ")
    .replace(/\s*\(\d+\)$/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/i.test(name)) return "Event Setup";
  if (/^\d/.test(name)) return "Event Setup";
  return name || "Event Setup";
}

function getImageCaption(frame) {
  const articleTitle = frame.closest("article")?.querySelector("h3")?.textContent.trim();
  if (articleTitle && !/^Item Name$/i.test(articleTitle) && !/^Editable Package Example$/i.test(articleTitle)) {
    return articleTitle;
  }

  const sectionTitle = frame.closest(".page-inner")?.querySelector(".section-title h2, .page-header h2")?.textContent.trim();
  const image = frame.querySelector("img");
  const source = image?.getAttribute("src") || "";
  const alt = image?.getAttribute("alt") || "";
  const fileName = source.split("/").pop() || "";
  const decodedFileName = decodeURIComponent(fileName);

  if (galleryCaptionMap[decodedFileName]) return galleryCaptionMap[decodedFileName];

  if (/Birthday%20theme1|Birthday theme1/i.test(source)) return "Birthday Theme";
  if (/Baby%20Shower%20theme1|Baby Shower theme1/i.test(source)) return "Baby Shower Theme";
  if (/Gatsby/i.test(source)) return "Gatsby Theme";
  if (/Bridal%20Shower|Bridal Shower/i.test(source)) return "Bridal Shower Setup";
  if (/Baby%20Shower%20Set|Baby Shower Set/i.test(source)) return "Baby Shower Setup";

  const cleanedAlt = cleanCaptionText(alt);
  if (cleanedAlt && !/^gallery$/i.test(cleanedAlt)) return cleanedAlt;
  if (sectionTitle && !/^Gallery$/i.test(sectionTitle)) return sectionTitle;
  return makeCaptionFromFileName(fileName);
}

function addImageOverlayCaptions(root = document) {
  root.querySelectorAll(".image-frame").forEach((frame) => {
    if (!frame.querySelector("img")) return;
    let label = frame.querySelector(":scope > span");
    if (!label) {
      label = document.createElement("span");
      frame.appendChild(label);
    }
    label.textContent = getImageCaption(frame);
  });
}

function createGalleryPage(files, pageNumber) {
  const page = document.createElement("section");
  page.className = "page all-gallery-page";
  page.dataset.pageLabel = "Gallery";
  page.innerHTML = `
    <div class="decor bunting"></div>
    <div class="decor confetti"></div>
    <div class="decor wave"></div>
    <div class="page-inner">
      <header class="section-title">
        <h2>Gallery</h2>
        <p>Additional Fiesta Party Hire Yeppoon gallery images.</p>
      </header>
      <div class="all-gallery-grid" aria-label="Gallery page ${pageNumber}"></div>
    </div>
  `;

  const grid = page.querySelector(".all-gallery-grid");
  files.forEach((fileName) => grid.appendChild(createGalleryImage(fileName)));
  return page;
}

function addAllGalleryImages() {
  const catalogue = document.querySelector(".catalogue");
  const contactPage = document.querySelector(".contact-page");
  const filesPerPage = 12;

  for (let index = 0; index < allGalleryImages.length; index += filesPerPage) {
    const pageFiles = allGalleryImages.slice(index, index + filesPerPage);
    const pageNumber = Math.floor(index / filesPerPage) + 2;
    catalogue.insertBefore(createGalleryPage(pageFiles, pageNumber), contactPage);
  }
}

function updateContentsPageNumbers() {
  const pages = [...document.querySelectorAll(".page")];
  const pageRanges = new Map();

  pages.forEach((page, index) => {
    const label = page.dataset.pageLabel;
    if (!label) return;

    const pageNumber = index + 1;
    const range = pageRanges.get(label) || { first: pageNumber, last: pageNumber };
    range.last = pageNumber;
    pageRanges.set(label, range);
  });

  document.querySelectorAll("[data-toc-target]").forEach((item) => {
    const range = pageRanges.get(item.dataset.tocTarget);
    if (!range) return;
    item.textContent = range.first === range.last
      ? String(range.first)
      : `${range.first}-${range.last}`;
  });
}

function addPageNumbers() {
  const pages = [...document.querySelectorAll(".page")];
  const totalPages = pages.length;

  pages.forEach((page, index) => {
    let pageNumber = page.querySelector(".page-number");
    if (!pageNumber) {
      pageNumber = document.createElement("div");
      pageNumber.className = "page-number";
      page.appendChild(pageNumber);
    }
    pageNumber.textContent = `Page ${index + 1} of ${totalPages}`;
  });
}

addAllGalleryImages();
updateContentsPageNumbers();
addPageNumbers();
addImageOverlayCaptions();
