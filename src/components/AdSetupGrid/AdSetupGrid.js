/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import styled from 'styled-components';
import ADLIST_API from '../../api/adList';
import ADLIST_TYPE from '../../utils/constants/adlistType';
import adListState from '../../store/adList';
import adListTypeState from '../../store/adListType';

import AdItem from '../AdItem/AdItem';

export default function AdSetupGrid() {
  const [isLoading, setIsLoading] = useState(false);
  const [adList, setAdList] = useRecoilState(adListState);
  const [adListType] = useRecoilState(adListTypeState);
  const [updateTarget, setUpdateTarget] = useState(null);

  useEffect(() => {
    const getAdList = async () => {
      ADLIST_API.get()
        .then((res) => res.json())
        .then((data) => setAdList(data.ads));
      setIsLoading(true);
    };

    getAdList();
  }, []);

  const adListValuesHanlder = (targetId, valuse) => {
    const newListArry = adList.map((obj) => {
      if (obj.id === targetId) {
        obj.budget = valuse.budget;
        obj.report.convValue = valuse.convValue;
        obj.report.cost = valuse.cost;
        obj.report.roas = valuse.roas;
        obj.status = valuse.status;
        obj.title = valuse.title;
        return obj;
      }
      return obj;
    });

    setAdList(newListArry);
  };

  const filterList =
    adListType === ADLIST_TYPE.ALL
      ? adList
      : adList.filter((el) => el.status === adListType);

  return (
    <StyledAdSetupGrid>
      {isLoading && (
        <>
          {filterList.map((item) => {
            const target = updateTarget === item.id;
            return (
              <AdItem
                key={item.id}
                item={item}
                target={target}
                setUpdateTarget={setUpdateTarget}
                adListValuesHanlder={adListValuesHanlder}
              />
            );
          })}
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
