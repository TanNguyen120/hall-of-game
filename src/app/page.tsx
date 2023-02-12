'use client';

import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/system';
import { Container, Divider, Grid, Typography } from '@mui/material';
import SpecCard from '@/components/homeComponents/specComponent/specComponent';
import GearCard from '@/components/homeComponents/gearComponent/gearComponent';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.description}> */}
      <Container
        maxWidth='md'
        sx={{
          bgcolor: 'background.paper',
          p: 4,
        }}
      >
        <Typography variant='h5' color={'secondary'} sx={{ mb: 4 }}>
          My hardware:
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
          gap={5}
        >
          {/* Pc Spec will change through time */}
          <SpecCard />
          <GearCard />
        </Grid>
      </Container>
      {/* </div> */}
    </main>
  );
}
