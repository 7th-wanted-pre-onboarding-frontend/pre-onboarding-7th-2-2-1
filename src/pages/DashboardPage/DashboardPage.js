import React, { useState } from 'react';

import styled from 'styled-components';
import { StyledDashboard, StyledTitle } from './DashboardPage.style';

import Typography from '../../components/Typography/Typography';
import AdStatusContainer from '../../components/AdStatusContainer/AdStatusContainer';
import DashboardDataPicker from '../../components/DashboardDataPicker/DashboardDataPicker';

export default function DashboardPage() {
  const [isToggle, setIsToggle] = useState(false);
  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };

  return (
    <StyledDashboard>
      <StyledTitle>
        <Typography size='xxlg' variant='default'>
          대시보드
        </Typography>
        <div style={{ position: 'relative' }}>
          <DaypickerContainer onClick={handleToggle}>
            날짜 선택
          </DaypickerContainer>
          {isToggle && <DashboardDataPicker />}
        </div>
      </StyledTitle>
      <AdStatusContainer />
    </StyledDashboard>
  );
}

const DaypickerContainer = styled.div``;
