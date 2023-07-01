import './Card.css'
import { Link } from 'react-router-dom';

//Composant card qui créer une carte cliquable en utilisant la props item, une fois la card cliqué une route est créer dans /housing/id qui contient
//les données de la carte (id, title et cover).
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