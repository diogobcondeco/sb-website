import React from 'react';
import '../../App.scss';

interface Props {
  title: string
  description: string
}

const AboutCard = ({title, description}: Props) => {
  return (
    <div className='flex flex-col p-4 mt-8 rounded-md min-w-[33%] cardShadow bg-gray-100'>
      <div className='text-center text-xl'>{title}</div>
      <div className='m-4 text-justify'>{description}</div>
    </div>
  )
};

export default AboutCard;
