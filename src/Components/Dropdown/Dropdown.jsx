import VectorUp from '../../Assets/VectorUp.png'
import VectorDown from '../../Assets/VectorDown.png'
import './Dropdown.css'
const { useState } = require("react");

// Composant dropdown qui permet de faire apparaître ou disparaitre un text grace au clique sur un bouton via une variable détat.
// Ici nous avons les props title(text du bouton), item (contenant les données lorsque l'element est open) et dataValue (spécifie les données d'item)
function Dropdown ({item, title, dataValue}) {
     //Variable d'état qui permet de définir si le state de l'élément est Open ou non
    const [isOpen, setIsOpen] = useState(true)
    
    // On verifie si dataValue (Le texte du dropdown) viens d'un tableau ou d'un texte. S'il viens d'un tableau, on créer un span pour chaque élément,
    // sinon la valeur reste telle quelle.
    const arrayOrNot = Array.isArray(item[dataValue]) ? item[dataValue].map(equipement => <span key={equipement}>{equipement}</span>) : item[dataValue]

    //En fonction de l'état de isOpen, on affiche le bouton et le contenu du dropdown ou juste le bouton qui permet de l'afficher.
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
        <button onClick={() => setIsOpen(true)} className='button'>
            {title}
            <div className='vector'> <img src= {VectorUp} alt="" /></div>
            </button>
        </div>
}



export default Dropdown