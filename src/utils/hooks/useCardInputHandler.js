import { useState } from 'react';

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
    setInputValues((prev) => ({ ...prev, [name]: value }));
  };
  return [inputValues, inputValuesHandler];
}
