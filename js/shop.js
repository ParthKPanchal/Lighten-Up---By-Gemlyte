document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");
  const sortSelect = document.getElementById("sortSelect");
  const searchInput = document.getElementById("searchInput");
  const productCards = document.querySelectorAll(".product-card-item");
  const container = document.getElementById("productGrid"); // Make sure this ID is on your product grid div

  function getSelectedCategories() {
    return Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value.trim().toLowerCase());
  }

  function filterProducts() {
    const selectedCategories = getSelectedCategories();
    const maxPrice = parseFloat(priceRange.value);
    const searchKeyword = searchInput.value.trim().toLowerCase();
    priceValue.textContent = maxPrice;

    let filteredCards = Array.from(productCards).filter((card) => {
      const category = card.dataset.category.trim().toLowerCase();
      const price = parseFloat(card.dataset.price);
      const title = card.querySelector("h5")?.textContent.toLowerCase() || "";
      const description =
        card.querySelector("p.small")?.textContent.toLowerCase() || "";

      const matchCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(category);
      const matchPrice = price <= maxPrice;
      const matchSearch =
        title.includes(searchKeyword) || description.includes(searchKeyword);

      return matchCategory && matchPrice && matchSearch;
    });

    // Sort the filtered cards
    const sortValue = sortSelect.value;
    filteredCards.sort((a, b) => {
      const dateA = new Date(a.dataset.date);
      const dateB = new Date(b.dataset.date);
      return sortValue === "latest" ? dateB - dateA : dateA - dateB;
    });

    // Render filtered cards
    container.innerHTML = "";
    filteredCards.forEach((card) => container.appendChild(card));
  }

  // Event Listeners
  checkboxes.forEach((cb) => cb.addEventListener("change", filterProducts));
  priceRange.addEventListener("input", filterProducts);
  sortSelect.addEventListener("change", filterProducts);
  searchInput.addEventListener("input", filterProducts);

  // Initial filtering
  filterProducts();
});

// Optional: Clear all filters
function clearAllFilters() {
  document
    .querySelectorAll(".filter-checkbox")
    .forEach((cb) => (cb.checked = false));
  document.getElementById("priceRange").value = 25000;
  document.getElementById("searchInput").value = "";
  document.getElementById("sortSelect").value = "latest";
  document.getElementById("priceValue").textContent = 25000;
  // Re-filter after clearing
  document.dispatchEvent(new Event("DOMContentLoaded"));
}
