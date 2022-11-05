import React from 'react';

import StyledDropdown from './Dropdown.style';

import SIZES from './Dropdown.variant';

export default function Dropdown(props) {
  const { children, size } = props;
  const sizestyle = SIZES[size];

  return <StyledDropdown sizestyle={sizestyle}>{children}</StyledDropdown>;
}

Dropdown.defaultProps = {
  size: SIZES.md
};
