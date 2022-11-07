import React, { useEffect, useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  StyledDashboard,
  StyledTitle,
  DaypickerContainer,
  StyledDatePicker
} from './DashboardPage.style';
import { isLoading } from '../../store/adList';

import Typography from '../../components/Typography/Typography';
import AdStatusContainer from '../../components/AdStatusContainer/AdStatusContainer';
import DashboardDataPicker from '../../components/DashboardDataPicker/DashboardDataPicker';
import filterState from '../../store/filters';
import Icons from '../../components/Icons';
import convertDateToKo from '../../utils/makeData/convertDateToKo';

export default function DashboardPage() {
  const [isToggle, setIsToggle] = useState(false);
  const setIsLoading = useSetRecoilState(isLoading);
  const filters = useRecoilValue(filterState);
  const [selectedDay, setSelectedDay] = useState({
    from: filters.date?.from,
    to: filters.date?.to
  });
  const handleToggle = () => {
    setIsToggle((prev) => !prev);
  };

  useEffect(() => {
    setSelectedDay({ from: filters.date?.from, to: filters.date?.to });
    setIsLoading(false);
  }, [filters]);

  return (
    <StyledDashboard>
      <StyledTitle>
        <Typography size='xxlg' variant='default'>
          대시보드
        </Typography>
        <StyledDatePicker>
          <DaypickerContainer onClick={handleToggle}>
            {`${
              convertDateToKo(selectedDay.from) === undefined
                ? '기준일'
                : convertDateToKo(selectedDay.from)
            } ~ ${
              convertDateToKo(selectedDay.to) === undefined
                ? '선택일'
                : convertDateToKo(selectedDay.to)
            }`}
            <Icons.ArrowDown />
          </DaypickerContainer>
          {isToggle && <DashboardDataPicker setIsToggle={setIsToggle} />}
        </StyledDatePicker>
      </StyledTitle>
      <AdStatusContainer />
    </StyledDashboard>
  );
}
