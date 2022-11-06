import React from 'react';

import { useRecoilValue } from 'recoil';
import filterState from '../../store/filters';

import { StyledTitle, StyledTitleList } from './ItemList.style';

import Typography from '../Typography/Typography';

export default function ItemList(props) {
  const { handleSelectItem, list } = props;
  const filter = useRecoilValue(filterState);

  return (
    <StyledTitleList>
      {list.map(({ id, title, name }) => (
        <StyledTitle
          key={id}
          type='button'
          onClick={() => handleSelectItem({ title, name })}
          disabled={title === filter.dashboardItem.first.title}
        >
          <Typography size='lg'>{title}</Typography>
        </StyledTitle>
      ))}
    </StyledTitleList>
  );
}
