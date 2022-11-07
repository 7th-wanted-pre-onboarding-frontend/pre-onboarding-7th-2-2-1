import React from 'react';

import { SERVICE_LIST } from '../../utils/constants/constList';
import { Select } from '../Select/Select.style';

export default function ServiceList(props) {
  const { handleEventItem, selectedItem } = props;

  return (
    <Select onChange={() => handleEventItem} value={selectedItem}>
      {SERVICE_LIST.map(({ id, name }) => (
        <option key={id} value={name}>
          {name}
        </option>
      ))}
      <option size='lg'>+ 서비스 추가하기</option>
    </Select>
  );
}
