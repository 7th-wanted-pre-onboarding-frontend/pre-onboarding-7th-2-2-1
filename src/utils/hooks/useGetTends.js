import { useEffect, useState } from 'react';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filterdTrends, trendState } from '../../store/trend';

export default function useGetTends() {
  const [isLoading, setIsLoading] = useState(false);
  const setTrendData = useSetRecoilState(trendState);
  const trends = useRecoilValue(filterdTrends);

  useEffect(() => {
    const getTrendData = async () => {
      const result = await fetch('http://localhost:3000/data/trendData.json');
      const data = await result.json();

      setTrendData(data.report.daily);
      setIsLoading(true);
    };

    getTrendData();
  }, []);

  return { isLoading, trends };
}
