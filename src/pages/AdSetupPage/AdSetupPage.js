import React from 'react';
import AdSetupContainer from '../../components/AdSetupContainer/AdSetupContainer';

import Typography from '../../components/Typography/Typography';

import { StyledAdSetup, StyledTitle } from './AdSetupPage.style';

export default function AdSetupPage() {
  return (
    <StyledAdSetup>
      <StyledTitle>
        <Typography size='xxlg' variant='default'>
          광고관리
        </Typography>
      </StyledTitle>
      <AdSetupContainer />
    </StyledAdSetup>
  );
}
