# 🎂 Shaz Cakes & Surprises — Premium Static Website

Welcome to the official, upgraded website for **Shaz Cakes & Surprises**!

This project is a high-performance, mobile-responsive, elegant static website crafted with **pure HTML5, CSS3, and Vanilla JavaScript**. It runs seamlessly offline or online on any Windows PC by double-clicking `index.html`, and can be published immediately to any web host (such as cPanel / `public_html`, GitHub Pages, Netlify, or Vercel) with **zero backend dependencies**, **zero database setup**, and **zero monthly server costs**.

---

## 🌸 Brand Highlights & Visual Identity

- **Brand Name:** Shaz Cakes & Surprises
- **Concept:** Custom Celebration Cakes, Designer Buttercream Cakes, Artisan Cupcakes, Chocolate Bouquets, Fresh Flower Bouquets, Custom Keepsake Photo Frames, and Surprise Hampers.
- **Colour Palette:**
  - **Primary Blush Pink:** `#E86A9A`
  - **Deep Rose:** `#C84376`
  - **Light Pink:** `#FFF0F5`
  - **Soft Cream & White:** `#FFFBFD`
  - **Champagne Gold Accents:** `#D9B779`
  - **Text Neutral:** `#382632`
- **Authentic Assets Preserved:** 100% of the original business flyer photographs and product images provided in your archive have been preserved in full resolution in `assets/images/original/` and showcased across the gallery, custom product cards, and interactive full-screen lightbox.

---

## 📁 Project Folder Structure

```text
Shaz/
├── index.html                   # Main luxury one-page storefront
├── editor.html                  # Optional local browser catalogue drafting editor
├── README.md                    # Beginner setup, hosting & maintenance guide
├── robots.txt                   # Search engine crawler instructions
├── sitemap.xml                  # SEO sitemap template
└── assets/
    ├── css/
    │   └── style.css            # Custom responsive styles, luxury shadows & typography
    ├── js/
    │   ├── config.js            # Central WhatsApp numbers & brand configuration
    │   ├── catalogue.js         # Authentic product catalogue & localStorage draft sync
    │   ├── main.js              # Navbar, gallery filters, lightbox, WhatsApp message builder
    │   └── editor.js            # Local browser editor logic & code exporter
    └── images/
        ├── icons/               # SVG logo and favicon assets
        │   ├── logo.svg
        │   └── favicon.svg
        ├── original/            # Untouched original uploaded business flyers (5 items)
        ├── flyers/              # High-resolution flyer showcase images
        └── products/            # Individual high-definition crops of your cakes & gifts (24 items)
```

---

## 🚀 Beginner Quick-Start Guide (Windows Local Testing)

### 1. How to Test on Your Windows PC
1. Unzip the project folder to your preferred location (e.g., `Desktop\Shaz`).
2. Double-click **`index.html`** or right-click `index.html` → **Open with** → **Google Chrome**, **Microsoft Edge**, or **Brave**.
3. The website loads immediately! Everything works locally without needing Apache, Node.js, PHP, or MySQL.
4. Try clicking the gallery category filters, opening cake photos in the full-screen Lightbox, selecting occasions, and testing the **Custom Order Planner** message builder.

### 2. How to Update Your WhatsApp Phone Numbers
All phone numbers and WhatsApp prefilled messages are managed in **one single file**:

👉 Open **`assets/js/config.js`** in Notepad or VS Code:

```javascript
// assets/js/config.js

const SHAZ_CONFIG = {
  contact: {
    // Primary WhatsApp (Use international digits without '+' or spaces)
    // Sri Lanka: Country code 94 + mobile number
    whatsappPrimary: "94781608609",
    whatsappPrimaryDisplay: "+94 78 160 8609",

    // Secondary lines for customer convenience
    whatsappSecondary: "94760935697",
    whatsappSecondaryDisplay: "+94 76 093 5697",

    contactThird: "94756625697",
    contactThirdDisplay: "+94 75 662 5697",
  },
  // ...
};
```

Whenever you save this file, every single WhatsApp button, floating button, occasion card, and gallery enquiry link across the entire website updates automatically!

---

## 🌐 Public Hosting & Deployment Guide

Since this website is 100% static (HTML/CSS/JS), it can be hosted anywhere for free or on traditional web hosting.

### Option A: Traditional Web Hosting (cPanel / `public_html`)
1. Log into your hosting cPanel.
2. Open **File Manager** and navigate into the **`public_html`** directory.
3. Click **Upload** and upload the `Shaz-Cakes-Deployment.zip` archive.
4. Right-click the uploaded ZIP inside `public_html` and click **Extract**.
5. Ensure `index.html` is directly inside `public_html` (not inside a sub-subfolder).
6. Visit your domain name (e.g. `https://yourdomain.com`). Your website is live!

### Option B: Netlify (Free, Fastest & One-Click)
1. Go to [https://www.netlify.com](https://www.netlify.com) and log in or create a free account.
2. In the dashboard, drag and drop the unzipped `Shaz` project folder into the Netlify "Sites" area.
3. Within 10 seconds, Netlify generates a live, secure HTTPS URL (e.g., `https://shaz-cakes.netlify.app`).
4. You can connect your custom domain (like `shazcakes.lk`) under "Domain Management".

### Option C: GitHub Pages (Free)
1. Create a GitHub repository (e.g. `shaz-cakes`).
2. Upload all files from the `Shaz` folder into the main branch.
3. Go to **Settings** → **Pages** → Source: **Deploy from a branch** (`main` / root).
4. Save. Your website will be live at `https://<username>.github.io/shaz-cakes/`.

---

## 🔒 Security, Privacy & Static Architecture Checklist

| Feature | Status | Explanation |
| :--- | :--- | :--- |
| **No Server-Side Vulnerabilities** | ✅ Immune | There is no SQL database, PHP interpreter, or server execution that can be targeted with SQL injection or remote code execution. |
| **No Secret Keys in Frontend** | ✅ Safe | No API keys, secret credentials, or administrative passwords are hard-coded into client scripts. |
| **Direct WhatsApp Communication** | ✅ Authentic | Customers communicate directly through official, encrypted `https://wa.me/` links. No intermediary database stores customer phone numbers or private messages. |
| **Safe DOM Rendering** | ✅ Protected | Dynamic product titles and text are safely escaped to prevent Cross-Site Scripting (XSS). |
| **HTTPS Recommendation** | 🛡️ Recommended | Always enable an SSL/TLS certificate (free on Netlify, GitHub Pages, or cPanel Let's Encrypt) to ensure visitors browse over secure HTTPS. |

---

## 🛠️ How to Add or Change Products

You have two simple ways to update your cake and gift collection:

### Method 1: Using the Built-In Local Browser Editor (`editor.html`)
1. Open `editor.html` in your browser.
2. You will see a clearly labeled drafting screen.
3. Fill in the product title, category, description, and upload/select an image file.
4. Click **+ Add to Local Catalogue**. The new product will appear in your browser's view immediately!
5. To make this change permanent on your live public website:
   - Click **Export Permanent Code**.
   - Copy the generated snippet.
   - Paste it over the `SHAZ_DEFAULT_PRODUCTS` list in `assets/js/catalogue.js`.
   - Save and upload `assets/js/catalogue.js` to your hosting!

### Method 2: Direct File Editing (Standard Web Development)
1. Drop your new cake photograph into `assets/images/products/`.
2. Open `assets/js/catalogue.js`.
3. Add a new item block to the `SHAZ_DEFAULT_PRODUCTS` array:
   ```javascript
   {
     id: "cake-new-1",
     title: "Lavender Dream Birthday Cake",
     category: "cakes",
     categoryLabel: "Designer Birthday Cake",
     image: "assets/images/products/my-new-cake.jpg",
     fullImage: "assets/images/products/my-new-cake.jpg",
     description: "Pastel purple buttercream cake with handcrafted rosettes.",
     tag: "Birthdays",
     priceDisplay: "Custom Quote",
     featured: true
   },
   ```
4. Save the file and re-upload `assets/js/catalogue.js`.

---

## 📢 Official Launch Captions & Social Media Posts

### 🌟 Official Brand Announcement (Your Primary Launch Post)
```text
🌸🎂 Welcome to Shaz Cakes & Surprises! 🎂🌸

Make every special moment a little sweeter with beautiful cakes, lovely chocolate bouquets and thoughtful surprise gifts. 💗✨

🎂 Birthday & celebration cakes  
🍫 Chocolate bouquets  
🎁 Surprise gifts  
💕 Custom creations for your special occasions

✨ Have a special idea in mind? Contact us on WhatsApp to discuss your dream cake or surprise!

🌐 Visit our website: [YOUR WEBSITE LINK]

💌 Message us to ask about designs, prices and availability:
📲 WhatsApp: +94 78 160 8609 | +94 76 093 5697

🌷 Shaz Cakes & Surprises — Sweet Moments. Beautiful Memories. 💖

#ShazCakes #CustomCakes #BirthdayCakes #ChocolateBouquets #SurpriseGifts #SriLanka
```

### 📱 Short WhatsApp Status & Instagram Story Blast
```text
🌸✨ Welcome to Shaz Cakes & Surprises! ✨🌸
Visit our new website to explore our latest custom birthday cakes, chocolate bouquets, and surprise gifts! 🎂💐🎁

👉 Tap here to explore & order: [YOUR WEBSITE LINK]
Direct WhatsApp: +94 78 160 8609
```

---

*Handcrafted with care for Shaz Cakes & Surprises.*
