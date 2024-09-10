import React from "react";
import { useParams } from "react-router-dom";
import moviesApi from "../../api/dummiy-data.movies.json";
import style from "./MoviesId.module.scss";

const MoviesId = () => {
  const { id } = useParams();
  const currentMoviesid = moviesApi.find((el) => el.id == id);
  console.log(currentMoviesid);
  return (
    <div className={style.movies_id}>
      {currentMoviesid !== null && currentMoviesid ? (
        <div>
          <img src={currentMoviesid?.movies__link} alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default MoviesId;
