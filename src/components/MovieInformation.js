import React from "react";
import Movie from "./Movie";

function MovieInformation({ movie, createFavourites }) {
  function handleClick() {
    createFavourites(movie);
  }

  if (movie === null) {
    return null;
  }
  return (
    <div className="MovieInformation">
      <Movie
        image={movie.image}
        titleJPN={movie.original_title}
        titleROM={movie.original_title_romanised}
        titleENG={movie.title}
        director={movie.director}
        release={movie.release_date}
        runningTime={movie.running_time}
        score={movie.rt_score}
        description={movie.description}
      />
      <button onClick={handleClick}>❤️ {movie.original_title_romanised}</button>
    </div>
  );
}

export default MovieInformation;
