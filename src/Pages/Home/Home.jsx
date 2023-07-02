import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer'
import './Home.css';
import Data from '../../Data.json'
import BannerPicture from '../../Assets/BannerPicture.png'



function Home() {
    
    return (
        <div className='appContainer'>
            <div className='homeContainer'>
                <Header />
            <div className='containerHomeBanner'>
                    <Banner picture= {BannerPicture} /> 
                    <p className='BannerTxt'>Chez vous, <span className='break'>partout et ailleurs</span></p>
            </div> 
                <div className='cardHolder'>{Data.map(item => <Card key={item.id} item={item} />)}</div>
                
            </div>
            <Footer />
        </div>
    )
}

export default Home