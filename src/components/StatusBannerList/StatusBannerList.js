import React from 'react';

import { useRecoilValue } from 'recoil';
import { filterdTrends } from '../../store/trend';

import StyledStatusBannerList from './StatusBannerList.style';

import BannerItem from '../BannerItem/BannerItem';

export default function StatusBannerList() {
  const trends = useRecoilValue(filterdTrends);

  return (
    <StyledStatusBannerList>
      {trends !== undefined &&
        trends.map((item) => <BannerItem key={item.id} item={item} />)}
    </StyledStatusBannerList>
  );
}
