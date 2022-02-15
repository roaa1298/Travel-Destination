import './Tours.css';
import Tourx from './tour/Tour';
import { Link } from 'react-router-dom';

function Tour(props){
    return(
        <>
        {props.data.map((tour,idx)=>{
            return(
                <div key={idx}>
                    <Link to={`/city/${tour.id}`}>
                        <Tourx tour={tour}/>
                    </Link>
                </div>

            );
        })}
        </>
    );
}

export default Tour;