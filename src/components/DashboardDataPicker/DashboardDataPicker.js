import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { DayPicker } from 'react-day-picker';
import ko from 'date-fns/locale/ko';
import filterState from '../../store/filters';
import './DayPicker.css';

export default function DashboardDataPicker({ setIsToggle }) {
  const [filters, setFilters] = useRecoilState(filterState);
  const [isClicked, setIsClicked] = useState(false);
  const handleSetFilters = (data) => {
    setFilters({ ...filters, date: data });
    setIsClicked(true);
  };

  useEffect(() => {
    if (
      filters.date?.from !== undefined &&
      filters.date?.to !== undefined &&
      isClicked
    ) {
      setIsToggle(false);
    }
    setIsClicked(false);
  }, [filters]);

  return (
    <DayPicker
      locale={ko}
      defaultMonth={new Date(2022, 1)}
      mode='range'
      selected={filters.date}
      onSelect={handleSetFilters}
    />
  );
}
