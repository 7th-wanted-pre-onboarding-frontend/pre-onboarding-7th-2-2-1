import React from 'react';

import { StyledProgress, StyledProgressList } from './ProgressList.style';

import Typography from '../Typography/Typography';

export default function ProgressList(props) {
  const { handleSelectItem, list } = props;

  return (
    <StyledProgressList>
      {list.map(({ id, title }) => (
        <StyledProgress
          key={id}
          type='button'
          onClick={() => handleSelectItem(title)}
        >
          <Typography size='lg'>{title}</Typography>
        </StyledProgress>
      ))}
    </StyledProgressList>
  );
}
