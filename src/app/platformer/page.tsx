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
              What Is Platform game?
            </Typography>
            <Typography variant='h6' color={'white'} sx={{ m: 3 }}>
              A platform game (often simplified as platformer and sometimes
              called a jump n run game) is a sub-genre of action video games in
              which the core objective is to move the player character between
              points in an environment. Platform games are characterized by
              levels that consist of uneven terrain and suspended platforms of
              varying height that require jumping and climbing to traverse.
              Other acrobatic maneuvers may factor into the gameplay, such as
              swinging from vines or grappling hooks, jumping off walls, air
              dashing, gliding through the air, being shot from cannons, or
              bouncing from springboards or trampolines.
            </Typography>
            <Typography variant='h6' color={'white'} sx={{ m: 3 }}>
              Games where jumping is automated completely, such as 3D games in
              The Legend of Zelda series, fall outside of the genre. The genre
              started with the 1980 arcade video game, Space Panic, which
              includes ladders, but not jumping.
            </Typography>
            <Typography variant='h6' color={'white'} sx={{ m: 3 }}>
              Donkey Kong, released in 1981, established a template for what
              were initially called climbing games. Donkey Kong inspired many
              clones and games with similar elements, such as Miner 2049er
              (1982). During their peak of popularity in the late 1980s and
              early 1990s, platform games were estimated to consist of between a
              quarter and a third of all console games, but have since been
              supplanted by first-person shooters. By 2006, the genre had
              experienced a decline in popularity, representing a 2% market
              share as compared to 15% in 1998. Platform games are still being
              commercially released, including some which have sold millions of
              copies.
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
