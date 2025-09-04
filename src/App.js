import React, { useState } from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tracker from './pages/Tracker';
import Notes from './pages/Notes';
import Reports from './pages/Reports';
import History from './pages/History';

function App() {
  const [notes, setNotes] = useState([]); 
  const [trackerData, setTrackerData] = useState([]); 

  return (
    <div style={{
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
      backgroundColor: '#bb28ffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <nav className="navbar navbar-expand-lg shadow-sm" style={{ backgroundColor: '#cda7ffff' }}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3 text-dark" to="/">
            My Personal Diary
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link fs-5 text-dark" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-dark" to="/tracker">Tracker</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-dark" to="/notes">Notes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-dark" to="/reports">Reports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-dark" to="/history">History</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracker" element={<Tracker trackerData={trackerData} setTrackerData={setTrackerData} />} />
        <Route path="/notes" element={<Notes notes={notes} setNotes={setNotes} />} />
        <Route path="/reports" element={<Reports trackerData={trackerData} />} />
        <Route path="/history" element={<History notes={notes} />} />
      </Routes>
    </div>
  );
}

export default App;
