import React, { useState } from 'react';
import './App.css';

function App() {
  // 1. Initialize State (Default mood is 'Neutral')
  const [mood, setMood] = useState('Neutral');

  // 2. Define Mood Data (Styles and Emojis)
  const moodSettings = {
    Happy: { emoji: '😊', color: '#f1c40f', msg: 'Keep shining!' },
    Sad: { emoji: '😢', color: '#3498db', msg: 'It’s okay to not be okay.' },
    Energetic: { emoji: '⚡', color: '#e67e22', msg: 'Let’s get things done!' },
    Neutral: { emoji: '😐', color: '#95a5a6', msg: 'Just a normal day.' }
  };

  return (
    <div className="app-container" style={{ backgroundColor: moodSettings[mood].color }}>
      <div className="mood-card">
       <h3>How are you feeling?</h3> 
        <div className="emoji-display">{moodSettings[mood].emoji}</div>
        <h2>{mood}</h2>
        <p>{moodSettings[mood].msg}</p>

        <div className="button-group">
          {Object.keys(moodSettings).map((m) => (
            <button key={m} onClick={() => setMood(m)}>
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;