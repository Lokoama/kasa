import logo from '../../Assets/Logo.png'
import { NavLink } from 'react-router-dom'
import './Header.css';

function Header() {
    return (
        <header>
            <NavLink to="/">
                <img className="logo" src={logo} alt="logo" />
            </NavLink>
            <nav>
                <NavLink className={({isActive})=> isActive ? 'navlink activeLink': 'navlink'} to="/">Accueil</NavLink>
                <NavLink className={({isActive})=> isActive ? 'navlink activeLink': 'navlink'} to="/about">A Propos</NavLink>
            </nav>
        </header>
    )
}

export default Header