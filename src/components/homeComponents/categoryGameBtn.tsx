import { CardActions, Button } from '@mui/material';
import Link from 'next/link';

export default function GameCategoryBtn({
  categoryName,
  href,
}: {
  categoryName: string;
  href: string;
}) {
  return (
    <CardActions>
      <Button size='small' color='primary'>
        <Link href={href}>{categoryName}</Link>
      </Button>
    </CardActions>
  );
}
