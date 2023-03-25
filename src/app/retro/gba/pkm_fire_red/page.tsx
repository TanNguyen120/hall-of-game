'use client';

import {
  Container,
  Typography,
  Divider,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@mui/material';
import List from '@mui/material/List';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';

import DateRangeIcon from '@mui/icons-material/DateRange';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Image from 'next/image';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PictureFrame from '@/components/pictureFrame';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import PokeFrame from './pokeFrame';

export default function MetroidFusion() {
  return (
    <div className=' bg-pkmFireRedBg  bg-[length:2000px_1080px] min-h-screen bg-repeat-y '>
      <Container
        maxWidth='md'
        sx={{
          mt: 6,
          pt: 8,
        }}
      >
        <div className=' bg-slate-600 bg-opacity-90 grid grid-cols-1 items-center'>
          <div className=' grid grid-cols-1 m-3'>
            <div>
              <Image
                src='/gamesImg/fireRed/tile.png'
                alt='PoKemon Fire Red'
                width={600}
                height={400}
              />
            </div>
          </div>
          <Divider sx={{ mb: 2 }} />
          {/* -------------------------------------------------------------------------------------------------------------------------- */}
          <div className=' grid grid-cols-2'>
            <div>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <DateRangeIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='Complete Date'
                  secondary='When I was a 12 years old kid'
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MilitaryTechIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Difficulty' secondary='Easy' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmojiEventsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='Personal Score'
                  secondary='8/10 Nostalgia hit hard'
                />
              </ListItem>
            </div>
            <div className=' m-3'>
              <Image
                src='/gamesImg/fireRed/box art.jpg'
                alt=' Box Art'
                width={300}
                height={300}
              />
            </div>
          </div>

          <Divider sx={{ mb: 2 }} />
          {/* -------------------------------------------------------------------------------------------------------------------------- */}
          <Typography
            sx={{
              m: 3,
            }}
            variant='h4'
            color='primary'
          >
            Story Quick Recap <AutoStoriesIcon />
          </Typography>
          <div className=' grid grid-cols-2'>
            <Typography sx={{ m: 3 }} color='white'>
              The very first game that I play when I got my very first PC. The
              very first cracked game that I install from a cd that the game
              store selling. They pirate the emulator and the game rom from the
              internet then burn it to the cd ( not thing better than selling
              stuff you not own it like infinite money glitch ). Any way you
              have to config the emulator to ingame save and being a dump kid i
              just play with save state and pretend that after beating the elite
              4 I have clear the game
            </Typography>
            <div className=' float-right m-3'>
              <PictureFrame
                urlSrc='/gamesImg/fireRed/mew2.jpg'
                width={400}
                heigh={400}
                alt='Oh mew two. But I have use the only master ball I got  '
              />
            </div>
          </div>
          <Divider sx={{ mb: 2 }} />
          <Typography
            sx={{
              m: 3,
            }}
            variant='h4'
            color='primary'
          >
            My Team <SentimentVeryDissatisfiedIcon />
          </Typography>
          <div className=' m-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            <PokeFrame
              alt='charizard'
              urlSrc='/gamesImg/fireRed/charizard.png'
              width={200}
              heigh={200}
            />
            <PokeFrame
              alt='charizard'
              urlSrc='/gamesImg/fireRed/charizard.png'
              width={200}
              heigh={200}
            />
            <PokeFrame
              alt='lapras'
              urlSrc='/gamesImg/fireRed/lapras.png'
              width={200}
              heigh={200}
            />
            <PokeFrame
              alt='dugtrio'
              urlSrc='/gamesImg/fireRed/dugTrio.jpg'
              width={200}
              heigh={200}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
