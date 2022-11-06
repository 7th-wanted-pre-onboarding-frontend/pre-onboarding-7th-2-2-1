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
        from: toStringByFormatting(date)
      }
    }));
  };

  const setEndDate = (date) => {
    setFilters((state) => ({
      ...state,
      date: {
        ...state.date,
        to: toStringByFormatting(date)
      }
    }));
  };

  return { filters, setStartDate, setEndDate };
}
