import { BUS_TIMES_SATURDAYS } from "./BusTimesSaturdays";
import { BUS_TIMES_SUNDAYS } from "./BusTimesSundays";
import { BUS_TIMES_WEEKDAYS } from "./BusTimesWeekdays";

export const getNextBusTime = (): Date => {
  const now = new Date();

  const currentBusTimes = getBusTimesOfDate(now);

  let bushour = currentBusTimes[0];
  const timeWithCurrentHour = new Date();
  for (let index = 0; index < currentBusTimes.length; index++) {
    const currentBusHour = currentBusTimes[index];

    timeWithCurrentHour.setHours(currentBusHour.hour);
    timeWithCurrentHour.setMinutes(currentBusHour.minute);

    if (now < timeWithCurrentHour) {
      bushour = currentBusHour;
      break;
    }
  }

  const busTime = new Date();
  busTime.setHours(bushour.hour);
  busTime.setMinutes(bushour.minute);
  return busTime;
};

const getBusTimesOfDate = (date: Date) => {
  if (date.getDay() === 6) {
    return BUS_TIMES.sundayAndHoliday;
  }

  if (date.getDay() === 5) {
    return BUS_TIMES.saturday;
  }

  return BUS_TIMES.mondayToFriday;
};

export type BusHour = {
  hour: number;
  minute: number;
};

type BusTimes = {
  mondayToFriday: BusHour[];
  saturday: BusHour[];
  sundayAndHoliday: BusHour[];
};

const BUS_TIMES: BusTimes = {
  mondayToFriday: BUS_TIMES_WEEKDAYS,
  saturday: BUS_TIMES_SATURDAYS,
  sundayAndHoliday: BUS_TIMES_SUNDAYS,
};
