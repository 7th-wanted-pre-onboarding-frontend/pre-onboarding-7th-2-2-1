import { useEffect, useState } from 'react';

import { useSetRecoilState } from 'recoil';
import TREND_API from '../../api/trend';
import { trendState } from '../../store/trend';

export default function useGetTends() {
  const [isLoading, setIsLoading] = useState(false);
  const setTrendData = useSetRecoilState(trendState);

  useEffect(() => {
    const getTrendData = async () => {
      TREND_API.get().then((data) => {
        setTrendData(data.report.daily);
        setIsLoading(true);
      });
    };

    getTrendData();
  }, []);

  return { isLoading };
}
