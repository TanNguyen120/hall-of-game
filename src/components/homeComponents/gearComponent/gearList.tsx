import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MouseIcon from '@mui/icons-material/Mouse';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import WifiIcon from '@mui/icons-material/Wifi';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Divider from '@mui/material/Divider';

export default function GearList() {
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <MouseIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Mouse' secondary='Logitech G102 Prodigy' />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <KeyboardIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Key Board' secondary='Geezer GS4 Blue Switch' />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <HeadphonesIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Sound' secondary='MoonDrop Chu' />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WifiIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary='Wifi'
          secondary='ToTo Link A2000UA USB adapter'
        />
      </ListItem>
    </List>
  );
}
