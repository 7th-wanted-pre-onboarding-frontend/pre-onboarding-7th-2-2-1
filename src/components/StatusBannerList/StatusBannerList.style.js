import styled from 'styled-components';

const StyledStatusBannerList = styled.div`
  display: grid;
  width: 100%;
  place-items: center;
  align-items: center;
  grid-template-columns: repeat(3, minmax(250px, auto));
  grid-auto-rows: minmax(80px, auto);
  gap: 20px;
  padding: 40px;
`;

export default StyledStatusBannerList;
