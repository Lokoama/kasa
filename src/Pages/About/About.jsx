import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import Dropdown from '../../Dropdown/Dropdown'




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
            <Banner />
            <div className='Dropdown'>
                <Dropdown item={content} title="Fiabilite" dataValue = 'fiabilite' />
                {/* <Dropdown item={house} title="Equipments" dataValue = "equipments"/> */}
                
                </div>          
            <Footer />
        </div>
    )
}

export default About