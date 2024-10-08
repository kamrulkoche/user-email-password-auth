import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import auth from "../fireBase/firebase.config";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);

    //reset error and success
    setRegisterSuccess("");
    setRegisterError("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 character or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "You password should have at least one upper case characters"
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and condition");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setRegisterSuccess("Success Register");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="">
      <div className="mx-auto w-1/2">
        <h2 className="text-3xl mb-4">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full py-2 px-4 border border-black"
            placeholder="Your Email Address"
            type="email"
            name="email"
            id=""
            required
          />
          <br />
          <div className="relative">
            <input
              className="mb-4 w-full py-2 px-4 border border-black"
              placeholder="password"
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              required
            />
            <span
              className="absolute top-3 right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <br />
          <div className="mb-4">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our <a href="">Terms and Conditions</a>
            </label>
          </div>
          <input
            className="btn btn-secondary mb-4 w-full"
            type="submit"
            value="Register"
          />
        </form>
        {registerSuccess && <p className="text-green-600">{registerSuccess}</p>}
        {registerError && <p className="text-red-600">{registerError}</p>}
        <p>Already have an account ? <Link to="/login">Login</Link></p>

      </div>
    </div>
  );
};

export default Register;
