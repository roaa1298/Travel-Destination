import '../Tours.css';
import { Link } from 'react-router-dom';
import TourDetails from '../../TourDetails/TourDetails';

function Tours(props1){
    return(
        <Link to='/city/:id'>
        <div className="backColor">
                    <h3 className='name'>Name: {props1.tour.name}</h3>
                    <img src={props1.tour.image} alt={props1.tour.name} />
                </div>
                </Link>
    );
}

export default Tours;