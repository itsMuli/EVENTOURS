import React from "react";
import "./destinations.css";


const Destinations = () => {
  const destinations = [
    {
      id: 1,
      title: 'Mombasa',
      image: 'img5.jpg',
      description: 'Experience the charm of Mombasa with its iconic beaches',
    },
    {
      id: 2,
      title: 'Bali, Indonesia',
      image: 'img5.jpg',
      description: 'Relax on pristine beaches and discover the vibrant culture of Bali.',
    },
    {
      id: 3,
      title: 'New York City, USA',
      image: 'img5.jpg',
      description: 'Explore the city that never sleeps and be dazzled by its skyscrapers and bustling streets.',
    },
  ];

  const renderDestinationCards = () => {
    return destinations.map((destination) => (
      <div className="destination-card" key={destination.id}>
        <img src={destination.image} alt={destination.title} />
        <h3>{destination.title}</h3>
        <p>{destination.description}</p>
        <button>View Details</button>
      </div>
    ));
  };

  return (
    <div>
      <section className="featured-section">
        <h2>Featured Destinations</h2>
        <div className="destination-cards">
          {renderDestinationCards()}
        </div>
      </section>

      {/* Additional sections */}
    </div>
  );
};

export default Destinations;