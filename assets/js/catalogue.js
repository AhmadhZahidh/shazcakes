/**
 * ====================================================================
 * SHAZ CAKES & SURPRISES — CATALOGUE DATA & STORAGE MANAGER
 * ====================================================================
 * 
 * Contains default authentic products photographed in the original
 * flyers. Supports localStorage overrides so the owner can use the
 * optional local browser editor without losing original items.
 * ====================================================================
 */

const SHAZ_DEFAULT_PRODUCTS = [
  // --- CAKES & CUPCAKES ---
  {
    id: "cake-1",
    title: "Will You Marry Me Platter",
    category: "cakes",
    categoryLabel: "Custom Celebration Cake",
    image: "assets/images/products/cake-proposal-platter.jpg",
    fullImage: "assets/images/flyers/flyer-cakes.jpg",
    description: "Romantic proposal cake surrounded by matching artisan piped floral cupcakes in delicate blush and cream hues.",
    tag: "Romantic Surprises",
    priceDisplay: "Custom Quote",
    featured: true
  },
  {
    id: "cake-2",
    title: "The Royal Rosette Designer Cake",
    category: "cakes",
    categoryLabel: "Designer Birthday Cake",
    image: "assets/images/products/cake-anfas-designer.jpg",
    fullImage: "assets/images/flyers/flyer-cakes.jpg",
    description: "Deep violet rosette textured buttercream frosting with an iridescent butterfly topper and custom name lettering.",
    tag: "Birthdays & Milestones",
    priceDisplay: "Custom Quote",
    featured: true
  },
  {
    id: "cake-3",
    title: "Floral Crown Celebration Cake",
    category: "cakes",
    categoryLabel: "Simple & Elegant Cake",
    image: "assets/images/products/cake-you-amma-rose.jpg",
    fullImage: "assets/images/flyers/flyer-cakes.jpg",
    description: "Smooth textured ivory buttercream frosted cake adorned with a crescent wreath of hand-piped pink rosettes.",
    tag: "Family Celebrations",
    priceDisplay: "Custom Quote",
    featured: true
  },
  {
    id: "cake-4",
    title: "Pastel Blossom Artisan Cupcakes",
    category: "cakes",
    categoryLabel: "Artisan Cupcakes",
    image: "assets/images/products/cupcakes-box-blooms.jpg",
    fullImage: "assets/images/flyers/flyer-cakes.jpg",
    description: "Box of 12 lovingly piped celebration cupcakes featuring floral rosettes, heart centres, and pastel tones.",
    tag: "Party Favours",
    priceDisplay: "Custom Quote",
    featured: false
  },
  {
    id: "cake-5",
    title: "Blush Harmony Birthday Cake",
    category: "cakes",
    categoryLabel: "Theme Cakes",
    image: "assets/images/products/cake-happy-birthday-pink.jpg",
    fullImage: "assets/images/flyers/flyer-cakes.jpg",
    description: "A clean celebration cake ringed with fresh blush rose piping and personalised birthday message inscription.",
    tag: "Birthdays",
    priceDisplay: "Custom Quote",
    featured: false
  },

  // --- CHOCOLATE BOUQUETS ---
  {
    id: "choco-1",
    title: "Golden Butterfly KitKat Bouquet",
    category: "chocolate",
    categoryLabel: "Chocolate Bouquet",
    image: "assets/images/products/bouquet-kitkat-butterfly.jpg",
    fullImage: "assets/images/flyers/flyer-chocolate-bouquets.jpg",
    description: "Crisp red KitKat chocolate arrangement presented in sleek black florist wrapping with a gilded 3D butterfly flourish.",
    tag: "Sweet Surprises",
    priceDisplay: "Budget-Friendly",
    featured: true
  },
  {
    id: "choco-2",
    title: "Sweet Romance Dairy Milk & Roses",
    category: "chocolate",
    categoryLabel: "Chocolate & Fresh Roses",
    image: "assets/images/products/bouquet-dairymilk-roses.jpg",
    fullImage: "assets/images/flyers/flyer-chocolate-bouquets.jpg",
    description: "Cadbury Dairy Milk chocolate bars paired harmoniously with velvet red roses and a radiant satin bow.",
    tag: "Anniversaries",
    priceDisplay: "Custom Quote",
    featured: true
  },
  {
    id: "choco-3",
    title: "Cake & Chocolate Bouquet Duo",
    category: "chocolate",
    categoryLabel: "Celebration Combo",
    image: "assets/images/products/combo-cake-bouquet.jpg",
    fullImage: "assets/images/flyers/flyer-chocolate-bouquets.jpg",
    description: "The complete celebration combo: a handcrafted floral birthday cake matched with a full custom chocolate bouquet.",
    tag: "Value Combo",
    priceDisplay: "Combo Deal",
    featured: true
  },
  {
    id: "choco-4",
    title: "Celestial Starry Blue Bouquet",
    category: "chocolate",
    categoryLabel: "Themed Chocolate Bouquet",
    image: "assets/images/products/bouquet-galaxy-blue.jpg",
    fullImage: "assets/images/flyers/flyer-chocolate-bouquets.jpg",
    description: "Starry night blue constellation wrap filled with assorted chocolates, candy bars, and sweet ribbons.",
    tag: "Surprise Gifts",
    priceDisplay: "Custom Quote",
    featured: false
  },
  {
    id: "choco-5",
    title: "Deluxe Assorted Candy Fan",
    category: "chocolate",
    categoryLabel: "Chocolate Bouquet",
    image: "assets/images/products/bouquet-choc-sweet-treats.jpg",
    fullImage: "assets/images/flyers/flyer-chocolate-bouquets.jpg",
    description: "Vibrant arrangement of Dairy Milk, KitKat, and luxury Ferrero treats in white and red florist presentation.",
    tag: "Special Occasions",
    priceDisplay: "Custom Quote",
    featured: false
  },

  // --- FLOWERS & BOUQUETS ---
  {
    id: "flower-1",
    title: "Monochrome Elegance Dual Bouquets",
    category: "flowers",
    categoryLabel: "Fresh Flowers",
    image: "assets/images/products/flowers-black-monochrome-roses.jpg",
    fullImage: "assets/images/flyers/flyer-flower-bouquets.jpg",
    description: "Dramatic matte-black luxury wrapping showcasing pristine blush and ivory roses with designer ribbon typography.",
    tag: "Romantic & Modern",
    priceDisplay: "Custom Quote",
    featured: true
  },
  {
    id: "flower-2",
    title: "English Garden Pastel Bouquet",
    category: "flowers",
    categoryLabel: "Fresh Flowers",
    image: "assets/images/products/flowers-pastel-garden-bouquet.jpg",
    fullImage: "assets/images/flyers/flyer-flower-bouquets.jpg",
    description: "A lush hand-tied mix of garden roses, chamomile, peach blooms, and fresh greenery in gentle lilac wrap.",
    tag: "Birthdays & Smiles",
    priceDisplay: "Custom Quote",
    featured: true
  },
  {
    id: "flower-3",
    title: "Imperial Rose Tiered Box",
    category: "flowers",
    categoryLabel: "Luxury Rose Arrangement",
    image: "assets/images/products/flowers-luxury-rose-cylinder.jpg",
    fullImage: "assets/images/flyers/flyer-flower-bouquets.jpg",
    description: "Tiered cascade of radiant pink roses nestled in a luxury rose cylinder box with silk ribbon.",
    tag: "Milestones",
    priceDisplay: "Custom Quote",
    featured: false
  },
  {
    id: "flower-4",
    title: "Classic Crimson Rose Bouquet",
    category: "flowers",
    categoryLabel: "Romantic Bouquets",
    image: "assets/images/products/flowers-classic-red-roses.jpg",
    fullImage: "assets/images/flyers/flyer-flower-bouquets.jpg",
    description: "Pure romance featuring deep red velvety roses hand-tied in crisp white layering with gold cord.",
    tag: "Romantic Surprises",
    priceDisplay: "Custom Quote",
    featured: false
  },

  // --- CUSTOM PHOTO FRAMES ---
  {
    id: "frame-1",
    title: "Calendar Keepsake Photo Frame",
    category: "frames",
    categoryLabel: "Personalised Photo Frame",
    image: "assets/images/products/frame-birthday-calendar-nayem.jpg",
    fullImage: "assets/images/flyers/flyer-photo-frames.jpg",
    description: "Custom framed photo collage featuring a highlighted birth month calendar, personalized wishes, and portrait montage.",
    tag: "Personalised Gifts",
    priceDisplay: "Custom Made",
    featured: true
  },
  {
    id: "frame-2",
    title: "Our Song Spotify Code Frame",
    category: "frames",
    categoryLabel: "Custom Song Frame",
    image: "assets/images/products/frame-spotify-music.jpg",
    fullImage: "assets/images/flyers/flyer-photo-frames.jpg",
    description: "Minimalist white modern frame with custom photo, pressed floral accents, and scannable Spotify song code.",
    tag: "Anniversaries & Romance",
    priceDisplay: "Custom Made",
    featured: true
  },
  {
    id: "frame-3",
    title: "Golden Pearl Heirloom Frame",
    category: "frames",
    categoryLabel: "Embellished Frame",
    image: "assets/images/products/frame-pearl-family-heirloom.jpg",
    fullImage: "assets/images/flyers/flyer-photo-frames.jpg",
    description: "Opulent velvet and pearl-encrusted keepsake frame tailored for precious family and mother-child portraits.",
    tag: "Family & Keepsakes",
    priceDisplay: "Custom Made",
    featured: false
  },
  {
    id: "frame-4",
    title: "Rustic Duo Couple Frame",
    category: "frames",
    categoryLabel: "Wooden Photo Frame",
    image: "assets/images/products/frame-wooden-couple.jpg",
    fullImage: "assets/images/flyers/flyer-photo-frames.jpg",
    description: "Warm textured wood grain double-cutout frame celebrating couple portraits and shared milestones.",
    tag: "Couples",
    priceDisplay: "Custom Made",
    featured: false
  },

  // --- SURPRISE GIFT BOXES & HAMPERS ---
  {
    id: "hamper-1",
    title: "Surprise Celebration Hamper",
    category: "hampers",
    categoryLabel: "Gift Boxes & Hampers",
    image: "assets/images/products/hamper-custom-gift-set.jpg",
    fullImage: "assets/images/flyers/flyer-gift-hampers.jpg",
    description: "Bespoke gift box packed with gourmet treats, chocolates, keepsake bear, and celebratory party banners.",
    tag: "All-in-One Surprises",
    priceDisplay: "Tailored to Budget",
    featured: true
  },
  {
    id: "hamper-2",
    title: "Heart Plush Teddy Bear",
    category: "hampers",
    categoryLabel: "Soft Toys & Surprises",
    image: "assets/images/products/hamper-teddy-bear.jpg",
    fullImage: "assets/images/flyers/flyer-gift-hampers.jpg",
    description: "Cuddly plush teddy holding an embroidered 'I Love You' heart, a sweet addition to any cake or bouquet order.",
    tag: "Add-On Gift",
    priceDisplay: "Sweet Add-On",
    featured: false
  }
];

// Complete Original Flyers Collection
const SHAZ_FLYERS = [
  {
    title: "Shaz Custom Cakes & Cupcakes Flyer",
    category: "cakes",
    image: "assets/images/flyers/flyer-cakes.jpg",
    caption: "Original business showcase for custom birthday cakes, designer buttercream cakes, and cupcakes."
  },
  {
    title: "Shaz Chocolate Bouquets & Treats Flyer",
    category: "chocolate",
    image: "assets/images/flyers/flyer-chocolate-bouquets.jpg",
    caption: "Original business showcase for chocolate bouquets, KitKat arrangements, and sweet surprises."
  },
  {
    title: "Shaz Flowers & Surprise Order Flyer",
    category: "flowers",
    image: "assets/images/flyers/flyer-flower-bouquets.jpg",
    caption: "Original business showcase for fresh rose bouquets, cylinder flower boxes, and romantic arrangements."
  },
  {
    title: "Shaz Surprise Custom Photo Frames Flyer",
    category: "frames",
    image: "assets/images/flyers/flyer-photo-frames.jpg",
    caption: "Original business showcase for custom calendar frames, Spotify song frames, and pearl keepsakes."
  },
  {
    title: "Shaz Faction Overview & Gift Hampers Flyer",
    category: "hampers",
    image: "assets/images/flyers/flyer-gift-hampers.jpg",
    caption: "Comprehensive original business flyer highlighting gift hampers, perfumes, watches, and party needs."
  }
];

const SHAZ_STORAGE_KEY = "shaz_catalogue_v1";

const ShazCatalogue = {
  /**
   * Get all active products (from localStorage if saved, else default)
   */
  getProducts: function() {
    try {
      const stored = localStorage.getItem(SHAZ_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Could not read localStorage catalogue, using default:", e);
    }
    return [...SHAZ_DEFAULT_PRODUCTS];
  },

  /**
   * Save catalogue into localStorage
   */
  saveProducts: function(products) {
    try {
      localStorage.setItem(SHAZ_STORAGE_KEY, JSON.stringify(products));
      return true;
    } catch (e) {
      console.error("Failed to save catalogue to localStorage:", e);
      return false;
    }
  },

  /**
   * Reset catalogue to default
   */
  resetToDefaults: function() {
    try {
      localStorage.removeItem(SHAZ_STORAGE_KEY);
      return true;
    } catch (e) {
      console.error("Failed to reset catalogue:", e);
      return false;
    }
  },

  /**
   * Check if custom edits currently exist in localStorage
   */
  hasLocalEdits: function() {
    try {
      return localStorage.getItem(SHAZ_STORAGE_KEY) !== null;
    } catch (e) {
      return false;
    }
  },

  /**
   * Get original flyers
   */
  getFlyers: function() {
    return [...SHAZ_FLYERS];
  }
};

if (typeof window !== "undefined") {
  window.SHAZ_DEFAULT_PRODUCTS = SHAZ_DEFAULT_PRODUCTS;
  window.SHAZ_FLYERS = SHAZ_FLYERS;
  window.ShazCatalogue = ShazCatalogue;
}
