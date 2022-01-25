import React, { useState } from 'react';

const LikeButton = () => {
  const [count, setCount] = useState(0);
  let [color, setColor] = useState('purple');
  const colorsArray = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const changeButtonColor = () => {
    let tmpColor = colorsArray[count % colorsArray.length];
    setColor(tmpColor);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          setCount(count + 1);
          changeButtonColor();
        }}
      >
        {count} Likes
      </button>
    </div>
  );
};

export default LikeButton;
