import './Tours.css'

function Tour(props){
    return(
        <>
        {props.data.map(tour=>{
            return(
                <div className="backColor">
                    <h3 className='name'>Name: {tour.name}</h3>
                    <img src={tour.image} alt={tour.name} />
                </div>
            );
        })}
        </>
    );
}

export default Tour;