import React, { useState } from 'react';
import Data from '../../Data.json';
import {useParams} from 'react-router-dom';
import "./Carousel.css"

//Composant Carousel avec deux bouton qui permettent de naviguer entre les différentes images du tableau.

function Carousel ( {button, secondButton}) {
  const { id } = useParams();
  const house = Data.find(item => item.id === id);
  //Variable d'état qui permet de changer le state du carousel pour passer d'une image à une autre
  const [picture, setPicture] = useState(0);
  const allPictures = house.pictures;
  const length = house.pictures.length;


  //Bouton précédant avec ternaire de condition, lorsque l'on clique sur le bouton si l'image n'est pas la première on on passe à l'image précédente
  //autrement on retourne à la dernière.
  const handlePrevious = () => {
    setPicture(picture > 0 ? picture - 1 : picture + (length-1)) ;
};

  //Bouton suivant avec ternaire de condition, lorsque l'on clique sur le bouton si l'image n'est pas la dernière on on passe à l'image suivante
  //autrement on retourne à la première.
  const handleNext = () => {
    setPicture(picture < length - 1 ? picture + 1 : picture - (length-1));

};

//Dans le cas ou il n'y à qu'une seul image, les boutons ne sont pas affichés dans le carousel
  if (length === 1){
  return (
    <div className="carousel">
        { <div className='count'> {picture+1}/{length}</div> }
        <img src  ={allPictures[picture]} alt={house.title} className = 'carouselImg'/>
    </div>)}else{
 
//Dans le cas ou il y à plusieurs image, on peut définir les boutons du carousel avec des images. De plus, nous avons un compteur d'image qui se base
//sur la variable picture + 1 (il s'agit de l'index du tableau allPictures) par rapport a la longueur du tableau
  return (
    <div className="carousel">
        { <button className='firstButton' onClick={handlePrevious}> <img src={button} alt="" /> </button> }
        <button className='secondButton' onClick={handleNext}> <img src={secondButton} alt="" /></button>
        { <div className='count'> {picture+1}/{length}</div> }
        <img src={allPictures[picture]} alt={house.title} className = 'carouselImg'/>
    </div>
  );
}
};

export default Carousel;
























//carousel sans loop
// import React, { useState } from 'react';
// import Data from '../../Data.json';
// import {useParams} from 'react-router-dom';
// import "./carousel.css"

// function Carousel ( {button, secondButton}) {
//   const { id } = useParams();
//   const house = Data.find(item => item.id === id);
//   const [picture, setPicture] = useState(0);

//   let allPictures = house.pictures;
//   const length = house.pictures.length;
//   let [count, setCount] = useState(1);
  
//   const handlePrevious = () => {
//     setPicture(picture > 0 ? picture - 1 : picture);
//     setCount(count-1)
// };

// const handleNext = () => {
//     setPicture(picture < length - 1 ? picture + 1 : picture);
//     setCount(count+1)
// };

//   if (length === 1){
//   return (
//     <div className="carousel">
//         <div className='count'> {count}/{length}</div>
//         <img src  ={allPictures[picture]} alt={house.title} className = 'carouselImg'/>
//     </div>)}else{
  
//   return (
//     <div className="carousel">
//         { <button className='firstButton' onClick={handlePrevious} /*disabled={picture === 0}>*/ ><img src={button} alt="" /> </button> }
//         <button className='secondButton' onClick={handleNext} /*disabled={picture === length - 1}*/><img src={secondButton} alt="" /></button>
//         <div className='count'> {count}/{length}</div>
//         <img src  ={allPictures[picture]} alt={house.title} className = 'carouselImg'/>
//     </div>
//   );
// }
// };

// export default Carousel;