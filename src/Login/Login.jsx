import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import auth from "../fireBase/firebase.config";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
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
              type="email"
              name="email"
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
            </div>
            <br />
            <input
              className="btn btn-secondary mb-4 w-full"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
