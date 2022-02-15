import '../Tours.css';

function Tours(props1){

    return(
                <div className="backColor">
                    <h3 className='name'>Name: {props1.tour.name}</h3>
                    <img src={props1.tour.image} alt={props1.tour.name} />
                </div>
    );
}

export default Tours;