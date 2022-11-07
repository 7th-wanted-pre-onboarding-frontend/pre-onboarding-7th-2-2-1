import React from 'react';
import { StyledHeaderContainer, StyledUserInfo } from './HeaderContainer.style';

import Typography from '../Typography/Typography';
import Icons from '../Icons';

const username = '김정현';

export default function HeaderContainer() {
  return (
    <StyledHeaderContainer>
      <StyledUserInfo>
        <Icons.Profile />
        <Typography size='lg' variant='default'>
          {username}님
        </Typography>
      </StyledUserInfo>
      <Icons.Alarm />
      <Icons.Setting />
    </StyledHeaderContainer>
  );
}
