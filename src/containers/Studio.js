import React, { useEffect, useState } from "react";
import FavouriteMovie from "../components/FavouriteMovie";
import MovieInformation from "../components/MovieInformation";
import MovieSelect from "../components/MovieSelect";

function Studio() {
  const [movie, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favouriteMovie, setFavouriteMovie] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async function () {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const movies = await response.json();
    setMovies(movies);
  };

  function createFavourites(movie) {
    const copyFaves = [...favouriteMovie];
    copyFaves.push(movie);
    const filteredMovies = copyFaves.filter((movie, index, array) => {
      return array.indexOf(movie) === index;
    });
    setFavouriteMovie(filteredMovies);
  }

  return (
    <div className="Studio">
      <h1>Studio Ghibli Movies</h1>
      <div className="container">
        <p>
          <MovieSelect movies={movie} onMovieSelect={setSelectedMovie} />
          <MovieInformation
            movie={selectedMovie}
            createFavourites={createFavourites}
          />
          <FavouriteMovie movies={favouriteMovie} />
        </p>
      </div>
    </div>
  );
}

export default Studio;
