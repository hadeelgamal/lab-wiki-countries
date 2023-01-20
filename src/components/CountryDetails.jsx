import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const [countryDetails, setcountryDetails] = useState(null);
  const { id } = useParams();
  console.log("useparams:", id);

  useEffect(() => {
    axios.get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
        .then(response => {setcountryDetails(response.data)} 
        )
  }, [id])

  return (
    <div>
      <div className="col-7">
        <h1>{countryDetails.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{countryDetails.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {countryDetails.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              {countryDetails.borders.map((border) => {
                return (
                  <td>
                    <ul>
                      <li>{border.borders}</li>
                    </ul>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CountryDetails;
