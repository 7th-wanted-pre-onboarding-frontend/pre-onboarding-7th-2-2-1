import React from 'react';
import { useRecoilState } from 'recoil';
import { DayPicker } from 'react-day-picker';
import ko from 'date-fns/locale/ko';
import filterState from '../../store/filters';
import './DayPicker.css';

export default function DashboardDataPicker() {
  const [filters, setFilters] = useRecoilState(filterState);
  const handleSetFilters = (data) => {
    setFilters({ ...filters, date: data });
  };

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
