# Tech Bazar

[Live Demo](https://tech-bazar-frontend.vercel.app/)

Tech Bazar is a **Next.js + MongoDB** based e-commerce website.  
It is a full-featured product management app that supports user registration, login (email & Google OAuth), adding products, managing products, and viewing product details.

---

## Features

- **Authentication**
  - Email/password login and registration
  - Google OAuth login
  - Protected routes for Add Product and Manage Products pages

- **Product Management**
  - Product listing and detail pages
  - Add and delete products (Admin/Protected)

- **UI / UX**
  - Responsive Navbar with dropdown after login
  - Hero section with Call-To-Action (CTA)
  - Featured Products section
  - Testimonial section
  - Modern card design with hover effects

- **Tech Stack**
  - Frontend: **Next.js 16 (App Router), Tailwind CSS, DaisyUI**
  - Backend: **Express.js, MongoDB, Google OAuth**
  - Authentication: **NextAuth.js**
  - Deployment: **Vercel (Frontend + Backend)**

---



## Installation & Setup (Local)

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd product-management-app


Install dependencies (Frontend)

npm install


Backend setup

cd backend
npm install


Environment variables

Frontend .env:

NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id


Backend .env:

DB_USER=your_db_user
DB_PASS=your_db_password
GOOGLE_CLIENT_ID=your_google_client_id
PORT=5000


Run locally

Backend:

node index.js


Frontend:

npm run dev


Open http://localhost:3000
 in your browser.

Live Demo

https://tech-bazar-frontend.vercel.app/

