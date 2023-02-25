'use client';
import { ThemeProvider } from '@emotion/react';
import { Container, Divider, Grid, Typography } from '@mui/material';

import { gamerTheme } from '@/styles/theme/gamerTheme';
import GameBtn from '@/components/gameBtn';
export default function PLatformer() {
  return (
    <ThemeProvider theme={gamerTheme}>
      <div className=' bg-platformerBg bg-[length:2000px_1080px] min-h-screen bg-repeat-y'>
        <Container
          maxWidth='md'
          sx={{
            mt: 6,
            pt: 8,
          }}
        >
          <div className=' bg-slate-600 bg-opacity-70 grid grid-cols-1'>
            <Typography variant='h4' color={'primary'} sx={{ m: 2 }}>
              What Is Puzzle game?
            </Typography>
            <Typography variant='h6' color={'white'} sx={{ m: 3 }}>
              Puzzle video games make up a broad genre of video games that
              emphasize puzzle solving. The types of puzzles can test
              problem-solving skills, including logic, pattern recognition,
              sequence solving, spatial recognition, and word completion. Many
              puzzle games involve a real-time element and require quick
              thinking, such as Tetris (1984) and Lemmings (1991).
            </Typography>
            <Typography variant='h6' color={'white'} sx={{ m: 3 }}>
              Puzzle video games owe their origins to brain teasers and puzzles
              throughout human history. The mathematical strategy game Nim, and
              other traditional thinking games such as Hangman and Bulls and
              Cows (commercialized as Mastermind), were popular targets for
              computer implementation.
            </Typography>
            <Typography variant='h6' color={'white'} sx={{ m: 3 }}>
              In 2001, PopCap Games released Bejewled, a direct clone of the
              1994 tile-matching game Shariki with improved visuals. It sparked
              interest in the match-three mechanic which became the foundation
              for other popular games, including Candy Crush Saga and Puzzle &
              Dragons, both from 2012.[15] Portal (2007) was followed by other
              physics-based puzzle games.[16]
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant='h4' color={'primary'} sx={{ m: 2 }}>
              List Of Game
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
            <GameBtn
              gameName='Metroid Fusion'
              boxArtUrl='/component_img/gameBtnBoxArt/metroidFusion.jpg'
              href='/retro/gba/metroid_fusion'
            />
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
          </div>
        </Container>
      </div>
    </ThemeProvider>
  );
}
