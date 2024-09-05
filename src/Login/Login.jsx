import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import auth from "../fireBase/firebase.config";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    //reset error and success
    setLoginSuccess("");
    setLoginError("");

    // add validation
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setLoginSuccess("User logged in Successfully");
        console.log(result.user);
      })
      .catch((error) => {
        setLoginError(error.message);
        console.log(error);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("Please provide an email", emailRef.current.value);
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      console.log("Please write a valid email");
      return;
    }

    //send validation email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("please check your email");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin}>
            <input
              className="mb-4 w-full py-2 px-4 border border-black"
              placeholder="Your Email Address"
              type="text"
              name="email"
              ref={emailRef}
              id=""
              required
            />
            <br />
            <div>
              <input
                className="mb-4 w-full py-2 px-4 border border-black"
                placeholder="password"
                type="password"
                name="password"
                id=""
                required
              />
              <label className="label">
                <a
                  onClick={handleForgetPassword}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <br />
            <input
              className="btn btn-secondary mb-4 w-full"
              type="submit"
              value="Login"
            />
          </form>
          <br />
          {loginSuccess && <p className="text-green-600">{loginSuccess}</p>}
          {loginError && <p className="text-red-600">{loginError}</p>}
          <p>
            New To this website please ? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
