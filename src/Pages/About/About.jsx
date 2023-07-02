import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer'
import Dropdown from '../../Components/Dropdown/Dropdown'
import BannerAbout from '../../Assets/BannerAbout.png'
import './About.css'


function About() {

    const content = { 
    fiabilite : 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    respect : 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    service : "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question",
    securite : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    };
    

    return (
        <div className='appContainer'>
            <div className='aboutContainer'>
                <Header />
                <Banner picture= {BannerAbout}/>
                <div className='dropdownAbout'>
                    <Dropdown item={content} title="Fiabilite" dataValue = 'fiabilite' />
                    <Dropdown item={content} title="Respect" dataValue = 'respect' />
                    <Dropdown item={content} title="Service" dataValue = 'service' />
                    <Dropdown item={content} title="Securite" dataValue = 'securite' />
                    </div>          
            </div>
            <Footer />
        </div>
    )
}

export default About