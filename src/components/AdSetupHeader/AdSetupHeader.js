import React from 'react';

import styled from 'styled-components';

import AdSetupFilter from '../AdSetupFilter/AdSetupFilter';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';

export default function AdSetupHeader() {
  return (
    <StyledAdSetupHeader>
      <AdSetupFilter />
      <Button size='sm' variant='accent'>
        <Typography size='lgBold' variant='white' onClick={() => {}}>
          광고 만들기
        </Typography>
      </Button>
    </StyledAdSetupHeader>
  );
}

const StyledAdSetupHeader = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
`;
