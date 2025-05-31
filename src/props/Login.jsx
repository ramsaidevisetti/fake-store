import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// Firebase is only used here for Google login
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import './Login.css';

const Login = ({ onLogin }) => {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [mailr, setMailr] = useState('');
  const [passr, setPassr] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    let valid = true;
    if (!mail.trim()) {
      setMailr('* required');
      valid = false;
    } else {
      setMailr('');
    }

    if (!password.trim()) {
      setPassr('* required');
      valid = false;
    } else {
      setPassr('');
    }

    if (!valid) return;

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: mail, password }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', mail.toLowerCase());
        localStorage.setItem('isAdmin', String(data.isAdmin));
        
        console.log('Login successful:', {
          email: mail.toLowerCase(),
          isAdmin: data.isAdmin,
          token: data.token
        });

        alert('Logged in successfully!');
        if (onLogin) onLogin();
        navigate('/home');
      } else {
        console.error('Login failed:', data);
        alert('Login failed: ' + (data.message || 'Unknown error'));
      }
    } catch (err) {
      console.error('Login error:', err);
      alert('Login error: ' + err.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Send user data to backend to get JWT token
      const response = await fetch('http://localhost:4000/google-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          name: user.displayName,
          googleId: user.uid
        }),
      });

      const data = await response.json();

      if (response.ok && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', user.email);
        localStorage.setItem('isAdmin', data.isAdmin);
        if (onLogin) onLogin();
        navigate('/home');
      } else {
        alert('Google login failed: ' + (data.message || 'Unknown error'));
      }
    } catch (err) {
      console.error('Google login error:', err);
      alert('Google login failed: ' + err.message);
    }
  };

  return (
    <div className="home">
      <nav>
        <h1>Welcome to Btechwala Store</h1>
        <form onSubmit={login}>
          <label htmlFor="mail">E-Mail</label>
          <input
            type="email"
            id="mail"
            placeholder="Enter your mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <p>{mailr}</p>

          <label htmlFor="pass">Password</label>
          <input
            type="password"
            id="pass"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{passr}</p>

          <button type="submit">Login</button>
          <button type="button" onClick={loginWithGoogle}>Login with Google</button>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </nav>
    </div>
  );
};

export default Login;
