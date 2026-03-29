import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data
const fetchWeather = async () => {
    try {
      setLoading(true);
      // Corrected API call to a public weather endpoint
     const response = await fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=51.5074&longitude=-0.1278&current_weather=true&t=${Date.now()}`
);
      if (!response.ok) throw new Error('Failed to fetch weather data');
      
      // FIX: Changed .exec() to .json()
      const data = await response.json();
      
      setWeather(data.current_weather);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchWeather();
  }, []); // Empty dependency array means this runs once on mount

  if (loading) return <div className="loader">Loading Weather... 🌦️</div>;
  if (error) return <div className="error-box">Error: {error} <button onClick={fetchWeather}>Retry</button></div>;

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h1>London, UK</h1>
        <div className="temp-display">{weather.temperature}°C</div>
        <p className="description">Wind Speed: {weather.windspeed} km/h</p>
        <button onClick={fetchWeather} className="refresh-btn">Refresh Data</button>
      </div>
    </div>
  );
}

export default App;