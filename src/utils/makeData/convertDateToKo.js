export default function convertDateToKo(strDate) {
  const dateArry = new Date(strDate)
    .toLocaleDateString()
    .replace(/\./g, '')
    .split(' ')
    .map((v, i) => (i > 0 && v.length < 2 ? `0${v}` : v));

  const [year, month, date] = dateArry;

  return `${year}년 ${month}월 ${date}일`;
}
