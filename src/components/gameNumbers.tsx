import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Image from 'next/image';

const GameNumbers = ({
  dateComplete,
  difficulty,
  personalScore,
  boxArtSrc,
  timeSpent,
}: {
  dateComplete: string;
  difficulty: string;
  personalScore: string;
  boxArtSrc: string;
  timeSpent: string;
}) => {
  return (
    <div className=' grid grid-cols-2'>
      <div>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DateRangeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Complete Date' secondary={dateComplete} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AccessTimeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Complete Time' secondary={timeSpent} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <MilitaryTechIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Difficulty' secondary={difficulty} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <EmojiEventsIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Personal Score' secondary={personalScore} />
        </ListItem>
      </div>
      <div className=' m-3'>
        <Image src={boxArtSrc} alt=' Box Art' width={300} height={300} />
      </div>
    </div>
  );
};

export default GameNumbers;
