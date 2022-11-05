import styled from 'styled-components';

const StyledButton = styled.button`
  ${(props) => props.sizestyle}
  ${(props) => props.variantStyle}
  
  margin: 0;
  border: 1px solid
    var(--button-border-color, ${(props) => props.theme.border.default});
  padding: var(--button-padding, 12px 20px);
  border-radius: var(--button-radius, 10px);
  color: var(--button-color, ${(props) => props.theme.color.default});
  background: var(
    --button-bg-color,
    ${(props) => props.theme.btnColor.default}
  );
  cursor: pointer;

  &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(
      --button-bg-color,
      ${(props) => props.theme.btnColor.default}
    );
  }
`;

export default StyledButton;
