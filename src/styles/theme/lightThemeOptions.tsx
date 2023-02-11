// The emotion engine does not support sever side render so we must use the "use client " decorate
'use client';

import { ThemeOptions } from '@mui/material/styles';

// define the theme option
// the object contain our customize ui option
const lightThemeOptions: ThemeOptions = {
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
};

export default lightThemeOptions;
