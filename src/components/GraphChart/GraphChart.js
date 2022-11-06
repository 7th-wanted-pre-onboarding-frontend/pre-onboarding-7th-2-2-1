import React from 'react';
import Chart from 'react-apexcharts';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { trendChartData } from '../../store/trend';

export default function GraphChart() {
  const chartData = useRecoilValue(trendChartData);

  return (
    <StyledGraphChart>
      <StyledChartWrapper>
        {chartData !== undefined && (
          <Chart
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
                categories: chartData.category
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
