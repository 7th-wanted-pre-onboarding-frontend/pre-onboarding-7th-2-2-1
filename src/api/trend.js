import trendData from './data/trendData.json';

const TREND_API = {
  get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(trendData);
      }, 1000);
    });
  }
};

export default TREND_API;
