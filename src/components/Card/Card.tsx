import React from 'react';
import '../../App.scss';
import image from '../../assets/images/banner.jpg';

interface Props {
  title: string
  description: string[]
}

const Card = ({ title, description }: Props) => {
  return (
    <div className='flex flex-col rounded-xl cardShadow bg-gray-100'>
      <img className='h-40 rounded-t-lg rounded-s-none' src={image} alt='placeholder' />
      <div className='p-4'>
        <div className='text-center text-xl font-bold underline'>{title}</div>
        <div className='m-4 indent-4 leading-8 tracking-wide'>{description.map((item, key) => {
          return <div key={key}>{item}</div>
        })}</div>
      </div>
    </div>
  )
};

export default Card;
