# CRUD Operation Project with Node.js and MySQL

This is a simple **CRUD (Create, Read, Update, Delete)** project built using **Node.js**, **Express**, **MySQL**, **HTML**, **CSS**, and follows **MVC architecture**.

The project has **Category Master** and **Product Master** pages.  
Products belong to categories. Pagination is implemented on the server-side.

---

## 🗂 Project Structure
# CRUD Operation Project with Node.js and MySQL

This is a simple **CRUD (Create, Read, Update, Delete)** project built using **Node.js**, **Express**, **MySQL**, **HTML**, **CSS**, and follows **MVC architecture**.

The project has **Category Master** and **Product Master** pages.  
Products belong to categories. Pagination is implemented on the server-side.

---

## 🗂 Project Structure

Company Task/
│
├─ app.js # Main server file
├─ db.js # Database connection
├─ package.json
├─ routes/
│ ├─ categoryRoutes.js
│ └─ productRoutes.js
├─ controllers/ # (optional: for MVC pattern)
├─ models/ # (optional: for MVC pattern)
├─ public/
│ ├─ style.css
│ └─ script.js
└─ views/
├─ category.html
└─ product.html

## 🚀 Features

- Add, update, delete categories  
- Add, update, delete products  
- Each product belongs to a category  
- Server-side pagination for products (10 per page)  
- Clean and simple beginner-friendly UI

- ##Start the server:
- node app.js

##Open in browser:
Category Page: http://localhost:3000/category
Product Page: http://localhost:3000/product
