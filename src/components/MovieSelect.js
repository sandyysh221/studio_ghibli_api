import React from "react";

function MovieSelect({ movies, onMovieSelect }) {
  function handleChange(event) {
    const index = event.target.value;
    const movie = movies[index];
    onMovieSelect(movie);
  }

  const movieDropDown = movies.map((movie, index) => {
    return (
      <option value={index} key={index}>
        {movie.title}
      </option>
    );
  });

  return (
    <div className="MovieSelect">
      <select defaultValue="" onChange={handleChange}>
        <option value="">Choose a Movie</option>
        {movieDropDown}
      </select>
    </div>
  );
}

export default MovieSelect;
