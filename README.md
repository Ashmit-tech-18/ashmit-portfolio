# Ashmit Shukla - Full-Stack Developer Portfolio

Welcome to the official repository for my personal portfolio. This is a complete full-stack web application built from the ground up using the MERN stack (MongoDB, Express.js, React.js, Node.js). It showcases my skills, projects, and professional journey.

![Portfolio Screenshot]

![image1](https://github.com/user-attachments/assets/6d839e3e-4525-464c-b6ba-da8233bc4546)



---

## ✨ Features

* **Dynamic Content:** All content, including projects, skills, and blogs, is fetched dynamically from a backend API.
* **Interactive UI:** A modern, responsive user interface built with React, featuring animations and a custom cursor for an engaging user experience.
* **Backend API:** A robust RESTful API built with Node.js and Express, connected to a MongoDB database for all data operations.
* **Contact Form:** A fully functional contact form that sends data to a backend endpoint.

---

## 🛠️ Technology Stack

This project is divided into two main parts: the `client` (frontend) and the `server` (backend).

### Frontend (Client)

* **React.js:** For building the user interface.
* **React Router:** For handling client-side navigation between pages.
* **Axios:** For making API requests to the backend.
* **react-tsparticles:** For the interactive particle background.
* **CSS3:** For all the custom styling and animations.

### Backend (Server)

* **Node.js:** As the JavaScript runtime environment.
* **Express.js:** As the web server framework.
* **MongoDB:** As the NoSQL database to store application data.
* **Mongoose:** As the Object Data Modeling (ODM) library for MongoDB.
* **CORS:** To enable cross-origin requests from the frontend.
* **Dotenv:** To manage environment variables securely.

---

## 🚀 How to Run This Project Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js installed on your machine.
* A code editor like VS Code.
* A `.env` file in the `server` directory with your `MONGODB_URI`.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install Server Dependencies:**
    ```sh
    cd server
    npm install
    ```

3.  **Install Client Dependencies:**
    ```sh
    cd ../client
    npm install
    ```

4.  **Run the application:**
    * To start the backend server:
        ```sh
        # From the 'server' directory
        npm run dev
        ```
    * To start the frontend application:
        ```sh
        # From the 'client' directory
        npm start
        ```
The application will now be running on your local machine!
