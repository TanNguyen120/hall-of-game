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
    <div className=' flex flex-row'>
      <Button size='small' color='primary'>
        <Link href={href}>{categoryName}</Link>
      </Button>
    </div>
  );
}
