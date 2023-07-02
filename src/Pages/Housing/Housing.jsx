import Data from '../../Data.json'
import {useParams} from 'react-router-dom';
import Header from '../../Components/Header/Header'
import Tag from '../../Components/Tag/Tag'
import Dropdown from '../../Components/Dropdown/Dropdown'
import Rating from '../../Components/Rating/Rating'
import Footer from '../../Components/Footer/Footer'
import Carousel from '../../Components/Carousel/Carousel'
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
        <div className='appContainer'>
            <div className='housingContainer'>
                < Header />
                <div>
                    <div>
                        <Carousel button = {VectorLeft} secondButton = {VectorRight} />
                        <div className='afterCarousel'>
                            <div>
                                <h2 className='titreLogement'>{house.title}</h2>
                                <p className='lieuLogement'>{house.location}</p>
                                <Tag tag = {house.tags} />
                            </div>
                            <div className='hostAndRating'>
                                <div className='hostNamePicture'>
                                    <p className='hostName'>{house.host.name}</p>
                                    <img className='hostPicture'src={house.host.picture} alt={house.host.name} />
                                </div>
                                <div className='containerRating'>
                                    <Rating rating = {house.rating} />
                                </div>
                        
                            </div>
                         </div>
                        <div className='dropdownHousing'>
                            <Dropdown item={house} title="Description" dataValue = "description"/>
                            <Dropdown item={house} title="Equipments" dataValue = "equipments"/>
                        </div>               
                    </div>
                </div>
            <Footer />
            </div>
        </div>
    )
}
}

export default Housing