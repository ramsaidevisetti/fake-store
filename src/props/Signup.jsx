import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import Login from './Login';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    try {
      const usercred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(usercred.user, { displayName: name });
      alert('Signup successful!');
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <form onSubmit={signup}>
        <h2>Signup</h2>
        <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} required />
        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Signup</button>
        <p>
          Already have an account?{' '}
          <Link to="/login">Login</Link>
        </p>
      </form>
    </>
  );
};

export default Signup;