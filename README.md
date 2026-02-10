# 🍔 Speedy Eats – Online Food Ordering Frontend

Speedy Eats is a modern, browser-based food ordering frontend designed to simulate a real-world online food delivery experience. The project focuses on clean UI, restaurant-based menus, order management, and client-side data persistence using JavaScript.

This frontend is framework-free (HTML, CSS, JavaScript only) and is ideal for learning, demos, and integration with a future backend (ASP.NET, Node.js, etc.).

---

## 🎯 Project Goal

The goal of this project is to:
- Display multiple famous restaurants
- Show structured food menus for each restaurant
- Allow users to create and place food orders
- Store order records locally
- Provide a clean, horizontal, food-app–style user interface

---

## 🍽️ Restaurants & Menus

- The application contains **10 famous restaurants**
- Each restaurant has **exactly 6 food items**
- Food items are displayed in a **2-row grid layout**
  - **3 items per row**
- Restaurants are selectable from a **horizontal restaurant bar**

When a restaurant is selected:
- Its name is shown at the top of the menu
- Only that restaurant’s menu is displayed
- Menu updates dynamically without reloading the page

---

## 📐 UI & Layout Design

- **Horizontal layout** inspired by real food delivery apps
- Restaurant selector uses **horizontal scrolling**
- Menu uses **CSS Grid** for a clean 3×2 item layout
- Order panel is fixed on the right for easy access
- Responsive and readable color scheme
- Card-based design for food items

---

## 🛒 Order Management

Users can:
- Add food items to an order
- See all selected items listed in real time
- View the automatically calculated total price

Each order includes:
- **Order ID** (auto-generated)
- **Order Owner Name** (required input)
- **Order Note** (optional)
- **Ordered Items**
- **Total Price**
- **Order Date & Time**

---

## ✅ Place Order Functionality

- Clicking **“Place Order”** validates:
  - Owner name is entered
  - At least one item is added
- On success:
  - A confirmation message is displayed
  - Order is saved locally
  - Order state resets for a new order

There is **no “remove order” button** by design — orders are finalized once placed, simulating real-world food apps.

---

## 💾 Data Persistence (Local Storage)

- Orders are saved in the browser using `localStorage`
- Data is stored in JSON format
- Multiple orders are preserved even after page refresh
- Each new order is appended to existing records

Example stored data includes:
- Order ID
- Customer name
- Notes
- Items and prices
- Timestamp

This approach mimics saving records to a `data.json` file in a backend environment.

---

## ⚙️ JavaScript Logic Overview

- Restaurant and menu data are stored as JavaScript objects
- DOM is dynamically updated using JavaScript
- Order state is managed in memory until placed
- Price calculations happen automatically
- UI updates instantly without page reloads

No external libraries or frameworks are used.

---

## 🔐 Authentication & Admin (Planned Scope)

This project currently focuses on frontend ordering only.

However, the architecture supports future addition of:
- Login / Signup
- Admin dashboard
- Order history page
- Invoice generation
- Backend API (ASP.NET / Node.js)
- Database or JSON file storage

---

## 🧪 Use Case Scenarios

- Frontend practice project
- University assignment
- UI/UX demo
- ASP.NET API integration frontend
- Food delivery system prototype

---

## 🚀 Future Enhancements

Possible next improvements include:
- Removing individual order items
- Order history screen
- Invoice generation
- Admin restaurant & menu management
- Delivery tracking
- Backend API with JSON or database storage

---

## 📌 Summary

Speedy Eats demonstrates:
- Clean frontend architecture
- Dynamic UI updates
- Structured menu management
- Client-side order storage
- Realistic food delivery workflow

It is a solid foundation for a complete full-stack food ordering system.

---

**Developed as a learning-focused, scalable frontend application.**
