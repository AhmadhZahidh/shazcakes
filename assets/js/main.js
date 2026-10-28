/**
 * ====================================================================
 * SHAZ CAKES & SURPRISES — MAIN INTERACTION JAVASCRIPT
 * ====================================================================
 * Pure Vanilla JavaScript — Zero external build or server dependencies.
 * Features:
 * - Animated Pink Floating Particle Engine in Hero Banner
 * - 3D Fluttering Butterflies with Sparkle Trail Drops
 * - Animated Header "Shaz" with Running Gradient
 * - Interactive Sweet Cake Customizer & Portion Calculator
 * - Gallery Category Filters & Lightbox Image Viewer
 * - Floating WhatsApp Speed Dial
 * - Accessible and respect for prefers-reduced-motion
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initHeroParticles();
  initButterflyInteractions();
  initSweetCalculator();
  initGallery();
  initOccasions();
  initMessageBuilder();
  initScrollEffects();
  initBackToTop();
  initSpeedDial();
  updateFooterInfo();
});

/**
 * 1. NAVBAR & MOBILE DRAWER
 */
function initNavbar() {
  const header = document.querySelector(".header");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Sticky header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }, { passive: true });

  // Mobile toggle click
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      mobileToggle.setAttribute("aria-expanded", isOpen);
      mobileToggle.innerHTML = isOpen
        ? `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Close on navigation link click
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navMenu.classList.contains("open")) {
        navMenu.classList.remove("open");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
}

/**
 * 2. ANIMATED PINK FLOATING PARTICLE ENGINE (HERO BANNER)
 */
function initHeroParticles() {
  const canvas = document.getElementById("heroParticlesCanvas");
  if (!canvas) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    canvas.style.display = "none";
    return;
  }

  const ctx = canvas.getContext("2d");
  let particles = [];
  let width = (canvas.width = canvas.offsetWidth);
  let height = (canvas.height = canvas.offsetHeight);

  const colors = [
    "rgba(232, 106, 154, 0.45)",  // Primary Pink
    "rgba(200, 67, 118, 0.35)",  // Deep Rose
    "rgba(217, 183, 121, 0.45)",  // Champagne Gold
    "rgba(255, 228, 238, 0.65)",  // Blush Light Pink
    "rgba(244, 232, 206, 0.55)"   // Pale Champagne
  ];

  function resize() {
    if (!canvas) return;
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }
  window.addEventListener("resize", resize, { passive: true });

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = height + Math.random() * 40;
      this.size = Math.random() * 4.5 + 1.5;
      this.speedY = Math.random() * 0.7 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.8 + 0.2;
      this.pulseSpeed = Math.random() * 0.02 + 0.01;
    }
    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.02) * 0.3;
      this.alpha += Math.sin(this.y * this.pulseSpeed) * 0.01;

      if (this.y < -10 || this.x < -10 || this.x > width + 10) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "rgba(232, 106, 154, 0.4)";
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  // Generate particles based on canvas size
  const count = Math.min(Math.floor(width / 24), 50);
  for (let i = 0; i < count; i++) {
    const p = new Particle();
    p.y = Math.random() * height; // distribute initially across screen
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

/**
 * 3. 3D BUTTERFLY INTERACTIONS & SPARKLE TRAILS
 */
function initButterflyInteractions() {
  const butterflies = document.querySelectorAll(".butterfly-flight-wrap");
  butterflies.forEach((wrap) => {
    // Interactive click makes butterfly do a joyful playful loop
    wrap.addEventListener("click", () => {
      wrap.style.transition = "transform 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28)";
      wrap.style.transform = "scale(1.5) rotate(360deg)";
      setTimeout(() => {
        wrap.style.transform = "";
      }, 900);
    });

    // Spawn tiny sparkle trail behind butterfly periodically
    setInterval(() => {
      if (document.hidden) return;
      const rect = wrap.getBoundingClientRect();
      const hero = document.querySelector(".hero");
      if (!hero) return;
      const heroRect = hero.getBoundingClientRect();

      const dot = document.createElement("div");
      dot.className = "butterfly-sparkle-dot";
      dot.style.left = `${rect.left - heroRect.left + 20}px`;
      dot.style.top = `${rect.top - heroRect.top + 20}px`;
      hero.appendChild(dot);

      setTimeout(() => dot.remove(), 1800);
    }, 450);
  });
}

/**
 * 4. SWEET CREATION CALCULATOR & PORTION SELECTOR
 */
let selectedCakeTier = "Single Tier Celebration (1.0 kg • Serves 8-10)";
let selectedCakeFlavour = "Rich Belgian Chocolate Fudge";
let selectedCakeTopper = "Golden 3D Butterflies & Rosettes 🦋🌹";

function initSweetCalculator() {
  const tierCards = document.querySelectorAll(".calc-tier-card");
  const flavourCards = document.querySelectorAll(".calc-flavour-card");
  const topperCards = document.querySelectorAll(".calc-topper-card");
  const summaryBox = document.getElementById("calcSummaryDetails");
  const applyBtn = document.getElementById("applyCalculatorToFormBtn");

  tierCards.forEach((card) => {
    card.addEventListener("click", () => {
      tierCards.forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedCakeTier = card.getAttribute("data-tier");
      updateCalculatorSummary();
    });
  });

  flavourCards.forEach((card) => {
    card.addEventListener("click", () => {
      flavourCards.forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedCakeFlavour = card.getAttribute("data-flavour");
      updateCalculatorSummary();
    });
  });

  topperCards.forEach((card) => {
    card.addEventListener("click", () => {
      topperCards.forEach((c) => c.classList.remove("selected"));
      card.classList.add("selected");
      selectedCakeTopper = card.getAttribute("data-topper");
      updateCalculatorSummary();
    });
  });

  function updateCalculatorSummary() {
    if (summaryBox) {
      summaryBox.innerHTML = `
        <strong>Selected Creation:</strong> ${selectedCakeTier}<br>
        <strong>Flavour:</strong> ${selectedCakeFlavour} • <strong>Decor:</strong> ${selectedCakeTopper}
      `;
    }
  }

  // One-click sync to WhatsApp Message Builder
  if (applyBtn) {
    applyBtn.addEventListener("click", () => {
      const notesInput = document.getElementById("builderNotes");
      const itemSelect = document.getElementById("builderItem");

      if (itemSelect) {
        itemSelect.value = "Custom Buttercream Cake";
      }

      if (notesInput) {
        notesInput.value = `Cake Design: ${selectedCakeTier}\nFlavour: ${selectedCakeFlavour}\nDecor / Toppers: ${selectedCakeTopper}`;
        notesInput.dispatchEvent(new Event("input"));
      }

      const plannerEl = document.getElementById("planner");
      if (plannerEl) {
        plannerEl.scrollIntoView({ behavior: "smooth" });
      }

      showToast("Custom cake configuration applied to WhatsApp enquiry!");
    });
  }
}

/**
 * 5. GALLERY, CATEGORY FILTER & LIGHTBOX
 */
let currentGalleryItems = [];
let currentLightboxIndex = 0;

function initGallery() {
  const gridContainer = document.getElementById("creationsGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const flyersGrid = document.getElementById("flyersGrid");

  if (!gridContainer) return;

  const products = window.ShazCatalogue ? ShazCatalogue.getProducts() : [];
  const flyers = window.ShazCatalogue ? ShazCatalogue.getFlyers() : [];

  currentGalleryItems = [...products];

  // Render product cards
  renderCreations(currentGalleryItems, gridContainer);

  // Render original flyers showcase
  if (flyersGrid && flyers.length > 0) {
    renderFlyers(flyers, flyersGrid);
  }

  // Filter button clicks
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-category");
      const flyerSection = document.getElementById("flyersShowcase");

      if (category === "all") {
        currentGalleryItems = [...products];
        renderCreations(currentGalleryItems, gridContainer);
        if (flyerSection) flyerSection.style.display = "block";
      } else if (category === "flyers") {
        gridContainer.innerHTML = "";
        if (flyerSection) {
          flyerSection.style.display = "block";
          flyerSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        currentGalleryItems = products.filter((p) => p.category === category);
        renderCreations(currentGalleryItems, gridContainer);
        if (flyerSection) flyerSection.style.display = "none";
      }
    });
  });

  initLightbox();
}

function renderCreations(items, container) {
  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--color-text-muted);">
        <p style="font-size: 1.15rem; font-family: var(--font-heading);">No creations found in this category.</p>
        <p style="font-size: 0.9rem; margin-top: 8px;">Check back soon or enquire via WhatsApp for custom designs!</p>
      </div>
    `;
    return;
  }

  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "creation-card";
    card.setAttribute("data-id", item.id);

    const waText = window.SHAZ_CONFIG 
      ? SHAZ_CONFIG.messages.product(item.title, item.categoryLabel)
      : `Hello Shaz! I would like to enquire about ${item.title}`;
    
    const waUrl = window.SHAZ_CONFIG 
      ? SHAZ_CONFIG.buildWhatsAppUrl(waText) 
      : `https://wa.me/94781608609?text=${encodeURIComponent(waText)}`;

    card.innerHTML = `
      <div class="creation-card-media" tabindex="0" role="button" aria-label="View photo of ${escapeHtml(item.title)}">
        <span class="creation-badge">${escapeHtml(item.categoryLabel)}</span>
        <img class="creation-card-img" src="${item.image}" alt="${escapeHtml(item.title)}" loading="lazy" />
        <div class="creation-zoom-hint" title="Zoom in">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </div>
      </div>
      <div class="creation-card-body">
        <span class="creation-tag">${escapeHtml(item.tag || "Handcrafted")}</span>
        <h3 class="creation-title">${escapeHtml(item.title)}</h3>
        <p class="creation-desc">${escapeHtml(item.description)}</p>
        <div class="creation-card-footer">
          <span class="creation-price-hint">${escapeHtml(item.priceDisplay || "Custom Quote")}</span>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp" aria-label="Enquire about ${escapeHtml(item.title)} on WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            Enquire
          </a>
        </div>
      </div>
    `;

    // Click on media triggers Lightbox
    const mediaWrap = card.querySelector(".creation-card-media");
    mediaWrap.addEventListener("click", () => openLightbox(index, items));
    mediaWrap.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openLightbox(index, items);
      }
    });

    container.appendChild(card);
  });
}

function renderFlyers(flyers, container) {
  container.innerHTML = "";
  flyers.forEach((flyer, index) => {
    const card = document.createElement("div");
    card.className = "flyer-card";
    card.innerHTML = `
      <img src="${flyer.image}" alt="${escapeHtml(flyer.title)}" loading="lazy" />
      <h4 class="flyer-card-title">${escapeHtml(flyer.title)}</h4>
      <p class="flyer-card-sub">Click to inspect original flyer</p>
    `;
    card.addEventListener("click", () => {
      const flyerItems = flyers.map((f) => ({
        title: f.title,
        description: f.caption,
        image: f.image,
        categoryLabel: "Original Business Showcase"
      }));
      openLightbox(index, flyerItems);
    });
    container.appendChild(card);
  });
}

/**
 * 6. LIGHTBOX VIEWER
 */
function initLightbox() {
  const modal = document.getElementById("lightboxModal");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (!modal) return;

  closeBtn?.addEventListener("click", closeLightbox);
  prevBtn?.addEventListener("click", () => navigateLightbox(-1));
  nextBtn?.addEventListener("click", () => navigateLightbox(1));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navigateLightbox(-1);
    if (e.key === "ArrowRight") navigateLightbox(1);
  });
}

function openLightbox(index, itemsArray) {
  const modal = document.getElementById("lightboxModal");
  if (!modal || !itemsArray || itemsArray.length === 0) return;

  currentGalleryItems = itemsArray;
  currentLightboxIndex = index;
  updateLightboxContent();
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function navigateLightbox(dir) {
  currentLightboxIndex = (currentLightboxIndex + dir + currentGalleryItems.length) % currentGalleryItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = currentGalleryItems[currentLightboxIndex];
  if (!item) return;

  const imgEl = document.getElementById("lightboxImg");
  const titleEl = document.getElementById("lightboxTitle");
  const descEl = document.getElementById("lightboxDesc");
  const waBtn = document.getElementById("lightboxWhatsAppBtn");

  if (imgEl) {
    imgEl.src = item.fullImage || item.image;
    imgEl.alt = item.title;
  }
  if (titleEl) titleEl.textContent = item.title;
  if (descEl) descEl.textContent = item.description || "";

  if (waBtn && window.SHAZ_CONFIG) {
    const text = SHAZ_CONFIG.messages.product(item.title, item.categoryLabel || "Creations");
    waBtn.href = SHAZ_CONFIG.buildWhatsAppUrl(text);
  }
}

/**
 * 7. SPECIAL OCCASIONS WHATSAPP CARDS
 */
function initOccasions() {
  const occasionCards = document.querySelectorAll(".occasion-card");
  occasionCards.forEach((card) => {
    const occasionName = card.getAttribute("data-occasion");
    const link = card.querySelector(".occasion-wa-link");
    if (link && occasionName && window.SHAZ_CONFIG) {
      const msg = SHAZ_CONFIG.messages.occasion(occasionName);
      link.href = SHAZ_CONFIG.buildWhatsAppUrl(msg);
    }
  });
}

/**
 * 8. INTERACTIVE WHATSAPP CUSTOM MESSAGE BUILDER
 */
function initMessageBuilder() {
  const occasionSelect = document.getElementById("builderOccasion");
  const itemSelect = document.getElementById("builderItem");
  const dateInput = document.getElementById("builderDate");
  const budgetInput = document.getElementById("builderBudget");
  const notesInput = document.getElementById("builderNotes");
  const previewBubble = document.getElementById("builderPreviewBubble");
  const sendBtn = document.getElementById("builderSendBtn");
  const copyBtn = document.getElementById("builderCopyBtn");

  if (!sendBtn || !previewBubble) return;

  function generateMessage() {
    const occasion = occasionSelect?.value || "Special Occasion";
    const itemType = itemSelect?.value || "Custom Creation";
    const dateVal = dateInput?.value || "";
    const budgetVal = budgetInput?.value.trim() || "";
    const notesVal = notesInput?.value.trim() || "";

    if (window.SHAZ_CONFIG) {
      return SHAZ_CONFIG.messages.customBuilder({
        occasion: occasion,
        itemType: itemType,
        preferredDate: dateVal,
        budget: budgetVal,
        notes: notesVal
      });
    }

    return `Hello Shaz Cakes & Surprises! I would like to enquire for ${occasion} about ${itemType}. Preferred date: ${dateVal}. Target budget: ${budgetVal}. Notes: ${notesVal}`;
  }

  function refreshPreview() {
    const text = generateMessage();
    previewBubble.textContent = text;
    if (window.SHAZ_CONFIG) {
      sendBtn.href = SHAZ_CONFIG.buildWhatsAppUrl(text);
    }
  }

  [occasionSelect, itemSelect, dateInput, budgetInput, notesInput].forEach((el) => {
    if (el) {
      el.addEventListener("input", refreshPreview);
      el.addEventListener("change", refreshPreview);
    }
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const text = generateMessage();
      navigator.clipboard.writeText(text).then(() => {
        showToast("WhatsApp message copied to clipboard!");
      }).catch(() => {
        showToast("Please select and copy message manually.");
      });
    });
  }

  refreshPreview();
}

/**
 * 9. FLOATING WHATSAPP SPEED DIAL
 */
function initSpeedDial() {
  const toggleBtn = document.getElementById("floatingWhatsAppBtn");
  const dial = document.getElementById("whatsappSpeedDial");

  if (!toggleBtn || !dial) return;

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dial.classList.toggle("active");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !dial.contains(e.target)) {
      dial.classList.remove("active");
    }
  });
}

/**
 * 10. SCROLL REVEALS & ENTRANCE ANIMATIONS
 */
function initScrollEffects() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".section-header, .creation-card, .step-card, .occasion-card, .about-content").forEach((el) => {
    el.classList.add("reveal-on-scroll");
    observer.observe(el);
  });
}

/**
 * 11. BACK TO TOP
 */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/**
 * 12. FOOTER & CONTACT DETAILS SYNC
 */
function updateFooterInfo() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (window.SHAZ_CONFIG) {
    document.querySelectorAll(".dynamic-wa-primary").forEach((el) => {
      const template = el.getAttribute("data-template") || "general";
      let msg = SHAZ_CONFIG.messages.general();
      if (template === "customCake") msg = SHAZ_CONFIG.messages.customCake();
      if (template === "birthday") msg = SHAZ_CONFIG.messages.birthdayCake();
      if (template === "chocolate") msg = SHAZ_CONFIG.messages.chocolateBouquet();
      if (template === "flowers") msg = SHAZ_CONFIG.messages.flowers();
      el.href = SHAZ_CONFIG.buildWhatsAppUrl(msg);
    });

    document.querySelectorAll(".display-phone-primary").forEach((el) => {
      el.textContent = SHAZ_CONFIG.contact.whatsappPrimaryDisplay;
    });
    document.querySelectorAll(".display-phone-secondary").forEach((el) => {
      el.textContent = SHAZ_CONFIG.contact.whatsappSecondaryDisplay;
    });
    document.querySelectorAll(".display-phone-third").forEach((el) => {
      el.textContent = SHAZ_CONFIG.contact.contactThirdDisplay;
    });
  }
}

/**
 * Toast Notification Utility
 */
function showToast(message) {
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${escapeHtml(message)}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
