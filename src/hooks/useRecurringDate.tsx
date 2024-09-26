import { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

export const dateFormatOptions: any = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const getDayDifference = (date1: Date, date2: Date) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

const useRecurringDate = (initDate: Date, intervalInDays: number) => {
  const [nextDate, setNextDate] = useState(initDate);
  const { currentDatetimeHourlyState } = useContext(AppContext);

  useEffect(() => {
    updateNewDate(currentDatetimeHourlyState);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDatetimeHourlyState]);

  useEffect(() => {
    updateNewDate(new Date());
  }, []);

  const updateNewDate = (currentDate: Date) => {
    let newDate = new Date(nextDate);
    while (newDate < currentDate) {
      newDate = new Date(newDate);
      newDate.setDate(newDate.getDate() + intervalInDays);
    }
    setNextDate(newDate);
  };

  return nextDate;
};

export default useRecurringDate;
