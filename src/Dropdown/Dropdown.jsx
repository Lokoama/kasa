// import Data from '../Data.json'
// import {useParams} from 'react-router-dom';
const { useState } = require("react");




function Dropdown ({item, title, test}) {
   
    const [isOpen, setIsOpen] = useState(true)
    // const { id } = useParams();
    // const house = Data.find(item => item.id === id);
   
    if (!item) return null;
    
    return isOpen? (
        <div>
            <button onClick={() => setIsOpen(false)}>
            {title}
            </button>
            <p>{item.test}</p>
        </div>
    ) : <div>
        <button onClick={() => setIsOpen(true)}>
            {title}
            </button>
        </div>
}



export default Dropdown