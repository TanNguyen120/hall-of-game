import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const GameNumbers = ({
  dateComplete,
  difficulty,
  personalScore,
}: {
  dateComplete: string;
  difficulty: string;
  personalScore: string;
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
    </div>
  );
};

export default GameNumbers;
