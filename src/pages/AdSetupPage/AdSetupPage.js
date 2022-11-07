import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import AdSetupContainer from '../../components/AdSetupContainer/AdSetupContainer';

import Typography from '../../components/Typography/Typography';
import { isLoading } from '../../store/adList';

import { StyledAdSetup, StyledTitle } from './AdSetupPage.style';

export default function AdSetupPage() {
  const setIsLoading = useSetRecoilState(isLoading);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 1000);
  }, []);
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
