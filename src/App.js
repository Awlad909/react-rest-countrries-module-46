import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      
      
    </div>
  );
}

const Countries = (props) =>{
    const [countries, setCountries] = useState([]);

    useEffect( () =>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    },);
  return(
    <div>
      <h1>Hello yo yo react and Countries mama!!</h1>
      <h2>This is all Countries length:{countries.length}</h2>
      <h3>Countries Name:{props.name}</h3>
    </div>
  );
}

export default App;
