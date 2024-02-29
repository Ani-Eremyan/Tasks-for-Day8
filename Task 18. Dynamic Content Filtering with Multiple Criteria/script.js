const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
  ];
  
  const productList = document.getElementById('product-list');
  const categorySelect = document.getElementById('category-select');
  const tagCheckboxes = document.querySelectorAll('.tag-checkbox');
  
  function renderProducts(productsToRender) {
    productList.innerHTML = '';
    if (productsToRender.length === 0) {
      productList.innerHTML = '<p>No products found.</p>';
    } else {
      productsToRender.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
          <h2>${product.name}</h2>
          <p>Category: ${product.category}</p>
          <p>Price: $${product.price}</p>
        `;
        productList.appendChild(productElement);
      });
    }
  }
  
  function applyFilters() {
    let filteredProducts = products;
  
    const selectedCategory = categorySelect.value;
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
  
    const selectedTags = Array.from(tagCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
  
    if (selectedTags.length > 0) {
      filteredProducts = filteredProducts.filter(product => {
        return selectedTags.every(tag => product.tags.includes(tag));
      });
    }
  
    renderProducts(filteredProducts);
  }
  
  categorySelect.addEventListener('change', applyFilters);
  tagCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
  });
  
  renderProducts(products);
  