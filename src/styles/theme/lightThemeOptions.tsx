// The emotion engine does not support sever side render so we must use the "use client " decorate
'use client';

import { ThemeOptions } from '@mui/material/styles';

// define the theme option
// the object contain our customize ui option
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2a9461',
    },
  },
};

export default lightThemeOptions;
