import React from "react";

function FavouriteMovie({ movies }) {
  return (
    <div className="FavouriteMovie">
      <h2>Favourite Movies:</h2>
      <ul>
        {movies.map((movie) => (
          <li>
            💕 <img src={movie.image} alt="poster" />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteMovie;
