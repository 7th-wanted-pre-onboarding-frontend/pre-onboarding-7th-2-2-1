import styled from 'styled-components';

export const StyledHeaderContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 30px;
  border-bottom: 1px solid ${(props) => props.theme.border.default};
`;

export const StyledUserInfo = styled.div`
  display: flex;
  gap: 10px;
`;
