// src/components/receipt.js
class Receipt {
  constructor(receiptElement) {
    this.receiptElement = receiptElement;
  }

  displayReceipt(product, inserted, change) {
    const now = new Date();
    this.receiptElement.innerHTML = `
      <h3>🧾 Purchase Receipt</h3>
      <p><strong>Item:</strong> ${product.name}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Inserted:</strong> $${inserted}</p>
      <p><strong>Change:</strong> $${change}</p>
      <hr>
      <p><strong>Date:</strong> ${now.toLocaleDateString()}</p>
      <p><strong>Time:</strong> ${now.toLocaleTimeString()}</p>
    `;
    this.receiptElement.style.display = 'block';
  }

  resetReceipt() {
    this.receiptElement.style.display = 'none';
    this.receiptElement.innerHTML = '';
  }
}

export default Receipt;