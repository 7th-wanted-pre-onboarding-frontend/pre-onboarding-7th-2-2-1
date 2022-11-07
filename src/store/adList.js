import { atom } from 'recoil';

export const adListState = atom({
  key: 'adListState',
  default: []
});

export const isLoading = atom({
  key: 'isLoading',
  default: false
});
