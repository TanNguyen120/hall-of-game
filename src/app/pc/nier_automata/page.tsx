'use client';

import { Container, Typography, Divider, Button, Tooltip } from '@mui/material';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

export default function MetroidFusion() {
  // THIS PAGE WILL IMPLEMENT THE SPOILER FILTER FUNCTION
  const [filter, setFilter] = useState(true);
  const [filterAreaCss, setFilterAreaCss] = useState('blur-lg');
  const [spoilContendCss, setSpoilContentCss] = useState('');

  useEffect(() => {
    filter ? setFilterAreaCss('blur-lg') : setFilterAreaCss(' ');
  }, [filter]);
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
              <Tooltip title='Click With Your Own Risk' placement='bottom-end'>
                <Button
                  variant={'contained'}
                  startIcon={<VisibilityIcon />}
                  color='secondary'
                  className='bg-pink-700 w-fit mx-auto mt-7'
                  onClick={(e) => {
                    setFilter(false);
                  }}
                >
                  But I already beat the game !
                </Button>
              </Tooltip>
            </div>
            <Divider sx={{ mb: 2, mt: 2 }} />
            <div className={`grid grid-cols-1 ${filterAreaCss}`}>
              <Typography
                sx={{
                  m: 3,
                }}
                variant='h4'
                color='primary'
              >
                Very strange way to tell a story <AutoStoriesIcon />
              </Typography>
              <Typography
                sx={{ m: 3 }}
                color='white'
                className=' first-letter:ml-6'
              >
                Endless summer is maybe the most famous arc of Suzumiya Haruhi
                No Yuuutsu anime and many people have mix feeling about that.
                Nier automata implement the exact story telling method by make
                you play the game again three time to complete the main story
                line. At first i not really like this approach because it make
                your story feel repeat discrete and make player loose interest,
                but after complete the game I think maybe I get it now. The
                first play through make us attach to 2B just like 9s in the
                second play through. I think the the game is a stage play and we
                the player will play every role in this stage. And the feel when
                you think you know why it is in the very end of the game make
                many people like this story telling style.
              </Typography>
              <Divider />
              <Typography
                sx={{
                  m: 3,
                }}
                variant='h4'
                color='primary'
              >
                2B our most beloved android <AutoStoriesIcon />
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
