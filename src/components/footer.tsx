import { Grid } from '@mui/material';

export default function Footer() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div>xs = 4</div>
      </Grid>
      <Grid item xs={4}>
        <div> text </div>
      </Grid>
      <Grid item xs={4}>
        <div>text</div>
      </Grid>
      <Grid item xs={8}>
        <div>text</div>
      </Grid>
    </Grid>
  );
}
