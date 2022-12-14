import React from 'react';
import { StyledHeaderContainer, StyledUserInfo } from './HeaderContainer.style';

import Typography from '../Typography/Typography';
import Icons from '../Icons';

const username = 'κΉμ ν';

export default function HeaderContainer() {
  return (
    <StyledHeaderContainer>
      <StyledUserInfo>
        <Icons.Profile />
        <Typography size='lg' variant='default'>
          {username}λ
        </Typography>
      </StyledUserInfo>
      <Icons.Alarm />
      <Icons.Setting />
    </StyledHeaderContainer>
  );
}
