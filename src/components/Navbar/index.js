import React from "react";

function Navbar() {
  return (
    <div className="text-white gap-3 flex mx-3 font-[CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,sans-serif]">
      <div className="p-3">
        <h1 className="text-2xl text-slate-300">Sign up</h1>
      </div>
      <div className="bg-white p-3 px-8 rounded-full font-bold">
        <h1 className="text-xl text-black">Log in</h1>
      </div>
    </div>
  );
}

export default Navbar;
