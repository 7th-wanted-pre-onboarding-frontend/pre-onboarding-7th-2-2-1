export const getDateDiff = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const diffDate = date1.getTime() - date2.getTime();

  return Math.abs(diffDate / (1000 * 60 * 60 * 24)) || 1;
};

function leftPad(value) {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
}

export const toStringByFormatting = (source, delimiter = '-') => {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(delimiter);
};

export const getFormatDate = (date) => {
  const month = 1 + date.getMonth();
  const day = date.getDate();
  return `${month}월 ${day}일 `;
};

export const calculatePrevDate = (start) => {
  const startDate = new Date(start);
  const endDate = new Date(start);

  const prevStart = toStringByFormatting(
    new Date(startDate.setDate(startDate.getDate() - 3))
  );
  const prevEnd = toStringByFormatting(
    new Date(endDate.setDate(endDate.getDate() - 1))
  );

  return { prevStart, prevEnd, prevDiffDate: 3 };
};

export const getWeekNumber = (dateFrom = new Date()) => {
  const currentDate = dateFrom.getDate();
  const month = dateFrom.getMonth() + 1;
  const startOfMonth = new Date(dateFrom.setDate(1));
  const weekDay = startOfMonth.getDay();
  return `${month}월 ${Math.floor((weekDay - 1 + currentDate) / 7) + 1}주`;
};
