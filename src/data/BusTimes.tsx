import { BUS_TIMES_WEEKDAYS } from "./BusTimesWeekdays";

export const getNextBusTime = (): Date => {
  const now = new Date();

  const currentBusTimes = BUS_TIMES.mondayToFriday;

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
  saturday: BUS_TIMES_WEEKDAYS,
  sundayAndHoliday: BUS_TIMES_WEEKDAYS,
};
