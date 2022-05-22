import React from 'react';
import './Banner.scss';

const Banner = () => {
  return (
    <div className='h-[32rem] w-full flex items-center'>
      <div className='bannerImage h-full w-full bg-center blur-[2px]'></div>
      <div className='flex flex-col justify-center items-center w-screen absolute z-10'>
        <div className='text-3xl font-bold mb-4'>SUSANA BASTOS</div>
        <div className='text-xl'>É REFERÊNCIA EM HIPNOSE E PNL NO LUXEMBURGO E PORTUGAL</div>
      </div>
    </div>
  )
};

export default Banner;
