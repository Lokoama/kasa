import React from 'react';
import FullStar from '../../Assets/Rate.png'
import EmptyStar from '../../Assets/Unrated.png'

function Rating({ rating }) {
    const fullStars = Array.from({ length: rating }, (_, i) => <span key={i}> <img src= {FullStar} alt="" /></span>);
    const emptyStars = Array.from({ length: 5 - rating }, (_, i) => <span key={i}><img src= {EmptyStar} alt="" /></span>); 

    return (
        <div>
            {fullStars}
            {emptyStars}
        </div>
    )
}

export default Rating;
