import { css } from 'styled-components';

export const TYPES = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit'
};

export const SIZES = {
  sm: css`
    --button-padding: 12px 20px;
    --button-radius: 10px;
  `,
  md: css`
    --button-padding: 20px 127px 20px 20px
    --button-radius: 10px;
  `
};

export const VARIANTS = {
  default: css`
    --button-bg-color: ${(props) => props.theme.btnColor.default};
    --button-border-color: ${(props) => props.theme.border.button};
  `,
  accent: css`
    --button-bg-color: ${(props) => props.theme.btnColor.accent};
    --button-border-color: ${(props) => props.theme.border.accent};
  `
};
