import React, { useState } from 'react';

function Notes({ notes, setNotes }) {
  const [noteText, setNoteText] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    if (!noteText.trim()) return;

    const newNote = {
      text: noteText,
      date: new Date().toLocaleString(),
    };

    const updatedNotes = [newNote, ...notes];
    setNotes(updatedNotes);
    setNoteText("");
  };

  return (
    <div
      style={{
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        backgroundColor: '#f9fafb',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="container mt-5">
        <h1 className="text-center mb-5" style={{ color: '#6b21a8', fontSize: '2.5rem' }}>My Diary</h1>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label htmlFor="diaryNote" className="form-label">
              Write your diary entry here:
            </label>
            <textarea
              id="diaryNote"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              placeholder="Dear diary, today I..."
              style={{
                fontFamily: "'Indie Flower', cursive",
                fontSize: '1.25rem',
                lineHeight: '1.6',
                minHeight: '300px',
                width: '100%',
                borderRadius: '0.5rem',
                padding: '1rem',
                border: '1px solid #ccc',
              }}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              style={{
                backgroundColor: 'rgb(189, 154, 222)',
                color: '#3c096c',
                fontWeight: 600,
                border: 'none',
                padding: '0.5rem 1.5rem',
                borderRadius: '0.5rem',
              }}
            >
              Save Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Notes;
