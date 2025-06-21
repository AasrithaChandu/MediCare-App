🩺 MediCare Companion – React App
MediCare Companion is a role-based medication management system built with React. Patients can track their medications and upload proof, while caretakers can monitor adherence, view reports, and send reminders.

###📦 Tech Stack
React 18+
JavaScript
React Router DOM
CSS Modules (or regular CSS)
🚀 Live Demo
Live Demo Link (coming soon)

### Folder Structure

medicare-companion/ 

├── public/ 

│   └── index.html
├── src/

│   ├── assets/

│   │   └── logo.png               # App Logo

│   ├── components/

│   │   ├── Sidebar.jsx            # Left navigation panel

│   │   ├── Header.jsx             # Top header with user context

│   │   ├── RoleSelection.jsx      # Welcome screen role selector

│   │   ├── PatientDashboard.jsx   # Patient features and layout

│   │   └── CaretakerDashboard.jsx # Caretaker features and layout

│   ├── pages/

│   │   └── Home.jsx               # Main route handler (optional if App handles routes)

│   ├── App.css

│   ├── App.js

│   └── index.js

├── .gitignore

├── package.json

└── README.md



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Features

👤 Patient View
Mark medications as taken

Upload medication proof photo (UI only)

Calendar visualization for tracking

Simple and accessible layout

🧑‍⚕️ Caretaker View
Monitor patient adherence (mock data)

View calendar progress and stats

Send reminders (demo action)

Notification settings (UI only)

🔁 Role Switch
Easily toggle between Patient and Caretaker views

📜 License
MIT License — free to use and modify.

👩‍💻 Author
Designed and developed by AasrithaChandu
