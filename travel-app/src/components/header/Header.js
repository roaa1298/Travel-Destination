import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <>
        <nav>
            <Link to='/'>  Home </Link>
        </nav>
        <h1 className="head">Travel Destination</h1>
        </>
    );
}

export default Header;