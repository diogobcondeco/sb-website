import React from 'react';
import Form from '../Form/Form';

const Contact = () => {
  return (
    <div className='bg-white w-screen flex flex-col justify-center items-center py-8'>
      <div className='text-2xl font-bold'>Contactos</div>

      <div className='flex my-4'>
        <Form />
      </div>
    </div>
  )
};

export default Contact;
