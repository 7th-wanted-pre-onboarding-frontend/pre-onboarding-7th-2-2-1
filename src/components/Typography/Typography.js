import React from 'react';

import StyledTypography from './Typography.style';

import { SIZES, VARIANTS } from './Typography.variant';

export default function Typography(props) {
  const { children, size, variant } = props;
  const sizestyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledTypography sizestyle={sizestyle} variantStyle={variantStyle}>
      {children}
    </StyledTypography>
  );
}

Typography.defaultProps = {
  variant: VARIANTS.default,
  size: SIZES.md
};
