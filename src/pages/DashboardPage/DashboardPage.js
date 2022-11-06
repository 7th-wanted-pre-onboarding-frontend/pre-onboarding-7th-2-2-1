import React from 'react';

import { StyledDashboard, StyledTitle } from './DashboardPage.style';

import Typography from '../../components/Typography/Typography';
import AdStatusContainer from '../../components/AdStatusContainer/AdStatusContainer';
import DashboardDataPicker from '../../components/DashboardDataPicker/DashboardDataPicker';

export default function DashboardPage() {
  return (
    <StyledDashboard>
      <StyledTitle>
        <Typography size='xxlg' variant='default'>
          대시보드
        </Typography>
        <DashboardDataPicker />
      </StyledTitle>
      <AdStatusContainer />
    </StyledDashboard>
  );
}
