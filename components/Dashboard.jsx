import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Add useNavigate
import { Activity, Award, BarChart2, Medal, Plus, Grid, Users, Settings, LogOut } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  const navigate = useNavigate(); // Add navigation hook
  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="d-flex vh-100">
      <aside className="sidebar bg-white border-end p-4 d-flex flex-column" style={{width: '250px'}}>
        <h1 className="h5 mb-4 fw-semibold">HabitTracker</h1>
        <nav className="flex-grow-1">
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link className="nav-link d-flex align-items-center gap-2 text-dark fw-small" to="/dashboard">
                <Grid size={18} />Dashboard
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link d-flex align-items-center gap-2 text-secondary" to="/statistics">
                <BarChart2 size={18} />Statistics
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link d-flex align-items-center gap-2 text-secondary" to="/team">
                <Users size={18} />Team
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link d-flex align-items-center gap-2 text-secondary" to="/settings">
                <Settings size={18} />Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="user-info border-top pt-3 mt-auto">
          <p className="text-secondary small mb-1">Signed in as:</p>
          <p className="mb-1 fw-medium">User</p>
          <p className="text-secondary small mb-3">user@gmail.com</p>
          <button onClick={handleLogout} className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2">
            <LogOut size={16} />Log out
          </button>
        </div>
      </aside>

      <main className="flex-grow-1 bg-white">
        <div className="container py-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h1 className="h3 mb-0">Your Habits</h1>
              <p className="text-muted mb-0" style={{ fontSize: '1.2rem' }}>Track and manage your daily habits</p>
            </div>
            
            <button 
              onClick={() => navigate('/add-habit')} 
              className="btn btn-primary btn-sm d-flex align-items-center gap-2"
            >
              <Plus size={16} />
              Add New Habit
            </button>

          </div>

          <div className="row g-3">
            <div className="col-md-6 col-lg-3">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body p-3">
                  <div className="d-flex align-items-center mb-2">
                    <Activity className="text-primary" size={20} />
                    <h6 className="ms-2 mb-0 small">Today's Progress</h6>
                  </div>
                  <h3 className="mb-2">33%</h3>
                  <div className="progress mb-2" style={{ height: '4px' }}>
                    <div className="progress-bar" role="progressbar" style={{ width: '33%' }} aria-valuenow={33} aria-valuemin={0} aria-valuemax={100}></div>
                  </div>
                  <small className="text-muted">1 of 3 habits completed</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body p-3">
                  <div className="d-flex align-items-center mb-2">
                    <Award className="text-warning" size={20} />
                    <h6 className="ms-2 mb-0 small">Highest Streak</h6>
                  </div>
                  <h3 className="mb-2">5 days</h3>
                  <small className="text-muted">Keep going to increase your streak!</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body p-3">
                  <div className="d-flex align-items-center mb-2">
                    <BarChart2 className="text-success" size={20} />
                    <h6 className="ms-2 mb-0 small">Weekly Average</h6>
                  </div>
                  <h3 className="mb-2">2.3/7</h3>
                  <small className="text-muted">Average habits completed per week</small>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card border-0 h-100 shadow-sm">
                <div className="card-body p-3">
                  <div className="d-flex align-items-center mb-2">
                    <Medal className="text-info" size={20} />
                    <h6 className="ms-2 mb-0 small">Top Category</h6>
                  </div>
                  <h3 className="mb-2">Learning</h3>
                  <small className="text-muted">2 habits in this category</small>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h6 className="mb-2">Pending (2)</h6>
            <div className="card border-0 shadow-sm mb-2">
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1 small">Morning Exercise</h6>
                    <p className="text-muted mb-0 small">30 minutes of cardio or strength training</p>
                    <div className="mt-1">
                      <span className="badge bg-info me-2">health</span>
                      <small className="text-muted">Streak: 3 • daily</small>
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="exercise" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm mb-2">
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1 small">Read a Book</h6>
                    <p className="text-muted mb-0 small">Read at least 20 pages</p>
                    <div className="mt-1">
                      <span className="badge bg-warning me-2">learning</span>
                      <small className="text-muted">Streak: 5 • daily</small>
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="reading" />
                  </div>
                </div>
              </div>
            </div>

            <h6 className="mb-2 mt-3">Completed (1)</h6>
            <div className="card border-0 shadow-sm mb-2">
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="mb-1 small">Study</h6>
                    <p className="text-muted mb-0 small">Complete daily coding challenge</p>
                    <div className="mt-1">
                      <span className="badge bg-warning me-2">learning</span>
                      <small className="text-muted">Streak: 7 • daily</small>
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="study" checked readOnly />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;