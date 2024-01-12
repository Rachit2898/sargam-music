import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import TextField from "../../components/Input/TextField";
import Select from "../../components/Input/Select";
import Radio from "../../components/Input/RadioButton";
import Checkbox from "../../components/Input/CheckBox";
import Button from "../../components/Button";

const months = [
  { name: "January", value: "01" },
  { name: "February", value: "02" },
  { name: "March", value: "03" },
  { name: "Apirl", value: "04" },
  { name: "May", value: "05" },
  { name: "June", value: "06" },
  { name: "July", value: "07" },
  { name: "Augest", value: "08" },
  { name: "September", value: "09" },
  { name: "October", value: "10" },
  { name: "November", value: "11" },
  { name: "December", value: "12" },
];

const genders = ["male", "female", "non-binary"];

function Signup() {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    month: "",
    year: "",
    date: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [isFetching, setIsFetching] = useState(false);

  const history = useNavigate();

  const handleInputState = (name, value) => {
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleErrorState = (name, value) => {
    value === ""
      ? delete errors[name]
      : setErrors(() => ({ ...errors, [name]: value }));
  };

  const schema = {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        setIsFetching(true);
        // const url = process.env.REACT_APP_API_URL + "/users";
        // await axios.post(url, data);
        // setIsFetching(false);

        history("/login");
      } catch (error) {
        setIsFetching(false);
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status < 500
        ) {
          //   toast.error(error.response.data);
        } else {
          console.log(error);
          //   toast.error("Something went wrong!");
        }
      }
    } else {
      console.log("please fill out properly");
    }
  };
  return (
    <div>
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
        <main className="flex flex-col mt-8   p-16 lg:w-[50%]  bg-black items-center ">
          <div className="lg:w-[75%]">
            <h1 className="heading font-bold text-5xl text-center pb-12">
              Sign up for free to start listening.
            </h1>
            <Button
              class="bg-[#1877f2] text-xl rounded-full font-bold text-white p-5 px-10 flex items-center  mx-auto"
              label="Sign up with Facebook"
            />

            <div class="relative text-light-white text-center mt-8 mb-0 mx-auto w-40">
              <div class="border-t border-light-white inline-block w-42% relative top-2"></div>
              <span class="inline-block mx-2 font-medium text-lg">or</span>
              <div class="border-t border-light-white inline-block w-42% relative top-2"></div>
            </div>
            <form onSubmit={handleSubmit} class="flex flex-col items-center">
              <h2 class="text-xl leading-6 text-center mt-0">
                Sign up with your email address
              </h2>
              <div className=" w-full my-2">
                <TextField
                  label="What's your email?"
                  placeholder="Enter your email"
                  name="email"
                  handleInputState={handleInputState}
                  schema={schema.email}
                  handleErrorState={handleErrorState}
                  value={data.email}
                  error={errors.email}
                />
              </div>
              <div className=" w-full my-2">
                <TextField
                  label="Create a password"
                  placeholder="Create a password"
                  name="password"
                  handleInputState={handleInputState}
                  schema={schema.password}
                  handleErrorState={handleErrorState}
                  value={data.password}
                  error={errors.password}
                  type="password"
                />
              </div>
              <div className=" w-full my-2">
                <TextField
                  label="What should we call you?"
                  placeholder="Enter a profile name"
                  name="name"
                  handleInputState={handleInputState}
                  schema={schema.name}
                  handleErrorState={handleErrorState}
                  value={data.name}
                  error={errors.name}
                />
              </div>
              <div className=" w-full my-2">
                <p>What's your date of birth?</p>
                <div class="flex items-center justify-between w-full">
                  <div class="w-40">
                    <Select
                      name="month"
                      handleInputState={handleInputState}
                      label="Month"
                      placeholder="Months"
                      options={months}
                      value={data.month}
                    />
                  </div>
                  <div class="date w-28">
                    <TextField
                      label="Date"
                      placeholder="DD"
                      name="date"
                      value={data.date}
                      handleInputState={handleInputState}
                    />
                  </div>
                  <div class="year w-30">
                    <TextField
                      label="Year"
                      placeholder="YYYY"
                      name="year"
                      value={data.year}
                      handleInputState={handleInputState}
                    />
                  </div>
                </div>
              </div>
              <div className=" w-full my-2">
                <Radio
                  label="What's your gender?"
                  name="gender"
                  handleInputState={handleInputState}
                  options={genders}
                />
              </div>
              <div className=" w-full my-2">
                <Checkbox label="Share my registration data with Spotify's content providers for marketing purposes." />
              </div>
              <div className=" w-full my-2 flex flex-col items-center">
                <p class="terms_condition text-sm leading-6 text-center mb-4">
                  By clicking on sign-up, you agree to Spotify's{" "}
                  <a href="/#">Terms and Conditions of Use.</a>
                </p>
                <p class="terms_condition text-sm leading-6 text-center mb-4">
                  To learn more about how Spotify collects, uses, shares and
                  protects your personal data, please see{" "}
                  <a href="/#">Spotify's Privacy Policy.</a>
                </p>
              </div>
              <div class="bg-[#1ed760] flex items-center justify-center px-10 py-3 font-bold rounded-full  mb-12">
                <Button label="Sign Up" type="submit" isFetching={isFetching} />
              </div>
              <p class="terms_condition text-lg">
                Have an account? <Link to="/login"> Log in.</Link>
              </p>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Signup;
