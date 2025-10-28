# Luxury Bags Vending Machine

Welcome to the Luxury Bags Vending Machine project! This application simulates a luxurious vending machine experience, allowing users to purchase high-end bags through an interactive interface that resembles a claw machine.

## Project Structure

The project is organized as follows:

```
Luxury-Bags
├── src
│   ├── index.html          # Main HTML structure for the vending machine application
│   ├── styles
│   │   ├── main.css        # Main styles for the vending machine
│   │   └── claw-machine.css # Styles specific to the claw machine design
│   ├── js
│   │   ├── app.js          # Main JavaScript logic for the vending machine
│   │   └── claw.js         # JavaScript logic for the claw machine functionality
│   ├── components
│   │   ├── product-card.js  # Component representing a product card
│   │   └── receipt.js       # Component for displaying the purchase receipt
│   └── assets
│       ├── fonts
│       │   └── Poppins.woff2 # Web font for styling text
│       └── models
│           └── claw-scene.json # 3D model data for the claw machine scene
├── package.json             # npm configuration file
└── README.md                # Project documentation
```

## Features

- **Interactive Claw Machine**: Users can insert coins and interact with a claw mechanism to select luxury bags.
- **Realistic Design**: The vending machine interface is designed to look luxurious and appealing, enhancing the user experience.
- **Product Management**: The application manages product stock and allows for easy refilling of products and coins.
- **Purchase Receipts**: After a successful transaction, users receive a detailed receipt of their purchase.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd Luxury-Bags
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   Open `src/index.html` in your web browser to view the application.

## Usage

- Drag and drop coins into the designated area to insert money.
- Click on the product cards to purchase a bag.
- Use the reset button to start a new transaction or refill the stock and coins.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.