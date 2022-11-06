import { atom } from 'recoil';
import ADLIST_TYPE from '../utils/constants/adlistType';

const adListTypeState = atom({
  key: 'adListTypeState',
  default: ADLIST_TYPE.ALL
});

export default adListTypeState;
