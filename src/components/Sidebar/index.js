import React from "react";
import { HiHome } from "react-icons/hi";
import { HiSearch } from "react-icons/hi";
import { BiLibrary } from "react-icons/bi";

function Sidebar() {
  return (
    <>
      <div className="p-3 bg-[#1a1a1a]">
        <div className=" h-[20%]">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="Giphy"
            class="rounded-xl w-22 h-10"
          />
        </div>
        <div class="flex flex-row items-center py-5">
          <HiHome class="h-10 w-10" />
          <h1 class="font-500 text-xl px-5">Home</h1>
        </div>

        <div class="flex flex-row items-center ">
          <HiSearch class="h-10 w-10" />
          <h1 class="font-500 text-xl px-5">Search</h1>
        </div>
      </div>
      <div className="p-3 bg-[#1a1a1a] my-3 ">
        <div class="flex flex-row items-center py-5">
          <BiLibrary class="h-10 w-10" />
          <h1 class="font-500 text-xl px-3">Recent Played</h1>
        </div>
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 border-white rounded justify-items-center max-h-screen overflow-y-auto">
          <div class="w-full md:w-50 h-70 rounded-xl  hover:bg-[#2a2a2a] bg-[#212121] p-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              class="rounded-xl w-35 h-50"
            />
            <div class="pt-5">
              <h1 class="font-bold text-xl">Luis Fonsi</h1>
              <h1 class="font-300 my-2 text-[#a4a4a4] text-xl">
                today's top 10 latin latina music
              </h1>
            </div>
          </div>

          <div class="w-full md:w-50 h-70 rounded-xl  hover:bg-[#2a2a2a] bg-[#212121] p-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              class="rounded-xl w-35 h-50"
            />
            <div class="pt-5">
              <h1 class="font-bold text-xl">Luis Fonsi</h1>
              <h1 class="font-300 my-2 text-[#a4a4a4] text-xl">
                today's top 10 latin latina music
              </h1>
            </div>
          </div>

          <div class="w-full md:w-50 h-70 rounded-xl  hover:bg-[#2a2a2a] bg-[#212121] p-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              class="rounded-xl w-35 h-50"
            />
            <div class="pt-5">
              <h1 class="font-bold text-xl">Luis Fonsi</h1>
              <h1 class="font-300 my-2 text-[#a4a4a4] text-xl">
                today's top 10 latin latina music
              </h1>
            </div>
          </div>

          <div class="w-full md:w-50 h-70 rounded-xl  hover:bg-[#2a2a2a] bg-[#212121] p-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              class="rounded-xl w-35 h-50"
            />
            <div class="pt-5">
              <h1 class="font-bold text-xl">Luis Fonsi</h1>
              <h1 class="font-300 my-2 text-[#a4a4a4] text-xl">
                today's top 10 latin latina music
              </h1>
            </div>
          </div>
          <div class="w-full md:w-50 h-70 rounded-xl  hover:bg-[#2a2a2a] bg-[#212121] p-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              class="rounded-xl w-35 h-50"
            />
            <div class="pt-5">
              <h1 class="font-bold text-xl">Luis Fonsi</h1>
              <h1 class="font-300 my-2 text-[#a4a4a4] text-xl">
                today's top 10 latin latina music
              </h1>
            </div>
          </div>
          <div class="w-full md:w-50 h-70 rounded-xl  hover:bg-[#2a2a2a] bg-[#212121] p-4">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNmQ4YzYwOWMtODBkOC00YjljLTkzMGYtYjY2OGU1N2NiODE5XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"
              alt="Giphy"
              class="rounded-xl w-35 h-50"
            />
            <div class="pt-5">
              <h1 class="font-bold text-xl">Luis Fonsi</h1>
              <h1 class="font-300 my-2 text-[#a4a4a4] text-xl">
                today's top 10 latin latina music
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
