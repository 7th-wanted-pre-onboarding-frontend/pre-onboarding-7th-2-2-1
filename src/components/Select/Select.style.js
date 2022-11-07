import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  padding-left: 5px;
  font-size: 16px;

  outline: none;
  border: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 5px;
  }
`;
