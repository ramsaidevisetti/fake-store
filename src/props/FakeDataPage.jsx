// src/pages/FakeDataPage.js
import React, { useEffect, useState } from 'react';

const FakeDataPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFakeData = async () => {
      const token = localStorage.getItem('token');

      const response = await fetch('http://localhost:4000/data/Fakedata', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();
      if (result.success) {
        setData(result.data);
      } else {
        alert('Failed to fetch data: ' + (result.error || 'Unknown error'));
      }
    };

    fetchFakeData();
  }, []);

  return (
    <div>
      <h2>Fake Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FakeDataPage;
