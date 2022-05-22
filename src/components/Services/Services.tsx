import React from 'react';
import Card from '../Card/Card';
import {
  appointments,
  bodyLanguage,
  coaching,
  hypnotherapy,
  neuroLinguisticProgramming,
  reiki
} from './ServicesList';

const Services = () => {
  return (
    <div className='bg-gray-300 w-screen flex flex-col justify-center items-center py-12'>
      <div className='text-3xl font-bold'>Serviços</div>

      <div className='w-[70rem] flex my-4 justify-center gap-4 grid grid-cols-3 mt-8'>
        <Card title={appointments.serviceName} description={appointments.text} />
        <Card title={bodyLanguage.serviceName} description={bodyLanguage.text} />
        <Card title={coaching.serviceName} description={coaching.text} />
        <Card title={hypnotherapy.serviceName} description={hypnotherapy.text} />
        <Card title={neuroLinguisticProgramming.serviceName} description={neuroLinguisticProgramming.text} />
        <Card title={reiki.serviceName} description={reiki.text} />
      </div>
    </div>
  )
};

export default Services;
