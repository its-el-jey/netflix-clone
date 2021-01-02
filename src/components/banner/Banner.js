import React, {useState, useEffect} from 'react';
import './Banner.css';
import requests from '../../request';
import axios from '../../axios';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {

    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // truncate means shortened the certain element
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center"
      }}
    >

    <div className="banner__contents">
      <h1 className="banner__title">
      {/* if movie.title is not exist find movie.name/original */}
        {movie?.title || movie?.name || movie?.original_name}
      </h1>

      <div className="banner__buttons">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>
      </div>
      
      {/* truncate into 150 characters ... */}
      <h1 className="banner__description"> {truncate(movie?.overview, 150)} </h1>
    </div>

    <div className="banner__fadeBottom" />
    </header>
  )
}

export default Banner
