import Header from '../header/Header';
import Tour from '../tours/Tours';
import Footer from '../footer/Footer';
import data from '../../data/db.json';

function Home(){
    return(
        <>
        <Header />
        <Tour data={data}/>
        <Footer />
        </>
    );
}

export default Home;