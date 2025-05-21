import React, { useState, useEffect } from 'react';
import './Btechwala.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';

const Btechwala = () => {
  const [data, setData] = useState([]);
  const [inputvalue, setInputvalue] = useState('');
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) setCart(storedCart);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setData(result);
      } catch (error) {
        alert("Failed to fetch products.");
      }
    };
    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(inputvalue.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div className='main'>
      <header>
        <h1>BtechWala Store</h1>
        <input
          type='text'
          placeholder='Search for product'
          value={inputvalue}
          onChange={handleChange}
        />
        <button onClick={() => navigate('/cart')}>
          Cart ({cart.length})
        </button>
      </header>

      <div className='product-grid'>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div className='itemcard' key={item.id}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>{item.description.slice(0, 100)}...</p>
              <p><strong>${item.price}</strong></p>
              <button className="add-button" onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products match your search.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Btechwala;
