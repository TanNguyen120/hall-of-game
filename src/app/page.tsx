'use client';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Button from '@mui/material/Button';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Button variant='contained' color='secondary'>
          Hello world
        </Button>
        This Is Text Edit Later
      </div>
    </main>
  );
}
