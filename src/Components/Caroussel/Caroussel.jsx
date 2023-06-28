import React, { useState } from 'react';
import Data from '../../Data.json';
import {useParams} from 'react-router-dom';





function Carousel () {
  const { id } = useParams();
  const house = Data.find(item => item.id === id);
  const [picture, setPicture] = useState(0);

  let allPictures = house.pictures;
  const length = house.pictures.length;
  console.log ( <img src  ={allPictures[picture]} alt={house.title} className = 'CarousselImg'/>)
  
  

  const handlePrevious = () => {
    setPicture(picture > 0 ? picture - 1 : picture);
};


const handleNext = () => {
    setPicture(picture < length - 1 ? picture + 1 : picture);
};

  return (
    <div className="carousel">
      <button onClick={handlePrevious} disabled={picture === 0}>Previous</button>
      <button onClick={handleNext} disabled={picture === length - 1}>Next</button>
      <img src  ={allPictures[picture]} alt={house.title} className = 'CarousselImg'/>
    </div>
  );
};

export default Carousel;