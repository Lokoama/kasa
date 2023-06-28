import BannerPicture from '../../Assets/BannerPicture.png'
import './Banner.css'

function Banner () {
return (
    <div className='BannerPictureTxt'>
        <img className ="BannerPicture" src={BannerPicture} alt="Banniere de Kasa" />
        <p className='BannerTxt'>Chez vous,<span>partout et ailleur</span></p>
    </div>
)
}

export default Banner