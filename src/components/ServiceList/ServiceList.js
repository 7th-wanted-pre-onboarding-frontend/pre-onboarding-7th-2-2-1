import React from 'react';

import { StyledService, StyledServiceList } from './ServiceList.style';

import { SERVICE_LIST } from '../../utils/constants/constList';

import Typography from '../Typography/Typography';

export default function ServiceList(props) {
  const { handleSelectItem } = props;

  return (
    <StyledServiceList>
      {SERVICE_LIST.map(({ id, name }) => (
        <StyledService
          key={id}
          type='button'
          onClick={() => handleSelectItem(name)}
        >
          <Typography size='lg'>{name}</Typography>
        </StyledService>
      ))}
      <StyledService>
        <Typography size='lg'>+ 서비스 추가하기</Typography>
      </StyledService>
    </StyledServiceList>
  );
}
