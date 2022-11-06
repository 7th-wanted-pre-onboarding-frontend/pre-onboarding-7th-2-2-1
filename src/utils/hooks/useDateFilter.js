import { useRecoilState } from 'recoil';
import filterState from '../../store/filters';
import { toStringByFormatting } from '../constants/usefulFunctions';

export default function useDateFilter() {
  const [filters, setFilters] = useRecoilState(filterState);

  const setStartDate = (date) => {
    setFilters((state) => ({
      ...state,
      date: {
        ...state.date,
        start: toStringByFormatting(date)
      }
    }));
  };

  const setEndDate = (date) => {
    setFilters((state) => ({
      ...state,
      date: {
        ...state.date,
        end: toStringByFormatting(date)
      }
    }));
  };

  return { filters, setStartDate, setEndDate };
}
