import { atom, selector } from 'recoil';
import {
  getDateDiff,
  calculatePrevDate,
  getFormatDate,
  getWeekNumber
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
    const { dashboardItem, date, dashboardDate } = get(filterState);

    if (date?.from === undefined || date?.to === undefined) {
      return undefined;
    }

    const { from, to } = date;
    const { first, second } = dashboardItem;

    const formatedFrom = formatData(from);
    const formatedTo = formatData(to);

    const series = [];

    let seriesA = {
      title: first.title,
      name: first.title,
      data: [],
      weekData: {}
    };

    const category = [];
    const filterdTrend = filterDateTrends(trendData, formatedFrom, formatedTo);

    filterdTrend.forEach((item) => {
      const data = item[first.name];
      const weekOfMonth = getWeekNumber(new Date(item.date));
      seriesA.data.push(data);
      if (seriesA.weekData[weekOfMonth]) {
        seriesA.weekData[weekOfMonth] = {
          ...seriesA.weekData[weekOfMonth],
          sum: seriesA.weekData[weekOfMonth].sum + data,
          index: seriesA.weekData[weekOfMonth].index + 1
        };
      } else {
        seriesA.weekData[weekOfMonth] = {
          sum: data,
          index: 1,
          get avg() {
            return Math.ceil(this.sum / this.index);
          }
        };
      }
    });

    if (dashboardDate === '주간') {
      seriesA = {
        ...seriesA,
        data: Object.values(seriesA.weekData).map((item) => item.avg)
      };
    }

    series.push(seriesA);

    if (second.title !== '선택') {
      let seriesB = {
        title: second.title,
        name: second.title,
        data: [],
        weekData: {}
      };
      filterdTrend.forEach((item) => {
        const data = item[second.name];
        const weekOfMonth = getWeekNumber(new Date(item.date));
        seriesB.data.push(data);

        if (seriesB.weekData[weekOfMonth]) {
          seriesB.weekData[weekOfMonth] = {
            ...seriesB.weekData[weekOfMonth],
            sum: seriesB.weekData[weekOfMonth].sum + data,
            index: seriesB.weekData[weekOfMonth].index + 1
          };
        } else {
          seriesB.weekData[weekOfMonth] = {
            sum: data,
            index: 1,
            get avg() {
              return Math.ceil(this.sum / this.index);
            }
          };
        }
      });

      if (dashboardDate === '주간') {
        seriesB = {
          ...seriesB,
          data: Object.values(seriesB.weekData).map((item) => item.avg)
        };
      }
      series.push(seriesB);
    }

    if (dashboardDate === '주간') {
      category.push(...Object.keys(seriesA.weekData));
    } else {
      filterdTrend.forEach((data) => {
        category.push(getFormatDate(new Date(data.date)));
      });
    }

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
