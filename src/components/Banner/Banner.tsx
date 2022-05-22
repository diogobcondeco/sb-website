import React from 'react';
import '../../App.scss';
import SocialLink from '../SocialLink/SocialLink';
import {
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

const Banner = () => {
  return (
    <div className='h-[32rem] w-screen flex items-center'>
      <div className='bannerImage h-full w-full bg-center blur-[2px]'></div>
      <div className='flex flex-col justify-center items-center w-screen absolute z-10'>
        <div className='text-3xl font-bold mb-4'>SUSANA BASTOS</div>
        <div className='text-xl'>É REFERÊNCIA EM HIPNOSE E PNL NO LUXEMBURGO E PORTUGAL</div>
        <div className='flex justify-center items-center my-4'>
          <SocialLink link={'https://web.whatsapp.com/send?phone=+351914717940&text&app_absent=0'} icon={faWhatsapp} />
        </div>
      </div>
    </div>
  )
};

export default Banner;
