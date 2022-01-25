import React from 'react';

const Rating = ({ children }) => {
  let childrenValue = Number(children);
  let maxRate = 5;
  let ratingString = '';

  for (let i = 0; i < maxRate; i++) {
    i < childrenValue ? (ratingString += '★') : (ratingString -= '☆');
  }

  console.log(ratingString);
  console.log(typeof ratingString);

  return (
    <div className="rating-div">
      <span>{ratingString}</span>
    </div>
  );

  // if (props.rating < 0.5) {
  //   return (
  //     <div className="rating-div">
  //       <span>☆ ☆ ☆ ☆ ☆</span>
  //     </div>
  //   );
  // } else if (props.rating < 1.5) {
  //   return (
  //     <div className="rating-div">
  //       <span>★ ☆ ☆ ☆ ☆</span>
  //     </div>
  //   );
  // } else if (props.rating < 2.5) {
  //   return (
  //     <div className="rating-div">
  //       <span>★ ★ ☆ ☆ ☆</span>
  //     </div>
  //   );
  // } else if (props.rating < 3.5) {
  //   return (
  //     <div className="rating-div">
  //       <span>★ ★ ★ ☆ ☆</span>
  //     </div>
  //   );
  // } else if (props.rating < 4.5) {
  //   return (
  //     <div className="rating-div">
  //       <span>★ ★ ★ ★ ☆</span>
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="rating-div">
  //       <span>★ ★ ★ ★ ★</span>
  //     </div>
  //   );
  // }
};

export default Rating;
