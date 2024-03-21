import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import style from "./Pdp.module.scss"

const Pdp = () => {
  const { id } = useParams()
  const [ exploreNowId, setExploreNowId ] = useState(null);

  useEffect(() => {
    axios(`https://658efbfd2871a9866e7a1bb4.mockapi.io/work/${id}`)
        .then((res) => {
          setExploreNowId(res?.data);
          console.log(res?.data);
        })
        .catch((err) => {
          console.log(err);
        })
  }, [])
  return (
    <div className={style.pdp}>Pdp</div>
  )
}

export default Pdp