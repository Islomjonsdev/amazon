import React from "react";
import { useParams } from "react-router-dom";
import moviesApi from "../../api/dummiy-data.movies.json";
console.log(moviesApi);
import style from "./MoviesId.module.scss";

const MoviesId = () => {
  const { id } = useParams();
  const currentMoviesid = moviesApi.find((el) => el.id == id);
  console.log(currentMoviesid);
  return (
    <div>
      {currentMoviesid !== null && currentMoviesid ? (
        <div>
          <img src={currentMoviesid?.movies__link} alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default MoviesId;
