import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import styled from 'styled-components';
import ADLIST_API from '../../api/adList';
import adListState from '../../store/adList';

import AdItem from '../AdItem/AdItem';

export default function AdSetupGrid() {
  const handleInputChange = ({ name, value }) => {
    console.log(name, value);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [adList, setAdList] = useRecoilState(adListState);

  useEffect(() => {
    const getAdList = async () => {
      ADLIST_API.get()
        .then((res) => res.json())
        .then((data) => setAdList(data.ads));
      setIsLoading(true);
    };

    getAdList();
  }, []);

  return (
    <StyledAdSetupGrid>
      {isLoading && (
        <>
          {adList.map((item) => (
            <AdItem
              key={item.id}
              item={item}
              handleInputChange={handleInputChange}
            />
          ))}
        </>
      )}
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
