import { atom } from 'recoil';
import ADLIST_TYPE from '../constants/ADLIST_TYPE';

const adListTypeState = atom({
  key: 'adListTypeState',
  default: ADLIST_TYPE.ALL
});

export default adListTypeState;
