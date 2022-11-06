import { useEffect, useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import TREND_API from '../../api/trend';
import { filterdTrends, trendState } from '../../store/trend';

export default function useGetTends() {
  const [isLoading, setIsLoading] = useState(false);
  const setTrendData = useSetRecoilState(trendState);
  const trends = useRecoilValue(filterdTrends);

  useEffect(() => {
    const getTrendData = async () => {
      TREND_API.get()
        .then((res) => res.json())
        .then((data) => setTrendData(data.report.daily));
      setIsLoading(true);
    };

    getTrendData();
  }, []);

  return { isLoading, trends };
}
