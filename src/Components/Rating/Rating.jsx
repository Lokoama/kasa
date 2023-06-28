import React from 'react';



function Rating({ rating }) {
    const fullStars = Array.from({ length: rating }, (_, i) => <span key={i}>or</span>);
    const emptyStars = Array.from({ length: 5 - rating }, (_, i) => <span key={i}>gris</span>); 

    return (
        <div>
            {fullStars}
            {emptyStars}
        </div>
    )
}

export default Rating;
