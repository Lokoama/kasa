import Header from '../../Components/Header/Header'
import {Link} from 'react-router-dom'
import './Error404.css'


function Error() {
    return (
        <div>
            <Header />
            <div className='titleOups'> 
                <h1 className='title'>404</h1>
                <p className='oups'>Oups! La page que vous demandez n'existe pas</p>
                <Link to="/"> <p className='link'>Retourner sur la page d'accueil</p> </Link>
            </div>
        </div>
    )
}

export default Error