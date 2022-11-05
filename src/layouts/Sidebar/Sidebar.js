import React from 'react';

import StyledSidebar from './Sidebar.style';

export default function Sidebar(props) {
  const { children } = props;
  return <StyledSidebar>{children}</StyledSidebar>;
}
