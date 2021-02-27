import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name, flag, region, population} = props.country;
    // console.log(props.country);
    // console.log(props);
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country-info">
            <div className="countries">
                <img src={flag} alt=""/>
                <p>Country Name: {name}</p>
                <p>Region: {region}</p>
                <p>Population: {population}</p>
                <button onClick={() => handleAddCountry(props.country)}>Add country</button>
            </div>
        </div>
    );
};

export default Country;