import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './props/navbar';
import Login from './props/Login';
import { Home } from './props/Pages';
import './App.css';
import Cart from './props/Cart';
import Btechwala from './props/Btechwala';
import Signup from './props/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
         <Route path="/signup" element={<Signup/>} />
         <Route path="/login" element={<Login />} /> 
         <Route path='/home' element={<Home/>}/>  
        <Route path="/" element={<Login />} />
        <Route path="/btechwala" element={<Btechwala />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
