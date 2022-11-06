import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import styled from 'styled-components';
import ADLIST_API from '../../api/adList';
import ADLIST_TYPE from '../../utils/constants/adlistType';
import adListState from '../../store/adList';
import adListTypeState from '../../store/adListType';

import AdItem from '../AdItem/AdItem';

export default function AdSetupGrid() {
  const handleInputChange = ({ name, value }) => {
    console.log(name, value);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [adList, setAdList] = useRecoilState(adListState);
  const [adListType] = useRecoilState(adListTypeState);

  useEffect(() => {
    const getAdList = async () => {
      ADLIST_API.get()
        .then((res) => res.json())
        .then((data) => setAdList(data.ads));
      setIsLoading(true);
    };

    getAdList();
  }, []);
  const filterList =
    adListType === ADLIST_TYPE.ALL
      ? adList
      : adList.filter((el) => el.status === adListType);
  console.log(filterList);
  return (
    <StyledAdSetupGrid>
      {isLoading && (
        <>
          {filterList.map((item) => (
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
