import React from 'react';

import { RecoilRoot } from 'recoil';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import defaultTheme from './styles/theme';
import 'react-day-picker/dist/style.css';

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
