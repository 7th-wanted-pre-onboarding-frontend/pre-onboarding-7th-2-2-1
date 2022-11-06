import React from 'react';
import { useRecoilState } from 'recoil';
import { StyledProgress, StyledProgressList } from './ProgressList.style';

import Typography from '../Typography/Typography';
import adListTypeState from '../../store/adListType';

export default function ProgressList(props) {
  const { handleSelectItem, list } = props;
  // eslint-disable-next-line no-unused-vars
  const [adListType, setAdListType] = useRecoilState(adListTypeState);

  return (
    <StyledProgressList>
      {list.map(({ id, title, status }) => (
        <StyledProgress
          key={id}
          type='button'
          onClick={() => {
            handleSelectItem(title);
            setAdListType(status);
          }}
        >
          <Typography size='lg'>{title}</Typography>
        </StyledProgress>
      ))}
    </StyledProgressList>
  );
}
