const products = [
  { name: 'Chanel', price: 3000, stock: 5, icon: '👜' },
  { name: 'Hermès', price: 5000, stock: 3, icon: '🧳' },
  { name: 'Coachella', price: 1200, stock: 10, icon: '🎒' },
  { name: 'C&K', price: 800, stock: 7, icon: '👝' },
  { name: 'Lacoste', price: 1000, stock: 8, icon: '🛍️' }
];

const coinInventory = { 500: 10, 1000: 10, 2000: 5 };

const productContainer = document.querySelector('.products');
const coinContainer = document.querySelector('.coins');
const insertArea = document.getElementById('insert-area');
const insertedDisplay = document.getElementById('inserted');
const changeDisplay = document.getElementById('change');
const receipt = document.getElementById('receipt');
const resetBtn = document.getElementById('reset');
const refillBtn = document.getElementById('refill');
const logBox = document.getElementById('logBox');

let inserted = 0;

function logMessage(msg, type='success') {
  const div = document.createElement('div');
  div.classList.add('log-entry', type);
  div.textContent = `${new Date().toLocaleTimeString()} - ${msg}`;
  logBox.appendChild(div);
  logBox.scrollTop = logBox.scrollHeight;
}

function renderProducts() {
  productContainer.innerHTML = '';
  products.forEach((p, i) => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.dataset.index = i;
    div.innerHTML = `${p.icon}<br>${p.name} — $${p.price} (${p.stock} left)`;
    div.style.opacity = p.stock > 0 ? 1 : 0.4;
    productContainer.appendChild(div);
  });
}

function renderCoins() {
  coinContainer.innerHTML = '';
  Object.keys(coinInventory).forEach(value => {
    const div = document.createElement('div');
    div.classList.add('coin');
    div.dataset.value = value;
    div.textContent = '$' + value;
    div.draggable = true;
    coinContainer.appendChild(div);
  });
}

renderProducts();
renderCoins();

document.addEventListener('dragstart', e => {
  if (e.target.classList.contains('coin')) {
    e.dataTransfer.setData('value', e.target.dataset.value);
  }
});

insertArea.addEventListener('dragover', e => e.preventDefault());
insertArea.addEventListener('drop', e => {
  e.preventDefault();
  const value = Number(e.dataTransfer.getData('value'));
  if (coinInventory[value] > 0) {
    inserted += value;
    coinInventory[value]--;
    insertedDisplay.textContent = inserted;
    logMessage(`Inserted $${value}`, 'success');
  } else {
    logMessage(`Coin $${value} unavailable!`, 'error');
    alert('Coin machine out of this coin!');
  }
});

productContainer.addEventListener('click', e => {
  if (!e.target.classList.contains('product')) return;
  const index = e.target.dataset.index;
  const product = products[index];

  if (product.stock <= 0) {
    logMessage(`${product.name} is out of stock`, 'error');
    alert('Out of stock!');
    return;
  }

  if (inserted >= product.price) {
    const change = inserted - product.price;
    changeDisplay.textContent = change;
    product.stock--;
    receipt.style.display = 'block';
    const now = new Date();
    receipt.innerHTML = `<h3>🧾 Purchase Receipt</h3>
      <p><strong>Item:</strong> ${product.name}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Inserted:</strong> $${inserted}</p>
      <p><strong>Change:</strong> $${change}</p>
      <hr>
      <p><strong>Date:</strong> ${now.toLocaleDateString()}</p>
      <p><strong>Time:</strong> ${now.toLocaleTimeString()}</p>`;
    logMessage(`Purchased ${product.name} for $${product.price}, change $${change}`, 'success');
    inserted = 0;
    insertedDisplay.textContent = 0;
    renderProducts();
  } else {
    logMessage(`Not enough money for ${product.name}`, 'warning');
    alert('Not enough money! Insert more coins.');
  }
});

resetBtn.addEventListener('click', () => {
  inserted = 0;
  insertedDisplay.textContent = 0;
  changeDisplay.textContent = 0;
  receipt.style.display = 'none';
  logMessage('Machine reset', 'success');
  alert('Machine reset! You can now buy another bag.');
});

refillBtn.addEventListener('click', () => {
  products.forEach(p => p.stock = 10);
  Object.keys(coinInventory).forEach(c => coinInventory[c] = 10);
  renderProducts();
  renderCoins();
  logMessage('Stock and coins refilled', 'success');
  alert('Stock and coins refilled!');
});