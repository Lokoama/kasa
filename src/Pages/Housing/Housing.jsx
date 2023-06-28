import Data from '../../Data.json'
import {useParams} from 'react-router-dom';
import Header from '../../Components/Header/Header'
import Tag from '../../Components/Tag/Tag'
import Dropdown from '../../Dropdown/Dropdown'
import Rating from '../../Components/Rating/Rating'
import Footer from '../../Components/Footer/Footer'
import Caroussel from '../../Components/Caroussel/Caroussel'
import './Housing.css'


function Housing() {
    const { id } = useParams();
    const house = Data.find(item => item.id === id);
    return (
        <div>
            < Header />
            <div>
            <div>
                <Caroussel/>
                <div className='afterCaroussel'>
                    <div>
                        <p>{house.title}</p>
                        <p>{house.location}</p>
                    </div>
                    <div>
                        <div className='hostNamePicture'>
                            <p>{house.host.name}</p>
                            <img src={house.host.picture} alt={house.host.name} />
                        </div>
                        <div>
                            <Rating rating = {house.rating} />
                        </div>
                    </div>
                    
                </div>
                <Tag />
                <div className='Dropdown'>
                <Dropdown item={house} title="Description" truc = "Description"/>
                <Dropdown item={house} title="Equipments" truc = "Equipments"/>

                </div>               
                <Footer />
            </div>
        </div>
    
        </div>
    )
}

export default Housing