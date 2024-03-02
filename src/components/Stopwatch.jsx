import { useState, useRef } from "react";

const Stopwatch = () => {
  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [resetTime, setResetTime] = useState(false);
  const intervalRef = useRef(null);
  const pausedTimeRef = useRef(null);

  const startTimer = () => {
    const elapsedTime = pausedTimeRef.current
      ? Date.now() - pausedTimeRef.current
      : 0;
    setStartTime((startTime) =>
      startTime ? startTime + elapsedTime : Date.now()
    );
    setCurrentTime(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentTime(Date.now());
    }, 10);
  };

  const pauseTimer = () => {
    clearInterval(intervalRef.current);
    pausedTimeRef.current = Date.now();
  };

  let secondsPassed = 0;
  if (currentTime != null && startTime != null) {
    secondsPassed = (currentTime - startTime) / 1000;
  }
  const hours = Math.floor(secondsPassed / 3600);
  const minutes = Math.floor((secondsPassed % 3600) / 60);
  const seconds = Math.floor((secondsPassed % 60));

  const resetTimer = () => {
    setResetTime(true);
    setTimeout(() => {
      setResetTime(false);
      setCurrentTime(null);
      setStartTime(null);
    }, 10);
  };

  return (
    <div className="container mx-auto text-center">
      <h1 className="sm:text-3xl text-2xl font-medium mb-4 text-gray-900">
        Time Elapsed <p>{resetTime ? `0:0:00` : 
          `${hours < 10 ?  `0${hours}` : hours}
           : ${minutes < 10 ? `0${minutes}` : minutes}
           : ${seconds < 10 ? `0${seconds}` : seconds}
          `
        }</p>
      </h1>
      <div className="flex justify-center space-x-4">
        <button
          className="text-white bg-green-600 border-0 py-1 px-2 md:py-2 md:px-6 focus:outline-none hover:bg-green-500 rounded text-base md:text-lg"
          onClick={startTimer}
        >
          {" "}
          Start{" "}
        </button>
        <button
          className="text-white bg-red-600 border-0 py-1 px-2 md:py-2 md:px-6 focus:outline-none hover:bg-red-500 rounded text-base md:text-lg"
          onClick={pauseTimer}
        >
          Stop
        </button>
        <button
          className="text-white bg-indigo-500 border-0 py-1 px-2 md:py-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded text-base md:text-lg mx-2 md:mx-4"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      <div className="py-7"></div>
    </div>
  );
};

export default Stopwatch;
