import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import style from "./Pdp.module.scss";

const Pdp = () => {
  const { id } = useParams();
  const [ loading, setLoading ] = useState(false)
  const [exploreNowId, setExploreNowId] = useState(null);

  useEffect(() => {
    setLoading(true)
    axios(`https://658efbfd2871a9866e7a1bb4.mockapi.io/work/${id}`)
      .then((res) => {
        setExploreNowId(res.data)
        console.log(res?.data);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(true)
      })
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <div className={style.pdp}>
      <div className={style.container}>
        <div className={style.pdp__wrapper}>
          {exploreNowId !== null && exploreNowId ? (
            <div className={style.pdp__blog}>
              <h2>{exploreNowId?.title}</h2>
              <img src={exploreNowId?.image} alt="" />
              <span>{exploreNowId.price}</span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pdp;
