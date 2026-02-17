import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [runningTime, setRunningTime] = useState(false);

  useEffect(() => {
    let interval;

    if(runningTime){
        interval = setInterval(()=>{
            setTime(prev => prev + 1);
        },1000);
    }
    return()=>{
        clearInterval(interval);
    };
    
  });

  return  (
    <div>
      <h1>Timer</h1>
      <button>Start</button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  );
}
