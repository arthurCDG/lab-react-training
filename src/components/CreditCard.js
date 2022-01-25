import React from 'react';
import masterCardLogo from './../assets/images/master-card.svg';
import visaLogo from './../assets/images/visa.png';

const CreditCard = (props) => {
  let imgDiv;
  if (props.type === 'Visa')
    imgDiv = (
      <div className="card-type-logo-div">
        <img className="card-type-logo" src={visaLogo} alt="visa" />
      </div>
    );
  else
    imgDiv = (
      <div className="card-type-logo-div">
        <img
          className="card-type-logo"
          src={masterCardLogo}
          alt="master-card"
        />
      </div>
    );

  return (
    <div
      className="credit-card-mega-div"
      style={{ backgroundColor: props.bgColor }}
    >
      {imgDiv}
      <div style={{ color: props.color }}>
        {/* <p>**** **** **** {props.number.slice(12)}</p> */}
        <p>•••• •••• •••• {props.number.slice(-4)}</p>
      </div>
      <div className="expiration-date-and-bank" style={{ color: props.color }}>
        <span>
          Expires{' '}
          {props.expirationMonth.toString().length === 1
            ? '0' + props.expirationMonth.toString()
            : props.expirationMonth.toString()}
          /{props.expirationYear.toString().slice(2)}
        </span>
        <span>{props.bank}</span>
      </div>
      <div style={{ color: props.color }}>
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
