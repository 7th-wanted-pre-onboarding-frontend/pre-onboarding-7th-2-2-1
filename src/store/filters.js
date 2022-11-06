import { atom } from 'recoil';

import { PROGRESS, SERVICE_LIST } from '../utils/constants/constList';

const initialState = {
  service: SERVICE_LIST[0].name,
  date: {
    start: '2022-02-02',
    end: '2022-04-20'
  },
  dashboardItem: {
    first: {
      title: 'ROAS',
      name: 'roas'
    },
    second: {
      title: '선택',
      name: null
    }
  },
  dashboardDate: '일별',
  adSetup: PROGRESS[0].title
};

const filterState = atom({
  key: 'filterState',
  default: initialState
});

export default filterState;
