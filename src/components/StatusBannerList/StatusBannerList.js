import React from 'react';

import StyledStatusBannerList from './StatusBannerList.style';

import BannerItem from '../BannerItem/BannerItem';
import useGetTends from '../../utils/hooks/useGetTends';

export default function StatusBannerList() {
  const { isLoading, trends } = useGetTends();

  return (
    <StyledStatusBannerList>
      {isLoading && trends !== undefined && (
        <>
          {trends.map((item) => (
            <BannerItem key={item.id} item={item} />
          ))}
        </>
      )}
    </StyledStatusBannerList>
  );
}
