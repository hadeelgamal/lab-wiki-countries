import { useState, useEffect } from "react";
import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then(response => {setCountries(response.data)} 
        )
  }, [])
  return (
    <div>
      {countries.map( country => {
        return (
          <div
            key={country.alpha3Code}
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              <Link
                className="list-group-item list-group-item-action"
                to={`/${country.alpha3Code}`}
              >
                {country.name.official}
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
