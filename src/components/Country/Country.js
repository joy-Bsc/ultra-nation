import React from 'react';

const Country = (props) => {
    const{name,population,region,flags}=props.country;
    const flagStyle={height:'50px'}
    const countryStyle={border:'1px solid red',margin:'10px',padding:'10px'}
    const handleAddCountry = props.handleAddCountry;
   

    return (
        <div style={countryStyle}>
            <h4>This  is {name.common}</h4>
            <img style={flagStyle} src={flags.png} alt="" />
            <p>population {population}</p>
            <p><small>Region {region}</small></p>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};


export default Country;