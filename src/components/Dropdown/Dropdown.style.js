import styled from 'styled-components';

const StyledDropdown = styled.div`
  ${(props) => props.sizestyle}

  width: var(--dropdown-width, 123px);
  height: var(--dropdown-height, 40px);
  padding: var(--dropdown-padding, 12px 20px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.border.button};
`;

export default StyledDropdown;
