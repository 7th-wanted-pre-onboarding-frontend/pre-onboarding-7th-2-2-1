import { css } from 'styled-components';

export const SIZES = {
  sm: css`
    --typography-font-size: 12px;
    --typography-font-weight: 500;
    --typography-line-height: 14.06px;
  `,
  smBold: css`
    --typography-font-size: 12px;
    --typography-font-weight: 700;
    --typography-line-height: 14.06px;
  `,
  md: css`
    --typography-font-size: 12px;
    --typography-font-weight: 500;
    --typography-line-height: 14.06px;
  `,
  lg: css`
    --typography-font-size: 14px;
    --typography-font-weight: 500;
    --typography-line-height: 16.41px;
  `,
  lgBold: css`
    --typography-font-size: 14px;
    --typography-font-weight: 700;
    --typography-line-height: 16.41px;
  `,
  xlg: css`
    --typography-font-size: 16px;
    --typography-font-weight: 700;
    --typography-line-height: 18.75px;
  `,
  xxlg: css`
    --typography-font-size: 26px;
    --typography-font-weight: 900;
    --typography-line-height: 30.47px;
  `
};

export const VARIANTS = {
  default: css`
    --typography-color: ${(props) => props.theme.color.default};
  `,
  accent: css`
    --typography-color: ${(props) => props.theme.color.accent};
  `,
  label: css`
    --typography-color: ${(props) => props.theme.color.label};
  `,
  white: css`
    --typography-color: ${(props) => props.theme.color.white};
  `
};
