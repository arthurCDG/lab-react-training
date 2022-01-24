import React from 'react';

const Rating = (props) => {
  if (props.rating < 0.5) {
    return (
      <div className="rating-div">
        <span>☆ ☆ ☆ ☆ ☆</span>
      </div>
    );
  } else if (props.rating < 1.5) {
    return (
      <div className="rating-div">
        <span>★ ☆ ☆ ☆ ☆</span>
      </div>
    );
  } else if (props.rating < 2.5) {
    return (
      <div className="rating-div">
        <span>★ ★ ☆ ☆ ☆</span>
      </div>
    );
  } else if (props.rating < 3.5) {
    return (
      <div className="rating-div">
        <span>★ ★ ★ ☆ ☆</span>
      </div>
    );
  } else if (props.rating < 4.5) {
    return (
      <div className="rating-div">
        <span>★ ★ ★ ★ ☆</span>
      </div>
    );
  } else {
    return (
      <div className="rating-div">
        <span>★ ★ ★ ★ ★</span>
      </div>
    );
  }
};

export default Rating;
