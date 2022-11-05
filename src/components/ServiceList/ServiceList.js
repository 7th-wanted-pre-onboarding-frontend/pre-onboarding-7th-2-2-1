import React from 'react';
import Typography from '../Typography/Typography';

import { StyledService, StyledServiceList } from './ServiceList.style';

const SERVICE_LIST = [
  {
    id: 1,
    name: '매드업'
  },
  {
    id: 2,
    name: '정맨이'
  }
];

export default function ServiceList(props) {
  const { handleSelectService } = props;
  return (
    <StyledServiceList>
      {SERVICE_LIST.map(({ id, name }) => (
        <StyledService
          key={id}
          type='button'
          onClick={() => handleSelectService(name)}
        >
          <Typography size='lg'>{name}</Typography>
        </StyledService>
      ))}
      <StyledService type='button'>+ 서비스 추가하기</StyledService>
    </StyledServiceList>
  );
}
