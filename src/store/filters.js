import { atom } from 'recoil';

import {
  BANNER_LIST,
  DATE_LIST,
  PROGRESS,
  SERVICE_LIST
} from '../utils/constants/constList';

const initialState = {
  service: SERVICE_LIST[0].name,
  date: {
    start: '2022-02-11',
    end: '2022-02-20'
  },
  dashboardItem: {
    first: BANNER_LIST[0].title,
    second: '선택'
  },
  dashboardDate: DATE_LIST[0].name,
  adSetup: PROGRESS[0].title
};

const filterState = atom({
  key: 'filterState',
  default: initialState
});

export default filterState;
