import styled from 'styled-components';

const StyledSidebar = styled.div`
  width: 320px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bnColor.default};
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
`;

export default StyledSidebar;
