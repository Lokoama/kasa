import React, { useState } from 'react';
import Data from '../../Data.json';
import {useParams} from 'react-router-dom';

function Carousel () {
  const { id } = useParams();
  const house = Data.find(item => item.id === id);
  const [picture, setPicture] = useState(0);

  let allPictures = house.pictures;
  const length = house.pictures.length;
  let [count, setCount] = useState(1);
  
  const handlePrevious = () => {
    setPicture(picture > 0 ? picture - 1 : picture);
    setCount(count-1)
};

const handleNext = () => {
    setPicture(picture < length - 1 ? picture + 1 : picture);
    setCount(count+1)
};

  return (
    <div className="carousel">
      <button onClick={handlePrevious} disabled={picture === 0}>Previous</button>
      <button onClick={handleNext} disabled={picture === length - 1}>Next</button>
      <img src  ={allPictures[picture]} alt={house.title} className = 'CarousselImg'/>
      <div> {count}/{length}</div>
    </div>
  );
};

export default Carousel;