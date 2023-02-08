'use client';

import { createTheme } from '@mui/material/styles';

export default createTheme({
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