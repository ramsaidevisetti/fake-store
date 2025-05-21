import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Pages.css'
import Navbar from './navbar'

 export const Home = () => {
  return (
<>
<Navbar/>

    <div className="container mt-4">
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSXVzr7mDT3zUraBPOYLgbtLfjGHVYjOy5Q&s" class="carousel-image d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtAGr2uN-I-lWCaVtSKxMGokaQRR92j7WBVA&s" class="d-block w-100 carousel-image" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSXVzr7mDT3zUraBPOYLgbtLfjGHVYjOy5Q&s" class="carousel-image d-block w-100" alt="..."/>
    </div>
  </div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
  <i class="fas fa-chevron-left"></i>
  <span class="visually-hidden">Previous</span>
</button>

<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
  <i class="fas fa-chevron-right"></i>
  <span class="visually-hidden">Next</span>
</button>

</div>
      <div className="text-center mt-4">
        <h2>Welcome to Btechwala</h2>
        <p>Your go-to destination for affordable, trendy college wear!</p>
      </div>
      
        <div class="social-icons">
          
  <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
  <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
  <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
    
    </div>
    </>
  )
}




