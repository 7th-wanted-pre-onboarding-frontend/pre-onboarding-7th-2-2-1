import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import styled from 'styled-components';
import ADLIST_TYPE from '../../utils/constants/adlistType';
import { adListState, isLoading } from '../../store/adList';
import adListTypeState from '../../store/adListType';

import AdItem from '../AdItem/AdItem';
import AdListSkeleton from '../Skeleton/AdListSkeleton/AdListSkeleton';

export default function AdSetupGrid() {
  const isLoadings = useRecoilValue(isLoading);
  const [adList, setAdList] = useRecoilState(adListState);
  const [adListType] = useRecoilState(adListTypeState);
  const [updateTarget, setUpdateTarget] = useState(null);

  console.log(adList);

  const adListValuesHanlder = (targetId, valuse) => {
    const newListArry = adList.map(
      ({ id, budget, report, status, title, endDate, startDate }) => {
        if (id === targetId) {
          return {
            id,
            budget: valuse.budget || budget,
            report: {
              convValue: valuse.convValue || report.convValue,
              cost: valuse.cost || report.cost,
              roas: valuse.roas || report.roas
            },
            status: valuse.status || status,
            title,
            endDate,
            startDate: valuse.startDate || startDate
          };
        }
        return { id, budget, report, status, title, endDate, startDate };
      }
    );
    setAdList(newListArry);
  };

  const filterList =
    adListType === ADLIST_TYPE.ALL
      ? adList
      : adList.filter((el) => el.status === adListType);

  if (!isLoadings) {
    return (
      <StyledAdSetupGrid>
        <AdListSkeleton />
      </StyledAdSetupGrid>
    );
  }

  return (
    <StyledAdSetupGrid>
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
  gap: 20px;
  padding: 0px 40px 40px 40px;
`;
