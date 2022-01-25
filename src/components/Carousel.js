import React, {useState} from 'react';

const Carousel = ({images}) => {
  const [count, setCount] = useState(0);
  let [image, setImage] = useState(images[0]);

  const showPreviousImage = () => {
      setCount(count - 1);
      const index = count % images.length;
      setImage(images[index]);
  };

  const showNextImage = () => {
      setCount(count + 1);
      const index = count % images.length;
      setImage(images[index]);
  };

  return (
    <div className='id-card'>
        <button onClick={() => showPreviousImage}>Previous</button>
            <img src={image} alt="lalalala" />
        <button onClick={() => showNextImage}>Next</button>
    </div>
  );
};

export default Carousel;
