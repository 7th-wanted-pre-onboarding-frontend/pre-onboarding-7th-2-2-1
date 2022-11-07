import adListData from './data/adListData.json';

const ADLIST_API = {
  get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(adListData);
      }, 1000);
    });
  }
};

export default ADLIST_API;
