import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MemoryIcon from '@mui/icons-material/Memory';
import Crop169Icon from '@mui/icons-material/Crop169';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import StorageIcon from '@mui/icons-material/Storage';
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
            <MemoryIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='CPU' secondary='Intel(R) Core(TM) i3-6100' />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Crop169Icon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='RAM' secondary='8Gb 2100hz single chanel' />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonalVideoIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='VGA' secondary='NVIDIA GeForce GTX 1060 3GB' />
      </ListItem>
      <Divider variant='inset' component='li' />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <StorageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='STORAGE' secondary='1TB HDD + 250GB SSD ' />
      </ListItem>
    </List>
  );
}
