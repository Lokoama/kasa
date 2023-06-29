import './Card.css'
import { Link } from 'react-router-dom';

function Card ({item}) {
  return (
    <Link className="card" to={`/housing/${item.id}`}>
      <div>
        <p className="cardTxt">{item.title}</p>
        <img src={item.cover} alt={item.title} className='cardImg'/>
      </div>
    </Link>
  )
}

export default Card;