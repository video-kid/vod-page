import { useEffect, useState } from 'react';

const useStopWatch = () => {
  const [currentTimerTime, setTimerTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const startTimer = () => setIsRunning(true);
  const stopTimer = () => setIsRunning(false);
  const setTimer = (value: number) => setTimerTime(value);
  const resetTimer = () => {
    setTimerTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId: number | undefined;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimerTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  return {
    currentTimerTime,
    startTimer,
    stopTimer,
    resetTimer,
    setTimer,
  };
};

export default useStopWatch;
