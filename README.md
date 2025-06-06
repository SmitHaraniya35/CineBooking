# 🎬 Movie Ticket Booking System (MERN Stack)

A full-stack Movie Ticket Booking Web App built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse movies, view showtimes, book seats using a virtual theater, and download tickets. Admins can manage movies, cinemas, theaters, and shows.

## 🌐 Live Demo

- **Frontend (Vercel)**: [https://your-frontend.vercel.app](https://your-frontend.vercel.app)
- **Backend (Render)**: [https://your-backend.onrender.com](https://your-backend.onrender.com)

---

## 📌 Features

### 👤 User Features

- View latest released movies (without login)
- View detailed information about movies
- User authentication (Login/Signup)
- Book movie tickets by:
  - Selecting movie, date (Today or Tomorrow only)
  - Viewing all available shows with cinema and theater names
  - Selecting show time (disabled if already played)
  - Choosing seats from a virtual theater layout
- Confirm booking and mark seats as reserved
- View booked tickets
- Download tickets as PDF
- View ticket details (movie, theater, time, seat numbers, QR code, etc.)

### 🛠️ Admin Features

- Admin authentication
- Add and manage:
  - 🎦 Movies (add, delete)
  - 🏢 Cinemas
  - 🎭 Theaters (linked to cinemas)
  - ⏰ Shows (movie + theater + cinema + time + ticket price)
    - Can be added from movie view page with pre-filled fields

---

## 🧱 Tech Stack

| Layer      | Technology           |
|------------|----------------------|
| Frontend   | React.js, Tailwind CSS or Bootstrap |
| Backend    | Node.js, Express.js  |
| Database   | MongoDB + Mongoose   |
| Auth       | JWT (JSON Web Token) |
| Deployment | Vercel (frontend), Render (backend) |

---

