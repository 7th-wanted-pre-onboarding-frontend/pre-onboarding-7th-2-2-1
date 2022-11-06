import React from 'react';
import { useRecoilValue } from 'recoil';

import {
  StyledAdStatus,
  StyledAdStatusContainer
} from './AdStatusContainer.style';

import StatusGraph from '../StatusGraph/StatusGraph';
import StatusBannerList from '../StatusBannerList/StatusBannerList';
import { filterdTrends, trendChartData } from '../../store/trend';
import Exceptions from '../Exceptions/Exceptions';

export default function AdStatusContainer() {
  const trend = useRecoilValue(trendChartData);
  const filter = useRecoilValue(filterdTrends);

  const isSelected = trend !== undefined && filter !== undefined;

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
