import logo from '../../Assets/Logo.png'
import {Link} from 'react-router-dom'
import './Header.css';

function Header() {
    return (
        <div className= "logoLink">
            <img className ="logo" src={logo} alt="logo" />
            <div>
                <Link className='linkAccueil' to="/">Accueil</Link>
                <Link className='linkAbout' to="/about">A Propos</Link>
            </div>
        </div>
    )
}

export default Header