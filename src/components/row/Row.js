import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import './Row.css';

function Row({title, fetchUrl}) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    // pull info and loads to screen
    async function fetchData() {

      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]) //if we leave this bracket blank the code run once

  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="row__posters">

      </div>
    </div>
  )
}

export default Row
