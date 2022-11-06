export default function formatData(date) {
  if (date === undefined || date === '') {
    return undefined;
  }
  const YEAR = date.getFullYear();
  const MONTH = date.getMonth();
  const DAY = date.getDate();

  return `${YEAR}-${MONTH + 1}-${DAY}`;
}
