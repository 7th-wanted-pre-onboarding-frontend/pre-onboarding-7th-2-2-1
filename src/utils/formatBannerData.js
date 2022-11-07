export default function formatBannerData(type, data) {
  switch (type) {
    case 'ROAS':
      return `${data}%`;
    case '광고비':
    case '매출':
      return `${(data / 10000).toFixed(1)}만 원`;
    case '노출 수':
      return `${(data / 10000).toFixed(1)}만 회`;
    case '클릭 수':
    case '전환 수':
      return `${data} 회`;
    default:
      return data;
  }
}
