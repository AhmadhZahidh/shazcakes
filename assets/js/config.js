/**
 * ====================================================================
 * SHAZ CAKES & SURPRISES — CENTRAL CONFIGURATION FILE
 * ====================================================================
 * 
 * Edit this file to update contact numbers, business settings, 
 * prefilled WhatsApp templates, and social links.
 * 
 * NOTE FOR BEGINNERS:
 * - When entering WhatsApp numbers for the 'wa.me' links, use 
 *   the international format without '+' signs, spaces, or dashes.
 *   Example: For Sri Lanka (country code +94) and mobile 078 160 8609, 
 *   enter: "94781608609".
 * ====================================================================
 */

const SHAZ_CONFIG = {
  // Brand details
  brand: {
    name: "Shaz Cakes & Surprises",
    shortName: "Shaz",
    tagline: "Sweet Moments. Beautiful Memories.",
    subtitle: "Artisan Cakes, Flower Bouquets, Chocolate Treats & Personalised Gifts",
    serviceArea: "Sri Lanka",
    currency: "LKR",
    currencySymbol: "Rs.",
    orderNotice: "Please note: An enquiry is not a confirmed booking. Availability, final pricing, and delivery/pickup arrangements are confirmed directly via WhatsApp discussion."
  },

  // Contact numbers (From original business posters)
  contact: {
    // Primary WhatsApp used for all one-click enquiry buttons
    whatsappPrimary: "94781608609",
    whatsappPrimaryDisplay: "+94 78 160 8609",

    // Alternative contact lines for customer convenience
    whatsappSecondary: "94760935697",
    whatsappSecondaryDisplay: "+94 76 093 5697",

    contactThird: "94756625697",
    contactThirdDisplay: "+94 75 662 5697",

    // Optional email (leave empty if not applicable)
    email: "",

    // Business hours
    hoursNotice: "Order enquiries welcome daily. Advance booking recommended for custom cakes & elaborate hampers."
  },

  // Social media accounts (leave empty if not yet created; won't show fake links)
  social: {
    instagram: "",
    facebook: "",
    tiktok: ""
  },

  // Pre-configured WhatsApp messages for each customer intention
  messages: {
    general: () => 
      "Hello Shaz Cakes & Surprises! I would like to make an enquiry about your cakes and gift options. Could you please share more details?",

    birthdayCake: () =>
      "Hello Shaz Cakes & Surprises! I would like to enquire about a Birthday Cake.\n\n" +
      "• Occasion: Birthday Celebration\n" +
      "• Preferred Date: [Please enter your date]\n" +
      "• Flavour / Theme: [e.g. Chocolate, Vanilla, Floral]\n" +
      "• Guest Count / Size: [e.g. 1kg / 1.5kg]\n\n" +
      "Could you please let me know design possibilities and prices?",

    customCake: () =>
      "Hello Shaz Cakes & Surprises! I would like to enquire about a Custom Cake.\n\n" +
      "• Occasion: [e.g. Wedding / Engagement / Milestone]\n" +
      "• Preferred Date: [Please enter date]\n" +
      "• Custom Design Idea: [Describe your idea or theme]\n" +
      "• Budget / Size: [Enter details]\n\n" +
      "I'd love to discuss available options with you!",

    chocolateBouquet: () =>
      "Hello Shaz Cakes & Surprises! I am interested in ordering a Chocolate Bouquet.\n\n" +
      "• Preferred Chocolates: [e.g. KitKat / Dairy Milk / Assorted]\n" +
      "• Occasion: [e.g. Birthday / Surprise / Anniversary]\n" +
      "• Delivery / Collection Date: [Date]\n\n" +
      "Please share your bouquet options and price packages.",

    flowers: () =>
      "Hello Shaz Cakes & Surprises! I would like to enquire about a Fresh Flower Bouquet.\n\n" +
      "• Occasion: [e.g. Birthday / Romantic Surprise / Anniversary]\n" +
      "• Preferred Flower / Style: [e.g. Roses / Pastel Garden Bouquet]\n" +
      "• Required Date: [Date]\n\n" +
      "Could you please share your bouquet arrangements and pricing?",

    photoFrame: () =>
      "Hello Shaz Surprise! I would like to enquire about a Custom Photo Frame.\n\n" +
      "• Frame Style: [e.g. Birthday Calendar / Spotify Song / Couple Cutout / Pearl Heirloom]\n" +
      "• Occasion: [e.g. Birthday / Anniversary / Memory]\n" +
      "• Required Date: [Date]\n\n" +
      "Could you please guide me on how to send the photos and details?",

    giftHamper: () =>
      "Hello Shaz Cakes & Surprises! I would like to order a Custom Surprise Hamper.\n\n" +
      "• Occasion: [Occasion]\n" +
      "• Included Items: [e.g. Chocolates / Teddy / Perfume / Watches / Cupcakes]\n" +
      "• Approximate Budget: [Budget]\n" +
      "• Required Date: [Date]\n\n" +
      "Please let me know the options available!",

    occasion: (occasionName) =>
      `Hello Shaz Cakes & Surprises! I am planning a celebration for: ${occasionName}.\n\n` +
      `• Preferred Date: [Please enter your date]\n` +
      `• I am interested in: [Cakes / Bouquets / Surprise Hampers / Photo Frames]\n\n` +
      `Could you please share recommended packages and availability?`,

    product: (productName, category) =>
      `Hello Shaz Cakes & Surprises! I am interested in ordering: "${productName}" (Category: ${category}).\n\n` +
      `• Required Date: [Please enter your preferred date]\n` +
      `• Customisation Notes: [Any name, message, colour or flavour preference]\n\n` +
      `Could you please confirm availability and the estimated price?`,

    customBuilder: ({ occasion, itemType, preferredDate, budget, notes }) =>
      `Hello Shaz Cakes & Surprises! I would like to enquire with the following custom details:\n\n` +
      `• Occasion: ${occasion || "Special Occasion"}\n` +
      `• Item of Interest: ${itemType || "Custom Creation"}\n` +
      `• Preferred Date: ${preferredDate || "To be discussed"}\n` +
      `• Target Budget: ${budget ? "Rs. " + budget : "Flexible / To be advised"}\n` +
      `• Notes & Wishes: ${notes || "None"}\n\n` +
      `Looking forward to hearing from you!`
  },

  /**
   * Helper function to build a safe, official WhatsApp wa.me link
   */
  buildWhatsAppUrl: function(text, phoneOverride) {
    const phone = phoneOverride || this.contact.whatsappPrimary;
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(text.trim());
    return `https://wa.me/${cleanPhone}?text=${encodedText}`;
  }
};

// Make accessible to all browser scripts
if (typeof window !== "undefined") {
  window.SHAZ_CONFIG = SHAZ_CONFIG;
}
