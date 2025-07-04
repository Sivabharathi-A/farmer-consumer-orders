---

```markdown
# 🌾 Farmer-Consumer Order Management System

A full-stack web application that bridges the gap between **farmers and consumers**, allowing farmers to manage orders and receive feedback, while consumers can place orders and track delivery status. This system enhances local trade, transparency, and digital interaction between food producers and end-users.

---

## 🚀 Features

### 👨‍🌾 Farmer Dashboard
- View **incoming orders** from consumers.
- Display **consumer name, ordered items, and order status**.
- Toggle user profile details: **username, email, and location**.
- Update order statuses (*In Progress*, *Delivered*, etc.).

### 🛒 Consumer Dashboard
- Sign up or log in as a **consumer**.
- Place orders directly from the **product catalog**.
- Track the **status of placed orders** in real-time.

### 🔐 Authentication
- Secure login and signup with **bcrypt-hashed passwords**.
- Separate login roles for **Farmer** and **Consumer**.

### 📦 Order Management
- Orders stored in **MongoDB** with customer name, item list, and current status.
- Farmers receive **real-time updates** (via manual refresh).

---

## 🛠 Tech Stack

| Technology          | Purpose                          |
|---------------------|----------------------------------|
| `Node.js`           | Backend runtime                  |
| `Express.js`        | Web server framework             |
| `EJS`               | Templating engine                |
| `MongoDB + Mongoose`| NoSQL database + ODM             |
| `HTML, CSS, JS`     | Frontend design & interactivity  |
| `bcrypt`            | Password hashing for security    |

---

## 📁 Folder Structure

```

project-root/
│
├── public/               # Static assets (CSS, images)
├── views/                # EJS templates
│   ├── login.ejs
│   ├── signup.ejs
│   ├── home.ejs          # Farmer dashboard
│   └── consumer.ejs      # Consumer dashboard
│
├── config.js             # Mongoose schema and DB config
├── server.js             # Main server entry point
└── package.json          # Project metadata & dependencies

````

---

## ⚙ Installation & Usage

### 1. Clone the Repository

```bash
git clone https://github.com/Sivabharathi-A/farmer-consumer-orders.git
cd farmer-consumer-orders
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start MongoDB

Ensure MongoDB is running locally (default: `mongodb://localhost:27017`).

### 4. Run the Application

```bash
node server.js
```

### 5. Access the App

Open your browser and navigate to:

```
http://localhost:3000
```

---

## 🔐 Default User Roles (for Testing)

During signup, you can register as either a **Farmer** or **Consumer** by selecting the appropriate role.

---

## 📌 Future Enhancements

* Real-time order updates using **WebSockets**
* Support for **product images** and **quantity validation**
* **SMS/Email notifications** for order confirmations
* **Admin panel** for analytics and farmer verification

---

## 👤 Author

Developed by [SivabharathiA](https://github.com/Sivabharathi-A)

---
