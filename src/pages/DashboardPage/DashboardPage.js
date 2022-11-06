import React from 'react';

import {
  StyledDashboard,
  StyledDatePicker,
  StyledTitle
} from './DashboardPage.style';

import Typography from '../../components/Typography/Typography';
import AdStatusContainer from '../../components/AdStatusContainer/AdStatusContainer';

export default function DashboardPage() {
  return (
    <StyledDashboard>
      <StyledTitle>
        <Typography size='xxlg' variant='default'>
          대시보드
        </Typography>
        <StyledDatePicker>ss</StyledDatePicker>
      </StyledTitle>
      <AdStatusContainer />
    </StyledDashboard>
  );
}
