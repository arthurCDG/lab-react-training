import React from 'react';

const IdCard = (props) => {
  return (
    <div className='id-card'>
        <div className="id-card-photo">
            <img src={props.picture} alt={props.firstName} />
        </div>
        <div className='id-card-details'>
            <p><b>First name: </b>{props.firstName}</p>
            <p><b>Last name: </b>{props.lastName}</p>
            <p><b>Gender: </b>{props.gender}</p>
            <p><b>Height: </b>{props.height}</p>
            <p><b>Birth: </b>{props.birth.toDateString()}</p>
        </div>
    </div>
  );
};

export default IdCard;
