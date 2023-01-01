import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Movie = () => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    const movies = [
      {
        id: 1,
        title: "Highlander",
        release_date: "1986-03-07",
        runtime: 116,
        mpaa_rating: "R",
        description: "Some long description",
      },
      {
        id: 2,
        title: "Raiders of the Lost Ark",
        release_date: "1981-06-12",
        runtime: 115,
        mpaa_rating: "PG-13",
        description: "Some long description",
      },
    ];

    setMovie(movies.find((movie) => movie.id === Number(id)));
  }, [id]);

  return (
    <div>
      <h2>Movie: {movie.title}</h2>
      <small>
        <em>
          {`${movie.release_date}, ${movie.runtime} minutes, Rated ${movie.mpaa_rating}`}
        </em>
      </small>
      <hr />
      <p>{movie.description}</p>
    </div>
  );
};
