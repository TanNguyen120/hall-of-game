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

export default function ZeldaMinishCap() {
  return (
    <div className=' bg-zeldaMinishCapBg min-h-screen bg-repeat-y bg-[length:2000px_1080px] hover:cursor-metroidFusion'>
      <Container
        maxWidth='md'
        sx={{
          mt: 6,
          pt: 8,
        }}
      >
        <div className=' bg-slate-600 bg-opacity-70 grid grid-cols-1'>
          {/* <Typography
            color={'primary'}
            variant={'h3'}
            sx={{
              m: 3,
            }}
          >
            The Legend Of Zelda: The Minish Cap
          </Typography> */}
          <div className=' grid grid-cols-1 m-3'>
            <Image
              src='/component_img/gameArticleImg/zeldaMinishCap/gameTile.png'
              alt=' Legend of zelda the minish cap'
              width={300}
              height={200}
            />
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
                <ListItemText primary='Complete Date' secondary='11/2/2023' />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MilitaryTechIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary='Difficulty'
                  secondary='Easy ( But the puzzle to progress game state can be challenging)'
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
                  secondary='4.5/10 Entertain enough'
                />
              </ListItem>
            </div>
            <div className=' m-3'>
              <Image
                src='/component_img/gameArticleImg/zeldaMinishCap/boxArt.png'
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
              Like Always Princess Zelda is in some trouble and you have to save
              her and in the and the two is just FRIEND This time we are in
              Hyrule kingdom. There an evil wizard name vaati want the The light
              force so he curse the princess just for fun and Link have to
              reforge a divine blade that can cure this curse. Oh and the game
              have tiny people and we can sink in size and meet them ( neat )
            </Typography>
            <div className=' float-right m-3'>
              <PictureFrame
                urlSrc='/component_img/gameArticleImg/zeldaMinishCap/Map_of_Hyrule_Town.png'
                width={400}
                heigh={400}
                alt='Hyrule Town '
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
            Favorite Feature <ThumbUpIcon />
          </Typography>
          <div className=' text-white'>
            <Typography color={'white'} sx={{ m: 3 }}>
              I love the sinking size feature. It play a primary role in the
              game and it remind me of the childhood dream of exploring the
              world when you are small
            </Typography>
            <PictureFrame
              urlSrc='/component_img/gameArticleImg/zeldaMinishCap/portal.gif'
              width={600}
              heigh={600}
              alt='Minish Portal '
            />
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
            Annoying Feature <ThumbDownIcon />
          </Typography>
          <Typography color={'white'} sx={{ m: 3 }}>
            The Ice floor make you appreciate Friction more than ever
          </Typography>
          <PictureFrame
            urlSrc='/component_img/gameArticleImg/zeldaMinishCap/iceFloor.gif'
            width={600}
            heigh={600}
            alt='The Ice Floor '
          />
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
              alt='Remeber to return a book after you borrow it from the library is what make a decent human being. A hole'
              urlSrc='/component_img/gameArticleImg/zeldaMinishCap/THEMAYOR.png'
              width={400}
              heigh={400}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
