import React from 'react';

const Random = (props) => {
  return (
    <div className="id-card">
      <p>
        Random valye between {props.max} and {props.min} =>
        {Math.floor(Math.random() * props.max) + props.min}
      </p>
    </div>
  );
};

export default Random;
