import React from 'react';

import { StyledDate, StyledDateList } from './DateList.style';

import Typography from '../Typography/Typography';

export default function DateList(props) {
  const { handleSelectItem, list } = props;

  return (
    <StyledDateList>
      {list.map(({ id, name }) => (
        <StyledDate
          key={id}
          type='button'
          onClick={() => handleSelectItem(name)}
        >
          <Typography size='lg'>{name}</Typography>
        </StyledDate>
      ))}
    </StyledDateList>
  );
}
