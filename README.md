# Google Forms Clone

This is a Google Forms clone built with the MERN (MongoDB, Express, React, Node.js) stack. This application allows users to create, edit, and share forms with a fully functional backend and frontend. 

## Features
- Dynamic form building (similar to Google Forms)
- MERN stack setup for both frontend and backend integration
- Allows users to add various question types, including text, multiple choice, and checkboxes

## Technologies Used
- **Frontend:** React, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT tokens, Bcryptjs
- **Styling:** Bootstrap

## Getting Started

### Prerequisites
- Node.js (version 16.x recommended)
- MongoDB instance (local or cloud-based)

### Installation

1. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2. **Setup Frontend**
    - Navigate to the client folder, install dependencies, and build the React application:
    ```bash
    cd client
    npm install
    npm run build
    ```

3. **Setup Backend**
    - Return to the root, navigate to the server folder, and install backend dependencies:
    ```bash
    cd ../server
    npm install
    ```

4. **Run the Server**
    - Start the backend server:
    ```bash
    node app.js
    ```

5. **Visit the Application**
    - Open your browser and visit `http://localhost:5000` to view the Google Forms clone.

## Project Structure
```plaintext
root
├── client      # React frontend
└── server      # Node.js/Express backend
