import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import filterState from '../../store/filters';

import useDropdown from '../../utils/hooks/useDropdown';

import Dropdown from '../Dropdown/Dropdown';
import TitleList from '../TitleList/TitleList';
import Typography from '../Typography/Typography';

import { BANNER_LIST } from '../../utils/constants/constList';

import { StyledDropdownButton } from '../SidebarContainer/SidebarContainer.style';
import { StyledItemWrapper, StyledTitleDot } from './GraphTitleFilter.style';

export default function GraphTitleFilter() {
  const {
    testRef,
    selectedItem,
    handleSelectBoxToggle,
    handleSelectItem,
    isToggled
  } = useDropdown({
    title: 'ROAS',
    name: 'roas'
  });
  const [filter, setFilter] = useRecoilState(filterState);

  useEffect(() => {
    setFilter((state) => ({
      ...state,
      dashboardItem: {
        ...state.dashboardItem,
        first: {
          ...selectedItem
        }
      }
    }));
  }, [selectedItem.title]);

  return (
    <Dropdown size='sm'>
      <StyledItemWrapper ref={testRef}>
        <StyledTitleDot />
        <Typography size='lg' variant='default'>
          {filter.dashboardItem.first.title}
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
