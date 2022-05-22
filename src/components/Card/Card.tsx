import React from 'react';
import '../../App.scss';

interface Props {
  title: string
  description: string[]
}

const Card = ({title, description}: Props) => {
  return (
    <div className='flex flex-col p-4 rounded-md min-w-[33%] cardShadow bg-gray-100'>
      <div className='text-center text-xl font-bold'>{title}</div>
      <div className='m-4'>{description.map((item, key) => {
        return <div key={key}>{item}</div>
      })}</div>
    </div>
  )
};

export default Card;
