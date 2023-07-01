import React from 'react';
import FullStar from '../../Assets/Rate.png'
import EmptyStar from '../../Assets/Unrated.png'

// Ici, grâce à Array.from, nous créons deux tableaux : 'fullStars' pour les étoiles "remplies" et 'emptyStars' pour les étoiles "vides". 
// La longueur de ces tableaux est déterminée par la valeur de 'rating' (pour 'fullStars') et par 5 - 'rating' (pour 'emptyStars'), pour une 
// note maximale de 5. Chaque élément du tableau est un élément 'span' contenant une image d'étoile.
// Bien que nous ne le fassions pas ici, il serait possible d'utiliser des clés pour chaque élément si l'on prévoyait que les étoiles pourraient 
// changer de position à l'avenir.

function Rating({ rating }) {
    const fullStars = Array.from({ length: rating }, () => <span > <img src= {FullStar} alt="" /></span>);
    const emptyStars = Array.from({ length: 5 - rating }, () => <span ><img src= {EmptyStar} alt="" /></span>); 

    return (
        <div>
            {fullStars}
            {emptyStars}
        </div>
    )
}

export default Rating;
