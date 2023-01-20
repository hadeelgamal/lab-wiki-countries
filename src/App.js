import './App.css';
import { Routes, Route } from 'react-router-dom';
// import countriesData from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <Routes>
            <Route path="/" element={<CountriesList />} />
            <Route path="/:id" element={<CountryDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
