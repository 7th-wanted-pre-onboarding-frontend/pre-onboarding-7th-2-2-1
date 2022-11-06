import React, { useState, useEffect } from 'react';

import {
  StyledAdStatus,
  StyledAdStatusContainer
} from './AdStatusContainer.style';

import StatusGraph from '../StatusGraph/StatusGraph';
import StatusBannerList from '../StatusBannerList/StatusBannerList';

export default function AdStatusContainer() {
  const [trendData, setTrendData] = useState([]);

  useEffect(() => {
    const getTrendData = async () => {
      const result = await fetch('http://localhost:3000/data/trendData.json');
      const data = await result.json();

      setTrendData(data.report.daily);
    };

    getTrendData();
    console.log(trendData);
  }, []);

  return (
    <StyledAdStatusContainer>
      <StyledAdStatus>
        <StatusBannerList />
        <StatusGraph />
      </StyledAdStatus>
    </StyledAdStatusContainer>
  );
}
