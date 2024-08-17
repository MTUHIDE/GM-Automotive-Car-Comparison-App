import React from 'react';

function ComparisonResult() {
  const car1 = {
    image: 'car1.jpg',
    name: 'Car 1',
    driveType: 'FWD',
    trim: 'Base',
    mileage: '20,000',
    engine: '2.0L',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    horsePower: '150 hp'
  };

  const car2 = {
    image: 'car2.jpg',
    name: 'Car 2',
    driveType: 'RWD',
    trim: 'Sport',
    mileage: '30,000',
    engine: '2.5L',
    transmission: 'Manual',
    fuelType: 'Hybrid',
    horsePower: '180 hp'
  };

  return (
    <div className="compare-result-container">
      <h1>Car Comparison</h1>
      <div className="car-comparison">
        <div className="car-details">
          <img src={car1.image} alt={car1.name} />
          <h2>{car1.name}</h2>
          <p>Drive Type: {car1.driveType}</p>
          <p>Trim: {car1.trim}</p>
          <p>Mileage: {car1.mileage}</p>
          <p>Engine: {car1.engine}</p>
          <p>Transmission: {car1.transmission}</p>
          <p>FuelType: {car1.fuelType}</p>
          <p>HorsePower: {car1.horsePower}</p>
        </div>
        <div className="car-details">
          <img src={car2.image} alt={car2.name} />
          <h2>{car2.name}</h2>
          <p>Drive Type: {car2.driveType}</p>
          <p>Trim: {car2.trim}</p>
          <p>Mileage: {car2.mileage}</p>
          <p>Engine: {car2.engine}</p>
          <p>Transmission: {car2.transmission}</p>
          <p>FuelType: {car2.fuelType}</p>
          <p>HorsePower: {car2.horsePower}</p>
        </div>
      </div>
    </div>
  );
}

export default ComparisonResult;