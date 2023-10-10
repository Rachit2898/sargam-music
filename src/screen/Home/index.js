import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Song from "../Songs";
function Home() {
  return (
    <div className="flex flex-row gap-2  justify-evenly mx-3 text-white">
      <div className="my-2 hidden  md:flex flex-col w-[30%] rounded">
        <Sidebar />
      </div>
      <div className="bg-[#1a1a1a] my-2  w-full bg-gradient-to-b  from-stone-900 to-black ">
        <div className=" bg-[#121212]  w-full    py-3 ">
          <Navbar />
        </div>
        <div className=" mt-2 rounded items-center px-3 ">
          <div className="pb-5">
            <h1 className="font-bold text-4xl">Sargam Playlists</h1>
          </div>
          <Song />
        </div>
        <div className="p-4 lg:mt-60">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
