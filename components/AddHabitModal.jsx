import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddHabitModal.css';

function AddHabitModal() {
  const navigate = useNavigate();
  const [habitData, setHabitData] = useState({
    name: '',
    description: '',
    category: 'Productivity',
    frequency: 'Daily'
  });

  const handleClose = () => {
    navigate('/dashboard');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New habit:', habitData);
    navigate('/dashboard');
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <div className="modal-header">
          <h1>Add New Habit</h1>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>

        <form onSubmit={handleSubmit} className="habit-form">
          <div className="form-section">
            <label>Name</label>
            <input
              type="text"
              placeholder="Exercise,Read,Meditate..."
              value={habitData.name}
              onChange={(e) => setHabitData({...habitData, name: e.target.value})}
              required
            />
          </div>

          <div className="form-section">
            <label>Description (optional)</label>
            <textarea
              placeholder="Any details about your habit"
              value={habitData.description}
              onChange={(e) => setHabitData({...habitData, description: e.target.value})}
            />
          </div>

          <div className="form-row">
            <div className="form-section">
              <label>Category</label>
              <select 
                value={habitData.category}
                onChange={(e) => setHabitData({...habitData, category: e.target.value})}
              >
                <option>Productivity</option>
                <option>Health</option>
                <option>Learning</option>
                <option>Fitness</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-section">
              <label>Frequency</label>
              <select 
                value={habitData.frequency}
                onChange={(e) => setHabitData({...habitData, frequency: e.target.value})}
              >
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>

          <div className="divider"></div>

          <button type="submit" className="submit-button">Add Habit</button>
        </form>
      </div>
    </div>
  );
}

export default AddHabitModal;