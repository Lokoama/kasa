// import Data from '../Data.json'
// import {useParams} from 'react-router-dom';
import VectorUp from '../Assets/VectorUp.png'
import VectorDown from '../Assets/VectorDown.png'
import './Dropdown.css'
const { useState } = require("react");





function Dropdown ({item, title, dataValue}) {
   
    const [isOpen, setIsOpen] = useState(true)
    // const { id } = useParams();
    // const house = Data.find(item => item.id === id);
    const arrayOrNot = Array.isArray(item[dataValue]) ? item[dataValue].map(equipement => <span key={equipement}>{equipement}</span>) : item[dataValue]
    if (!item) return null;
    
    return isOpen? (
        <div className="dropdown">
            <button onClick={() => setIsOpen(false)} className='button'>
            {title}
            <div className='vector'> <img src={VectorDown} alt="" /></div>
            </button>
            <div className='dropdownText'>
                {arrayOrNot}
            </div>
        </div>
    ) : <div className="dropdown">
        <button onClick={() => setIsOpen(true)}>
            {title}
            <div className='vector'> <img src= {VectorUp} alt="" /></div>
            </button>
        </div>
}



export default Dropdown