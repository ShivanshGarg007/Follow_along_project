# Follow Along E-Commerce Website

## Key Features

### 1. REST API
- Implements RESTful principles for efficient client-server communication.
- Endpoints for managing products, users, and orders.

### 2. MERN Stack
- Built with MongoDB, Express.js, React, and Node.js.
- Ensures scalability, performance, and a seamless full-stack experience.

### 3. Order Handling
- Streamlined order processing from cart to checkout.
- Real-time updates for order status and inventory management.

### 4. Product Listing & Management
- Features for adding, editing, and removing products.
- Search and filter functionality for an optimized user experience.

### 5. User Authentication
- Secure authentication with JWT.
- Role-based access control for users and admins.

---

## Milestone 2 Progress 🚀

### ✅ Project Setup
- Structured the project with separate frontend and backend directories.
- Initialized a React app for the frontend and a Node.js server for the backend.

### ✅ Tooling & Configuration
- Configured Tailwind CSS for modern and responsive styling.
- Added useful extensions to improve development efficiency.

### ✅ Login Page Implementation
- Designed and developed a fully functional Login Page.
- Ensured proper UI styling using Tailwind CSS.
- Set up basic authentication logic to handle user login.

This milestone laid the groundwork for the E-Commerce application by setting up the project structure and implementing the first user-facing feature.

---

## Milestone 3 Progress 🚀

### ✅ Backend Folder Structure
- Organized backend code with separate folders for routes, controllers, models, and middleware.
- Introduced `utils` and `middlewares` directories for better modularity.

### ✅ Server Setup
- Created a backend server using Node.js and Express.
- Configured the server to listen on a designated port.

### ✅ Database Connection
- Integrated MongoDB to store and manage data.
- Verified successful connection between the server and MongoDB.

### ✅ Error Handling
- Implemented a global error handler for better debugging.
- Provided meaningful error messages for invalid requests and failed operations.

### ✅ README Update
- Documented Milestone 3 progress in this README file.

This milestone focused on setting up a solid backend infrastructure to support the application’s growth and data management.

---

## Milestone 4: Creating User Model and Controller 🚀

### ✅ **User Model Implementation**
- Defined a **User Schema** using Mongoose to store user details (name, email, password, etc.).
- Implemented necessary **validations** to ensure data integrity.
- Integrated **bcrypt** for secure password hashing.

### ✅ **User Controller Setup**
- Developed controller functions to:
  - **Create new users**
  - **Retrieve user details**
  - **Update user information**
  - **Delete users** if necessary
- Handled error responses for **invalid or duplicate user entries**.

### ✅ **Multer File Upload Integration**
- Configured **Multer** to handle file uploads (e.g., profile pictures).
- Implemented logic to **store and retrieve uploaded images**.
- Ensured file validation to prevent invalid file types from being uploaded.

### ✅ **Project Submission**
- Pushed the updated code to GitHub.
- Updated the README with Milestone 4 details.

This milestone strengthened the **user management** aspect of our application, making it more robust and scalable for future enhancements.

---

## Milestone 5: Creating the Signup Page 🚀

### ✅ **Sign-Up Page UI Development**
- Created the user interface for the Sign-Up page using Tailwind CSS.
- Included fields for name, email, and password.
- Designed the page to be user-friendly and visually appealing.

### ✅ **Form Validation**
- Implemented client-side form validation to ensure data quality.
- Validated email format, password strength (e.g., minimum length), and other necessary fields.
- Provided user-friendly error messages for invalid inputs.

### ✅ **README Update**
- Documented Milestone 5 progress in this README file.

This milestone focused on creating the user registration interface and ensuring that the data entered by the user is valid before being sent to the backend. This improves user experience and reduces the load on the server.

---

## Milestone 10: Product Schema & Endpoint Creation 🚀

### ✅ **Product Schema Implementation**
- Defined a **Product Schema** using Mongoose to store product details (name, description, price, image URL, etc.).
- Ensured necessary validations such as required fields and correct data types.

### ✅ **Product Endpoint Creation**
- Developed a **POST endpoint** to receive and store product details in MongoDB.
- Implemented validation to ensure only valid data is saved.

### ✅ **Data Integrity & Security**
- Enforced validation rules to prevent incorrect data entries.
- Added error handling for invalid requests and duplicate product entries.

### ✅ **README Update**
- Documented Milestone 10 progress in this README file.

This milestone focused on defining the product structure and creating an API to add products to the database securely.

---

## Milestone 11: Displaying Products Dynamically 🚀

### ✅ **Product Data Retrieval**
- Created a **GET endpoint** to retrieve all stored products from MongoDB.
- Extracted data from the database and sent it to the frontend.

### ✅ **Frontend Data Handling**
- Wrote a function in the frontend to **fetch product data** from the backend API.
- Handled API responses, ensuring data is properly received and formatted.

### ✅ **Dynamic Product Display**
- Integrated the received product data into the existing **Product Card component**.
- Displayed products dynamically on the homepage.
- Ensured a responsive and visually appealing layout using Tailwind CSS.

### ✅ **README Update**
- Documented Milestone 11 progress in this README file.

This milestone focused on bridging the backend and frontend by retrieving product data and displaying it dynamically in the UI. This makes the homepage fully functional by showcasing stored products dynamically.

