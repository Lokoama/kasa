// import Data from '../Data.json'
// import {useParams} from 'react-router-dom';
const { useState } = require("react");




function Dropdown ({item, title, dataValue}) {
   
    const [isOpen, setIsOpen] = useState(true)
    // const { id } = useParams();
    // const house = Data.find(item => item.id === id);
    const arrayOrNot = Array.isArray(item[dataValue]) ? item[dataValue].map(equipement => <span key={equipement}>{equipement}</span>) : item[dataValue]
    if (!item) return null;
    
    return isOpen? (
        <div>
            <button onClick={() => setIsOpen(false)}>
            {title}
            </button>
            {arrayOrNot}
        </div>
    ) : <div>
        <button onClick={() => setIsOpen(true)}>
            {title}
            </button>
        </div>
}



export default Dropdown