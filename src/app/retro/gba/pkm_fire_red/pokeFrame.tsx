import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PokeFrame({
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
    <Link
      className=' border border-pink-700 rounded-lg p-3 gird grid-cols-1 w-fit h-fit'
      href={`https://tannguyen120.github.io/t-pokedex/pokemon/${alt}`}
    >
      <Image src={urlSrc} alt={alt} height={heigh} width={width} />
      <div className=' text-base text-white '>{alt}</div>
    </Link>
  );
}
