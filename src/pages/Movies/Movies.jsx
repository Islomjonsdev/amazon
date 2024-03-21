import moviesApi from "../../api/dummiy-data.movies.json";
import { v4 as uuidv4 } from "uuid";
import style from "./Movies.module.scss";
import { FcNext, FcPrevious } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Movies = () => {
  const elMoviesWrapper = useRef();
  const [moviesCarausel, setMoviesCarausel] = useState(0);
  const [modal, setModal] = useState(false)

  const moviesRight = () => {
    if (moviesCarausel === 0) {
      setMoviesCarausel((moviesCarausel) => moviesCarausel + 1);
    } else {
      moviesCarausel(moviesApi.length - 1);
    }
  };

  const moviesLeft = () => {
    if (moviesCarausel === 0) {
      setMoviesCarausel((moviesCarausel) => moviesCarausel - 1);
    } else {
      setMoviesCarausel(0);
    }
  };

  useEffect(() => {
    elMoviesWrapper.current.scrollLeft =
      moviesCarausel * elMoviesWrapper.current.offsetWidth;
  }, [moviesCarausel]);
  return (
    <div className={style.container}>
      <div className={style.movies}>
        <h3>Best Sellers in Books</h3>
        <div className={style.movies__wrapper}>
          <button
            className={style.movies__carausel__btn}
            data-btn-type="left"
            onClick={moviesLeft}
          >
            <FcPrevious />
          </button>

          <ul className={style.movies__list} ref={elMoviesWrapper}>
            {moviesApi?.map((item) => (
              <li className={style.movies__item} key={uuidv4()}>
                <Link>
                  <img src={item?.movies__link} alt="" />
                </Link>
              </li>
            ))}
          </ul>
          <button
            className={style.movies__carausel__btn}
            data-btn-type="right"
            onClick={moviesRight}
          >
            <FcNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
