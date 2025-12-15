import React from 'react';
import { Link } from 'react-router-dom';

function AuthButtons() {
  return (
    <div className="auth-buttons">
      <Link to="/login" className="auth-button login-button">Login</Link>
      <Link to="/register" className="auth-button register-button">Register</Link>
    </div>
  );
}

export default AuthButtons;
