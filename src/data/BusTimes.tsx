export const getNextBusTime = (): Date => {
  const now = new Date();

  const hour = now.getHours();
  let minutes = now.getMinutes();

  let bushour = BUS_TIMES.mondayToFriday[0];

  for (let i = 0; i < BUS_TIMES.mondayToFriday.length; i++) {
    if (
      BUS_TIMES.mondayToFriday[i].hour == hour &&
      BUS_TIMES.mondayToFriday[i].minutes[
        BUS_TIMES.mondayToFriday[i].minutes.length - 1
      ] < minutes
    ) {
      continue;
    }

    if (BUS_TIMES.mondayToFriday[i].hour >= hour) {
      bushour = BUS_TIMES.mondayToFriday[i];
      break;
    }
  }

  if (bushour.hour > hour) {
    minutes = 0;
  }

  let i = bushour.minutes.length;
  while (bushour.minutes[--i] > minutes);

  const busTime = new Date();
  busTime.setHours(bushour.hour);
  busTime.setMinutes(bushour.minutes[i + 1]);
  return busTime;
};

type BusHour = {
  hour: number;
  minutes: number[];
};

type BusTimes = {
  mondayToFriday: BusHour[];
  saturday: BusHour[];
  sundayAndHoliday: BusHour[];
};

const BUS_TIMES_MONDAY_TO_FRIDAY: BusHour[] = [
  {
    hour: 0,
    minutes: [5, 20, 35],
  },
  {
    hour: 5,
    minutes: [9, 25, 40, 56],
  },
  {
    hour: 6,
    minutes: [3, 9, 17, 24, 32, 39, 47, 54],
  },
  {
    hour: 7,
    minutes: [2, 9, 17, 24, 32, 39, 47, 54],
  },
  {
    hour: 8,
    minutes: [2, 9, 17, 24, 32, 39, 47, 54],
  },
  {
    hour: 9,
    minutes: [2, 9, 17, 24, 32, 39, 47, 54],
  },
  {
    hour: 10,
    minutes: [2, 9, 17, 24, 32, 39, 47, 54],
  },
  {
    hour: 11,
    minutes: [2, 9, 16, 24, 31, 39, 46, 54],
  },
  {
    hour: 12,
    minutes: [1, 9, 16, 24, 31, 39, 46, 54],
  },
  {
    hour: 13,
    minutes: [1, 9, 16, 24, 31, 39, 46, 54],
  },
  {
    hour: 14,
    minutes: [1, 9, 16, 24, 31, 39, 46, 54],
  },
  {
    hour: 15,
    minutes: [1, 9, 16, 24, 31, 39, 46, 54],
  },
  {
    hour: 16,
    minutes: [1, 9, 16, 24, 31, 39, 46, 54],
  },
  {
    hour: 17,
    minutes: [1, 9, 16, 24, 31, 39, 46, 54],
  },
  {
    hour: 18,
    minutes: [1, 9, 16, 24, 31, 39, 46, 54],
  },
  {
    hour: 19,
    minutes: [1, 10, 18, 25, 33, 40, 48, 55],
  },
  {
    hour: 20,
    minutes: [3, 10, 18, 25, 33, 40, 48, 54],
  },
  {
    hour: 21,
    minutes: [0, 5, 12, 20, 35, 50],
  },
  {
    hour: 22,
    minutes: [5, 20, 35, 50],
  },
  {
    hour: 23,
    minutes: [5, 20, 35],
  },
];

const BUS_TIMES: BusTimes = {
  mondayToFriday: BUS_TIMES_MONDAY_TO_FRIDAY,
  saturday: BUS_TIMES_MONDAY_TO_FRIDAY,
  sundayAndHoliday: BUS_TIMES_MONDAY_TO_FRIDAY,
};
