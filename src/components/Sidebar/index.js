import React, { useState } from "react";
import { HiHome } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { BiLibrary } from "react-icons/bi";

function Sidebar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="">
      <div className=" p-3 bg-gradient-to-b from-black to-stone-900">
        <div className=" h-[20%]">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="Giphy"
            className="rounded-xl w-22 h-10"
          />
        </div>
        <div className="flex flex-row items-center py-5">
          <HiHome className="h-10 w-10" />
          <h1 className="font-500 text-xl px-5">Home</h1>
        </div>

        <div className="flex flex-row items-center">
          <HiSearch
            onClick={() => {
              setToggle(!toggle);
            }}
            className="h-10 w-10 cursor-pointer"
          />
          {toggle ? (
            <input
              type="text"
              className="font-500 mx-5 text-white bg-black px-5 py-2 border rounded-lg border-gray-400 placeholder-gray-400"
              placeholder="Type your search query"
            />
          ) : (
            <h1 className="font-500 text-xl px-5">Search</h1>
          )}
        </div>
      </div>
      <div className="p-3 bg-gradient-to-b from-stone-900 to-black my-3 ">
        <div className="flex flex-row items-center py-5">
          <BiLibrary className="h-10 w-10" />
          <h1 className="font-500 text-xl px-3">Recent Played</h1>
        </div>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2 border-white rounded justify-items-center max-h-screen overflow-y-auto">
          <div className="w-full md:w-52 h-64 rounded-xl  hover:bg-[#2a2a2a] bg-gradient-to-b from-black to-stone-900 p-4 items-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              className="rounded-xl"
            />
            <div className="pt-5">
              <h1 className="font-bold text-xl">Luis Fonsi</h1>
            </div>
          </div>
          <div className="w-full md:w-52 h-64 rounded-xl  hover:bg-[#2a2a2a] bg-gradient-to-b from-black to-stone-900 p-4 items-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              className="rounded-xl"
            />
            <div className="pt-5">
              <h1 className="font-bold text-xl">Luis Fonsi</h1>
            </div>
          </div>
          <div className="w-full md:w-52 h-64 rounded-xl  hover:bg-[#2a2a2a] bg-gradient-to-b from-black to-stone-900 p-4 items-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              className="rounded-xl"
            />
            <div className="pt-5">
              <h1 className="font-bold text-xl">Luis Fonsi</h1>
            </div>
          </div>
          <div className="w-full md:w-52 h-64 rounded-xl  hover:bg-[#2a2a2a] bg-gradient-to-b from-black to-stone-900 p-4 items-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              className="rounded-xl"
            />
            <div className="pt-5">
              <h1 className="font-bold text-xl">Luis Fonsi</h1>
            </div>
          </div>

          <div className="w-full md:w-52 h-64 rounded-xl  hover:bg-[#2a2a2a] bg-gradient-to-b from-black to-stone-900 p-4 items-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              className="rounded-xl"
            />
            <div className="pt-5">
              <h1 className="font-bold text-xl">Luis Fonsi</h1>
            </div>
          </div>
          <div className="w-full md:w-52 h-64 rounded-xl  hover:bg-[#2a2a2a] bg-gradient-to-b from-black to-stone-900 p-4 items-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              className="rounded-xl"
            />
            <div className="pt-5">
              <h1 className="font-bold text-xl">Luis Fonsi</h1>
            </div>
          </div>
          <div className="w-full md:w-52 h-64 rounded-xl  hover:bg-[#2a2a2a] bg-gradient-to-b from-black to-stone-900 p-4 items-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              className="rounded-xl"
            />
            <div className="pt-5">
              <h1 className="font-bold text-xl">Luis Fonsi</h1>
            </div>
          </div>
          <div className="w-full md:w-52 h-64 rounded-xl  hover:bg-[#2a2a2a] bg-gradient-to-b from-black to-stone-900 p-4 items-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              className="rounded-xl"
            />
            <div className="pt-5">
              <h1 className="font-bold text-xl">Luis Fonsi</h1>
            </div>
          </div>
          <div className="w-full md:w-52 h-64 rounded-xl  hover:bg-[#2a2a2a] bg-gradient-to-b from-black to-stone-900 p-4 items-center">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              className="rounded-xl"
            />
            <div className="pt-5">
              <h1 className="font-bold text-xl">Luis Fonsi</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
