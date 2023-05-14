/* eslint-disable no-unused-vars */
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import img from "../../assets/images/login/login.svg";

import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import google from '../../assets/google.png'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/Authprovider";
const Login = () => {
    const {login} = useContext(AuthContext)
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {
      email,
      password,
    };
    console.log(user);
    login(email,password)
    .then(res =>{
        const user = res.user;
        console.log(user)
    })
    .catch(error => console.log(error))
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-10 lg:gap-48">
            <div className="text-center lg:text-left">
              <img src={img} alt="" className="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <p className="text-center text-4xl font-bold text-white">
                  Log in
                </p>
                <form onSubmit={handleLogin}>
                  <div className="form-control mt-10">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      name="email"
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      name="submit"
                      value="Login"
                      id=""
                      className="btn bg-orange-500 text-black hover:bg-orange-700 hover:text-white"
                    />
                  </div>
                  <p className="text-center mt-5 text-lg">Or sign In with</p>
                  <div className="flex justify-around mt-5">
                    <img className="w-1/6" src={facebook} alt="" />
                    <img className="w-1/6" src={google} alt="" />
                    <img className="w-1/6" src={linkedin} alt="" />
                  </div>

                  <div className="flex gap-1 justify-center mt-10 items-center">
                    <div>
                      <p className="">New to Car Doctor? </p>
                    </div>
                    <div>
                      <Link to="/register" className="btn">Register</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
