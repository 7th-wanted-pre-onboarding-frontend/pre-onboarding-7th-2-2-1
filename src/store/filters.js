import { atom } from 'recoil';
import { parseISO } from 'date-fns';

import { PROGRESS, SERVICE_LIST } from '../utils/constants/constList';

const initialState = {
  service: SERVICE_LIST[0].name,
  date: {
    from: parseISO('2022-02-02'),
    to: parseISO('2022-02-08')
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
  scrollValue: 1,
  adSetup: PROGRESS[0].title
};

const filterState = atom({
  key: 'filterState',
  default: initialState
});

export default filterState;
