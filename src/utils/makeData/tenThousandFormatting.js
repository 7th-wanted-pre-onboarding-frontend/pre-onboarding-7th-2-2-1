export default function tenThousandFormatting(money) {
  const str = String(money);
  const number =
    str.length > 4
      ? Number(str.substring(0, str.length - 4)).toLocaleString('ko-KR')
      : Number(str.toLocaleString('ko-KR'));

  return `${number}만원`;
}
