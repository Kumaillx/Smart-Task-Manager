import React, { useState } from 'react';
import JeenyImg from '../assets/Jeeny-logo.png';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username.trim()) 
    {
      localStorage.setItem('user', username);
      onLogin(username);
    }
  };

  return (
    <div className="login-wrapper">
      
      <div className="login-page">
        
        <div className="welcome-section">
            <div className="logo-header">
                <img src={JeenyImg} alt="Jeeny Logo" className="logo-img" />
                <span className="logo-text">Smart Task Manager</span>
            </div>

          <h1>Welcome to website</h1>
          <p className='welcome-text'>
            Streamline your productivity with Smart Task Manager, 
            designed to help you organize, prioritize, 
            and conquer your daily tasks effortlessly. 
            <p children="welcome-text">
            Developed by Kumail Ali, this intuitive tool empowers you to stay on top of your goals. Get started today!
            </p>
            
          </p>
        </div>
        
    <div className="login-container">
          <h2 className="login-title">USER LOGIN</h2>
          
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            
            <button type="submit" className="login-button">LOGIN</button>
          </form>
        
        </div>
      
      </div>
    
    </div>
  );
}

export default Login;
