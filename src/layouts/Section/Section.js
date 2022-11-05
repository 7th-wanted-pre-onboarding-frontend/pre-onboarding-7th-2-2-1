import React from 'react';

import StyledSection from './Section.style';

export default function Section(props) {
  const { children } = props;
  return <StyledSection>{children}</StyledSection>;
}
