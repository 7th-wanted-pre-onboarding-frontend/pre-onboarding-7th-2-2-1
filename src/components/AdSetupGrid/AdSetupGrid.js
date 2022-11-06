import React from 'react';

import styled from 'styled-components';

import { AD_LIST } from '../../utils/constants/constList';

import AdItem from '../AdItem/AdItem';

export default function AdSetupGrid() {
  const handleInputChange = ({ name, value }) => {
    console.log(name, value);
  };

  return (
    <StyledAdSetupGrid>
      {AD_LIST.map((item) => (
        <AdItem
          key={item.id}
          item={item}
          handleInputChange={handleInputChange}
        />
      ))}
    </StyledAdSetupGrid>
  );
}

const StyledAdSetupGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
  align-items: center;
  grid-template-columns: repeat(3, minmax(280px, auto));
  grid-auto-rows: minmax(200px, auto);
  gap: 20px;
  padding: 0px 40px 40px 40px;
`;
