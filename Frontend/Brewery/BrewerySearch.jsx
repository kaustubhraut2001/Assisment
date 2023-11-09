import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BrewerySearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    axios.get(`https://api.openbrewerydb.org/breweries?by_name=${searchTerm}`)
      .then((response) => {
        setBreweries(response.data);
      })
      .catch((error) => {
        console.error('Error fetching breweries:', error);
      });
  }, [searchTerm]);

  return (
    <div>
      <h2>Brewery Search</h2>
      <input
        type="text"
        placeholder="Search by brewery name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
            <Link to={`/brewery/${brewery.id}`}>{brewery.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrewerySearch;