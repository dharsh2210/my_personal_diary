import React from 'react';

function Reports({ trackerData }) {
  return (
    <div style={{
      backgroundColor: '#f8fafc',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: 'Georgia, Times New Roman, Times, serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="text-center mb-5" style={{ color: '#6b21a8', fontSize: '2.5rem' }}>
          Progress Reports
        </h1>

        <div style={{
          background: 'white',
          borderRadius: '0.75rem',
          padding: '2rem',
          boxShadow: '0 4px 16px rgba(0,0,0,0.07)'
        }}>
          <p style={{ fontSize: '1.2rem', color: '#374151' }}>
            Here are your saved daily entries and habits:
          </p>

          {trackerData.length === 0 ? (
            <p>No reports yet. Go to Tracker and add your first entry!</p>
          ) : (
            <ul style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
              {trackerData.map((entry, index) => (
                <li key={index} style={{ marginBottom: '1rem' }}>
                  <strong>{entry.date}</strong><br />
                  Mood: {entry.mood} <br />
                  Notes: {entry.moodNotes || "None"} <br />
                  Habits: {entry.habits.length > 0 ? entry.habits.join(", ") : "None"} <br />
                  Sleep: {entry.sleepHours} hrs ({entry.sleepQuality})
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Reports;
