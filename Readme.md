# Global Trend - Product Page

## Overview

This project is a modern, responsive product page for an e-commerce platform called **Global Trend**. It showcases a single product with interactive galleries, variant selection, recommendations, and bundle offers, providing a user experience similar to leading online retailers.

## Features Implemented

- **Responsive Layout:** Adapts to desktop, tablet, and mobile screens.
- **Product Image Gallery:** Scrollable thumbnails and main image with hover zoom effect.
- **Variant Selection:** Choose product size and color with interactive controls.
- **Size Chart Modal:** Flipkart-style modal with detailed size guide and illustration.
- **Color Swatches:** Switch main image by selecting color swatches.
- **Recommendation Carousel:** "Pair Well With" section for related products.
- **Product Bundle:** Suggests bundle deals with total price calculation.
- **Tabbed Product Info:** Tabs for Description, Product Information, and Shipping Details.
- **Related Products Grid:** Additional product suggestions at the bottom.
- **Accessible UI:** Keyboard navigation and ARIA-friendly modals.

## How to Run Locally

1. **Clone or Download the Repository**
   ```
   git clone https://github.com/Stranger-One/Product-Page-Global-Trend
   ```
   Or download and extract the ZIP.

2. **Open the Project Folder**
   Open the folder in [Visual Studio Code](https://code.visualstudio.com/) or your preferred IDE.

3. **Start a Local Server**
   - You can use the VS Code Live Server extension, or run a simple Python server:
     ```
     # For Python 3.x
     python -m http.server 8000
     ```
   - Or use Node.js http-server:
     ```
     npx http-server .
     ```

4. **Open in Browser**
   - Navigate to `http://localhost:8000` (or the port you chose).
   - Open `index.html` to view the product page.

5. **Assets**
   - Ensure the `assets/` folder contains all required images (product images, profile picture, size guide, etc.).

---

**Note:**  
No backend or database is required. All functionality is implemented with HTML, CSS, and JavaScript.
