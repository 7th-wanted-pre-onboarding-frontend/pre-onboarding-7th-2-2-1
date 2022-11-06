import React from 'react';

import {
  StyledAdStatus,
  StyledAdStatusContainer
} from './AdStatusContainer.style';

import StatusGraph from '../StatusGraph/StatusGraph';
import StatusBannerList from '../StatusBannerList/StatusBannerList';

export default function AdStatusContainer() {
  return (
    <StyledAdStatusContainer>
      <StyledAdStatus>
        <StatusBannerList />
        <StatusGraph />
      </StyledAdStatus>
    </StyledAdStatusContainer>
  );
}
