import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import DraftsIcon from '@mui/icons-material/Drafts';
import Image from 'next/image';
import Link from 'next/link';

// the smart way to write code. Reuse Component
function ConsoleBtn({
  consoleName,
  iconUrl,
  href,
}: {
  consoleName: string;
  iconUrl: string;
  href: string;
}) {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <Image
            src={iconUrl}
            alt={`${consoleName} icon`}
            width={50}
            height={50}
          />
        </ListItemIcon>
        <Link
          href={href}
          className={' text-white font-semibold text-base flex-row'}
        >
          <ListItemText primary={consoleName} />
        </Link>
      </ListItemButton>
    </ListItem>
  );
}

export default function ConsoleList() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <nav aria-label='main mailbox folders'>
        <List>
          {/* <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Image
                  src='/icon/gba.png'
                  alt='gba icon'
                  width={50}
                  height={50}
                />
              </ListItemIcon>
              <Link
                href={'/retro/gba'}
                className={' text-white font-semibold text-base flex-row'}
              >
                <ListItemText primary='Game Boy Advance' color='white' />
              </Link>
            </ListItemButton>
          </ListItem> */}
          <ConsoleBtn
            href='/retro/gba'
            consoleName='Game Boy Advance'
            iconUrl='/icon/gba.png'
          />
          <ConsoleBtn
            href='/retro/nds'
            consoleName='Nintendo DS'
            iconUrl='/icon/Nintendo-DS-icon.png'
          />
          <ConsoleBtn
            href='/retro/snes'
            consoleName='Super Nintendo Entertain System'
            iconUrl='/icon/super-nes-icon.jpg'
          />
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
