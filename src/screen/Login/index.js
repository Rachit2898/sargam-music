import { useState } from "react";
import { Link } from "react-router-dom";

import TextField from "../../components/Input/TextField";
import Checkbox from "../../components/Input/CheckBox";
import Button from "../../components/Button";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";

function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const isFetching = "";
  const handleInputState = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const handleErrorState = (name, value) => {
    value === ""
      ? delete errors[name]
      : setErrors({ ...errors, [name]: value });
  };

  const schema = {
    email: {
      type: String,
      validate: {
        validator: (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(value);
        },
        message: "Invalid email format",
      },
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
    } else {
      console.log("please fill out properly");
    }
  };

  console.log(data.email);
  return (
    <>
      <div className=" bg-[#1a1a1a] w-full flex flex-col items-center pb-20 text-white">
        <div className=" bg-black w-full h-32 flex items-center justify-center ">
          <Link to="/">
            <img
              className="w-36 h-20"
              src={
                "https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
              }
              alt="logo"
            />
          </Link>
        </div>
        <main className="flex flex-col mt-8  p-16 lg:w-[50%]  bg-black items-center ">
          <div className="lg:w-[55%]">
            <h1 className="heading font-bold text-5xl text-center pb-12">
              Log in to Spotify.
            </h1>
            <button className="contained_btn w-full h-20 rounded-full border-2 border-gray-300 flex items-center justify-center text-1.4rem font-semibold tracking-wider uppercase text-white cursor-pointer my-2">
              <AiFillFacebook /> continue with facebook
            </button>
            <button className="contained_btn w-full h-20 rounded-full border-2 border-gray-300 flex items-center justify-center text-1.4rem font-semibold tracking-wider uppercase text-white cursor-pointer my-2">
              <AiFillApple className="text-3xl justify-center" /> continue with
              apple
            </button>
            <button className="outline_btn w-full h-20 rounded-full border-2 border-gray-300 outline-none flex items-center justify-center text-1.4rem font-semibold tracking-wider uppercase text-light-gray cursor-pointer my-2 transition-all duration-500 ease-in-out">
              <AiFillGoogleCircle /> continue with google
            </button>
            <button className="outline_btn w-full h-20 rounded-full border-2 border-gray-300 outline-none flex items-center justify-center text-1.4rem font-semibold tracking-wider uppercase text-light-gray cursor-pointer my-2 transition-all duration-500 ease-in-out hover:bg-light-gray hover:border-light-gray hover:text-white">
              Continue with phone number
            </button>
            <p className="or_container table text-1.6rem leading-2.4rem tracking-0.2rem text-black relative text-center w-40rem my-4">
              <span className="before absolute top-2.4em left-0 w-42% border-t-2 border-light-white"></span>
              or
              <span className="after absolute top-2.4em right-0 w-42% border-t-2 border-light-white"></span>
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className=" w-full my-2">
                <TextField
                  label="Enter your email"
                  placeholder="Enter your email"
                  name="email"
                  handleInputState={handleInputState}
                  schema={schema.email}
                  handleErrorState={handleErrorState}
                  value={data.email}
                  error={errors.email}
                  required={true}
                />
              </div>
              <div className="w-full my-2">
                <TextField
                  label="Password"
                  placeholder="Password"
                  name="password"
                  handleInputState={handleInputState}
                  schema={schema.password}
                  handleErrorState={handleErrorState}
                  value={data.password}
                  error={errors.password}
                  type="password"
                  required={true}
                />
              </div>
              <p className=" text-dark-green underline text-1.6rem font-normal my-4 cursor-pointer">
                Forgot your password?
              </p>
              <div className="flex w-full items-center justify-between py-8 border-b-0.1rem border-light-gray">
                <Checkbox label="Remember me" />
                <Button
                  type="submit"
                  label="LOG IN"
                  isFetching={isFetching}
                  style={{
                    color: "white",
                    background: "#15883e",
                    width: "15rem",
                    height: "3rem",
                    borderRadius: 40,
                  }}
                />
              </div>
            </form>
            <h1 className=" text-center text-1.8rem mt-16 mb-6">
              Don't have an account?
            </h1>
            <Link to="/signup">
              <button className=" w-full h-20 rounded-full border-2 border-gray-300 outline-none text-1.4rem font-semibold tracking-wider uppercase text-light-gray cursor-pointer my-2 transition-all duration-500 ease-in-out hover:bg-light-gray hover:border-light-gray hover:text-white">
                sign up for spotify
              </button>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Login;
