import { atom, selector } from 'recoil';
import {
  getDateDiff,
  calculatePrevDate,
  getFormatDate
} from '../utils/constants/usefulFunctions';
import Trend from '../utils/types/trend';
import TrendBanner from '../utils/types/trendBanner';
import filterState from './filters';

function filterDateTrends(trends, start, end) {
  return trends
    .filter(({ date }) => date >= start && date <= end)
    .map((item) => new Trend(item));
}

function avgToTrends(trends, start, end, diffDate) {
  return trends
    .filter(({ date }) => date >= start && date <= end)
    .reduce(
      (acc, cur) => {
        const trend = new Trend(cur);
        acc.imp += trend.imp;
        acc.click += trend.click;
        acc.cost += trend.cost;
        acc.conv += trend.conv;
        acc.roas += trend.roas;
        acc.amount += trend.amount;
        acc.diffDate = diffDate;
        return acc;
      },
      {
        imp: 0,
        click: 0,
        cost: 0,
        conv: 0,
        roas: 0,
        amount: 0,
        diffDate: ''
      }
    );
}

const BANNER_TITLE = [
  'ROAS',
  '광고비',
  '노출 수',
  '클릭 수',
  '전환 수',
  '매출'
];

export const trendState = atom({
  key: 'trendState',
  default: []
});

export const trendChartData = selector({
  key: 'trendChartData',
  get: ({ get }) => {
    const trendData = get(trendState);
    const {
      dashboardItem: { first, second },
      date: { start, end }
    } = get(filterState);

    const series = [];

    const seriesA = {
      title: first.title,
      name: first.title,
      data: []
    };

    const category = [];
    const filterdTrend = filterDateTrends(trendData, start, end);

    filterdTrend.forEach((item) => {
      seriesA.data.push(item[first.name]);
    });

    series.push(seriesA);

    if (second.title !== '선택') {
      const seriesB = {
        title: second.title,
        name: second.title,
        data: []
      };
      filterdTrend.forEach((item) => {
        seriesB.data.push(item[second.name]);
      });
      series.push(seriesB);
    }

    filterdTrend.forEach(({ date }) =>
      category.push(getFormatDate(new Date(date)))
    );

    return { series, category };
  }
});

export const filterdTrends = selector({
  key: 'filterdTrends',
  get: ({ get }) => {
    const trendData = get(trendState);

    const {
      date: { start, end }
    } = get(filterState);

    const diffDate = getDateDiff(start, end);

    const { prevEnd, prevStart, prevDiffDate } = calculatePrevDate(start);

    const previousTrend = avgToTrends(
      trendData,
      prevStart,
      prevEnd,
      prevDiffDate
    );
    const trend = avgToTrends(trendData, start, end, diffDate);

    const avgPrevTrend = new TrendBanner(previousTrend).getEntreis();
    const avgTrend = new TrendBanner(trend).getEntreis();

    const trends = BANNER_TITLE.map((title, idx) => ({
      id: idx,
      title,
      value: avgTrend[idx],
      roc: {
        inc_flag: avgTrend[idx] - avgPrevTrend[idx] > 0,
        value: Math.round(avgTrend[idx] - avgPrevTrend[idx])
      }
    }));

    return trends;
  }
});
