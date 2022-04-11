import React from 'react';

const Countries = (props) => {
      const countryStyle = {
            border: '1px solid lightgray',
            margin : '20px',
            padding:'20px'
            
      }
      // console.log(props);
      const handleAddCountry = props.handleAddCountry;
      const {name, capital,area,flags} = props.country
      return (
            <div style={countryStyle}>
                  <img style={{height:'100px'}} src={flags.svg} alt="" />

                  <h2>{name}</h2>
                  <p>Capital : {capital}</p>
                  <p> Area : {area}</p>
                  <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
            </div>
      );
};

export default Countries;