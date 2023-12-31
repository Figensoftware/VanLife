import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function Vans() {
    const [searchParams, setSearchParams] = useSearchParams();
   const [vans, setVans] = useState([]);

const typeFilter = searchParams.get("type");
// console.log(typeFilter);

    useEffect(() => {
        fetch("/api/vans")
        .then((res) => res.json())
        .then((data) => setVans(data.vans))
    },[]);
    
    // fitler van types with userSearchParams
const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter)
: vans;


const handleFilterChange = (key, value) => {
setSearchParams(prevParams => {
    if (value === null) {
        prevParams.delete(key)
    } else {
        prevParams.set(key, value)
    }
    return prevParams
})
}



  return (
    <div className='van-list-container'>
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
            {/*  <Link 
            to="?type=simple"
            className='van-type simple'>
            Simple
            </Link> yerine button kullanıldı! */}
            
            <button 
            onClick={() => handleFilterChange( "type","simple")}
            className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>
            Simple
            </button>
            <button 
            onClick={() => handleFilterChange( "type","rugged")}
            className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>
            Rugged
            </button>
            <button 
            onClick={() => handleFilterChange( "type","luxury")}
            className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>
            Luxury
            </button>
            {/* clear filter buttona basıldığında gözükür */}
           {typeFilter ? (
             <button 
             onClick={() => handleFilterChange("type", null)}
             className='van-type clear-filters'>
             Clear filter
             </button>
           ) : null }
        </div>
        
        <div className="van-list">
            {displayedVans.map(van => (
       <div key={van.id} className="van-tile">
        {/* <Link to={`/vans/${van.id}`} > değiştirildi relative path kullanıldı. */}
        <Link 
        to={van.id}
        // location 
        state={{ 
            search: `?${searchParams.toString()}`,
            type: typeFilter
             }}>
       <img src={van.imageUrl} />
       <div className="van-info">
           <h3>{van.name}</h3>
           <p>${van.price}<span>/day</span></p>
       </div>
       <i className={`van-type ${van.type} selected`}>{van.type}</i>
       </Link>
   </div>
       ))}
       </div>
 </div>
  )
}

export default Vans;
