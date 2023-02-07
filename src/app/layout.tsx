// The emotion engine does not support sever side render so we must use the "use client " decorate
'use client';

import SimpleBottomNavigation from '@/components/bottomNav';
import AppBar from '@/components/appBar';
import { ThemeProvider } from '@emotion/react';
import gamerTheme from '@/styles/theme/gamerTheme';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ThemeProvider theme={gamerTheme}>
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        {/* The layout Header */}
        <AppBar />
        {/* <SearchAppBar /> */}
        <body>{children}</body>
        {/* The layout Footer */}
      </ThemeProvider>
    </html>
  );
}
