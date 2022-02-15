import './Tours.css';
import Tourx from './tour/Tour';

function Tour(props){
    return(
        <>
        {props.data.map((tour)=>{
            return(

                <Tourx tour={tour}/>

            );
        })}
        </>
    );
}

export default Tour;