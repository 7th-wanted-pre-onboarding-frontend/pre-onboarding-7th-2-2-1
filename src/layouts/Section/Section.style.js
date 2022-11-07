import styled from 'styled-components';

const StyledSection = styled.div`
  width: calc(100% - 320px);
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgColor.default};
`;

export default StyledSection;
