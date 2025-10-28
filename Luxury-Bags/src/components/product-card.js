// src/components/product-card.js

class ProductCard {
  constructor(name, price, stock, icon) {
    this.name = name;
    this.price = price;
    this.stock = stock;
    this.icon = icon;
  }

  render() {
    const card = document.createElement('div');
    card.classList.add('product-card');
    card.innerHTML = `
      <div class="product-icon">${this.icon}</div>
      <div class="product-details">
        <h2 class="product-name">${this.name}</h2>
        <p class="product-price">$${this.price}</p>
        <p class="product-stock">${this.stock} left</p>
      </div>
    `;
    card.style.opacity = this.stock > 0 ? 1 : 0.4;
    return card;
  }
}

export default ProductCard;