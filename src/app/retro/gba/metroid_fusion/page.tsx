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
    <div className=' bg-metroidFusionBackGround min-h-screen bg-repeat-y hover:cursor-metroidFusion'>
      <Container
        maxWidth='md'
        sx={{
          mt: 6,
          pt: 8,
        }}
      >
        <div className=' bg-slate-600 bg-opacity-70 grid grid-cols-1 items-center'>
          <div className=' grid grid-cols-1 m-3'>
            <div>
              <Image
                src='/component_img/gameArticleImg/metroidFusion/gameTile.png'
                alt=' Metroid Fusion'
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
                <ListItemText primary='Complete Date' secondary='1/2/2023' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MilitaryTechIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='Difficulty'
                  secondary='Hard ( Boss fights are somewhat challenge)'
                />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <EmojiEventsIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='Personal Score'
                  secondary='6/10 Good Game'
                />
              </ListItem>
            </div>
            <div className=' m-3'>
              <Image
                src='/component_img/gameArticleImg/metroidFusion/boxArt.png'
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
              You Have to go explore a space station that go offline. The space
              station is secretly study an alien life form call X and it is a
              parasite. You sure that the X have infect the station and you have
              to stop it at all cost.
              {'  '}
              The X Parasite is a formal enemy in the previous game. Assist you
              is a supper computer. Through out the game the computer will give
              mission and help you find next objective
            </Typography>
            <div className=' float-right m-3'>
              <PictureFrame
                urlSrc='/component_img/gameArticleImg/metroidFusion/blsStation.jpg'
                width={400}
                heigh={400}
                alt='The in game station '
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
