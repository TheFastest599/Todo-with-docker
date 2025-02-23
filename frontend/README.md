# Frontend - Vite + React

## Overview
This is a frontend project built using Vite and React. It includes components for managing tasks, a global context for state management, and is styled with CSS.

## Project Structure
```
.
├── dist/               # Build output folder
│   ├── assets/        # Minified assets
│   ├── index.html     # Entry HTML file
│   └── vite.svg       # Vite logo
├── eslint.config.js    # ESLint configuration
├── index.html         # Main HTML file
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Package lock file
├── public/            # Static assets
│   └── vite.svg      
├── README.md          # Project documentation
├── src/               # Source code
│   ├── App.css        # Global styles
│   ├── App.jsx        # Main App component
│   ├── assets/        # Asset files
│   │   └── react.svg  # React logo
│   ├── components/    # React components
│   │   ├── EditTask.jsx
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── context/       # Global state management
│   │   └── globalContext.jsx
│   ├── index.css      # Base styles
│   └── main.jsx       # Entry point
└── vite.config.js     # Vite configuration
```

## Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project
To start the development server:
```sh
npm run dev
```
The app will be available at `http://localhost:5173` by default.

## Building for Production
To create a production-ready build:
```sh
npm run build
```
The optimized output will be in the `dist/` folder.

## Linting
To check and fix linting issues:
```sh
npm run lint
```

## License
This project is open-source and available under the MIT License.

