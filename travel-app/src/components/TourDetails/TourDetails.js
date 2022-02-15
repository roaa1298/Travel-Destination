import { Link, useParams } from 'react-router-dom';
import {useState} from 'react';
import data from '../../data/db.json';
import './TourDetails.css';

function TourDetails(props2){
    const [readMore,setReadMore]=useState(false);
    let {id}=useParams();
    const result=data.filter((value)=>value.id === id);
    return(
        <>
        <div className='divStyle'>
        <h2 className='nam'>{result[0].name}</h2>
        <p className='para'>
            {readMore ? `Description: ${result[0].info}` : `Description: ${result[0].info.substring(0,200)} ... `}
            <button onClick={()=>setReadMore(!readMore)}>
                {readMore ? "show less" : "show more"}
            </button>
        </p>
        <p className='price'>Price: {result[0].price}</p>
        <img src={result[0].image}/>
        </div>
        </>
    );
}
export default TourDetails;