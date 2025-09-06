# Notes Management App

A simple React-based web application for managing notes, featuring user authentication (login and registration) and a notes list view. The app uses React Router for client-side routing and is deployed on Netlify.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Testing Credentials](#testing-credentials)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (login and registration)
- Protected routes for authenticated users to view and manage notes
- Responsive design with a clean UI
- Client-side routing using React Router
- Deployed on Netlify for easy access

## Demo

The application is live at: [https://notesmang.netlify.app/](https://notesmang.netlify.app/)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A modern web browser (e.g., Chrome, Firefox)

## Installation

1. Clone the repository to your local machine:
   ```bash
   https://github.com/Ar1fAli/NotesApp-backend
   ```
2. Navigate to the project directory:
   ```bash
   cd NotesApp-backend
   ```
3. Install the required dependencies:
   ```bash
   npm i
   ```

## Running the App

To start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

The app will automatically reload if you make changes to the code.

## Testing Credentials

For testing purposes, you can use the following credentials to log in:

- **Email**: `test@gmail.com`
- **Password**: `123456`
  This only work in netlify that is already deployed

## Project Structure

A brief overview of the project structure:

```
notes-management-app/
├── public/                # Static assets and index.html
├── src/                   # Source code
│   ├── components/        # React components (Login, Register, NotesList, Navbar)
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── NotesList.js
│   │   ├── Navbar.js
│   ├── utils/             # Utility functions (e.g., auth.js for authentication logic)
│   ├── App.js             # Main app component with routing
│   ├── index.js           # Entry point for React
├── netlify.toml           # Netlify configuration for redirects (if applicable)
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation (this file)
```

## Technologies Used

- **React**: Frontend library for building the UI
- **React Router**: For client-side routing
- **Tailwind CSS**: For styling (assumed based on `bg-gray-100` and `container mx-auto` classes)
- **Netlify**: Hosting and deployment
- **Node.js & npm**: For development and dependency management
- **Java Spring Boot**: For api management

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project's coding style and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
