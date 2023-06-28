import Header from '../../Components/Header/Header'
import Banner from '../../Components/Banner/Banner'
import Card from '../../Components/Card/Card'
import Footer from '../../Components/Footer/Footer'
import './Home.css';
import Data from '../../Data.json'

console.log(Footer);

function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <div className='cardHolder'>{Data.map(item => <Card key={item.id} item={item} />)}</div>
            <Footer />
        </div>
    )
}

export default Home