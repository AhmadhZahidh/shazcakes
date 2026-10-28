/**
 * ====================================================================
 * SHAZ CAKES & SURPRISES — LOCAL BROWSER CATALOGUE EDITOR
 * ====================================================================
 * Purely client-side tool utilizing browser localStorage.
 * No backend, no database, no fake login, no passwords.
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initEditor();
});

function initEditor() {
  const tableBody = document.getElementById("editorTableBody");
  const addForm = document.getElementById("addProductForm");
  const imageInput = document.getElementById("newProdImageFile");
  const imagePreview = document.getElementById("imagePreview");
  const resetBtn = document.getElementById("resetDefaultsBtn");
  const exportBtn = document.getElementById("exportCodeBtn");
  const exportModal = document.getElementById("exportModal");
  const exportTextarea = document.getElementById("exportCodeOutput");
  const copyExportBtn = document.getElementById("copyExportBtn");
  const closeExportBtn = document.getElementById("closeExportBtn");

  let currentImageDataUrl = "";

  // Render product list
  function renderList() {
    const products = ShazCatalogue.getProducts();
    const hasEdits = ShazCatalogue.hasLocalEdits();

    const statusBadge = document.getElementById("storageStatusBadge");
    if (statusBadge) {
      statusBadge.innerHTML = hasEdits
        ? `<span style="color:#C84376; font-weight:700;">● Using Local Browser Drafts (${products.length} items)</span>`
        : `<span style="color:#25D366; font-weight:700;">● Using Default Original Catalogue (${products.length} items)</span>`;
    }

    tableBody.innerHTML = "";
    products.forEach((prod, idx) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td style="width: 60px;">
          <img src="${prod.image}" alt="${escapeHtml(prod.title)}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px; border: 1px solid #ddd;" />
        </td>
        <td>
          <strong>${escapeHtml(prod.title)}</strong><br>
          <small style="color: #666;">${escapeHtml(prod.tag || "")}</small>
        </td>
        <td>
          <span style="display:inline-block; padding: 3px 8px; background: #FFF0F5; color: #C84376; border-radius: 12px; font-size: 0.8rem; font-weight: 600;">
            ${escapeHtml(prod.categoryLabel || prod.category)}
          </span>
        </td>
        <td style="max-width: 250px; font-size: 0.85rem; color: #555;">
          ${escapeHtml(prod.description)}
        </td>
        <td>
          <span style="font-weight: 600; font-size: 0.9rem;">${escapeHtml(prod.priceDisplay || "Custom Quote")}</span>
        </td>
        <td>
          <button class="btn btn-sm" style="background:#fee2e2; color:#b91c1c; padding: 6px 12px;" data-index="${idx}">
            Remove
          </button>
        </td>
      `;

      tr.querySelector("button").addEventListener("click", () => {
        if (confirm(`Remove "${prod.title}" from local drafts?`)) {
          const updated = ShazCatalogue.getProducts();
          updated.splice(idx, 1);
          ShazCatalogue.saveProducts(updated);
          renderList();
        }
      });

      tableBody.appendChild(tr);
    });
  }

  // Handle Image File selection
  if (imageInput) {
    imageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 2 * 1024 * 1024) {
          alert("Image is larger than 2MB. For optimal local storage, choose an image under 2MB.");
          return;
        }
        const reader = new FileReader();
        reader.onload = function(evt) {
          currentImageDataUrl = evt.target.result;
          imagePreview.src = currentImageDataUrl;
          imagePreview.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Handle Form Submit
  if (addForm) {
    addForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const title = document.getElementById("newProdTitle").value.trim();
      const category = document.getElementById("newProdCategory").value;
      const categoryLabel = document.getElementById("newProdCategoryLabel").value.trim() || category;
      const description = document.getElementById("newProdDesc").value.trim();
      const tag = document.getElementById("newProdTag").value.trim() || "Handcrafted";
      const priceDisplay = document.getElementById("newProdPrice").value.trim() || "Custom Quote";
      const customPath = document.getElementById("newProdImagePath").value.trim();

      const finalImage = currentImageDataUrl || customPath || "assets/images/products/cake-anfas-designer.jpg";

      if (!title || !description) {
        alert("Please provide both a title and description.");
        return;
      }

      const newProduct = {
        id: "custom-" + Date.now(),
        title,
        category,
        categoryLabel,
        image: finalImage,
        fullImage: finalImage,
        description,
        tag,
        priceDisplay,
        featured: false
      };

      const products = ShazCatalogue.getProducts();
      products.unshift(newProduct);
      ShazCatalogue.saveProducts(products);

      // Reset form
      addForm.reset();
      currentImageDataUrl = "";
      imagePreview.style.display = "none";

      alert(`Added "${title}" to your browser drafts!`);
      renderList();
    });
  }

  // Reset Defaults
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset catalogue to default original items? Any items added in this browser will be cleared.")) {
        ShazCatalogue.resetToDefaults();
        renderList();
        alert("Catalogue reset to defaults!");
      }
    });
  }

  // Export JS Code Snippet
  if (exportBtn && exportModal) {
    exportBtn.addEventListener("click", () => {
      const products = ShazCatalogue.getProducts();
      const code = `// Updated SHAZ_DEFAULT_PRODUCTS array:\n// Copy and paste this into assets/js/catalogue.js to make your edits permanent on hosting\n\nconst SHAZ_DEFAULT_PRODUCTS = ${JSON.stringify(products, null, 2)};`;
      exportTextarea.value = code;
      exportModal.style.display = "flex";
    });

    closeExportBtn?.addEventListener("click", () => {
      exportModal.style.display = "none";
    });

    copyExportBtn?.addEventListener("click", () => {
      exportTextarea.select();
      navigator.clipboard.writeText(exportTextarea.value).then(() => {
        alert("Code snippet copied to clipboard! You can paste it into assets/js/catalogue.js.");
      });
    });
  }

  renderList();
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
