import { useEffect, useState } from 'react';

export const useTimer = (initialTime, onTimeOut) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeOut();
      return;
    }
    const interval = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft, onTimeOut]);

  return timeLeft;
};
