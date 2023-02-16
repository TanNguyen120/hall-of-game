'use client';
import { Container, Divider, Grid, Typography } from '@mui/material';
import ConsoleList from './consoleList';
export default function retroHome() {
  return (
    <div className=' bg-retroBackGround min-h-screen bg-repeat-x'>
      <Container
        maxWidth='md'
        sx={{
          mt: 6,
          pt: 8,
        }}
      >
        <div className=' bg-slate-600 bg-opacity-70 grid grid-cols-1'>
          <Typography variant='h4' color={'white'} sx={{ m: 2 }}>
            What Is Retro Gaming?
          </Typography>
          <Typography variant='h5' color={'white'} sx={{ p: 2 }}>
            Retro gaming, also known as old school gaming, classic gaming and
            sometimes vintage gaming is the playing of older generation
            consoles, computers, handheld games, and arcade games in the
            present. Retro gaming is usually based upon older generation video
            game systems that are obsolete or discontinued but can also be
            enjoyed using emulation through modern hardware.
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant='h4' color={'white'} sx={{ m: 2 }}>
            List Of Console and old PC
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <ConsoleList />
        </div>
      </Container>
    </div>
  );
}
