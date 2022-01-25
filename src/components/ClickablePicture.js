import React, { useState } from 'react';
import maxence from './../assets/images/maxence.png';
import maxenceWithGlasses from './../assets/images/maxence-glasses.png';

const ClickablePicture = () => {
  const photosArray = [maxence, maxenceWithGlasses];
  let [photo, setPhoto] = useState(photosArray[0]);

  const handleClick = () => {
    photo === photosArray[0]
      ? setPhoto(photosArray[1])
      : setPhoto(photosArray[0]);
  };

  return (
    <div>
      <img onClick={() => handleClick()} src={photo} alt="lalalala" />
    </div>
  );
};

export default ClickablePicture;
