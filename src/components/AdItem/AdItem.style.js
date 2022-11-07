import styled from 'styled-components';

export const StyledAdItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.border.button};
  padding: 40px 20px 20px 20px;

  &:hover {
    border: 1px solid ${(props) => props.theme.border.accent};
  }
`;

export const StyledAdItemTitle = styled.div`
  width: 100%;
  padding-bottom: 40px;
  border-bottom: 1px solid ${(props) => props.theme.border.default};
`;

export const StyledAdItemColumn = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 13px 0px;
  border-bottom: 1px solid ${(props) => props.theme.border.default};
`;

export const StyledAdContent = styled.div`
  width: 50%;
`;

export const StlyedInput = styled.input`
  width: 50%;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.06px;
  border: 1px solid ${(props) => props.theme.border.button};
  border-radius: 5px;
`;

export const StyledAdButtonWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
