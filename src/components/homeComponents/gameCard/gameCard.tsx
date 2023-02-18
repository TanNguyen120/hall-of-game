import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GameCategoryBtn from '../categoryGameBtn';

export default function GameCard({
  gameTile,
  shortDescription,
  genre,
  imgSrc,
}: {
  gameTile: string;
  shortDescription: string;
  genre: Array<string>;
  imgSrc: string;
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component='img' height='340' image={imgSrc} alt={gameTile} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {gameTile}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {genre.map((element) => (
          <GameCategoryBtn
            categoryName={element}
            href={`/${element}`}
            key={element}
          />
        ))}
      </CardActions>
    </Card>
  );
}
