import { useState, useEffect } from "react";

/**
 * Calculate difference between two dates.
 * @param {Number} eventDate - Timestamp of final date
 * @param {Object} options - List of possible options. Optional
 * @param {Number} options.startDate - Timestamp of start date
 * @param {Number} options.interval - Refresh interval. Use only if live is true.
 * @param {boolean} options.live - Update time left. If it's true, current date will be used.
 * @returns {{days: Number, hours: Number, minutes: Number, seconds: Number}} Time difference
 */
export const useTimeDiff = (eventDate, options = {}) => {
  const { startDate = Date.now(), interval = 1000, live = false } = options;

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /**
   * Extract date details given a date difference
   */
  const calculateDifference = (difference) => {
    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  useEffect(() => {
    let timer = null;
    let differenceTime = eventDate - startDate;
    setTime(calculateDifference(differenceTime));

    if (live) {
      timer = setInterval(() => {
        differenceTime = eventDate - Date.now();
        setTime(calculateDifference(differenceTime));
      }, interval);
    }

    if (!eventDate) {
      setTime(new Error("No date provided!"));
    }

    return () => clearInterval(timer);
  }, [interval]);

  return time;
};

export default useTimeDiff;
