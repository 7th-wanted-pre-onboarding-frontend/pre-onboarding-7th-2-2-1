import React from 'react';
import styled from 'styled-components';

import useDropdown from '../../utils/hooks/useDropdown';

import Dropdown from '../Dropdown/Dropdown';
import AdItemList from '../ProgressList/ProgressList';
import Typography from '../Typography/Typography';

import { PROGRESS } from '../../utils/constants/constList';

import { StyledDropdownButton } from '../SidebarContainer/SidebarContainer.style';

export default function AdSetupFilter() {
  const {
    selectedItem,
    handleSelectBoxToggle,
    handleSelectItem,
    isToggled,
    testRef
  } = useDropdown('전체 광고');
  console.log('is Toggled inside Ad', isToggled);
  return (
    <Dropdown size='sm'>
      <StyledAdItemWrapper>
        <Typography size='lg' variant='default'>
          {selectedItem}
        </Typography>
      </StyledAdItemWrapper>
      <Typography size='xlg' variant='default' ref={testRef}>
        <StyledDropdownButton onClick={handleSelectBoxToggle} />
      </Typography>
      {isToggled && (
        <AdItemList list={PROGRESS} handleSelectItem={handleSelectItem} />
      )}
    </Dropdown>
  );
}
const StyledAdItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
