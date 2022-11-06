import React from 'react';

import { RecoilRoot } from 'recoil';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/theme';

import AppRouter from './router';

export default function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </RecoilRoot>
  );
}
