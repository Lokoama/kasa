import Data from "../../Data.json"
import {useParams} from 'react-router-dom';

function Tag() {
    const { id } = useParams();
    const house = Data.find(item => item.id === id);

    return (
        <div>
            {house.tags.map((tag, index) => (
            <span key = {index}> {tag} </span>
            ))}
        </div>
       

    )
}

export default Tag