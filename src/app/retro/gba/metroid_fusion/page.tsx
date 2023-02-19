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
        </div>
      </Container>
    </div>
  );
}
