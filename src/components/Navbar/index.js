import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  const navigateSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <div className="md:hidden items-center text-3xl ml-auto  mx-3">
        {toggle ? (
          <div className="flex flex-row-reverse">
            <AiOutlineMenu onClick={() => setToggle(!toggle)} />
          </div>
        ) : (
          <div className="flex flex-row-reverse">
            <AiOutlineClose onClick={() => setToggle(!toggle)} />
          </div>
        )}
      </div>

      <ul
        className={`duration-500 md:hidden w-full h-screen text-white fixed bg-black  ${
          !toggle ? "left-0" : "left-[-100%]"
        }`}
      >
        <li className="p-5">Home</li>
        <li className="p-5">Home</li>
        <li className="p-5">Home</li>
        <li className="p-5">Home</li>
        <li className="p-5">Home</li>
      </ul>

      <div className="hidden rounded items-center flex-row-reverse text-white gap-3  md:flex mx-3 font-[CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,sans-serif]">
        <button
          onClick={() => {
            handleClick();
          }}
          className="bg-white p-3 px-8 rounded-full font-bold"
        >
          <h1 className="text-xl text-black">Log in</h1>
        </button>
        <button
          onClick={() => {
            navigateSignup();
          }}
          className="p-3"
        >
          <h1 className="text-2xl text-slate-300">Sign up</h1>
        </button>
      </div>
    </>
  );
}

export default Navbar;
