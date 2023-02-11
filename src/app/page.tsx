'use client';

import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/system';
import { Container } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.description}> */}
      <Container
        maxWidth='md'
        sx={{
          bgcolor: 'background.paper',
        }}
      >
        <Button variant='contained'>Contained</Button>
        This Is Text Edit Later
      </Container>
      {/* </div> */}
    </main>
  );
}
