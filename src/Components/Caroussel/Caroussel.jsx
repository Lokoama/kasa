import React, { useState } from 'react';
import Data from '../../Data.json';
import {useParams} from 'react-router-dom';
import "./Caroussel.css"

function Carousel ( {button, secondButton}) {
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

  if (length === 1){
  return (
    <div className="caroussel">
        <div className='count'> {count}/{length}</div>
        <img src  ={allPictures[picture]} alt={house.title} className = 'CarousselImg'/>
    </div>)}else{
  
  return (
    <div className="caroussel">
        <button className='firstButton' onClick={handlePrevious} disabled={picture === 0}> <img src={button} alt="" /> </button>
        <button className='secondButton' onClick={handleNext} disabled={picture === length - 1}><img src={secondButton} alt="" /></button>
        <div className='count'> {count}/{length}</div>
        <img src  ={allPictures[picture]} alt={house.title} className = 'CarousselImg'/>
    </div>
  );
}
};

export default Carousel;