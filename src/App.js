import './App.css';
import { useState, useEffect } from "react";
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
// import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    axios.get('https://ih-countries-api.herokuapp.com/countries')
        .then(response => {setCountries(response.data)
        console.log(countries)}
        )
  }, [])
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList countries={countries} />} />
            <Route path="/:id" element={<CountryDetails countries={countries}/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
