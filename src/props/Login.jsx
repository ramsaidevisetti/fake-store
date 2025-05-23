import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase';
import { Link } from 'react-router-dom';
import Signup from './Signup';
import './Login.css';

const Login = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [fdata, setfData] = useState("");
  const [mailr, setMailr] = useState("");
  const [passr, setPassr] = useState("");
  const navigate = useNavigate();

    const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, mail, password);
      navigate('/pages');
    } catch (err) {
      alert(err.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/pages');
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    const SavedData = localStorage.getItem("forndata");
    setfData({ mail, password });
  }, [mail, password]);

  const submitbtn = (event) => {
    event.preventDefault();

    let valid = true;

    if (!mail) {
      setMailr("*required");
      valid = false;
    } else {
      setMailr("");
    }

    if (!password) {
      setPassr("* required");
      valid = false;
    } else {
      setPassr("");
    }

    if (valid) {
      const data = { mail, password };
      localStorage.setItem("logindetails", JSON.stringify(data));
      navigate("/home");
    } else {
      toast.error("Please fill in the details");
      return;
    }
  };

  return (
    <div className='home'>
      <nav>
        <h1>Welcome to Btechwala Store</h1>
        <form onSubmit={submitbtn}>
          <label htmlFor='mail'>E-Mail</label>
          <input
            type='text'
            id='mail'
            placeholder='Enter your mail'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <p>{mailr}</p>

          <label htmlFor='pass'>Password</label>
          <input
            type='password'
            id='pass'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>{passr}</p>

          <button type='submit'>Login/Sign up</button>
           <button type="button" onClick={loginWithGoogle}>Login with Google</button>
      <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </form>
      </nav>

      <ToastContainer />
    </div>
  );
};

export default Login;
