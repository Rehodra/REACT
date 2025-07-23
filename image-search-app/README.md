# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# 🔍 Pic-Kart PRO

Pic-Kart is a sleek and responsive image search application built with *React, styled with **Tailwind CSS* and *DaisyUI, and powered by an external image API like **Pixabay*. It allows users to search and explore high-quality images based on keywords.

<img width="1914" height="920" alt="image" src="https://github.com/user-attachments/assets/31bf830a-9967-4b55-bc8a-b355193f3e0d" />

---

## 🚀 Features

- 🔎 Real-time image search
- 🌐 API integration to fetch stunning royalty-free images
- 🎨 Clean UI using Tailwind CSS and DaisyUI
- 🔖 Image cards with:
  - Photographer name
  - Likes & Views count
  - Related hashtags
- 🔁 Responsive layout for all screen sizes
- 🌙 Dark theme aesthetic

---

## 📸 Tech Stack

- *Frontend*: React + Vite
- *Styling*: Tailwind CSS + DaisyUI
- *API*: Pixabay (or Unsplash API)
- *Icons*: Lucide React (optional)

---

## 🧠 How It Works

1. Users type a keyword in the search bar (e.g., "car", "nature").
2. The app calls the image API with the search term.
3. Results are dynamically rendered as aesthetic image cards.
4. Each card displays metadata like:
   - Uploader's name
   - Like and View stats
   - Relevant tags

---
## 📂 Project Structure
├── src
│   ├── components
│   │   ├── SearchBar.jsx
│   │   └── ImageCard.jsx
│   ├── App.jsx
│   └── main.jsx
├── public
│   └── favicon.ico
├── .env
├── index.html
└── tailwind.config.js


## 🛠 Setup & Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/image-search-app.git
cd image-search-app

# 2. Install dependencies
npm install

# 3. Add your Pixabay API key in a .env file
VITE_PIXABAY_API_KEY=your_api_key_here

# 4. Start the dev server
npm run dev
