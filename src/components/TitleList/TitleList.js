import React from 'react';

import { StyledTitle, StyledTitleList } from './TitleList.style';

import Typography from '../Typography/Typography';

export default function TitleList(props) {
  const { handleSelectItem, list } = props;

  return (
    <StyledTitleList>
      {list.map(({ id, title, name }) => (
        <StyledTitle
          key={id}
          type='button'
          onClick={() => handleSelectItem({ title, name })}
        >
          <Typography size='lg'>{title}</Typography>
        </StyledTitle>
      ))}
    </StyledTitleList>
  );
}
