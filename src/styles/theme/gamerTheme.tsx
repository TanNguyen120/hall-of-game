'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

export const gamerTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f50057',
    },
    secondary: {
      main: '#e91e63',
    },
    background: {
      default: '#0c0c0c',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
    divider: '#c11818',
  },
  typography: {
    button: {
      letterSpacing: '0.07em',
    },
  },
});
