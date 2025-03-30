import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="content-wrapper">
        <div className="header">
          <div className="title-section">
            <h1>Your Habits</h1>
            <p>Track and manage your daily habits</p>
          </div>
          <button className="add-habit-btn">+ Add New Habit</button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📈</div>
            <span className="stat-label">Today's Progress</span>
            <div className="stat-value">33%</div>
            <div className="progress-bar">
              <div className="progress"></div>
            </div>
            <p>1 of 3 habits completed</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔥</div>
            <span className="stat-label">Highest Streak</span>
            <div className="stat-value">5 days</div>
            <p>Keep going to increase your streak!</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <span className="stat-label">Weekly Average</span>
            <div className="stat-value">2.3/7</div>
            <p>Average habits completed per week</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <span className="stat-label">Top Category</span>
            <div className="stat-value">Learning</div>
            <p>2 habits in this category</p>
          </div>
        </div>

        <div className="habits-section">
          <h2>Pending (2)</h2>
          <div className="habit-list">
            <div className="habit-item">
              <input type="checkbox" className="habit-checkbox" />
              <div className="habit-content">
                <h3>Morning Exercise</h3>
                <span className="badge health">health</span>
                <p>30 minutes of cardio or strength training</p>
                <div className="habit-meta">
                  <span>Streak: 3</span>
                  <span className="dot">•</span>
                  <span>daily</span>
                </div>
              </div>
              <button className="more-btn">⋮</button>
            </div>

            <div className="habit-item">
              <input type="checkbox" className="habit-checkbox" />
              <div className="habit-content">
                <h3>Read a Book</h3>
                <span className="badge learning">learning</span>
                <p>Read at least 20 pages</p>
                <div className="habit-meta">
                  <span>Streak: 5</span>
                  <span className="dot">•</span>
                  <span>daily</span>
                </div>
              </div>
              <button className="more-btn">⋮</button>
            </div>
          </div>
        </div>

        <div className="habits-section completed">
          <h2>Completed (1)</h2>
          <div className="habit-list">
            <div className="habit-item">
              <input type="checkbox" className="habit-checkbox" checked readOnly />
              <div className="habit-content">
                <h3>Study</h3>
                <span className="badge learning">learning</span>
                <p>Atleast 1hour study</p>
                <div className="habit-meta">
                  <span>Streak: 1</span>
                  <span className="dot">•</span>
                  <span>daily</span>
                </div>
              </div>
              <button className="more-btn">⋮</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;