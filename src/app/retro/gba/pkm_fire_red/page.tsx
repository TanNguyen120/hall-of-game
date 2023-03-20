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
          {/* ---------------------------------------------------------------------------------------------------------------------------------- */}

          <Typography
            sx={{
              m: 3,
            }}
            variant='h4'
            color='primary'
          >
            Pro <ThumbUpIcon />
          </Typography>
          <div className=' text-white'>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary='- Carefully level design that make you feel progressive when defeat a boss and absorb your power back' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary='- Boss fight demand unique fighting style that mean you have to learn from defeat' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary='- The SA-X make the game have horror element which is good' />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
          <Divider sx={{ mb: 2 }} />
          {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
          <Typography
            sx={{
              m: 3,
            }}
            variant='h4'
            color='primary'
          >
            Con <ThumbDownIcon />
          </Typography>
          <div className=' text-white'>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary='- The beam only useful in 2 last boss' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary='- Save room in weir place. And you have to fight two final boss back to back without save' />
                </ListItemButton>
              </ListItem>
            </List>
          </div>
          <Divider sx={{ mb: 2 }} />
          {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
          <Typography
            sx={{
              m: 3,
            }}
            variant='h4'
            color='primary'
          >
            Most Hated Face <SentimentVeryDissatisfiedIcon />
          </Typography>
          <div className=' m-3'>
            <PictureFrame
              alt='yakuza spider ( Why the save point is so far away )'
              urlSrc='/component_img/gameArticleImg/metroidFusion/spiderBoss.png'
              width={400}
              heigh={400}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
