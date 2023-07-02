import Header from '../../Components/Header/Header'
import {Link} from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import './Error404.css'


function Error() {
    return (
        <div className='appContainer'>
            <div className='errorContainer'>
                <Header />
                <div className='titleOups'> 
                    <h1 className='title'>404</h1>
                    <p className='oups'>Oups! La page que vous demandez n'existe pas</p>
                    <Link to="/"> <p className='link'>Retourner sur la page d'accueil</p> </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Error