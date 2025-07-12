# simple-user-auth-api# 🔐 Simple User Auth & CRUD API – Node.js + Express

This is a beginner-friendly backend API built with **Node.js** and **Express.js** that handles:

- ✅ User Registration
- ✅ User Login
- ✅ Update User Info
- ✅ Delete User

All data is stored in-memory (inside a JS array), which is great for practicing backend logic.

---

## 🚀 Features

| Method | Endpoint             | Description                |
|--------|----------------------|----------------------------|
| POST   | `/register`          | Register a new user        |
| POST   | `/login`             | Login with credentials     |
| PUT    | `/users/:email`      | Update user info           |
| DELETE | `/users/:email`      | Delete user by email       |

---

## 💻 How to Run

```bash
npm install
node server.js
Use Postman or browser to test endpoints at:

arduino
Copy
Edit
http://localhost:3001
📚 Sample Requests
Register:
json
Copy
Edit
POST /register
{
  "name": "Anusha",
  "email": "anusha@example.com",
  "password": "123456"
}
Login:
json
Copy
Edit
POST /login
{
  "email": "anusha@example.com",
  "password": "123456"
}
👩‍💻 Author
Anusha Kasarla
Final Year CSE Student – Sreyas Institute of Engineering and Technology
📍 Telangana, India
