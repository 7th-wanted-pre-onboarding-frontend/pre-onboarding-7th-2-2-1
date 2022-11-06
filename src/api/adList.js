const ADLIST_API = {
  get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(fetch('http://localhost:3000/data/adListData.json'));
      }, 1000);
    });
  }
};

export default ADLIST_API;
