import Data from "../../Data.json"
import {useParams} from 'react-router-dom';
import './Tag.css'

function Tag() {
    const { id } = useParams();
    const house = Data.find(item => item.id === id);

    return (
        <div className="tag">
            {house.tags.map((tag, index) => (
            <span key = {index}> {tag} </span>
            ))}
        </div>
       

    )
}

export default Tag