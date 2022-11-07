import React, { useEffect, useRef } from 'react';
import Chart from 'react-apexcharts';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import filterState from '../../store/filters';
import { trendChartData } from '../../store/trend';

let timer = null;

export default function GraphChart() {
  const chartData = useRecoilValue(trendChartData);

  const ref = useRef(null);
  const scroll = useRef({
    start: false,
    moving: false,
    clientX: null
  });
  const [filter, setFilter] = useRecoilState(filterState);

  useEffect(() => {
    let node = null;

    const onMouseMove = (e) => {
      if (scroll.current.start) {
        if (timer) {
          clearTimeout(timer);
        }
        const diff = e.clientX - scroll.current.clienX;

        timer = setTimeout(() => {
          setFilter((prev) => {
            let next = prev.scrollValue;
            if (diff >= 0) {
              next += 7;
              if (next > chartData.category.length) {
                next -= 7;
              }
            } else {
              next -= 7;
              if (next <= 1) {
                next = 1;
              }
            }
            return {
              ...prev,
              scrollValue: next
            };
          });
        }, 250);
      }
    };

    const onMouseUp = () => {
      if (scroll.current.start) {
        scroll.current.start = false;
        node.removeEventListener('mousemove', onMouseMove);
        node.removeEventListener('mouseup', onMouseUp);
      }
    };

    const onMouseDown = (e) => {
      scroll.current.start = true;
      scroll.current.clienX = e.clientX;
      e.currentTarget.addEventListener('mousemove', onMouseMove);
      e.currentTarget.addEventListener('mouseup', onMouseUp);
    };

    if (ref.current && ref.current.chartRef.current) {
      node = ref.current.chartRef.current;
      node.addEventListener('mousedown', onMouseDown);
    }

    return () => {
      if (node) {
        node.removeEventListener('mousedown', onMouseDown);
      }
    };
  }, [ref.current, chartData]);

  return (
    <StyledGraphChart>
      <StyledChartWrapper>
        {chartData !== undefined && (
          <Chart
            ref={ref}
            height='280px'
            type='line'
            series={chartData.series}
            options={{
              chart: {
                type: 'line',
                toolbar: {
                  show: false
                },
                zoom: {
                  enabled: false
                }
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                type: 'string',
                categories: chartData.category,
                min: filter.scrollValue,
                max: filter.scrollValue + 6
              },
              yaxis: [
                {
                  title: {
                    text: chartData.series[0].title
                  }
                },
                {
                  show: chartData.series.length >= 2 && true,
                  opposite: true,
                  title: {
                    text:
                      chartData.series.length >= 2 && chartData.series[1].title
                  }
                }
              ]
            }}
          />
        )}
      </StyledChartWrapper>
    </StyledGraphChart>
  );
}

const StyledGraphChart = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

const StyledChartWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
