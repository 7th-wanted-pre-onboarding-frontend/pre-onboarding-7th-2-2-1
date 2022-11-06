import React from 'react';
import useDropdown from '../../utils/hooks/useDropdown';

import Dropdown from '../Dropdown/Dropdown';
import TitleList from '../TitleList/TitleList';
import Typography from '../Typography/Typography';

import { BANNER_LIST } from '../../utils/constants/constList';

import { StyledDropdownButton } from '../SidebarContainer/SidebarContainer.style';
import { StyledItemWrapper, StyledTitleDot } from './GraphTitleFilter.style';

export default function GraphTitleFilter() {
  const { selectedItem, handleSelectBoxToggle, handleSelectItem, isToggled } =
    useDropdown('ROAS');

  return (
    <Dropdown size='sm'>
      <StyledItemWrapper>
        <StyledTitleDot />
        <Typography size='lg' variant='default'>
          {selectedItem}
        </Typography>
      </StyledItemWrapper>
      <Typography size='xlg' variant='default'>
        <StyledDropdownButton onClick={handleSelectBoxToggle} />
      </Typography>
      {isToggled && (
        <TitleList list={BANNER_LIST} handleSelectItem={handleSelectItem} />
      )}
    </Dropdown>
  );
}
