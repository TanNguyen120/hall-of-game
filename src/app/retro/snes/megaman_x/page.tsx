'use client';

import GameNumbers from '@/components/gameNumbers';
import GameTile from '@/components/gameTile';
import { Container, Divider } from '@mui/material';
import React from 'react';

const megamanX = () => {
  return (
    <div className=' bg-megamanXBg min-h-screen bg-contain bg-repeat'>
      <Container
        maxWidth='md'
        sx={{
          mt: 6,
          pt: 8,
        }}
        className=' bg-slate-600 opacity-90 '
      >
        <GameTile
          alt='MegamanX'
          src='/gamesImg/megamanX/tile.png'
          width={600}
          heigh={500}
        />
        <Divider className=' mb-2' />

        <GameNumbers
          personalScore='7/10 (Retro Platform with good game mechanic and level designs)'
          dateComplete=' 30/04/2023'
          difficulty='Somewhat hard 	(・人・) (until I find out that you can stack life and subtank in another level)'
          boxArtSrc='/gamesImg/megamanX/boxArt.jpg'
          timeSpent='16 hr'
        />
        <Divider className=' mb-2' />
        <div className=' m-4 text-white'>
          &quot;X&quot; was created by Dr. Thomas Light. He was a new type of
          robot with the ability to think, feel, and make his own decisions.
          Recognizing the potential danger of this model (in particular if he
          were to break the first rule of robotics: a robot must never harm a
          human being), Light sealed X away in a diagnostic capsule for over 30
          years of testing.X&apos;s capsule was uncovered by an archaeologist
          named Dr. Cain almost 100 years after X&apos;s creation. Excited by
          the possibilities X presented, Cain disregarded the warnings Light had
          logged in the capsule and created a legion of robots that replicated
          X&apos;s free will; these robots were called &quot;Reploids&quot;
          (shortened from Replica Android, but known as &quot;Repliroids&quot;`
          in Japan).
        </div>
        <div className=' m-4 text-white'>
          A number of Reploids turned against humans. These Reploids were dubbed
          &quot;Mavericks&quot; (&quot;Irregulars&quot; in Japan), and a force
          called the Maverick Hunters (&quot;Irregular Hunters&quot;) was formed
          to combat them. The Maverick Hunters were led by Sigma until he, too,
          became a Maverick and declared war against the humans, thus starting
          the Maverick War. X took it upon himself to join the Maverick Hunters
          under their new leader Zero. Throughout the series, X and Zero battle
          against the Mavericks to stop their plots to destroy the human race.
        </div>
        <Divider className=' m-4' />
        <iframe
          src='https://giphy.com/embed/SSFCk3iiylUX3nndBf'
          width='480'
          height='480'
          frameBorder='0'
          className='giphy-embed'
          allowFullScreen
        ></iframe>
        <p>
          <a
            href='https://giphy.com/gifs/capcom-mega-man-x-megamanx-SSFCk3iiylUX3nndBf'
            className=' text-white'
          >
            X charging his buster with full armor
          </a>
        </p>
      </Container>
    </div>
  );
};

export default megamanX;
