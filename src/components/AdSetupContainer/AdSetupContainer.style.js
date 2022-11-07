import styled from 'styled-components';

export const StyledAdSetupContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 40px 30px 40px;
`;

export const StyledAdSetup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: ${(props) => props.theme.bnColor.default};
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
