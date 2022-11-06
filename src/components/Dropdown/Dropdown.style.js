import styled from 'styled-components';

const StyledDropdown = styled.div`
  ${(props) => props.sizestyle}

  width: var(--dropdown-width, 123px);
  height: var(--dropdown-height, 40px);
  padding: var(--dropdown-padding, 12px 20px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  border: var(--dropdown-border, none);
`;

export default StyledDropdown;
