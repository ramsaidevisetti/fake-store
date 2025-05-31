import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'bootstrap'
import './Pages.css'
import Navbar from './navbar'

export const Home = () => {
  useEffect(() => {
    // Initialize Bootstrap carousel
    const carousel = document.querySelector('#carouselExampleIndicators');
    if (carousel) {
      new Carousel(carousel, {
        interval: 3000, // Auto-slide every 3 seconds
        wrap: true
      });
    }
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSXVzr7mDT3zUraBPOYLgbtLfjGHVYjOy5Q&s" className="carousel-image d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAGr2uN-I-lWCaVtSKxMGokaQRR92j7WBVA&s" className="d-block w-100 carousel-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSXVzr7mDT3zUraBPOYLgbtLfjGHVYjOy5Q&s" className="carousel-image d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <i className="fas fa-chevron-left"></i>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <i className="fas fa-chevron-right"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="text-center mt-4">
          <h2>Welcome to Btechwala</h2>
          <p>Your go-to destination for affordable, trendy college wear!</p>
        </div>

        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </>
  )
}




