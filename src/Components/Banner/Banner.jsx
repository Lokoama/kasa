import './Banner.css'

//Composant bannière qui prend une URL d'image en props pour faire une bannière
function Banner({ picture }) {
    return (
        <div className='BannerPictureTxt'>
            <img className="BannerPicture" src={picture} alt="Banniere de Kasa" />
        </div>
    )
}

export default Banner