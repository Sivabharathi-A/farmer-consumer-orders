# 🌾 Farmer-Consumer Order Management System

A full-stack web application that bridges the gap between *farmers and consumers*, allowing farmers to manage orders and receive feedback while consumers can place orders and track delivery status. This system enhances local trade, transparency, and digital interaction between food producers and end-users.

---

## 🚀 Features

### 👨‍🌾 Farmer Dashboard
- View *incoming orders* from consumers.
- Display consumer *name, **ordered items, and **order status*.
- Toggle user profile with *username, email, and location*.
- Update order statuses (in-progress, delivered, etc.).

### 🛒 Consumer Dashboard
- Sign up or log in as a consumer.
- Place orders directly from the product catalog.
- Track the *status* of their orders.

### 🔐 Authentication
- Secure login and signup with *bcrypt-hashed passwords*.
- Separate login access for *Farmer* and *Consumer* roles.

### 📦 Order Management
- Orders stored in *MongoDB* with customer name, items list, and status.
- Farmers receive real-time incoming order updates (manual refresh).

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| *Node.js* | Backend runtime |
| *Express.js* | Server framework |
| *EJS* | Templating engine |
| *MongoDB + Mongoose* | NoSQL database and ODM |
| *HTML, CSS, JavaScript* | Frontend design and interactivity |
| *bcrypt* | Password hashing and security |

---

## 📂 Folder Structure
project-root/ │ ├── public/ # Static assets (CSS, images) │ ├── views/ # EJS templates (login, signup, dashboards) │ ├── login.ejs │ ├── signup.ejs │ ├── home.ejs # Farmer dashboard │ └── consumer.ejs # Consumer dashboard │ ├── config.js # Mongoose schema and DB connection ├── server.js # Main application server └── package.json

yaml
Copy
Edit

---

## ⚙ Installation & Usage

1. *Clone the Repository*
   ```bash
   git clone https://github.com/your-username/farmer-consumer-system.git
   cd farmer-consumer-system
Install Dependencies

bash
Copy
Edit
npm install
Start MongoDB Make sure MongoDB is running locally on port 27017.

Run the App

bash
Copy
Edit
node server.js
Access the App Open your browser and go to:

arduino
Copy
Edit
http://localhost:3000
🔐 Default User Roles for Testing
You can register as either a Farmer or Consumer during signup by choosing the respective user type.

📌 Future Enhancements
Real-time order updates using WebSockets

Product image support and quantity validation

SMS/Email notifications for order confirmations

Admin panel for analytics and farmer verification
