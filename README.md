# 🛍️ Whatbytes E-Commerce Store

A modern e-commerce web application built with **Next.js**, **TypeScript**, and **Tailwind CSS** as part of the Whatbytes Frontend Assignment.

## 🚀 Live Demo

🔗 https://whatbytes-ecommerce-7aed.vercel.app/?price=1000

## 📂 GitHub Repository

🔗 https://github.com/rishabhpatel0/whatbytes-ecommerce
---

## ✨ Features

### 🛒 Product Listing
- Responsive product grid
- Product cards with image, title, and price
- Search products
- Category filtering
- Price range filtering
- URL synchronized filters

### 📦 Product Details
- Dynamic product page
- Product image
- Product description
- Product category
- Product rating
- Quantity selector UI

### 🛍️ Shopping Cart
- Add products to cart
- Increase/decrease quantity
- Remove products
- Total price calculation
- Cart badge in header
- Cart persistence using localStorage

### 🎨 UI
- Responsive layout
- Sidebar filters
- Header with search
- Footer
- Mobile friendly

---

## 🛠️ Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Context API
- DummyJSON API
- Lucide React

---

## 📁 Project Structure

```
app/
│
├── cart/
├── product/
│   └── [id]/
│
├── layout.tsx
├── page.tsx
│
components/
│
├── layout/
├── product/
├── ProductListing.tsx
├── Shop.tsx
├── ShopContent.tsx
│
context/
│
├── CartContext.tsx
├── ShopContext.tsx
│
lib/
│
└── api.ts
│
types/
│
└── product.ts
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/rishabhpatel0/whatbytes-ecommerce.git
```

Navigate into the project

```bash
cd whatbytes-ecommerce
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## 🌐 API

Product data is fetched from:

https://dummyjson.com/products

---
