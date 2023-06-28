import logo from '../../Assets/Logo.png'

import './Footer.css';

function Footer() {
    return (
        <div>
            <footer>
                <img className ="logoFooter" src={logo} alt="logo" />
                <p className='txtFooter'>© 2020 Kasa. All rights reserved</p>
            </footer>
            
        </div>
    )
}

export default Footer