import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import Dropdown from '../../Dropdown/Dropdown'
import BannerAbout from '../../Assets/BannerAbout.png'



function About() {

    const content = { 
    fiabilite : 'Ceci est du fiable',
    respect : 'Ceci est du respect',
    service : 'Ceci est du service',
    securite : 'Ceci est du securité'
    };
    

    return (
        <div>
            <Header />
            <Banner picture= {BannerAbout}/>
            <div className='Dropdown'>
                <Dropdown item={content} title="Fiabilite" dataValue = 'fiabilite' />
                <Dropdown item={content} title="Respect" dataValue = 'respect' />
                <Dropdown item={content} title="Service" dataValue = 'service' />
                <Dropdown item={content} title="Securite" dataValue = 'securite' />
                </div>          
            <Footer />
        </div>
    )
}

export default About