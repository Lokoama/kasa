import logo from '../../Assets/Logo.footer.png'
import './Footer.css';

function Footer() {
    return (
        <footer>
            <img className ="logoFooter" src={logo} alt="logo" />
            <p className='txtFooter'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer