import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Password Validation Logic
  const isStrong = (pw) => {
    return pw.length >= 8 && /[0-9]/.test(pw) && /[\W]/.test(pw);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setMessage('❌ Please enter a valid email.');
    } else if (!isStrong(password)) {
      setMessage('❌ Password is too weak! Use 8+ chars, a number, and a symbol.');
    } else {
      setMessage('✅ Signup Successful!');
    }
  };

  return (
    <div className="page">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        {/* Real-time strength indicator */}
        <p className={`strength ${isStrong(password) ? 'strong' : 'weak'}`}>
          Strength: {isStrong(password) ? '💪 Strong' : '⚠️ Weak'}
        </p>

        <button type="submit">Sign Up</button>
      </form>
      {message && <p className="status-msg">{message}</p>}
    </div>
  );
};

export default Signup;