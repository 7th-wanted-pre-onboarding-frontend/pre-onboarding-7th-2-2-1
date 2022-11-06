import React from 'react';
import Chart from 'react-apexcharts';
import styled from 'styled-components';

export default function GraphChart() {
  return (
    <StyledGraphChart>
      <StyledChartWrapper>
        <Chart
          height='280px'
          type='line'
          series={[
            {
              name: 'hello',
              data: [1, 2, 3, 4, 5, 6, 7]
            },
            {
              name: 'asdasd',
              data: [2, 3, 4, 5, 12, 7, 8]
            }
          ]}
          options={{
            chart: {
              type: 'line',
              height: 350,
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
              type: 'datetime',
              categories: [
                '2022-02-01',
                '2022-02-02',
                '2022-02-03',
                '2022-02-04',
                '2022-02-05',
                '2022-02-06'
              ]
            },
            yaxis: [
              {
                title: {
                  text: 'ROAS'
                }
              },
              {
                opposite: true,
                title: {
                  text: '노출 수'
                }
              }
            ]
          }}
        />
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
