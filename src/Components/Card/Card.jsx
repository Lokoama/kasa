import './Card.css'
import { Link } from 'react-router-dom';

function Card ({item}) {
  return (
    <Link className="Card" to={`/housing/${item.id}`}>
      <div>
        <p className="CardTxt">{item.title}</p>
        <img src={item.cover} alt="" className='cardImg'/>
      </div>
    </Link>
  )
}

export default Card;