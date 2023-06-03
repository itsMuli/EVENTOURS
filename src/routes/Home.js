import React from "react";
import "./Home.css"

function Home() {
  return (
    <div className="body">
        <div className="heading">
          <h1>Travel With Us</h1>
          <br />
          <p>
            <h3>
              Are you looking for an unforgettable adventure and accommodation in
              Kenya. EvenTours is the best tour company in Kenya with
              affordable prices. Book with us in advance to ensure the best price
              and exceptional services.
              <br />
              EvenTours for excursion, day trips, air road safaris contact
              us email rosemwendwa163@gmail.com.
            </h3>
          </p>
          <br />
          <br />
          <a href="Services.js">Learn More</a>
        </div>
        <div className="tours">
          <div className="places">
            <h2>Mombasa</h2>
            <img
              src="img5.jpg"
              style={{ width: '300px', height: '250px', borderRadius: '12px' }}
              alt="Mombasa"
            />
            <br />
            <br />
            <a href="booking.js">Book Now 10% OFF</a>
          </div>
          <div className="places">
            <h2>kisumu</h2>
            <img
              src="download(1).jpg"
              style={{ width: '300px', height: '250px', borderRadius: '12px' }}
              alt="Kisumu"
            />
            <br />
            <br />
            <a href="booking.js">Book Now 15% OFF</a>
          </div>
        </div>
      </div>
  );
}

export default Home;