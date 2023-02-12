'use client';

import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/system';
import { Container, Typography } from '@mui/material';
import SpecCard from '@/components/homeComponents/specComponent';

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
        {/* Pc Spec will change through time */}
        <SpecCard />
      </Container>
      {/* </div> */}
    </main>
  );
}
