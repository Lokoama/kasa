import Header from '../../Components/Header/Header'
import {Link} from 'react-router-dom'


function Error() {
    return (
        <div>
            <Header />
            <div> 
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas</p>
            </div>
           <div>
            <Link to="/"> <p>Retourner sur la page d'accueil</p> </Link>
           </div>
        </div>
    )
}

export default Error