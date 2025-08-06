# 🧠 ThinkBoard

A modern, full-stack note-taking application built with the MERN stack. Create, organize, and manage your thoughts with a clean, responsive interface.

Link to app:

```
https://mern-thinkboard-nzgr.onrender.com/

```

---

## ✨ Key Features

- 🏗️ **Full-Stack MERN Application** - MongoDB, Express.js, React, and Node.js  
- 📝 **Complete Note Management** - Create, edit, update, and delete notes with titles and content  
- 🎯 **Professional REST API** - Fully functional backend with proper endpoints and error handling  
- ⚡ **Smart Rate Limiting** - Implemented with Upstash Redis for production-ready performance  
- 📱 **Mobile-Friendly Design** - Fully responsive interface that works on all devices  
- 🌟 **Modern Tech Stack** - HTTP methods, middleware, status codes, and database concepts  

---

## 🛠️ Tech Stack

**Frontend:**
- React with Vite  
- Tailwind CSS + DaisyUI  
- Axios for API calls  
- React Hot Toast for notifications  
- Lucide React for icons  
- React Router for navigation  

**Backend:**
- Node.js + Express.js  
- MongoDB with Mongoose  
- Upstash Redis for rate limiting  
- CORS middleware  
- Environment configuration  

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB account
- Upstash Redis account

---

## 🔧 Environment Setup

Create a `.env` file in the `/backend` directory with the following contents:

### Backend (`/backend`)

```
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```

## 🔧 Run the Backend

```
cd backend
npm install
npm run dev
```

## 💻 Run the Frontend

```
cd frontend
npm install
npm run dev
```

---
##🎨 Features Showcase
 - Clean Interface - Intuitive note management with a coffee-themed design
 - Real-time Updates - Instant feedback with toast notifications
 - Responsive Layout - Works perfectly on desktop, tablet, and mobile
 - Professional Styling - Modern UI with subtle effects and smooth transitions

🚀 Deployment
 - This application is deployment-ready with:
 - Environment variable configuration
 - Production build scripts
 - CORS properly configured
 - Rate limiting for security