const TREND_API = {
  get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetch('http://localhost:3000/data/trendData.json'));
      }, 1000);
    });
  }
};

export default TREND_API;
