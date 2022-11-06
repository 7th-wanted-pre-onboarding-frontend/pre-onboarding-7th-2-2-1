import { css } from 'styled-components';

const SIZES = {
  sm: css`
    --dropdown-width: 123px;
    --dropdown-height: 40px;
    --dropdown-padding: 12px 16px;
    --dropdown-border: 1px solid ${(props) => props.theme.border.button};
  `,
  mmd: css`
    --dropdown-width: 90px;
    --dropdown-height: 40px;
    --dropdown-padding: 12px 16px;
  `,
  md: css`
    --dropdown-width: 100%;
    --dropdown-height: 60px;
    --dropdown-padding: 20px;
    --dropdown-border: 1px solid ${(props) => props.theme.border.button};
  `
};

export default SIZES;
