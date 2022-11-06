import React from 'react';

import useGetTends from '../../utils/hooks/useGetTends';

import {
  StyledAdStatus,
  StyledAdStatusContainer
} from './AdStatusContainer.style';

import StatusGraph from '../StatusGraph/StatusGraph';
import StatusBannerList from '../StatusBannerList/StatusBannerList';
import DashboardSkeleton from '../Skeleton/DashboardSkeleton/DashboardSkeleton';

export default function AdStatusContainer() {
  const { isLoading } = useGetTends();

  if (!isLoading) {
    return (
      <StyledAdStatusContainer>
        <StyledAdStatus>
          <DashboardSkeleton />
        </StyledAdStatus>
      </StyledAdStatusContainer>
    );
  }
  return (
    <StyledAdStatusContainer>
      <StyledAdStatus>
        <StatusBannerList />
        <StatusGraph />
      </StyledAdStatus>
    </StyledAdStatusContainer>
  );
}
