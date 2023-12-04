import React, { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remaingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <progress value={remaingTime} max={timer} />;
}
