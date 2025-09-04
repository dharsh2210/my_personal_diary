import React, { useState } from 'react';

function Tracker({ trackerData, setTrackerData }) {
  const [mood, setMood] = useState('');
  const [moodNotes, setMoodNotes] = useState('');
  const [habits, setHabits] = useState([]);
  const [sleepHours, setSleepHours] = useState('');
  const [sleepQuality, setSleepQuality] = useState('');

  const habitOptions = ["Exercise", "Meditation", "Read a book", "Drink 8 glasses of water"];

  const toggleHabit = (habit) => {
    setHabits((prev) =>
      prev.includes(habit) ? prev.filter((h) => h !== habit) : [...prev, habit]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      date: new Date().toLocaleString(),
      mood,
      moodNotes,
      habits,
      sleepHours,
      sleepQuality,
    };
    setTrackerData([...trackerData, newEntry]);

    setMood('');
    setMoodNotes('');
    setHabits([]);
    setSleepHours('');
    setSleepQuality('');
    alert("Entry saved successfully!");
  };

  return (
    <div style={{
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: 'Georgia, Times New Roman, Times, serif',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-center mb-5" style={{ color: '#6b21a8', fontSize: '2.5rem' }}>Daily Tracker</h1>

        <form onSubmit={handleSubmit}>

          <div style={cardStyle}>
            <h2 style={titleStyle}>Mood Tracker</h2>
            <div className="mb-4">
              <label htmlFor="mood" className="form-label">How are you feeling today?</label>
              <select className="form-select form-select-lg" id="mood" value={mood} onChange={(e) => setMood(e.target.value)} required>
                <option value="" disabled>Select your mood</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="neutral">Neutral</option>
                <option value="anxious">Anxious</option>
                <option value="excited">Excited</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="moodNotes" className="form-label">Notes about your mood</label>
              <textarea className="form-control form-control-lg" id="moodNotes" rows="3" value={moodNotes} onChange={(e) => setMoodNotes(e.target.value)} placeholder="Write your thoughts..." />
            </div>
          </div>

          <div style={cardStyle}>
            <h2 style={titleStyle}>Habit Tracker</h2>
            {habitOptions.map((habit, index) => (
              <div className="form-check mb-3" key={index}>
                <input type="checkbox" className="form-check-input" id={`habit${index}`} checked={habits.includes(habit)} onChange={() => toggleHabit(habit)} />
                <label className="form-check-label" htmlFor={`habit${index}`} style={{ fontSize: '1.1rem' }}>{habit}</label>
              </div>
            ))}
          </div>

          <div style={cardStyle}>
            <h2 style={titleStyle}>Sleep Tracker</h2>
            <div className="mb-4">
              <label htmlFor="sleepHours" className="form-label">How many hours did you sleep last night?</label>
              <input type="number" className="form-control form-control-lg" id="sleepHours" value={sleepHours} onChange={(e) => setSleepHours(e.target.value)} min="0" max="24" placeholder="e.g. 7" required />
            </div>
            <div className="mb-4">
              <label htmlFor="sleepQuality" className="form-label">Sleep Quality</label>
              <select className="form-select form-select-lg" id="sleepQuality" value={sleepQuality} onChange={(e) => setSleepQuality(e.target.value)} required>
                <option value="" disabled>Select quality</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
                <option value="poor">Poor</option>
              </select>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn text-dark" style={{
              backgroundColor: 'rgb(189, 154, 222)',
              fontWeight: '600',
              fontSize: '1rem',
              padding: '10px 24px'
            }}>
              Save All
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const cardStyle = {
  background: 'white',
  borderRadius: '0.75rem',
  padding: '2rem',
  marginBottom: '2rem',
  boxShadow: '0 4px 16px rgba(0,0,0,0.07)'
};

const titleStyle = {
  fontWeight: 700,
  color: '#6b21a8',
  fontSize: '1.75rem',
  marginBottom: '1.25rem'
};

export default Tracker;
