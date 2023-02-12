import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import GearList from './gearList';

export default function GearCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image='/component_img/specCard/gameGearBanner.jpg'
        title='gear banner'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Gaming Gear
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <GearList />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Review</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
