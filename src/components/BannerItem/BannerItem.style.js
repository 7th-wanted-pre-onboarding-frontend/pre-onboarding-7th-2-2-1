import styled from 'styled-components';

export const StyledBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.border.button};
  padding: 18px 40px;
`;

export const StyledBannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledBannerRight = styled.div`
  display: flex;
  align-items: flex-end;
`;
