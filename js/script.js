// script.js

// Thumbnail Switching
const mainImage = document.getElementById("mainProductImage");
const mainBuindleImage = document.getElementById("mainBundleImage");
const thumbnails = document.querySelectorAll(".thumbnail-item");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    thumbnails.forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
    const img = this.querySelector("img");
    mainImage.src = img.src;
    mainBuindleImage.src = img.src;
  });
});

// Color Swatch Switching
const swatches = document.querySelectorAll(".color-swatch");
swatches.forEach((swatch) => {
  swatch.addEventListener("click", function () {
    const imgPath = this.getAttribute("data-img");
    mainImage.src = imgPath;
    mainBuindleImage.src = imgPath;
  });
});

// Compare Colors Modal
// const openCompareModal = document.getElementById("openCompareModal");
const compareModal = document.getElementById("compareModal");
const closeCompareModal = document.getElementById("closeCompareModal");
const compareOverlay = document.getElementById("compareOverlay");
const compareSwatches = document.getElementById("compareSwatches");

let selectedColors = [];

swatches.forEach((swatch) => {
  swatch.addEventListener("dblclick", function () {
    if (!selectedColors.includes(this.outerHTML) && selectedColors.length < 3) {
      selectedColors.push(this.outerHTML);
    }
  });
});

// openCompareModal.addEventListener("click", () => {
//   compareSwatches.innerHTML = selectedColors.join("");
//   compareModal.classList.remove("hidden");
// });

closeCompareModal.addEventListener("click", () => {
  compareModal.classList.add("hidden");
});

compareOverlay.addEventListener("click", () => {
  compareModal.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") compareModal.classList.add("hidden");
});

// script.js

// Flipkart-style Size Chart Modal Script
const openSizeChart = document.getElementById("openSizeChart");
const closeSizeChart = document.getElementById("closeSizeChart");
const sizeChartModal = document.getElementById("sizeChartModal");
const sizeChartOverlay = document.getElementById("sizeChartOverlay");

// Show modal on button click
openSizeChart.addEventListener("click", () => {
  sizeChartModal.classList.add("show");
});

// Hide modal on close button
closeSizeChart.addEventListener("click", () => {
  sizeChartModal.classList.remove("show");
});

// Hide modal on overlay click
sizeChartModal.addEventListener("click", (e) => {
  if (e.target === sizeChartModal) {
    sizeChartModal.classList.remove("show");
  }
});

// Hide modal on ESC key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    sizeChartModal.classList.remove("show");
  }
});

// Tabs Functionality
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active classes
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active to selected
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

const mainImageContainer = document.querySelector(".gallery-main-image");
const zoomContainer = document.querySelector(".zoom-container");

// Zoom effect on hover with zoom container filling the image area
mainImageContainer.addEventListener("mousemove", function (e) {
  const img = mainImageContainer.querySelector("img");
  const rect = mainImageContainer.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  // Show zoom container and fill the image area
  zoomContainer.style.display = "block";
  zoomContainer.innerHTML = `<img src="${img.src}" style="width:100%;height:100%;object-fit:cover;transform:scale(1.5);transform-origin:${x}% ${y}%;">`;
});

mainImageContainer.addEventListener("mouseleave", function () {
  zoomContainer.style.display = "none";
  zoomContainer.innerHTML = "";
});
