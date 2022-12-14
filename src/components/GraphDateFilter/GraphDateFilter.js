import React from 'react';
import { useRecoilValue } from 'recoil';
import filterState from '../../store/filters';
import useDropdown from '../../utils/hooks/useDropdown';

import Dropdown from '../Dropdown/Dropdown';

import { DATE_LIST } from '../../utils/constants/constList';
import Typography from '../Typography/Typography';
import DateList from '../DateList/DateList';

import { StyledDropdownButton } from '../SidebarContainer/SidebarContainer.style';
import { StyledItemWrapper } from './GraphDateFilter.style';

export default function GraphDateFilter() {
  const { dashboardDate } = useRecoilValue(filterState);
  const {
    selectedItem,
    handleSelectBoxToggle,
    handleSelectItem,
    isToggled,
    ref
  } = useDropdown(dashboardDate);

  return (
    <Dropdown size='mmd' ref={ref}>
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
