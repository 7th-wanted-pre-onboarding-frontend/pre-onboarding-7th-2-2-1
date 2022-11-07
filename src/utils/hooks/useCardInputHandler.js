import { useState } from 'react';
import formatDate from '../makeData/formatDate';

export default function useCardInputHandler() {
  const [inputValues, setInputValues] = useState({
    status: '',
    budget: '',
    roas: '',
    cost: '',
    convValue: '',
    startDate: ''
  });
  const inputValuesHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'status') {
      if (value === '진행중') {
        setInputValues((prev) => ({ ...prev, [name]: 'active' }));
      } else if (value === '중단됨') {
        setInputValues((prev) => ({ ...prev, [name]: 'ended' }));
      }
    } else if (name === 'startDate') {
      setInputValues((prev) => ({ ...prev, [name]: formatDate(value) }));
    } else {
      setInputValues((prev) => ({ ...prev, [name]: value }));
    }
  };
  return [inputValues, inputValuesHandler];
}
