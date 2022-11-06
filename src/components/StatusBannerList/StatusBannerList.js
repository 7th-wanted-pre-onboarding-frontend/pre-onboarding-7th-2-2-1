import React from 'react';

import StyledStatusBannerList from './StatusBannerList.style';

import { BANNER_LIST } from '../../utils/constants/constList';

import BannerItem from '../BannerItem/BannerItem';

export default function StatusBannerList() {
  return (
    <StyledStatusBannerList>
      {BANNER_LIST.map((item) => (
        <BannerItem key={item.id} item={item} />
      ))}
    </StyledStatusBannerList>
  );
}
