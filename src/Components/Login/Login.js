import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/Context";

const Login = () => {
  const [inputValue, setInputValue] = useState(null);
  //   context
  const { login, forget, google } = useContext(AuthContext);
  //   context
  // handelSubmit
  const handelSubmit = (event) => {
    event.preventDefault();
    login(inputValue?.email, inputValue?.password)
      .then((result) => {
        const user = result.user;
        toast.success("login Success");
        event.target.reset();
      })
      .catch((error) => console.log(error));
  };
  // handelSubmit
  // inputHandel
  const inputHandel = (event) => {
    setInputValue((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };
  // inputHandel
  //   handelForget
  const handelForget = () => {
    if (!inputValue?.email) {
      return toast.warn("Provide a email and forget");
    }
    forget(inputValue?.email)
      .then(() => toast.success("check your email and reset password"))
      .catch((error) => console.log(error));
  };
  //   handelForget
  //   handelGoogle
  const handelGoogle = () => {
    google()
      .then((result) => {
        const user = result.user;
        toast.success("login success");
      })
      .catch((error) => console.log(error));
  };
  //   handelGoogle
  return (
    <div className="login lg:py-20 md:py-20 sm:py-10 py-10 lg:w-[1320px] lg:mx-auto lg:px-0 md:px-2 sm:px-2 px-2 flex justify-center items-center">
      <form
        onSubmit={handelSubmit}
        className="wrapper_login_input bg-white shadow-md shadow-slate-400 lg:w-[50%] md:w-[70%] sm:w-full w-full p-10 rounded-md cursor-pointer"
      >
        <h2 className=" text-2xl text-black text-center">Log In</h2>
        <div className="form">
          <div>
            <label className="text-xl font-semibold pb-1" htmlFor="email">
              Email
            </label>
            <input
              onChange={inputHandel}
              className="w-full py-3 px-5 rounded-md bg-black text-white text-xl mb-2 border-none outline-none"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="text-xl font-semibold pb-1" htmlFor="name">
              Password
            </label>
            <input
              onChange={inputHandel}
              className="w-full py-3 px-5 rounded-md bg-black text-white text-xl mb-2 border-none outline-none"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <p onClick={handelForget} className="text-base underline text-black">
            Forgot Password ?
          </p>

          <input
            className="w-full py-3 px-5 rounded-md bg-black text-white text-xl mt-5 border-none outline-none"
            type="submit"
            value="Log In"
          />
          <p className="text-base py-2 text-black">
            New to Doctors Portal?
            <Link to="/signup" className=" underline text-xl pl-3">
              Sign Up
            </Link>
          </p>
          <div className=" divide-solid"></div>
          <div>
            <button
              onClick={handelGoogle}
              className="w-full py-3 px-5 rounded-md bg-black text-white text-xl mt-5 border-none outline-none"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
