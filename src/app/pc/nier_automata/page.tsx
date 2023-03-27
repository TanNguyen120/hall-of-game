'use client';

import { Container, Typography, Divider, Button } from '@mui/material';

import Image from 'next/image';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
export default function MetroidFusion() {
  // THIS PAGE WILL IMPLEMENT THE SPOILER FILTER FUNCTION
  const [filter, setFilter] = useState(true);
  const [filterAreaCss, setFilterAreaCss] = useState('');
  const [spoilContendCss, setSpoilContentCss] = useState('');
  return (
    <div className=' bg-nierAutomataBg  bg-[length:2000px_1080px] min-h-screen bg-repeat-y '>
      <Container
        maxWidth='md'
        sx={{
          mt: 6,
          pt: 8,
        }}
      >
        <div className=' bg-slate-600 bg-opacity-90 grid grid-cols-1 items-center'>
          <div className=' grid grid-cols-1 m-3'>
            <div className=' pl-7 '>
              <Image
                src='/gamesImg/nier_automata/tile.png'
                alt='PoKemon Fire Red'
                width={600}
                height={400}
              />
            </div>
          </div>
          <Divider sx={{ mb: 2 }} />
          {/* -------------------------------------------------------------------------------------------------------------------------- */}
          <div className=' grid grid-cols-1'>
            <div className=' grid grid-cols-1 text-center p-3'>
              <Typography color={'white'}>
                Warning The Below Section contain{' '}
                <span className=' font-semibold'>HEAVY SPOILER</span> for the
                game story.
              </Typography>
              <Button
                variant={'contained'}
                startIcon={<VisibilityIcon />}
                color='secondary'
                className='bg-pink-700 w-fit mx-auto mt-7'
              >
                But I already beat the game !
              </Button>
            </div>
            <Divider sx={{ mb: 2, mt: 2 }} />
            <div className=' grid grid-cols-1'>
              <h3> Story </h3>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
