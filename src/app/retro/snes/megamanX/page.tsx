'use client';

import GameNumbers from '@/components/gameNumbers';
import GameTile from '@/components/gameTile';
import { Container, Divider } from '@mui/material';
import React from 'react';

const megamanX = () => {
  return (
    <div className=' bg-megamanXBg min-h-screen bg-contain bg-repeat'>
      <Container
        maxWidth='md'
        sx={{
          mt: 6,
          pt: 8,
        }}
        className=' bg-slate-600 opacity-90 '
      >
        <GameTile
          alt='MegamanX'
          src='/gamesImg/megamanX/tile.png'
          width={600}
          heigh={500}
        />
        <Divider className=' mb-2' />

        <GameNumbers
          personalScore='7/10 (Retro Platform with good game mechanic and level designs)'
          dateComplete=' 30/04/2023____(16 hr)'
          difficulty='Somewhat hard 	(・人・) (until I find out that you can stack life and subtank in another level)'
          boxArtSrc='/gamesImg/megamanX/boxArt.jpg'
        />
      </Container>
    </div>
  );
};

export default megamanX;
