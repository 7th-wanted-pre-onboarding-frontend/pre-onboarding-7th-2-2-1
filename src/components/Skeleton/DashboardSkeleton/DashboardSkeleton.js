import React from 'react';

import {
  StyledAdChartSkeleton,
  StyledAdDashBoardSkeleton,
  StyledSkeletonChart,
  StyledSkeletonGrid
} from './DashboardSkeleton.style';

export default function DashboardSkeleton() {
  return (
    <>
      <StyledSkeletonGrid>
        <StyledAdDashBoardSkeleton />
        <StyledAdDashBoardSkeleton />
        <StyledAdDashBoardSkeleton />
        <StyledAdDashBoardSkeleton />
        <StyledAdDashBoardSkeleton />
        <StyledAdDashBoardSkeleton />
      </StyledSkeletonGrid>
      <StyledSkeletonChart>
        <StyledAdChartSkeleton />
      </StyledSkeletonChart>
    </>
  );
}
