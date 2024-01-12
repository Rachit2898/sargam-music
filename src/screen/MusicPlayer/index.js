import { useEffect, useState } from "react";
import useSound from "use-sound";
import { useLocation } from "react-router-dom";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Player() {
  const location = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(
    "https://res.cloudinary.com/dqc1x6xjp/video/upload/v1696664782/Songs/ggqnn7w02d18u0sl0zic.mp3"
  );

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    console.log(interval);
    return () => {
      clearInterval(interval);
      pause();
    };
  }, [sound, location]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="h-screen  bg-gradient-to-b  from-stone-900 to-black pt-16 text-white">
      <div class="component bg-stone-900 w-4/5 max-w-xl mx-auto p-6 border border-black rounded-lg shadow-md ">
        <div className="flex items-center justify-center">
          <h2 className="p-5 text-2xl font-bold">Playing Now</h2>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            class="rounded-full h-1/2 w-1/2"
            src="https://picsum.photos/200/200"
          />
          <div>
            <h1 className="font-bold text-2xl pt-5">Rubaiyyan</h1>
            <p class=" text-stone-100 text-center font-bold text-2xl ">Qala</p>
          </div>
        </div>
        <div className="w-full">
          <div class="flex justify-between text-sm text-stone-100">
            <p>
              {currTime.min}:{currTime.sec}
            </p>
            <p>
              {time.min}:{time.sec}
            </p>
          </div>
          <input
            type="range"
            min="0"
            max={duration / 1000}
            default="0"
            value={seconds}
            className="w-full bg-green-500"
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
        </div>
        <div class="flex justify-between">
          <button>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <BiSkipPrevious />
            </IconContext.Provider>
          </button>
          {!isPlaying ? (
            <button onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPlayCircle />
              </IconContext.Provider>
            </button>
          ) : (
            <button onClick={playingButton}>
              <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
                <AiFillPauseCircle />
              </IconContext.Provider>
            </button>
          )}
          <button>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <BiSkipNext />
            </IconContext.Provider>
          </button>
        </div>
      </div>
    </div>
  );
}
