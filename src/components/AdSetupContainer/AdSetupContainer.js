import React from 'react';
import AdSetupGrid from '../AdSetupGrid/AdSetupGrid';
import AdSetupHeader from '../AdSetupHeader/AdSetupHeader';
import {
  StyledAdSetup,
  StyledAdSetupContainer
} from './AdSetupContainer.style';

export default function AdSetupContainer() {
  return (
    <StyledAdSetupContainer>
      <StyledAdSetup>
        <AdSetupHeader />
        <AdSetupGrid />
      </StyledAdSetup>
    </StyledAdSetupContainer>
  );
}
