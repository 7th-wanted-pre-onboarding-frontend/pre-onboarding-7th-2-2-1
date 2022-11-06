import React from 'react';

import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useDateFilter from '../../utils/hooks/useDateFilter';

export default function DashboardDataPicker() {
  const { filters, setStartDate, setEndDate } = useDateFilter();

  return (
    <StyledDatePicker>
      <StyledDateInput
        selected={new Date(filters.date.start)}
        selectsStart
        endDate={new Date(filters.date.end)}
        onChange={(date) => setStartDate(date)}
      />
      <div>~</div>
      <StyledDateInput
        selected={new Date(filters.date.end)}
        selectsEnd
        startDate={new Date(filters.date.start)}
        onChange={(date) => setEndDate(date)}
      />
    </StyledDatePicker>
  );
}

const StyledDatePicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledDateInput = styled(DatePicker)`
  border: none;
  width: 80px;
  background-color: ${(props) => props.theme.bnColor};
  border-radius: 10px;
  padding: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.41px;
  cursor: pointer;
`;
