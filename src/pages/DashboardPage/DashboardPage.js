import React, { useEffect, useState } from 'react';

import { useRecoilValue } from 'recoil';
import {
  StyledDashboard,
  StyledTitle,
  DaypickerContainer
} from './DashboardPage.style';

import Typography from '../../components/Typography/Typography';
import AdStatusContainer from '../../components/AdStatusContainer/AdStatusContainer';
import DashboardDataPicker from '../../components/DashboardDataPicker/DashboardDataPicker';
import formatData from '../../utils/formatDate';
import filterState from '../../store/filters';

export default function DashboardPage() {
  const [isToggle, setIsToggle] = useState(false);
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
  }, [filters]);

  return (
    <StyledDashboard>
      <StyledTitle>
        <Typography size='xxlg' variant='default'>
          대시보드
        </Typography>
        <div style={{ position: 'relative' }}>
          <DaypickerContainer onClick={handleToggle}>
            {`${
              formatData(selectedDay.from) === undefined
                ? '기준일'
                : formatData(selectedDay.from)
            } ~ ${
              formatData(selectedDay.to) === undefined
                ? '선택일'
                : formatData(selectedDay.to)
            }`}
          </DaypickerContainer>
          {isToggle && <DashboardDataPicker setIsToggle={setIsToggle} />}
        </div>
      </StyledTitle>
      <AdStatusContainer />
    </StyledDashboard>
  );
}
