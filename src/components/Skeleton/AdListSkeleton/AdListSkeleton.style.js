import styled from 'styled-components';

const StyledAdListSkeleton = styled.div`
  width: 100%;
  height: 420px;
  background-color: #e0e3e3;
  position: relative;
  overflow: hidden;
  border-radius: 10px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    transform: translateX(-100%);
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export default StyledAdListSkeleton;
