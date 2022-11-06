import { atom, selector } from 'recoil';
import {
  getDateDiff,
  calculatePrevDate,
  getFormatDate
} from '../utils/constants/usefulFunctions';
import Trend from '../utils/types/trend';
import TrendBanner from '../utils/types/trendBanner';
import filterState from './filters';
import formatData from '../utils/formatDate';

function filterDateTrends(trends, from, to) {
  return trends
    .filter(
      ({ date }) =>
        new Date(formatData(new Date(date))) >=
          new Date(formatData(new Date(from))) &&
        new Date(formatData(new Date(date))) <=
          new Date(formatData(new Date(to)))
    )
    .map((item) => new Trend(item));
}

function avgToTrends(trends, from, to, diffDate) {
  return trends
    .filter(
      ({ date }) =>
        new Date(date) >= new Date(from) && new Date(date) <= new Date(to)
    )
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
    const { dashboardItem, date } = get(filterState);

    if (date?.from === undefined || date?.to === undefined) {
      return undefined;
    }

    const { from, to } = date;
    const { first, second } = dashboardItem;

    const formatedFrom = formatData(from);
    const formatedTo = formatData(to);

    const series = [];

    const seriesA = {
      title: first.title,
      name: first.title,
      data: []
    };

    const category = [];
    const filterdTrend = filterDateTrends(trendData, formatedFrom, formatedTo);

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

    filterdTrend.forEach((data) =>
      category.push(getFormatDate(new Date(data.date)))
    );

    return { series, category };
  }
});

export const filterdTrends = selector({
  key: 'filterdTrends',
  get: ({ get }) => {
    const trendData = get(trendState);

    // const {
    //   date: { from, to }
    // } = get(filterState);

    const { date } = get(filterState);

    if (date?.from === undefined || date?.to === undefined) {
      return undefined;
    }

    const { from, to } = date;

    const formatedFrom = formatData(from);
    const formatedTo = formatData(to);

    const diffDate = getDateDiff(formatedFrom, formatedTo);

    const { prevEnd, prevStart, prevDiffDate } =
      calculatePrevDate(formatedFrom);

    const previousTrend = avgToTrends(
      trendData,
      prevStart,
      prevEnd,
      prevDiffDate
    );
    const trend = avgToTrends(trendData, formatedFrom, formatedTo, diffDate);

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
