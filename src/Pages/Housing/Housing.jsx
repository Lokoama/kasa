import Data from '../../Data.json'
import {useParams} from 'react-router-dom';
import Header from '../../Components/Header/Header'
import Tag from '../../Components/Tag/Tag'
import Dropdown from '../../Dropdown/Dropdown'
import Rating from '../../Components/Rating/Rating'
import Footer from '../../Components/Footer/Footer'
import Caroussel from '../../Components/Caroussel/Caroussel'
import VectorLeft from '../../Assets/VectorLeft.png'
import VectorRight from '../../Assets/VectorRight.png'
import './Housing.css'
import Error404 from '../../Pages/Error404/Error404'



function Housing({title,location,}) {
    const { id } = useParams();
    const house = Data.find(item => item.id === id);
   

    if (!house) {
        return <Error404 />
    }else{

    return (
        <div className='housingContainer'>
            < Header />
            <div>
            <div>
                <Caroussel button = {VectorLeft} secondButton = {VectorRight} />
                <div className='afterCaroussel'>
                    <div>
                        <h2 className='titreLogement'>{house.title}</h2>
                        <p className='lieuLogement'>{house.location}</p>
                    </div>
                    <div>
                        <div className='hostNamePicture'>
                            <p className='hostName'>{house.host.name}</p>
                            <img className='hostPicture'src={house.host.picture} alt={house.host.name} />
                        </div>
                        <div>
                            <Rating rating = {house.rating} />
                        </div>
                    </div>
                    
                </div>
                <Tag/>
                <div className='dropdownHousing'>
                    <Dropdown item={house} title="Description" dataValue = "description"/>
                    <Dropdown item={house} title="Equipments" dataValue = "equipments"/>
                </div>               
                <Footer />
            </div>
        </div>
    
        </div>
    )
}
}

export default Housing