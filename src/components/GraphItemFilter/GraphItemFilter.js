import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import filterState from '../../store/filters';

import useDropdown from '../../utils/hooks/useDropdown';

import Dropdown from '../Dropdown/Dropdown';
import ItemList from '../ItemList/ItemList';
import Typography from '../Typography/Typography';

import { BANNER_LIST } from '../../utils/constants/constList';

import { StyledDropdownButton } from '../SidebarContainer/SidebarContainer.style';
import { StyledItemWrapper, StyledItemDot } from './GraphItemFilter.style';

export default function GraphItemFilter() {
  const { selectedItem, handleSelectBoxToggle, handleSelectItem, isToggled } =
    useDropdown({
      title: '선택',
      name: null
    });
  const [filter, setFilter] = useRecoilState(filterState);

  useEffect(() => {
    setFilter((state) => ({
      ...state,
      dashboardItem: {
        ...state.dashboardItem,
        second: {
          ...selectedItem
        }
      }
    }));
  }, [selectedItem.title]);

  return (
    <Dropdown size='sm'>
      <StyledItemWrapper>
        <StyledItemDot />
        <Typography size='lg' variant='default'>
          {filter.dashboardItem.second.title}
        </Typography>
      </StyledItemWrapper>
      <Typography size='xlg' variant='default'>
        <StyledDropdownButton onClick={handleSelectBoxToggle} />
      </Typography>
      {isToggled && (
        <ItemList list={BANNER_LIST} handleSelectItem={handleSelectItem} />
      )}
    </Dropdown>
  );
}
