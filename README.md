
# 🚀 TaskFlow Backend

TaskFlow is a scalable and modular backend application built using **Node.js and Express.js**, following the **MVC architecture pattern**. It provides structured REST APIs with centralized error handling, authentication support, and clean route organization.

---

## 📌 Features

* Modular MVC Architecture
* RESTful API Design
* Authentication System
* Centralized Error Handling
* Custom API Response & Error Utilities
* Input Validation Layer
* Health Check Endpoint
* Environment-based Configuration

---

## 🏗️ Project Structure

```
src/
 ├── controllers/      # Business logic
 ├── routes/           # Route definitions
 ├── models/           # Database models
 ├── middlewares/      # Custom middlewares
 ├── validators/       # Input validation logic
 ├── utils/            # Utility helpers (error handler, response, constants, mail, etc.)
 ├── db/               # Database configuration
 ├── app.js            # Express app configuration
 └── index.js          # Server entry point
```

---

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB 
* Mongoose 
* JWT Authentication
* Nodemailer 

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/HadesIsGod/Taskflow.git
cd Taskflow
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the server

```bash
npm run dev
```

or

```bash
npm start
```

---

## 🔥 API Endpoints (Example)

| Method | Route          | Description        |
| ------ | -------------- | ------------------ |
| GET    | /health        | Health check route |
| POST   | /auth/register | Register user      |
| POST   | /auth/login    | Login user         |

---

## 🧠 Architecture Highlights

* Clean separation of concerns
* Centralized async error handling
* Reusable response utilities
* Scalable folder structure
* Production-ready backend design

---

## 📜 License

This project is licensed under the MIT License.

---



---

---



I’ll tailor it into a 🔥 senior-level README that makes recruiters impressed.
