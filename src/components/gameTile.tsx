import Image from 'next/image';
import React from 'react';

const GameTile = ({
  src,
  alt,
  width,
  heigh,
}: {
  src: string;
  alt: string;
  width: number;
  heigh: number;
}) => {
  return (
    <div className=' bg-slate-600 bg-opacity-70 grid grid-cols-1 items-center'>
      <div className=' grid grid-cols-1 m-3'>
        <div>
          <Image src={src} alt={alt} width={width} height={heigh} />
        </div>
      </div>
    </div>
  );
};

export default GameTile;
