import './Banner.css'

function Banner ({picture}) {
return (
    <div className='BannerPictureTxt'>
        <img className ="BannerPicture" src={picture} alt="Banniere de Kasa" />
    </div>
)
}

export default Banner