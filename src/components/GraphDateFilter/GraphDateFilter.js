import React, { useEffect } from 'react';
import useDropdown from '../../utils/hooks/useDropdown';

import Dropdown from '../Dropdown/Dropdown';
import Typography from '../Typography/Typography';
import DateList from '../DateList/DateList';

import { DATE_LIST } from '../../utils/constants/constList';

import { StyledDropdownButton } from '../SidebarContainer/SidebarContainer.style';
import { StyledItemWrapper } from './GraphDateFilter.style';

export default function GraphDateFilter() {
  const { selectedItem, handleSelectBoxToggle, handleSelectItem, isToggled } =
    useDropdown('주간');

  useEffect(() => {
    console.log('selectedItem:', selectedItem);
  }, [selectedItem]);

  return (
    <Dropdown size='mmd'>
      <StyledItemWrapper>
        <Typography size='lg' variant='default'>
          {selectedItem}
        </Typography>
      </StyledItemWrapper>
      <Typography size='lg' variant='default'>
        <StyledDropdownButton onClick={handleSelectBoxToggle} />
      </Typography>
      {isToggled && (
        <DateList list={DATE_LIST} handleSelectItem={handleSelectItem} />
      )}
    </Dropdown>
  );
}
