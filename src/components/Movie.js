import React from "react";

function Movie({
  image,
  titleJPN,
  titleROM,
  titleENG,
  director,
  release,
  runningTime,
  score,
  description,
}) {
  return (
    <div className="Movie">
      <h2>
        {titleJPN} ({titleROM})
      </h2>
      <div className="row">
        <div className="col">
          <img src={image} alt="poster" />
        </div>
        <div className="col">
          <p>
            <b>English Title:</b> {titleENG}
          </p>
          <p>
            <b>Director:</b> {director}
          </p>
          <p>
            <b>Release Date:</b> {release}
          </p>
          <p>
            <b>Running Time:</b> {runningTime} minutes
          </p>
          <p>
            <b>Rotten Tomato Score:</b> {score}
          </p>
          <p className="padding">
            <b>Movie Description:</b> {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
