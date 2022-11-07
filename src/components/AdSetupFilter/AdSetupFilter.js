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
    ref
  } = useDropdown('전체 광고');

  return (
    <Dropdown size='sm' ref={ref}>
      <StyledAdItemWrapper>
        <Typography size='lg' variant='default'>
          {selectedItem}
        </Typography>
      </StyledAdItemWrapper>
      <Typography size='xlg' variant='default'>
        <StyledDropdownButton
          onClick={() => {
            console.log('asnfklankvlsanvklavn saklv!!!!');
            handleSelectBoxToggle();
          }}
        />
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
