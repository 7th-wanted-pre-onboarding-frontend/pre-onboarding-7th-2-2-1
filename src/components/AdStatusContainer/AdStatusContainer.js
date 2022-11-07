import React from 'react';
import { useRecoilValue } from 'recoil';

import useGetTends from '../../utils/hooks/useGetTends';

import {
  StyledAdStatus,
  StyledAdStatusContainer
} from './AdStatusContainer.style';

import StatusGraph from '../StatusGraph/StatusGraph';
import StatusBannerList from '../StatusBannerList/StatusBannerList';
import { filterdTrends, trendChartData } from '../../store/trend';
import Exceptions from '../Exceptions/Exceptions';
import DashboardSkeleton from '../Skeleton/DashboardSkeleton/DashboardSkeleton';

export default function AdStatusContainer() {
  const { isLoading } = useGetTends();
  const trend = useRecoilValue(trendChartData);
  const filter = useRecoilValue(filterdTrends);
  const isSelected = trend !== undefined && filter !== undefined;

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
        {isSelected ? (
          <>
            <StatusBannerList />
            <StatusGraph />
          </>
        ) : (
          <Exceptions />
        )}
      </StyledAdStatus>
    </StyledAdStatusContainer>
  );
}
