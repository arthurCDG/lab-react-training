import React from 'react';
import Rating from './Rating';

const DriverCard = (props) => {
  return <div className="driver-card-div">
      <div>
          <img src={props.img} alt={props.name} />
      </div>
      <div className='driver-information'>
          <h2>{props.name}</h2>
          <Rating />
          <h4>{props.car.model} - {props.car.licensePlate}</h4>
      </div>
  </div>;
};

export default DriverCard;
