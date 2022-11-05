import styled from 'styled-components';

const StyledTypography = styled.span`
  ${(props) => props.sizestyle}
  ${(props) => props.variantStyle}

  font-weight: var(--typography-font-weight, 500);
  font-size: var(--typography-font-size, 12px);
  line-height: var(--typography-line-height, 14.06px);
  color: var(--typography-color, inherit);
`;

export default StyledTypography;
