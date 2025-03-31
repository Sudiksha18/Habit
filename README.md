
# Habit Tracker 

A modern habit tracking application built with React.js, Vite, and Bootstrap. Track your daily habits, visualize progress with charts, and stay motivated!

![Habit Tracker Screenshot](./public/screenshot.png) <!-- Add your screenshot here -->

## Features

- Add, edit, and track daily habits
- Visualize habit progress with interactive charts
- Categorize habits (Productivity, Health, Fitness, etc.)
- Set frequency (Daily, Weekly, Monthly)
- Responsive design for all devices

## Technologies Used

- React.js
- Vite
- Bootstrap 5
- Chart.js
- React Icons
- Lucide React Icons

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Sudiksha18/Habit.git
   cd Habit
Install dependencies:

1. Vite + React Setup (Project Foundation)
npm create vite@latest habit-tracker --template react
cd habit-tracker
2. Bootstrap (Styling Framework)
npm install bootstrap
3. React Icons (Icon Library)
npm install react-icons
4. Chart.js + React ChartJS 2 (Data Visualization)
npm install chart.js react-chartjs-2
5. Lucide React (Modern Icons)
npm install lucide-react
6. React Router DOM (For Navigation - if needed)
npm install react-router-dom
7. Development Dependencies (TypeScript support - optional)
npm install --save-dev @types/react @types/react-dom
8. Run Development Server
npm run dev
9. Production Build
npm run build
Recommended Installation Order:
First install Vite+React (creates project structure)

Then install UI libraries (Bootstrap, Icons)

Then add data visualization (Chart.js)

Finally add any additional utilities

Each command installs a specific technology:

bootstrap for responsive layouts and components

react-icons for popular icon sets

chart.js + react-chartjs-2 for habit progress charts

lucide-react for additional modern icons

react-router-dom if you need multiple pages

After installing all dependencies, run npm run dev to start the development server at http://localhost:5173

Project Structure

habit-tracker/
├── public/              # Static files
├── src/
│   ├── assets/          # Images, styles
│   ├── components/      # React components
│   ├── pages/           # Page components
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js


### Key Features of this README:

1. **Clear Installation Instructions**:
   - Includes all necessary npm commands in the proper order
   - Covers all dependencies (React, Vite, Bootstrap, Chart.js, Lucide)

2. **Complete Setup Guide**:
   - From cloning to running the dev server
   - Includes the correct Vite dev server command (`npm run dev`)

3. **Project Structure**:
   - Helps new contributors understand the code organization

4. **Technology Stack**:
   - Clearly lists all major technologies used

5. **Visual Elements**:
   - Placeholder for screenshot (add your actual screenshot later)

The instructions provided will help anyone set up the project with all required dependencies and run it locally using `npm run dev`.
License
Distributed under the MIT License. See LICENSE for more information.
