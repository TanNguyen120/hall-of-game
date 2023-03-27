import Image from 'next/image';
import React from 'react';

export default function PictureFrame({
  urlSrc,
  heigh,
  width,
  alt,
}: {
  urlSrc: string;
  heigh: number;
  width: number;
  alt: string;
}) {
  return (
    <div className=' border border-pink-700 p-3 gird grid-cols-1 w-fit h-fit'>
      <Image src={urlSrc} alt={alt} height={heigh} width={width} />
      <div className=' text-base text-white '>{alt}</div>
    </div>
  );
}
