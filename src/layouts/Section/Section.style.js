import styled from 'styled-components';

const StyledSection = styled.div`
  width: calc(100% - 320px);
  height: 100%;
  background-color: ${(props) => props.theme.bgColor.default};
`;

export default StyledSection;
