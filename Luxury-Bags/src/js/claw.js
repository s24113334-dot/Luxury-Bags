// This file contains the JavaScript logic for the claw machine functionality.
// It manages the animation and interaction of the claw mechanism when a coin is inserted and a product is selected.

const clawMachine = {
    clawElement: document.querySelector('.claw'),
    productContainer: document.querySelector('.products'),
    insertedCoins: 0,
    selectedProduct: null,
    isClawActive: false,

    init() {
        this.bindEvents();
    },

    bindEvents() {
        const insertArea = document.getElementById('insert-area');
        insertArea.addEventListener('drop', this.handleCoinDrop.bind(this));
        this.productContainer.addEventListener('click', this.handleProductSelect.bind(this));
    },

    handleCoinDrop(e) {
        e.preventDefault();
        const value = Number(e.dataTransfer.getData('value'));
        this.insertedCoins += value;
        this.updateDisplay();
        this.activateClaw();
    },

    handleProductSelect(e) {
        if (!e.target.classList.contains('product')) return;
        const index = e.target.dataset.index;
        this.selectedProduct = products[index];

        if (this.insertedCoins >= this.selectedProduct.price) {
            this.startClawAnimation();
        } else {
            alert('Not enough coins! Please insert more.');
        }
    },

    activateClaw() {
        if (!this.isClawActive) {
            this.isClawActive = true;
            this.clawElement.classList.add('active');
            setTimeout(() => {
                this.clawElement.classList.remove('active');
                this.isClawActive = false;
            }, 2000); // Duration of claw animation
        }
    },

    startClawAnimation() {
        this.clawElement.classList.add('grabbing');
        setTimeout(() => {
            this.clawElement.classList.remove('grabbing');
            this.completeTransaction();
        }, 1500); // Duration of grabbing animation
    },

    completeTransaction() {
        if (this.selectedProduct) {
            this.selectedProduct.stock--;
            this.insertedCoins -= this.selectedProduct.price;
            this.updateDisplay();
            alert(`You have successfully purchased: ${this.selectedProduct.name}`);
            this.selectedProduct = null;
        }
    },

    updateDisplay() {
        const insertedDisplay = document.getElementById('inserted');
        insertedDisplay.textContent = this.insertedCoins;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    clawMachine.init();
});