import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const threshold =
    r * 0.299 + g * 0.587 + b * 0.5 > 0.5 ? '#000000' : '#ffffff';

  return (
    <div
      className="id-card"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      <h3 style={{ color: threshold }}>
        rgb({r}, {g}, {b})
      </h3>
    </div>
  );
};

// const BoxColor = (props) => {
//     return <div className="id-card" style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}}>
//           <h3>
//               rgb({props.r}, {props.g}, {props.b})
//           </h3>
//       </div>
// };

export default BoxColor;
