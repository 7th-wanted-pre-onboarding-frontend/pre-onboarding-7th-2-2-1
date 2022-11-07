import styled from 'styled-components';

export const StyledDashboard = styled.div`
  width: calc(100vw - 320px);
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 25px 40px;
`;

export const DaypickerContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.color.default};
  letter-spacing: 0.5px;
  padding: 10px 0;
  border: none;
  border-radius: 5px;

  &:hover {
    color: #586cf5;
    cursor: pointer;

    svg {
      path {
        fill: #586cf5;
      }
    }
  }
`;

export const StyledDatePicker = styled.div`
  position: relative;
`;
