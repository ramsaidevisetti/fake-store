import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rating: {
      rate: '',
      count: ''
    }
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "rate" || name === "count") {
      setFormData(prev => ({
        ...prev,
        rating: {
          ...prev.rating,
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:4000/data/Fakedata', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          id: parseInt(formData.id),
          price: parseFloat(formData.price),
          rating: {
            rate: parseFloat(formData.rating.rate),
            count: parseInt(formData.rating.count)
          }
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert("Product added successfully!");
        // Clear form after successful addition
        setFormData({
          id: '',
          title: '',
          price: '',
          description: '',
          category: '',
          image: '',
          rating: {
            rate: '',
            count: ''
          }
        });
      } else {
        console.error(result.error);
        alert("Error: " + (result.message || "Failed to add product"));
        if (response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error");
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="id" placeholder="ID" type="number" value={formData.id} onChange={handleChange} required />
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input name="price" placeholder="Price" type="number" value={formData.price} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
        <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
        <input name="rate" placeholder="Rating (rate)" type="number" step="0.1" value={formData.rating.rate} onChange={handleChange} />
        <input name="count" placeholder="Rating (count)" type="number" value={formData.rating.count} onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
