'use client';
import { Container, Grid, Typography } from '@mui/material';
export default function retroHome() {
  return (
    <div className=' bg-retroBackGround min-h-screen bg-repeat-x'>
      <Container
        maxWidth='md'
        sx={{
          mt: 6,
          pt: 8,
        }}
      >
        <Grid container spacing={2}>
          <Typography variant='h2'>What Is Retro</Typography>
        </Grid>
      </Container>
    </div>
  );
}
