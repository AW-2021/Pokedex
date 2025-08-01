# Pokémon's Pokedex Application with TCG Mega Cards

![Repo Size](https://img.shields.io/github/repo-size/AW-2021/Pokedex?color=blue)
![Issues](https://img.shields.io/github/issues/AW-2021/Pokedex)
![Forks](https://img.shields.io/github/forks/AW-2021/Pokedex?style=social)
![Stars](https://img.shields.io/github/stars/AW-2021/Pokedex?style=social)
![License](https://img.shields.io/github/license/AW-2021/Pokedex)

---

## 🚀 Deployment Status

| Service     | Status                                                                                                                                      |
|-------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| **Frontend** | ![Frontend Deployment](https://img.shields.io/website?url=https://your-frontend-service.onrender.com&up_message=Online&down_message=Offline) |
| **Backend**  | ![Backend Deployment](https://img.shields.io/website?url=https://your-backend-service.onrender.com/api/cards&up_message=Online&down_message=Offline) |

---

## 📚 Tech Stack

### Frontend: React + TypeScript + Vite + TailwindCSS
### Backend: Express + TypeScript

### APIs: PokeAPI and Pokemon TCG API

---

## ✨ Features

- **Browse Pokémon Mega Cards**  
  Fetch and display Mega Pokémon cards from the **Generations set**.

- **Responsive Design**  
  Fully responsive UI using **TailwindCSS**, works on desktop & mobile.

- **Secure API Proxy**  
  API keys are **kept secret in the backend**, following best security practices.

- **Live Deployment on Render**  
  Easily deployable via Render with **HTTPS** out-of-the-box.

- **Monorepo Structure**  
  Manage frontend & backend in one repository for easier deployment and version control.

- **Fast Frontend with Vite**  
  Utilizes **Vite** for ultra-fast development & builds.

---

## 📁 Folder Structure

```
Pokedex/
├── backend/               # Express server (API proxy with private API key handling)
│   ├── src/
│   │   └── server.ts      # API proxy endpoint
│   ├── package.json
│   └── .env               # POKEMONTCG_API_KEY (local; set in Render for deployment)
│
├── frontend/              # React + Vite + Tailwind CSS app
│   ├── src/
│   │   |── assets/images      # All image assets
│   │   |── components/        # All TSX components
│   │   |── hooks/             # Custom hook to handle resizing
│   │   |── lib/      
│   │       └── types.ts       # Shared/global types
│   │   |── pages/             # React-Router pages made from TSX components
│   │   |── utils/        
│   │   |   └── typeColors.ts  # Holds utility constants
│   │   └── App.tsx            # Main UI component
│   ├── package.json
│   └── .env               # VITE_BACKEND_URL (set to backend URL)
│
├── README.md              # Project documentation
```

---

## 🌐 Live Demo

Frontend: [https://your-frontend-service.onrender.com](https://your-frontend-service.onrender.com)  
Backend API: [https://your-backend-service.onrender.com/api/cards](https://your-backend-service.onrender.com/api/cards)

---
