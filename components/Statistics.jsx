import React from 'react';
import { Link } from 'react-router-dom';
import './Statistics.css'; // You'll need to create this CSS file

const Statistics = () => {
  return (
    <div className="statistics-container">
      <nav className="dashboard-nav">
        <div className="dashboard-logo">HabitTrack</div>
        <div className="dashboard-menu">
          <Link to="/dashboard" className="menu-item">Dashboard</Link>
          <Link to="/statistics" className="menu-item active">Statistics</Link>
          <Link to="/profile" className="menu-item">Profile</Link>
          <Link to="/settings" className="menu-item">Settings</Link>
        </div>
        <div className="user-menu">
          <Link to="/logout" className="logout-btn">Logout</Link>
        </div>
      </nav>
      
      <main className="statistics-content">
        <h1>Your Habit Statistics</h1>
        <div className="stats-overview">
          <p>This page will show analytics and statistics about your habits.</p>
          {/* Statistics content will go here */}
        </div>
      </main>
    </div>
  );
};

export default Statistics;