import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function GameBtn({
  gameName,
  boxArtUrl,
  href,
}: {
  gameName: string;
  boxArtUrl: string;
  href: string;
}) {
  return (
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <Image
            src={boxArtUrl}
            alt={`${gameName} boxArt`}
            width={50}
            height={50}
          />
        </ListItemIcon>
        <Link
          href={href}
          className={' text-white font-semibold text-base flex-row'}
        >
          <ListItemText primary={gameName} />
        </Link>
      </ListItemButton>
    </ListItem>
  );
}
