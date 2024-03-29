'use client';

import { Inter } from '@next/font/google';
import styles from './page.module.css';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/system';
import { Container, Divider, Grid, Typography } from '@mui/material';
import SpecCard from '@/components/homeComponents/specComponent/specComponent';
import GearCard from '@/components/homeComponents/gearComponent/gearComponent';
import GameCard from '@/components/homeComponents/gameCard/gameCard';

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

        {/* ----------------------------------------------------------------------- */}
        {/* All Game feature in the website */}
        <Typography variant='h5' color={'secondary'} sx={{ mb: 4, mt: 4 }}>
          Games List:
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
          {/* ----------------------------------------------------------------------- */}
          <GameCard
            gameTile='Nier Automata'
            shortDescription=' Yes because this world is so beautiful but is so cruel at the same time  '
            genre={['pc', 'rpg', 'puzzle']}
            imgSrc='/gamesImg/nier_automata/boxArt.jpg'
            gameHref='/pc/nier_automata'
          />
          {/* Metroid Fusion */}
          <GameCard
            gameTile='Metroid Fusion'
            shortDescription=' One of the best metroidvania Game on the gameboy advance'
            genre={['platformer', 'retro', 'puzzle']}
            imgSrc='/component_img/gameListBoxArt/metroidFusion.jpg'
            gameHref='/retro/gba/metroid_fusion'
          />
          {/* ----------------------------------------------------------------------- */}
          {/* Zelda And The MinishCap */}
          <GameCard
            gameTile='The Legend Of Zelda:The Minish Cap'
            shortDescription=' Second zelda game on the gameboy advance '
            genre={['hack&slash', 'retro', 'puzzle']}
            imgSrc='/component_img/gameListBoxArt/zeldaTheMinishCap.png'
            gameHref='/retro/gba/zelda_minishcap'
          />
          {/* ------------------------------------------------------------------------ */}
          <GameCard
            gameTile='Pokémon FireRed Version'
            shortDescription=' Remaster version of the first pokemon game '
            genre={['rpg', 'retro', 'strategy']}
            imgSrc='/gamesImg/fireRed/gameBtnBg.jpg'
            gameHref='/retro/gba/pkm_fire_red'
          />
          {/* ------------------------------------------------------------------------ */}
          <GameCard
            gameTile='Megaman X'
            shortDescription='First game of the megaman X serries with different story compare to megaman serries despite the similarly character designs '
            genre={['retro', 'platformer']}
            imgSrc='/gamesImg/megamanX/cardImg.jpg'
            gameHref='/retro/snes/megaman_x'
          />
        </div>
      </Container>
      {/* </div> */}
    </main>
  );
}
