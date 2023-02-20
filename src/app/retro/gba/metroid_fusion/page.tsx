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
import DateRangeIcon from '@mui/icons-material/DateRange';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Image from 'next/image';

export default function MetroidFusion() {
  return (
    <div className=' bg-metroidFusionBackGround min-h-screen bg-repeat-x'>
      <Container
        maxWidth='md'
        sx={{
          mt: 6,
          pt: 8,
        }}
      >
        <div className=' bg-slate-600 bg-opacity-70 grid grid-cols-1'>
          <Typography
            color={'primary'}
            variant={'h3'}
            sx={{
              m: 3,
            }}
          >
            Metroid Fusion
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {/* -------------------------------------------------------------------------------------------------------------------------- */}
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
            <ListItemText primary='Personal Score' secondary='6/10 Good Game' />
          </ListItem>
          <Divider sx={{ mb: 2 }} />
          {/* -------------------------------------------------------------------------------------------------------------------------- */}
          <Typography
            sx={{
              m: 3,
            }}
            variant='h4'
            color='primary'
          >
            Story Quick Recap
          </Typography>
          <Typography sx={{ m: 3 }} color='white'>
            You Have to go explore a space station that go offline. The space
            station is researching an alien life form call X and it is a
            parasite. You sure that the X have infect the station and you have
            to stop it at all cost
          </Typography>
        </div>
      </Container>
    </div>
  );
}
