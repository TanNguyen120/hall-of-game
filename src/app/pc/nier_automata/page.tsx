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
        </div>
      </Container>
    </div>
  );
}
