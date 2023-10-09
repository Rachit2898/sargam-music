import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Song from "../Songs";
function Home() {
  return (
    <div className="flex flex-row gap-2  justify-evenly mx-3 text-white">
      <div className="my-2 w-[30%] rounded">
        <Sidebar />
      </div>
      <div className="bg-[#1a1a1a] my-2 w-[70%] ">
        <div className="bg-[#121212] py-3 rounded items-center flex flex-row-reverse">
          <Navbar />
        </div>
        <div className="bg-[#1a1a1a] my-2 rounded items-center px-3 ">
          <div class="pb-5">
            <h1 class="font-bold text-4xl">Shargam Playlists</h1>
          </div>
          <Song />
        </div>
      </div>
    </div>
  );
}

export default Home;
