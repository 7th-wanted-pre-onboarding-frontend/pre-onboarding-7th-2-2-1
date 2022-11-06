import React from 'react';
import { useSetRecoilState } from 'recoil';
import { StyledDate, StyledDateList } from './DateList.style';

import Typography from '../Typography/Typography';
import filterState from '../../store/filters';

export default function DateList(props) {
  const { handleSelectItem, list } = props;
  const setFilterState = useSetRecoilState(filterState);

  return (
    <StyledDateList>
      {list.map(({ id, name }) => (
        <StyledDate
          key={id}
          type='button'
          onClick={() => {
            setFilterState((prev) => ({
              ...prev,
              scrollValue: 1,
              dashboardDate: name
            }));
            handleSelectItem(name);
          }}
        >
          <Typography size='lg'>{name}</Typography>
        </StyledDate>
      ))}
    </StyledDateList>
  );
}
