import React, { forwardRef } from 'react';

import StyledTypography from './Typography.style';

import { SIZES, VARIANTS } from './Typography.variant';

const Typography = forwardRef((props, ref) => {
  const { children, size, variant } = props;
  const sizestyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledTypography
      sizestyle={sizestyle}
      variantStyle={variantStyle}
      ref={ref}
    >
      {children}
    </StyledTypography>
  );
});

export default Typography;
Typography.defaultProps = {
  variant: VARIANTS.default,
  size: SIZES.md
};
