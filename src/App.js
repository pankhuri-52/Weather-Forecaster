import React, { useEffect, useState } from 'react';
import Condition from './Conditions';
import './App.css';

const App = () => {
  
  const [ conditions, setConditions ] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery ] = useState('Karnal');


  useEffect(() => {
      const getConditions = async () => {
        const response = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=e2e00c27a0ae457e9ae162727202403&q=${query}`
        );
        const data = await response.json();
        setConditions(data.hits);
        console.log(data.hits);
      }

      getConditions();
  },[query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
       e.preventDefault();
       setQuery(search);
       setSearch('');
  }

  return (
    <div>
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">Submit</button>
      </form>

      <div>
        {
          conditions.map((i) => (
            <Condition key={i[1].name} 
                       location={i[1]}
                       current={i[0]} />
          ))
        }
      </div>
    </div>
  );
}
export default App;
