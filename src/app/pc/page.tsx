'use client';
import { ThemeProvider } from '@emotion/react';
import { Container, Divider, Grid, Typography } from '@mui/material';

import { gamerTheme } from '@/styles/theme/gamerTheme';
import GameBtn from '@/components/gameBtn';
export default function PLatformer() {
  return (
    <ThemeProvider theme={gamerTheme}>
      <div className=' bg-pcBg bg-[length:2000px_1080px] min-h-screen bg-repeat-y'>
        <Container
          maxWidth='md'
          sx={{
            mt: 6,
            pt: 8,
          }}
        >
          <div className=' bg-slate-600 bg-opacity-70 grid grid-cols-1'>
            <Typography variant='h4' color={'primary'} sx={{ m: 2 }}>
              Game On Computer ?
            </Typography>
            <Typography variant='h6' color={'white'} sx={{ m: 3 }}>
              A personal computer game, also known as computer game or PC game,
              is a type of video game played on a personal computer (PC) rather
              than a console or arcade machine. Its defining characteristics
              include: more diverse and user-determined gaming hardware and
              software; and generally greater capacity in input, processing,
              video and audio output. The uncoordinated nature of the PC game
              market, and now its lack of physical media, make precisely
              assessing its size difficult. In 2018, the global PC games market
              was valued at about $27.7 billion. According to research data
              provided by Statista in 2020 there were an estimated 1.75 billion
              PC gamers worldwide, up from 1.5 billion PC gaming users in the
              previous year. In 2024 it is estimated the number of PC gamers
              will rise to 1.85 billion.
            </Typography>
            <Typography variant='h6' color={'white'} sx={{ m: 3 }}>
              Home computer games became popular following the video game crash
              of 1983, leading to the era of the bedroom coder. In the 1990s, PC
              games lost mass market traction to console games on the fifth
              generation such as the Sega Saturn, Nintendo 64 and PlayStation,
              before enjoying a resurgence in the mid-2000s through digital
              distribution on online service providers such as Steam and
              GOG.com.
            </Typography>
            <Typography variant='h6' color={'white'} sx={{ m: 3 }}>
              Newzoo reports that the PC gaming sector is the third-largest
              category across all platforms as of 2016, with the console sector
              second-largest, and mobile gaming sector biggest. 2.2 billion
              video gamers generate US$101.1 billion in revenue, excluding
              hardware costs. Digital game revenues will account for $94.4
              billion or 87% of the global gaming market.[5][6] PC gaming is
              considered synonymous (by Newzoo and others) with IBM Personal
              Computer-compatible systems; while mobile devices - smartphones
              and tablets, such as those running on Android or iOS platforms -
              are also PCs in the general sense. The APAC region was estimated
              to generate $46.6 billion in 2016, or 47% of total global video
              game revenues (note, not only PC games). China alone accounts for
              half of APAC revenues (at $24.4 billion), cementing its place as
              the largest video game market in the world, ahead of the US
              anticipated market size of $23.5 billion.
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant='h4' color={'primary'} sx={{ m: 2 }}>
              List Of Game
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
            <GameBtn
              gameName='Nier Automata'
              boxArtUrl='/gamesImg/nier_automata/icon.png'
              href='/pc/nier_automata'
            />
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}
