import React from 'react';

import StyledDropdown from './Dropdown.style';

import SIZES from './Dropdown.variant';

function Dropdown({ children, size }, ref) {
  const sizestyle = SIZES[size];

  return (
    <StyledDropdown
      sizestyle={sizestyle}
      ref={ref}
      className='dropdown-container'
    >
      {children}
    </StyledDropdown>
  );
}

export default React.forwardRef(Dropdown);

Dropdown.defaultProps = {
  size: SIZES.md
};
