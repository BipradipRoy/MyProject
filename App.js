import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your authentication logic
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setUsernameError('');
  };

  const validateEmail = (email) => {
    // Regular expression for validating email
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleBlur = () => {
    if (!validateEmail(username)) {
      setUsernameError('Please enter a valid email address');
    }
  };

  return (
    <div className="App">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email<span className="required">*</span></label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={handleUsernameChange} 
            onBlur={handleBlur}
            required
          />
          {usernameError && <div className="error">{usernameError}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password<span className="required">*</span></label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default App;
