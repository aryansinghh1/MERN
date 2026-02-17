import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [runningTime, setRunningTime] = useState(false);

  useEffect(() => {
    let interval;

    if (runningTime) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [runningTime]); // ✅ add dependency so effect runs when runningTime changes

  const handleStart = () => {
    setRunningTime(true);
  };

  const handlePause = () => {
    setRunningTime(false);
  };

  const handleReset = () => {
    setRunningTime(false);
    setTime(0);
  };

  return (
    <div>
      <h1>Timer</h1>
      <h2>{time} seconds</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}