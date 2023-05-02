'use client';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Container, Divider, Grid, Typography } from '@mui/material';
import { gamerTheme } from '@/styles/theme/gamerTheme';
import GameBtn from '@/components/gameBtn';
const page = () => {
  return (
    <div className=' bg-snesBg min-h-screen bg-contain bg-repeat bg-slate-600'>
      <ThemeProvider theme={gamerTheme}>
        <Container
          maxWidth='md'
          sx={{
            mt: 6,
            pt: 8,
          }}
        >
          <div className=' bg-slate-600 bg-opacity-70 grid grid-cols-1'>
            <Typography variant='h4' color={'primary.main'} sx={{ m: 2 }}>
              Super Nintendo Entertainment System
            </Typography>
            <Typography variant='h6' color={'white'} sx={{ p: 2 }}>
              The Super Nintendo Entertainment System (SNES), commonly shortened
              to Super NES or Super Nintendo, is a 16-bit home video game
              console developed by Nintendo that was released in 1990 in Japan
              and South Korea, 1991 in North America, 1992 in Europe and
              Oceania, and 1993 in South America. In Japan, it is called the
              Super Famicom (SFC). In South Korea, it is called the Super Comboy
              and was distributed by Hyundai Electronics. The system was
              released in Brazil on August 30, 1993, by Playtronic. Although
              each version is essentially the same, several forms of regional
              lockout prevent cartridges for one version from being used in
              other versions. The Super NES is Nintendo`&apos;`s second
              programmable home console, following the Nintendo Entertainment
              System (NES). The console introduced advanced graphics and sound
              capabilities compared with other systems at the time. It was
              designed to accommodate the ongoing development of a variety of
              enhancement chips integrated into game cartridges to be
              competitive into the next generation.
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant='h4' color={'primary.main'} sx={{ m: 2 }}>
              Game Played
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
            <GameBtn
              gameName='Megaman X'
              boxArtUrl='/gamesImg/megamanX/boxArt.jpg'
              href='/retro/snes/megaman_x'
            />
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default page;
