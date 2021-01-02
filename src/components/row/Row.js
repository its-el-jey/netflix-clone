import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original"

function Row({title, fetchUrl, isLargeRow}) {
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
        {movies.map((movie) => {
          return (
            <img
              key={ movie.id }
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path} `} 
              alt={movie.name}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Row
