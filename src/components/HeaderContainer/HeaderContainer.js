import React from 'react';

import { StyledHeaderContainer, StyledUserInfo } from './HeaderContainer.style';

export default function HeaderContainer() {
  return (
    <StyledHeaderContainer>
      <StyledUserInfo>
        <div>Avatar</div>
        <div>username</div>
      </StyledUserInfo>
      <div>setting</div>
      <div>alret</div>
    </StyledHeaderContainer>
  );
}
