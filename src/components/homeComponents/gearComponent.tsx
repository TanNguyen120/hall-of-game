import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SpecList from './specList';

export default function SpecCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image='/component_img/specCard/specBanner.jpg'
        title='pc banner'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Hardware Specifications
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          <SpecList />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Score</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}
