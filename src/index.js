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
  const finalDate = new Date(eventDate);
  const { interval = 1000, live = false } = options;

  const [time, setTime] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  /**
   * Determine whether a year is leap year.
   * @param {number} year
   * @returns {boolean}
   */
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400;
  };

  /**
   * Extract date details given a date difference
   * @param {Date} initialDate Date to calculate differences
   * @returns {object}
   */
  const calculateDifference = (initialDate) => {
    const initialYear = initialDate.getFullYear();
    const finalYear = finalDate.getFullYear();

    let yearDiff = finalYear - initialYear;
    let monthDiff = finalDate.getMonth() - initialDate.getMonth();
    let dayDiff = finalDate.getDate() - initialDate.getDate();

    let hoursDiff = finalDate.getHours() - initialDate.getHours();
    let minutesDiff = finalDate.getMinutes() - initialDate.getMinutes();
    let secondsDiff = finalDate.getSeconds() - initialDate.getSeconds();

    const febNumberDays = isLeapYear(initialDate.getFullYear()) ? 29 : 28;
    const daysOfMonths = [
      31,
      febNumberDays,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    if (finalDate.getTime() < initialDate.getTime()) {
      return new Error(
        "Cannot make the calculations. The start date is greater than the final date"
      );
    }

    if (secondsDiff < 0) {
      secondsDiff += 60;
      minutesDiff = minutesDiff - 1;
    }

    if (minutesDiff < 0) {
      minutesDiff += 60;
      hoursDiff = hoursDiff - 1;
    }

    if (hoursDiff < 0) {
      hoursDiff += 24;
      dayDiff = dayDiff - 1;
    }

    if (monthDiff < 0) {
      yearDiff = yearDiff - 1;
      monthDiff += 12;
    }

    if (dayDiff < 0) {
      monthDiff = monthDiff - 1;
      dayDiff += daysOfMonths[initialDate.getMonth()];
    }

    return {
      years: yearDiff,
      months: monthDiff,
      days: dayDiff,
      hours: hoursDiff,
      minutes: minutesDiff,
      seconds: secondsDiff,
    };
  };

  useEffect(() => {
    let timer = null;
    const initialDate = options.startDate
      ? new Date(options.startDate)
      : new Date();
    setTime(calculateDifference(initialDate));

    if (live) {
      timer = setInterval(() => {
        setTime(calculateDifference(new Date()));
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
