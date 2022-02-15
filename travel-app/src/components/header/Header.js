import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <>
        <div className="head">
        <nav className='home'>
            <Link to='/'>  Home </Link>
        </nav>
        <h1 className='title'>Travel Destination</h1>
        </div>
        </>
    );
}

export default Header;