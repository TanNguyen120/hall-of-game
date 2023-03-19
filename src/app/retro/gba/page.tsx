'use client';
import { ThemeProvider } from '@emotion/react';
import { Container, Divider, Grid, Typography } from '@mui/material';
import { gamerTheme } from '@/styles/theme/gamerTheme';
import GameBtn from '@/components/gameBtn';
export default function retroHome() {
  return (
    <div className=' bg-gbaBackGround min-h-screen bg-repeat-x'>
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
              Game Boy Advance
            </Typography>
            <Typography variant='h6' color={'white'} sx={{ p: 2 }}>
              The Game Boy Advance (GBA) is a 32-bit handheld game console
              developed, manufactured and marketed by Nintendo as the successor
              to the Game Boy Color. It was released in Japan on March 21, 2001,
              in North America on June 11, 2001, in the PAL region on June 22,
              2001, and in mainland China as iQue Game Boy Advance on June 8,
              2004. The GBA is part of the sixth generation of video game
              consoles. The original model does not have an illuminated screen;
              Nintendo addressed that with the release of a redesigned model
              with a frontlit screen, the Game Boy Advance SP, in 2003. A newer
              revision of the redesign was released in 2005, with a backlit
              screen. Around the same time, the final redesign, the Game Boy
              Micro, was released in September 2005.
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant='h4' color={'primary.main'} sx={{ m: 2 }}>
              Game Played
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
            <GameBtn
              gameName='Metroid Fusion'
              boxArtUrl='/component_img/gameBtnBoxArt/metroidFusion.jpg'
              href='/retro/gba/metroid_fusion'
            />
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
            <GameBtn
              gameName='The Legend Of Zelda: The Minish Cap'
              boxArtUrl='/component_img/gameBtnBoxArt/zeldaMinishCap.png'
              href='/retro/gba/zelda_minish_cap'
            />
            {/* ---------------------------------------------------------------------------------------------------------------------------- */}
            <GameBtn
              gameName='Pokémon FireRed Version'
              boxArtUrl='/gamesImg/fireRed/boxArt.jpg'
              href='/retro/gba/pkm_fire_red'
            />
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}
