import React from 'react';

function Home() {
  return (
    <div style={{
      backgroundColor: '#f9fafb',
      minHeight: '100vh',
      padding: '20px',
      fontFamily: 'Georgia, Times New Roman, Times, serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className="container">
        <h1 style={{
          color: '#6b21a8',
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem'
        }}>
          Welcome to My Personal Diary
        </h1>

        <div className="row">
          <div className="col-md-12">
            <p style={{ textAlign: 'left', marginLeft: 50 }}>
              My Personal Diary is a private, digital space designed to help you reflect on your thoughts, emotions, and daily experiences in a calm and secure environment. Whether you're capturing memories, venting feelings, or tracking your moods, this platform offers a safe and simple way to reconnect with yourself through writing. In a world that moves fast and often feels overwhelming, journaling can be a powerful tool for clarity, emotional growth, and personal healing. With features like daily notes, mood tracking, personal insights, and a distraction-free, user-friendly design, My Personal Diary encourages you to slow down, express freely, and embrace the power of self-awareness.
              <br /><br />
              Every entry you make becomes a chapter in your personal journey — helping you understand your emotional patterns, celebrate your growth, and gently face your challenges. Unlike social media or public platforms, your diary is yours alone: judgment-free, ad-free, and entirely personal. Whether you’re having a great day, a confusing one, or simply need a moment to breathe, your diary is always here — just for you. It’s more than just a writing tool — it’s a companion that listens without interruption and holds your truth with care.
            </p>
          </div>
        </div>

        <div className="row">
          {[
            {
              title: "Mood Tracker",
              text: "Keep track of your daily emotions and reflect on your mental well-being over time."
            },
            {
              title: "Habit Tracker",
              text: "Build positive habits by monitoring your daily routines and progress."
            },
            {
              title: "Progress Reports",
              text: "Visualize your mood and habit trends with easy-to-understand charts and reports."
            },
            {
              title: "Daily Reminders",
              text: "Set reminders to keep your diary habit consistent and never miss a day."
            },
            {
              title: "Diary Notes",
              text: "Write your personal diary entries with a beautiful handwritten font style."
            },
            {
              title: "Privacy & Security",
              text: "Your diary is private and secure. We prioritize your data protection and confidentiality."
            }
          ].map((feature, index) => (
            <div key={index} className="col-md-4">
              <div className="card" style={{
                background: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 10px 15px -3px rgba(189, 154, 222, 0.3)',
                transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px',
                margin: '20px'
              }}>
                <h3 style={{ color: '#7c3aed', fontWeight: 700, marginBottom: '0.5rem', fontSize: '1.25rem' }}>{feature.title}</h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: '1.4' }}>{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
