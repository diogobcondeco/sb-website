import React from 'react';

const Services = () => {
  return (
    <div className='bg-gray-300 w-screen flex flex-col justify-center items-center py-8'>
      <div className='text-2xl font-bold'>Serviços</div>

      <div className='flex my-4'>
        {/* make one component that will make a card with image + title + description (maybe) */}
        <div>Consultas</div>
        <div></div>
        <div>Linguagem Corporal e Micro Expressões</div>
        <div></div>
        <div>Coaching</div>
        <div></div>
        <div>Hipnoterapia</div>
        <div></div>
        <div>Programação Neuro Linguística</div>
        <div></div>
        <div>Reiki</div>
        <div></div>
      </div>
    </div>
  )
};

export default Services;
