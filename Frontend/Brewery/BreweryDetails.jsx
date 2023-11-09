import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BreweryDetails = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);

  useEffect(() => {
    axios.get(`https://api.openbrewerydb.org/breweries/${id}`)
      .then((response) => {
        setBrewery(response.data);
      })
      .catch((error) => {
        console.error('Error fetching brewery details:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Brewery Details</h2>
      {brewery && (
        <div>
          <h3>{brewery.name}</h3>
          <p>Address: {brewery.street}, {brewery.city}, {brewery.state}</p>
          <p>Phone: {brewery.phone}</p>
          <p>Website: {brewery.website_url}</p>
        </div>
      )}
    </div>
  );
};

export default BreweryDetails;