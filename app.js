// ===============================
// APPLE STORE PRODUCTS
// ===============================

const products = [
  {
    id: 1,
    category: "iphone",
    tag: "iPhone",
    name: "iPhone 17 Pro",
    desc: "A19 Pro chip · 48MP Pro Fusion kamera",
    spec: "6.3″ Super Retina XDR · 256GB",
    price: "17 499 000 so'm",
    image: "https://media.ldlc.com/r1600/ld/products/00/06/27/52/LD0006275203.jpg",
    alt: "iPhone 17 Pro"
  },
  {
    id: 2,
    category: "iphone",
    tag: "iPhone",
    name: "iPhone 17",
    desc: "Kuchli kamera va kundalik tezlik",
    spec: "6.3″ OLED · 256GB · USB-C",
    price: "12 990 000 so'm",
    image: "https://media.ldlc.com/r1600/ld/products/00/06/27/52/LD0006275203.jpg",
    alt: "iPhone 17"
  },
  {
    id: 3,
    category: "mac",
    tag: "Mac",
    name: "MacBook Air",
    desc: "Yengil korpus, tezkor ishlash",
    spec: "13″ Retina · Apple chip · 16GB RAM",
    price: "14 990 000 so'm",
    image: "https://cheshiremacs.com/cdn/shop/files/macbook-air-m1-space-grey.png?v=1747731803&width=713",
    alt: "MacBook Air"
  },
  {
    id: 4,
    category: "mac",
    tag: "Mac",
    name: "MacBook Pro",
    desc: "Professional ishlar uchun kuchli noutbuk",
    spec: "14″ Liquid Retina XDR · 512GB",
    price: "24 990 000 so'm",
    image: "https://cheshiremacs.com/cdn/shop/files/macbook-air-m1-space-grey.png?v=1747731803&width=713",
    alt: "MacBook Pro"
  },
  {
    id: 5,
    category: "ipad",
    tag: "iPad",
    name: "iPad A16",
    desc: "O'qish, chizish va ko'ngilochar lahzalar",
    spec: "11″ Liquid Retina · 128GB",
    price: "6 490 000 so'm",
    image: "https://www.pbtech.co.nz/imgprod/T/A/TABAPP1812822__1.jpg",
    alt: "iPad"
  },
  {
    id: 6,
    category: "ipad",
    tag: "iPad",
    name: "iPad Pro",
    desc: "Ijod va unumdorlik uchun",
    spec: "Ultra Retina XDR · Pro chip",
    price: "14 990 000 so'm",
    image: "https://www.pbtech.co.nz/imgprod/T/A/TABAPP1812822__1.jpg",
    alt: "iPad Pro"
  },
  {
    id: 7,
    category: "watch",
    tag: "Watch",
    name: "Apple Watch Series 11",
    desc: "Faollik va kundalik salomatlik kuzatuvi",
    spec: "Always-On Retina · GPS",
    price: "5 490 000 so'm",
    image: "https://www.switch.sg/cdn/shop/files/IMG-18079955_m_jpeg_1_2c5492f3-d18f-4be6-bc56-e3e936776eff.jpg?v=1757490035",
    alt: "Apple Watch"
  },
  {
    id: 8,
    category: "airpods",
    tag: "AirPods",
    name: "AirPods Pro 3",
    desc: "Shovqinni kamaytirish va tiniq ovoz",
    spec: "Adaptive Audio · USB-C",
    price: "3 290 000 so'm",
    image: "https://accessories.three.co.uk/cdn/shop/files/E71033095AppleAirPodsPro3MFHP4ZM_A.png?v=1758181825",
    alt: "AirPods Pro 3"
  },
  {
    id: 9,
    category: "airpods",
    tag: "AirPods",
    name: "AirPods 4",
    desc: "Yengil va qulay simsiz quloqchin",
    spec: "Spatial Audio · USB-C",
    price: "1 990 000 so'm",
    image: "https://accessories.three.co.uk/cdn/shop/files/E71033095AppleAirPodsPro3MFHP4ZM_A.png?v=1758181825",
    alt: "AirPods 4"
  }
];

// ===============================
// PRODUCTS RENDER
// ===============================

const grid = document.getElementById("productGrid");

const filters = document.querySelectorAll(".filter-btn");

const modal = document.getElementById("orderModal");

const productInput = document.getElementById("productName");

const formMessage = document.getElementById("formMessage");

function renderProducts(category = "all") {

  const visibleProducts =
    category === "all"
      ? products
      : products.filter(product => product.category === category);

  grid.innerHTML = visibleProducts.map(product => `

    <article class="product-card">

      <div class="product-image-wrap">
        <img 
          class="product-image"
          src="${product.image}"
          alt="${product.alt}"
          loading="lazy"
        >
      </div>

      <span class="product-tag">
        ${product.tag}
      </span>

      <h3>${product.name}</h3>

      <p class="product-desc">
        ${product.desc}
      </p>

      <p class="product-meta">
        ${product.spec}
      </p>

      <div class="product-bottom">

        <span class="price">
          ${product.price}
        </span>

        <button 
          class="buy-btn"
          data-buy="${product.name}"
        >
          Sotib olish
        </button>

      </div>

    </article>

  `).join("");
}

renderProducts();

// ===============================
// CATEGORY FILTER
// ===============================

filters.forEach(button => {

  button.addEventListener("click", () => {

    filters.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    renderProducts(button.dataset.filter);

  });

});

// ===============================
// ORDER MODAL
// ===============================

function openOrder(productName) {

  productInput.value = productName;

  formMessage.textContent = "";

  modal.classList.add("open");

  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  setTimeout(() => {
    document.getElementById("fullName").focus();
  }, 100);

}

function closeOrder() {

  modal.classList.remove("open");

  modal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

}

// Buy button
document.addEventListener("click", function(event) {

  const button = event.target.closest("[data-buy]");

  if (button) {

    const productName = button.dataset.buy;

    openOrder(productName);

  }

});

// Close modal button
document.getElementById("closeModal")
  .addEventListener("click", closeOrder);

// Close when clicking backdrop
modal.querySelectorAll("[data-close]").forEach(element => {

  element.addEventListener("click", closeOrder);

});

// Close using Escape
document.addEventListener("keydown", function(event) {

  if (event.key === "Escape") {
    closeOrder();
  }

});

// ===============================
// REGISTRATION / ORDER FORM
// ===============================

const orderForm = document.getElementById("orderForm");

orderForm.addEventListener("submit", function(event) {

  event.preventDefault();

  if (!orderForm.reportValidity()) return;

  const name = document.getElementById("fullName").value.trim();

  formMessage.textContent =
    `Rahmat, ${name}! Demo so'rovingiz qabul qilindi.`;

  orderForm.reset();

  productInput.value = "So'rov qabul qilindi";

});

// ===============================
// HERO CAROUSEL
// ===============================

const slides = document.querySelectorAll(".hero-slide");

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

let slideTimer;

// Show slide
function showSlide(index) {

  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {

    slide.classList.toggle(
      "active",
      i === currentSlide
    );

  });

  dots.forEach((dot, i) => {

    dot.classList.toggle(
      "active",
      i === currentSlide
    );

  });

}

// Automatic carousel
function startSlider() {

  clearInterval(slideTimer);

  slideTimer = setInterval(() => {

    showSlide(currentSlide + 1);

  }, 5000);

}

// Previous slide
document.getElementById("prevSlide")
  .addEventListener("click", function() {

    showSlide(currentSlide - 1);

    startSlider();

  });

// Next slide
document.getElementById("nextSlide")
  .addEventListener("click", function() {

    showSlide(currentSlide + 1);

    startSlider();

  });

// Dots navigation
dots.forEach(dot => {

  dot.addEventListener("click", function() {

    const slideIndex = Number(dot.dataset.go);

    showSlide(slideIndex);

    startSlider();

  });

});

startSlider();

// ===============================
// MOBILE NAVBAR
// ===============================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

  const opened = navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    String(opened)
  );

  menuToggle.textContent = opened ? "×" : "☰";

});

// Close mobile menu when selecting a link
navLinks.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", function() {

    navLinks.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";

  });

});