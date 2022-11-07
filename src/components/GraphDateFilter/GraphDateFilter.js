import React from 'react';
import { useRecoilValue } from 'recoil';
import filterState from '../../store/filters';
import useDropdown from '../../utils/hooks/useDropdown';

import Dropdown from '../Dropdown/Dropdown';

import { DATE_LIST } from '../../utils/constants/constList';
import { Select } from '../Select/Select.style';

export default function GraphDateFilter() {
  const { dashboardDate } = useRecoilValue(filterState);
  const { selectedItem, handleEventItem } = useDropdown(dashboardDate);

  return (
    <Dropdown size='mmd'>
      <Select onChange={handleEventItem} value={selectedItem}>
        {DATE_LIST.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </Dropdown>
  );
}
