import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const [foundCountry, setFoundCountry] = useState(null);
  const { id } = useParams();
  console.log("useparams:", id);
  const { countries } = props;

  useEffect(() => {
    const country = countries.find((country) => {
      return id === country.alpha3Code;
    });

    if (country) {
      setFoundCountry(country);
    }
  }, [id]);

  return (
    <div>
      <div className="col-7">
        <h1>{foundCountry.name.official}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30%' }}>Capital</td>
              <td>{foundCountry.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {foundCountry.area}
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              {foundCountry.borders.map((border) => {
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
