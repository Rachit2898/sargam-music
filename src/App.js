import React from "react";
import Home from "./screen/Home";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Music from "./screen/MusicPlayer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-full h-full bg-[#000000]">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
