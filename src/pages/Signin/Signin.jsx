import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import signinLogo from "../../assets/images/amazon-logo.webp";
import style from "./Signin.module.scss";

const Signin = () => {
  // const [email, setEmail] = useState("");
  // console.log(email);

  // useEffect(() => {
  //   const signInEmail = localStorage.getItem("email") | "";
  //   if (signInEmail) setEmail(signInEmail);
  // }, []);
  // const handleChange = (e) => {
  //   localStorage.setItem("email", e.target.value);
  //   setEmail(e.target.value);
  // };
  return (
    <div className={style.signin}>
      <Link to={"/"}>
        <img src={signinLogo} alt="" />
      </Link>

      <div className={style.signin__form__blog}>
        <h3>Sign in</h3>

        <form>
          <label htmlFor="">Email or mobile phone number</label>
          <input type="email" />

          <button>Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
