import React from 'react';
import Rating from './Rating';

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div className="driver-card-div">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="driver-information">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <h4>
          {car.model} - {car.licensePlate}
        </h4>
      </div>
    </div>
  );
};

export default DriverCard;
