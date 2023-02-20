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
    <div className=' border border-pink-700 rounded-lg'>
      <Image src={urlSrc} alt={alt} height={heigh} width={width} />
    </div>
  );
}
